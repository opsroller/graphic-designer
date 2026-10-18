*Reference, for anyone running or reviewing the `store-art-batch` workflow of the graphic-designer plugin.*

# store-art-batch

Produce store icons and listing art for several stores in parallel from one master.

| Field | Value |
|---|---|
| File | `workflows/store-art-batch.js` |
| Invoke | `/graphic-designer:store-art-batch { ... }` |
| Skills used | store-and-marketing-art, iconography, contrast-and-legibility |

## Arguments

| Name | Type | Required | Meaning |
|---|---|---|---|
| `stores` | string[] | yes | Stores to prepare, as named in the project profile |
| `locales` | string[] | no | Locales for captions and localised art; default the project default |

Missing or invalid required arguments return a usage string.

## Phases

| Phase | Does |
|---|---|
| Plan | Find identity, master key art, output folder, spec table, doc kinds; verify each store's official spec in parallel (read-only) |
| Do | One agent per verified store, writing only in `<out dir>/<store>/`, returning manifest rows and provenance lines |
| Check | Independent check of every file against spec, content rules and family consistency; up to two per-store fix rounds |
| Docs | One agent updates the spec table, manifests, provenance log and Diataxis pages; an independent agent checks each page holds one kind |

## Output

`{ status: "ready" | "blocked", open, failed_stores, unverified_specs, docs, doc_problems, outputs }`; a `blocked: ...` string when planning fails or the master art is missing.

Parallel agents never edit shared files; a single agent applies manifests, provenance lines and docs. A failed checker leaves items unverified and the result blocked.

## Related

- [Reference index](index.md)
- How-to: [How to prepare store assets for several stores](../how-to/how-to-prepare-store-assets.md)
