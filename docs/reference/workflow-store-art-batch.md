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
| Handoff | Commits everything the run wrote on a feature branch, pushes, runs the project's checks on the pushed head. Never opens or merges a PR. |

## Output

`{ status: "ready" | "blocked", open, failed_stores, unverified_specs, docs, doc_problems, outputs }`, where `docs` is `{ pages, undocumented }`; a ready result also has `handoff` and `next`. When the handoff step returns no branch or the checks fail on the pushed head, the result is `blocked` with that problem in `open` (store `all`). A `blocked: ...` string when planning fails or the master art is missing.

Parallel agents never edit shared files; a single agent applies manifests, provenance lines and docs. A failed checker leaves items unverified and the result blocked.

## Handoff

`handoff` is the object engineering-practices
[deliver-package](https://github.com/opsroller/engineering-practices/blob/main/docs/reference/workflow-deliver-package.md)
takes as `prior`, so pass the whole result and the batch ships without
being built again: `from` (`graphic-designer:store-art-batch`), `branch`, `pr`,
`head_sha`, `tests_pass`, `docs`, `undocumented`, `notes`. With no
work package, land the branch with land-pr instead; `next` names both.

## Related

- [Reference index](index.md)
- How-to: [How to prepare store assets for several stores](../how-to/how-to-prepare-store-assets.md)

## Run modes

Run modes v2. Besides its own args, the workflow takes the optional `run` arg defined in the engineering-practices
[workflow run modes reference](https://github.com/opsroller/engineering-practices/blob/main/docs/reference/workflow-run-modes.md):
`run: { mode: "inline" }` runs every phase in the calling session with no subagents, `run.only` runs chosen phases or steps,
and `run.from` with `run.results` resumes a stopped run. Without `run`, the workflow and its outputs are as above.
See [how to run a workflow inline](https://github.com/opsroller/engineering-practices/blob/main/docs/how-to/how-to-run-a-workflow-inline.md).

Step labels, for `run.only` and `run.results`: `plan`, `spec:<store>`, `make:<store>`, `check:<round>`, `fix:<store>`, `docs`, `docs-check`, `handoff`.

Independent steps: `check:<round>`, `docs-check`. They review work this run produced, so in inline mode send each to a reviewer with no part in the work and name them in `run.reviewers`; a step you answer yourself is reported in `self_reviewed`.
