// SPDX-License-Identifier: GPL-2.0-or-later
export const meta = {
  name: 'store-art-batch',
  description: 'Produce store icons and listing art for several stores in parallel from one identity and master key art: verify each store\'s current official spec, make every asset per store into its own folder, check spec, content rules and family consistency, then write the per-store manifest and docs. args: { stores: ["<store>", ...], locales: ["<locale>", ...] (optional, default the project default) }',
  phases: [
    { title: 'Plan', detail: 'master art, spec verification per store, doc kinds via the compass' },
    { title: 'Do', detail: 'one agent per store, separate output folders' },
    { title: 'Check', detail: 'spec, content rules, family consistency; fix loop' },
    { title: 'Docs', detail: 'manifests, provenance and Diataxis pages in one pass' },
  ],
}

const stores = (args && args.stores) || []
if (!Array.isArray(stores) || !stores.length) return 'Usage: store-art-batch { stores: ["<store>", ...], locales: ["<locale>", ...] (optional) }'
const locales = (args && Array.isArray(args.locales) && args.locales.length) ? args.locales : null

const PLAN = { type: 'object', properties: {
  master_art: { type: 'string' }, out_dir: { type: 'string' }, spec_table: { type: 'string' },
  doc_pages: { type: 'array', items: { type: 'object', properties: { kind: { type: 'string' }, path: { type: 'string' } }, required: ['kind', 'path'] } } },
  required: ['master_art', 'out_dir', 'spec_table', 'doc_pages'] }
const SPEC = { type: 'object', properties: {
  store: { type: 'string' }, source_urls: { type: 'array', items: { type: 'string' } }, checked: { type: 'string' },
  assets: { type: 'array', items: { type: 'object', properties: { asset: { type: 'string' }, size: { type: 'string' }, format: { type: 'string' }, rules: { type: 'string' } }, required: ['asset', 'size'] } },
  changes_since_last: { type: 'array', items: { type: 'string' } } },
  required: ['store', 'source_urls', 'assets'] }
const MADE = { type: 'object', properties: {
  store: { type: 'string' }, files: { type: 'array', items: { type: 'string' } },
  manifest_rows: { type: 'array', items: { type: 'string' } }, provenance_lines: { type: 'array', items: { type: 'string' } },
  spec_gaps: { type: 'array', items: { type: 'string' } } },
  required: ['store', 'files'] }
const CHECK = { type: 'object', properties: {
  blocking: { type: 'array', items: { type: 'object', properties: { store: { type: 'string' }, issue: { type: 'string' } }, required: ['store', 'issue'] } },
  other: { type: 'array', items: { type: 'string' } } },
  required: ['blocking'] }
const DOCS = { type: 'object', properties: { pages: { type: 'array', items: { type: 'string' } }, undocumented: { type: 'array', items: { type: 'string' } } }, required: ['pages'] }

phase('Plan')
const plan = await agent(`You are the graphic designer. Follow engineering-practices project-onboarding. Find the identity, the master key art (layered, high resolution; if missing, say so as master_art "missing"), the project's design output folder for store art, and its store-asset spec table. Classify the docs this batch will owe with the Diataxis compass per the project's Diataxis guide: normally reference (per-store manifest and spec table) and a how-to for regenerating assets if none exists. Return paths and doc pages. Stores: ${stores.join(', ')}.`, { schema: PLAN, phase: 'Plan', label: 'plan' })
if (!plan) return 'blocked: planning failed'
if (plan.master_art === 'missing') return 'blocked: no master key art; run the visual-identity and store-and-marketing-art skills to make one first'

const specs = (await parallel(stores.map(s => () => agent(`Follow the graphic-designer store-and-marketing-art skill step 1 for ${s}. Open the store's own official developer or partner documentation (never a blog) and list every icon, listing graphic and screenshot asset with size, format, alpha, count and content rules. Compare with ${plan.spec_table} and skills/store-and-marketing-art/specs.md of this plugin; list what changed. Do not edit any file. Return source URLs and today's check date as you see it.`, { schema: SPEC, phase: 'Plan', label: `spec:${s}` })))).map((sp, i) => sp ? { ...sp, store: stores[i] } : null)
const verified = specs.filter(Boolean)
const unverified = stores.filter((s, i) => !specs[i])
if (unverified.length) log(`spec not verified for: ${unverified.join(', ')}`)
if (!verified.length) return { status: 'blocked', reason: 'no store spec could be verified', unverified }

