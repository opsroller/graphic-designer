*Reference, for anyone running or reviewing the `identity-build` workflow of the graphic-designer plugin.*

# identity-build

Build or refresh a visual identity from brief to guidelines, tokens and docs.

| Field | Value |
|---|---|
| File | `workflows/identity-build.js` |
| Invoke | `/graphic-designer:identity-build { ... }` |
| Skills used | visual-identity, brand-guidelines, contrast-and-legibility, design-licensing |

## Arguments

| Name | Type | Required | Meaning |
|---|---|---|---|
| `product` | string | yes | Product name |
| `brief` | string (path) | no | Existing identity brief |
| `direction` | number | no | Index of an already approved direction in `directions/`; skips Explore |

Missing or invalid required arguments return a usage string.

## Phases

| Phase | Does |
|---|---|
| Plan | Brief, research, doc kinds via the Diataxis compass |
| Explore | Three directions in parallel, each in `directions/<n>/`; one reviewer picks; one agent adds provenance lines |
| Do | Logo system, palette, type, icon style, tokens file, guidelines, docs |
| Check | Independent review (contrast, small size, licences, guidelines checklist, docs one kind per page); up to two fix rounds |

## Output

`{ status: "ready", direction, built: { files, tokens_file, guidelines, docs_touched, undocumented } }` or `{ status: "blocked", open, built }`, or a `blocked: ...` string when a step fails.

Parallel agents never edit shared files; a single agent applies manifests, provenance lines and docs. A failed checker leaves items unverified and the result blocked.

## Related

- [Reference index](index.md)
- How-to: [How to build a visual identity](../how-to/how-to-build-a-visual-identity.md)

## Run modes

Run modes v2. Besides its own args, the workflow takes the optional `run` arg defined in the engineering-practices
[workflow run modes reference](https://github.com/opsroller/engineering-practices/blob/main/docs/reference/workflow-run-modes.md):
`run: { mode: "inline" }` runs every phase in the calling session with no subagents, `run.only` runs chosen phases or steps,
and `run.from` with `run.results` resumes a stopped run. Without `run`, the workflow and its outputs are as above.
See [how to run a workflow inline](https://github.com/opsroller/engineering-practices/blob/main/docs/how-to/how-to-run-a-workflow-inline.md).

Step labels, for `run.only` and `run.results`: `brief`, `direction:<n>`, `choose`, `provenance`, `build`, `review:<round>`, `fix:<round>`.

Independent steps: `review:<round>`. They review work this run produced, so in inline mode send each to a reviewer with no part in the work and name them in `run.reviewers`; a step you answer yourself is reported in `self_reviewed`.
