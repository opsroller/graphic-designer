export const meta = {
  name: 'store-art-batch',
  description: 'Produce app icons and store graphics for several stores in parallel from one identity, then check consistency',
  whenToUse: 'Prepare icons and listing art. args: { stores: ["<store or OS>", ...] }',
  phases: [{ title: 'Make', detail: 'one agent per store' }, { title: 'Check', detail: 'one family, every spec met' }],
}
const stores = (args && args.stores) || []
if (!stores.length) return 'Pass args.stores: the stores or OSes to prepare.'
const R = { type: 'object', properties: { store: { type: 'string' }, files: { type: 'array', items: { type: 'string' } }, spec_gaps: { type: 'array', items: { type: 'string' } } }, required: ['store', 'files'] }
const made = await pipeline(stores, s => agent(`Following the graphic-designer app-icons-store-art and visual-identity skills, produce every icon size and listing graphic ${s} requires from the project's identity sources, by a committed export script where possible, into the project's design folder under a subfolder for ${s}. Look up the current official spec. Report files and any spec you could not meet.`, { schema: R, phase: 'Make', label: s }))
phase('Check')
return await agent(`Check these outputs read as one family and meet each store's spec, especially the icon at its smallest size:\n${JSON.stringify(made.filter(Boolean))}\nFix what you can; list the rest.`, { label: 'check' })