phase('Do')
const made = await parallel(verified.map(sp => () => agent(`Following the graphic-designer store-and-marketing-art, iconography and contrast-and-legibility skills, produce every asset below for ${sp.store} from the master key art ${plan.master_art} and the identity, by a committed export script where possible. Write only inside ${plan.out_dir}/${sp.store}/ (your own folder). ${locales ? 'Locales: ' + locales.join(', ') + '; keep text on separate layers.' : 'Use the project\'s default locale.'} Respect every content rule (no rankings, prices, calls to action, foreign badges; real captures for screenshots). Verify each file's size, format, alpha and colour space. Do not edit shared files (manifest, provenance log, spec table); return manifest rows (file | asset | size | spec URL | check date) and provenance lines instead.\nSpec: ${JSON.stringify(sp)}`, { schema: MADE, phase: 'Do', label: `make:${sp.store}` })))
const results = verified.map((sp, i) => made[i] || { store: sp.store, files: [], failed: true })
const failed = results.filter(r => r.failed).map(r => r.store)

phase('Check')
let open = []
for (let round = 1; round <= 3; round++) {
  const c = await agent(`Independently check this store art batch. For every store: each file against its verified spec (dimensions, format, alpha, colour space, file size, counts), the content rules, logo legibility at the smallest placement on light and dark store UI, and that all stores read as one product family. Open the files; do not trust the reports.\nSpecs: ${JSON.stringify(verified)}\nOutputs: ${JSON.stringify(results)}\nList blocking problems by store; others separately.`, { schema: CHECK, phase: 'Check', label: `check:${round}` })
  if (!c) { open = [{ store: 'all', issue: 'checker failed; batch unverified' }]; break }
  open = c.blocking
  if (!open.length) break
  log(`round ${round}: ${open.length} blocking`)
  if (round === 3) break
  const byStore = {}
  for (const b of open) (byStore[b.store] = byStore[b.store] || []).push(b.issue)
  await parallel(Object.keys(byStore).map(s => () => agent(`Fix these issues in ${plan.out_dir}/${s}/ only (store-and-marketing-art skill), re-export from the master, and re-verify:\n- ${byStore[s].join('\n- ')}`, { phase: 'Check', label: `fix:${s}` })))
}

phase('Docs')
const rows = results.map(r => `## ${r.store}\n${(r.manifest_rows || []).join('\n')}`).join('\n\n')
const prov = results.map(r => (r.provenance_lines || []).join('\n')).filter(Boolean).join('\n')
const docs = await agent(`As the single editor of shared files for this batch: (1) update the project's store-asset spec table ${plan.spec_table} from these verified specs, with source URLs and check dates: ${JSON.stringify(verified)}; (2) write the per-store manifests from these rows:\n${rows}\n(3) add these provenance lines in one edit:\n${prov || '(none)'}\n(4) Classify every user-visible change in this work with the Diataxis compass (action/cognition x study/work). For each, update or add exactly one page of that kind under docs/<kind>/, keep each page to one kind, title it by the project pattern, and link to the related pages of the other kinds. Planned: ${JSON.stringify(plan.doc_pages)}. Then check each touched page holds one kind only. Report pages touched and anything left undocumented and why.`, { schema: DOCS, phase: 'Docs', label: 'docs' })

const DOCCHECK = { type: 'object', properties: { problems: { type: 'array', items: { type: 'string' } } }, required: ['problems'] }
const docCheck = docs ? await agent(`Independently check these docs pages against the project's Diataxis guide review checklist: each page holds one kind only, how-to titles name a user goal, explanation titles read with "About", reference matches sibling format, links connect the kinds. Pages: ${JSON.stringify(docs.pages)}. Fix nothing; list problems.`, { schema: DOCCHECK, phase: 'Docs', label: 'docs-check' }) : null
const docProblems = docCheck ? docCheck.problems : ['docs check did not run; docs unverified']

const status = (docProblems.length || open.length || failed.length || unverified.length || !docs) ? 'blocked' : 'ready'
return { status, open, failed_stores: failed, unverified_specs: unverified, docs: docs || 'docs step failed', doc_problems: docProblems, outputs: results }
