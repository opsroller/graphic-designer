// SPDX-License-Identifier: GPL-2.0-or-later
export const meta = {
  name: 'ui-visual-handoff',
  description: 'Design a set of app screens or web pages on the shared tokens and component library, check accessibility, and hand off a package (tokens, component and screen specs, assets, intent notes) to the UI developer or front-end web developer, with docs. args: { screens: ["<screen or page>", ...], surface: "app" | "web" }',
  phases: [
    { title: 'Plan', detail: 'tokens and components audit, missing components, doc kinds via the compass' },
    { title: 'Do', detail: 'shared components first, then screens in parallel into separate files' },
    { title: 'Check', detail: 'contrast, states, sizes, tokens only; fix loop' },
    { title: 'Handoff', detail: 'package, token changelog and Diataxis pages' },
  ],
}

const screens = (args && args.screens) || []
const surface = args && args.surface
if (!Array.isArray(screens) || !screens.length || (surface !== 'app' && surface !== 'web')) return 'Usage: ui-visual-handoff { screens: ["<screen or page>", ...], surface: "app" | "web" }'
const skill = surface === 'app' ? 'ui-visual-design' : 'web-visuals'
const receiver = surface === 'app' ? 'UI developer' : 'front-end web developer'

const PLAN = { type: 'object', properties: {
  tokens_file: { type: 'string' }, library: { type: 'string' }, out_dir: { type: 'string' },
  sizes: { type: 'array', items: { type: 'string' } },
  new_components: { type: 'array', items: { type: 'string' } },
  token_changes: { type: 'array', items: { type: 'string' } },
  doc_pages: { type: 'array', items: { type: 'object', properties: { kind: { type: 'string' }, path: { type: 'string' } }, required: ['kind', 'path'] } } },
  required: ['tokens_file', 'library', 'out_dir', 'sizes', 'doc_pages'] }
const SCREEN = { type: 'object', properties: {
  screen: { type: 'string' }, files: { type: 'array', items: { type: 'string' } },
  components_used: { type: 'array', items: { type: 'string' } }, missing_components: { type: 'array', items: { type: 'string' } },
  assets: { type: 'array', items: { type: 'string' } }, provenance_lines: { type: 'array', items: { type: 'string' } } },
  required: ['screen', 'files'] }
const CHECK = { type: 'object', properties: {
  blocking: { type: 'array', items: { type: 'object', properties: { screen: { type: 'string' }, issue: { type: 'string' } }, required: ['screen', 'issue'] } },
  other: { type: 'array', items: { type: 'string' } } },
  required: ['blocking'] }
const HAND = { type: 'object', properties: { package: { type: 'string' }, pages: { type: 'array', items: { type: 'string' } }, undocumented: { type: 'array', items: { type: 'string' } } }, required: ['package', 'pages'] }

phase('Plan')
const plan = await agent(`You are the graphic designer. Follow engineering-practices project-onboarding, then the graphic-designer ${skill} skill inputs and foundations sections for these ${surface} screens: ${screens.join(', ')}. Audit the tokens file and component library; list components these screens need that do not exist, token changes needed, the sizes to design at, and the design output folder. Ask the ${receiver}'s constraints from the project docs. Classify the docs this work will owe with the Diataxis compass per the project's Diataxis guide (normally reference component/screen specs; explanation for a new design choice; how-to if others will build screens from the library). Do not design yet.`, { schema: PLAN, phase: 'Plan', label: 'plan' })
if (!plan) return 'blocked: planning failed'

