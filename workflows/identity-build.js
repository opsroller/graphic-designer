// SPDX-License-Identifier: GPL-2.0-or-later
export const meta = {
  name: 'identity-build',
  description: 'Build or refresh a visual identity: brief and research, three parallel directions, a chosen logo system with palette, type and icon style, accessibility and licence checks, brand guidelines with a tokens file, and the docs it owes. args: { product: "<product name>", brief: "<path to brief, optional>", direction: "<index of a direction already approved, optional>" }',
  phases: [
    { title: 'Plan', detail: 'brief, research, doc kinds via the Diataxis compass' },
    { title: 'Explore', detail: 'three distinct directions in parallel, separate files' },
    { title: 'Do', detail: 'logo system, palette, type, icon style, guidelines, tokens, docs' },
    { title: 'Check', detail: 'contrast, small size, licences, docs one kind per page; fix loop' },
  ],
}

// --- run-modes v1 begin ---
const RUN = ((a, realAgent, realPhase, realLog) => {
  const opted = !!(a && typeof a === 'object' && a.run && typeof a.run === 'object')
  const c = opted ? a.run : {}
  const mode = c.mode === 'inline' ? 'inline' : 'agents'
  const results = c.results && typeof c.results === 'object' ? c.results : {}
  const only = Array.isArray(c.only) && c.only.length ? c.only.map(String) : null
  const from = c.from ? String(c.from) : null
  const titles = typeof meta !== 'undefined' && meta && Array.isArray(meta.phases) ? meta.phases.map((p) => p.title) : []
  const unknown = titles.length ? (from ? [from] : []).filter((t) => !titles.includes(t)) : []
  const error = c.mode && !['agents', 'inline'].includes(c.mode)
    ? `run.mode must be "agents" or "inline", got "${c.mode}"`
    : unknown.length ? `run.from names no phase: ${unknown.join(', ')}. Phases: ${titles.join(', ')}` : null
  const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k)
  const seen = {}
  const out = {}
  const skipped = []
  const next = []
  const logs = []
  let current = ''
  let reached = !from
  let halting = false
  let release = () => {}
  const halted = new Promise((r) => { release = r })
  const picked = (ph, label) => reached && (!only || only.some((s) => s === ph || s === label || label.startsWith(s + ':')))
  const agent = (prompt, opts) => {
    const op = opts || {}
    const ph = op.phase || current
    const base = op.label || ph || 'agent'
    seen[base] = (seen[base] || 0) + 1
    const key = seen[base] > 1 ? `${base}#${seen[base]}` : base
    if (has(results, key)) { out[key] = results[key]; return Promise.resolve(results[key]) }
    if (!picked(ph, base)) { skipped.push(key); return Promise.resolve(null) }
    if (mode === 'agents') {
      return realAgent(prompt, opts).then((r) => { if (r !== null && r !== undefined) out[key] = r; return r })
    }
    next.push({ key, phase: ph, prompt, schema: op.schema || null })
    if (!halting) {
      halting = true
      ;(async () => { for (let i = 0; i < 200; i++) await null; release('__run_halted__') })()
    }
    return new Promise(() => {})
  }
  const phase = (t) => { current = t; if (from && t === from) reached = true; return realPhase(t) }
  const log = (m) => { logs.push(String(m)); return realLog(m) }
  const finish = (value) => {
    if (!opted) return value
    if (value === '__run_halted__') {
      return {
        run: 'inline', status: 'next', next, results: out, skipped, logs,
        how: 'Do each brief in next yourself, in order: follow its prompt in this session (it may tell you to edit files, commit or push), and shape your answer to its schema when one is given. Add each answer to results under its key, then run this workflow again with the same args and run.results set to the merged results. Repeat until status is "done".',
      }
    }
    return { run: mode, status: 'done', result: value, results: out, skipped, logs }
  }
  return { agent, phase, log, finish, halted, error }
})(typeof args === 'undefined' ? undefined : args, agent, phase, log)
if (RUN.error) return RUN.error
const RUN_OUT = await Promise.race([RUN.halted, (async (agent, phase, log) => {
// --- run-modes v1 end (workflow body follows; close it with the tail line) ---

const product = args && args.product
if (!product) return 'Usage: identity-build { product: "<product name>", brief: "<path to brief, optional>", direction: "<index of an approved direction, optional>" }'
const briefHint = (args && args.brief) ? `Start from the brief at ${args.brief}.` : 'If the project has no identity brief, write one first.'

const PLAN = { type: 'object', properties: {
  brief_path: { type: 'string' }, design_dir: { type: 'string' },
  audience: { type: 'string' }, personality: { type: 'array', items: { type: 'string' } },
  surfaces: { type: 'array', items: { type: 'string' } },
  research_notes: { type: 'string' },
  doc_pages: { type: 'array', items: { type: 'object', properties: { kind: { type: 'string' }, path: { type: 'string' }, why: { type: 'string' } }, required: ['kind', 'path'] } } },
  required: ['brief_path', 'design_dir', 'surfaces', 'doc_pages'] }
const DIR = { type: 'object', properties: {
  index: { type: 'number' }, idea: { type: 'string' }, files: { type: 'array', items: { type: 'string' } },
  strengths: { type: 'array', items: { type: 'string' } }, weaknesses: { type: 'array', items: { type: 'string' } },
  provenance_lines: { type: 'array', items: { type: 'string' } } },
  required: ['index', 'idea', 'files'] }
const CHOICE = { type: 'object', properties: { index: { type: 'number' }, rationale: { type: 'string' } }, required: ['index', 'rationale'] }
const BUILT = { type: 'object', properties: {
  files: { type: 'array', items: { type: 'string' } }, tokens_file: { type: 'string' }, guidelines: { type: 'string' },
  docs_touched: { type: 'array', items: { type: 'string' } }, undocumented: { type: 'array', items: { type: 'string' } } },
  required: ['files', 'tokens_file', 'guidelines'] }
const REVIEW = { type: 'object', properties: { blocking: { type: 'array', items: { type: 'string' } }, other: { type: 'array', items: { type: 'string' } } }, required: ['blocking'] }

phase('Plan')
const plan = await agent(`You are the graphic designer for ${product}. Follow engineering-practices project-onboarding, then the graphic-designer visual-identity skill steps 1-2 (brief and research). ${briefHint} Do the category audit and conflict check. Then classify the docs this identity work will owe with the Diataxis compass (action/cognition x study/work), following the project's Diataxis guide: usually an explanation of the chosen direction and reference brand guidelines. Return the brief path, the project's design folder, audience, personality words, surfaces with smallest sizes, research notes, and the doc pages to write (kind, path, why). Do not design yet.`, { schema: PLAN, phase: 'Plan', label: 'brief' })
if (!plan) return 'blocked: planning failed (no brief or research returned)'

let chosen
let pendingProvenance = ''
if (args && args.direction !== undefined && args.direction !== null && args.direction !== '') {
  chosen = { index: Number(args.direction), rationale: 'Direction approved by the requester.' }
  log(`using approved direction ${chosen.index}`)
} else {
  phase('Explore')
  const dirs = await parallel([1, 2, 3].map(i => () => agent(`Follow the graphic-designer visual-identity skill step 3 for ${product}, brief at ${plan.brief_path}. Develop direction ${i} of 3. It must carry a different idea from the other two (not a recolour): a mark, a palette sketch, a type pairing, and one application mock (app icon or store capsule) tested at its smallest size. Write only inside ${plan.design_dir}/directions/${i}/. Do not edit any shared file such as the provenance log; return the provenance lines you would add instead. Use only fonts and images allowed by the design-licensing skill.`, { schema: DIR, phase: 'Explore', label: `direction:${i}` })))
  const good = dirs.filter(Boolean)
  if (!good.length) return 'blocked: all three direction agents failed'
  const choice = await agent(`Act as the graphic designer's lead reviewer. Compare these identity directions for ${product} against the brief at ${plan.brief_path} and the research notes (${plan.research_notes || 'see brief'}). Pick the one that best answers the brief and survives small sizes and one colour. Say why, and what to fix in refinement.\n${JSON.stringify(good)}`, { schema: CHOICE, phase: 'Explore', label: 'choose' })
  if (!choice) return 'blocked: no direction chosen; directions are in ' + plan.design_dir + '/directions/'
  chosen = choice
  const provenance = good.map(d => (d.provenance_lines || []).join('\n')).filter(Boolean).join('\n')
  if (provenance && !(await agent(`Add these lines to the project's provenance log in one edit, keeping its format:\n${provenance}`, { phase: 'Explore', label: 'provenance' }))) pendingProvenance = provenance
}

phase('Do')
const built = await agent(`Refine identity direction ${chosen.index} for ${product} (directions in ${plan.design_dir}/directions/). Rationale and fixes: ${chosen.rationale}\nFollow the graphic-designer visual-identity skill steps 4-8 (logo system, palette with roles and light/dark values, type scale, icon and imagery style, real applications), then the brand-guidelines skill: write the tokens file first, then the guidelines from it, using brand-guidelines/checklist.md. Log every font and image in the provenance log (design-licensing).${pendingProvenance ? ' Also add these direction provenance lines, which were not logged yet:\n' + pendingProvenance + '\n' : ''} Then the docs: Classify every user-visible change in this work with the Diataxis compass (action/cognition x study/work). For each, update or add exactly one page of that kind under docs/<kind>/, keep each page to one kind, title it by the project pattern, and link to the related pages of the other kinds. Planned pages: ${JSON.stringify(plan.doc_pages)}. Report files, tokens file, guidelines path, pages touched and anything left undocumented and why.`, { schema: BUILT, phase: 'Do', label: 'build' })
if (!built) return 'blocked: building the identity system failed'

phase('Check')
let open = []
for (let round = 1; round <= 3; round++) {
  const r = await agent(`Independently review the ${product} identity: files ${built.files.join(', ')}, tokens ${built.tokens_file}, guidelines ${built.guidelines}. Check with the graphic-designer skills: contrast-and-legibility (measure every listed pair, light and dark), visual-identity quality bar (16 px, one colour, reversed, not confusable with competitors), design-licensing (every font use covered, provenance logged), brand-guidelines checklist, tokens file valid JSON and matching the guide. Check docs per the Diataxis guide: each touched page holds one kind only, titles follow the patterns (How to <goal>, About <topic>), links connect the kinds. List blocking problems only where you can point to a concrete failure; others separately.`, { schema: REVIEW, phase: 'Check', label: `review:${round}` })
  if (!r) { open = ['review agent failed; identity unverified']; break }
  open = r.blocking
  if (!open.length) break
  log(`round ${round}: ${open.length} blocking`)
  if (round === 3) break
  await agent(`Fix these blocking findings in the ${product} identity and its docs, keeping tokens and guidelines in sync:\n- ${open.join('\n- ')}`, { phase: 'Check', label: `fix:${round}` })
}
if (open.length) return { status: 'blocked', open, built }
return { status: 'ready', direction: chosen, built }
})(RUN.agent, RUN.phase, RUN.log)]); return RUN.finish(RUN_OUT)