phase('Do')
if ((plan.new_components || []).length || (plan.token_changes || []).length) {
  const base = await agent(`Following the graphic-designer ${skill} and contrast-and-legibility skills, first apply these token changes to ${plan.tokens_file}: ${JSON.stringify(plan.token_changes || [])}; then design these components with every applicable state in ${plan.library}: ${JSON.stringify(plan.new_components || [])}. Record each token change in the token changelog. Return a one-line summary.`, { phase: 'Do', label: 'components' })
  if (!base) return 'blocked: shared components and tokens could not be prepared'
}
const made = await parallel(screens.map((s, i) => () => agent(`Following the graphic-designer ${skill} skill, design "${s}" for the ${surface} at sizes ${plan.sizes.join(', ')}, composed only from components in ${plan.library} and semantic tokens in ${plan.tokens_file}. Write only in ${plan.out_dir}/screen-${i + 1}/ (your own folder). Do not edit the tokens file, library or provenance log; if a component is missing, list it instead of drawing a one-off. Export the screen's assets into your folder at every density or width the project lists. Include an intent note and alt-text drafts for meaningful images. Return files, components used, missing components, assets and provenance lines.`, { schema: SCREEN, phase: 'Do', label: `screen:${i + 1}` })))
const results = screens.map((s, i) => made[i] || { screen: s, files: [], failed: true })
const failed = results.filter(r => r.failed).map(r => r.screen)
const missing = [...new Set(results.flatMap(r => r.missing_components || []))]

phase('Check')
let open = []
for (let round = 1; round <= 3; round++) {
  const c = await agent(`Independently review these ${surface} designs with the graphic-designer contrast-and-legibility skill and the ${skill} quality checks: measure every text, icon, boundary and focus pair in every theme and state; confirm every component state exists; no colour-only cues; designs at all sizes (${plan.sizes.join(', ')}); long and translated text; values only from tokens in ${plan.tokens_file}; assets complete. Missing components reported: ${JSON.stringify(missing)}. Open the files.\n${JSON.stringify(results)}\nBlocking problems by screen; others separately.`, { schema: CHECK, phase: 'Check', label: `check:${round}` })
  if (!c) { open = [{ screen: 'all', issue: 'checker failed; designs unverified' }]; break }
  open = c.blocking
  if (!open.length) break
  log(`round ${round}: ${open.length} blocking`)
  if (round === 3) break
  await agent(`Fix these findings. Shared token or component fixes go in ${plan.tokens_file} and ${plan.library} first; then fix each screen in its own folder under ${plan.out_dir}:\n${open.map(b => `- [${b.screen}] ${b.issue}`).join('\n')}`, { phase: 'Check', label: `fix:${round}` })
}
if (open.length || failed.length) return { status: 'blocked', open, failed_screens: failed, missing_components: missing, outputs: results }

phase('Handoff')
const prov = results.map(r => (r.provenance_lines || []).join('\n')).filter(Boolean).join('\n')
const hand = await agent(`As the single editor of shared files: add these provenance lines in one edit:\n${prov || '(none)'}\nAssemble the handoff package for the ${receiver} per the ${skill} skill handoff section (tokens file and changelog, component specs, screen specs, assets, intent notes) in ${plan.out_dir}, with an index file. Then: Classify every user-visible change in this work with the Diataxis compass (action/cognition x study/work). For each, update or add exactly one page of that kind under docs/<kind>/, keep each page to one kind, title it by the project pattern, and link to the related pages of the other kinds. Planned: ${JSON.stringify(plan.doc_pages)}. Check each touched page holds one kind only. Report the package index path, pages touched, and anything left undocumented and why.`, { schema: HAND, phase: 'Handoff', label: 'handoff' })
if (!hand) return { status: 'blocked', reason: 'handoff and docs step failed', outputs: results }
const DOCCHECK = { type: 'object', properties: { problems: { type: 'array', items: { type: 'string' } } }, required: ['problems'] }
const docCheck = await agent(`Independently check these docs pages against the project's Diataxis guide review checklist: each page holds one kind only, how-to titles name a user goal, explanation titles read with "About", reference matches sibling format, links connect the kinds. Pages: ${JSON.stringify(hand.pages)}. Fix nothing; list problems.`, { schema: DOCCHECK, phase: 'Handoff', label: 'docs-check' })
const docProblems = docCheck ? docCheck.problems : ['docs check did not run; docs unverified']
if (docProblems.length) return { status: 'blocked', doc_problems: docProblems, handoff: hand, outputs: results }
return { status: 'ready', receiver, handoff: hand, missing_components: missing, outputs: results }
