*Reference, for anyone running or reviewing the `ui-visual-handoff` workflow of the graphic-designer plugin.*

# ui-visual-handoff

Design screens or pages on the shared system and hand off a package to the implementing developer.

| Field | Value |
|---|---|
| File | `workflows/ui-visual-handoff.js` |
| Invoke | `/graphic-designer:ui-visual-handoff { ... }` |
| Skills used | ui-visual-design or web-visuals, contrast-and-legibility, iconography |

## Arguments

| Name | Type | Required | Meaning |
|---|---|---|---|
| `screens` | string[] | yes | Screen or page names |
| `surface` | "app" | "web" | yes | `app` uses ui-visual-design and hands to the UI developer; `web` uses web-visuals and hands to the front-end web developer |

Missing or invalid required arguments return a usage string.

## Phases

| Phase | Does |
|---|---|
| Plan | Audit tokens and component library; list missing components, token changes, sizes, doc kinds |
| Do | One agent applies shared token and component changes; then one agent per screen writes only in `<out dir>/screen-<n>/` |
| Check | Independent accessibility and completeness review; up to two fix rounds |
| Handoff | One agent adds provenance lines, assembles the package index and updates Diataxis pages; an independent agent checks each page holds one kind |

## Output

`{ status: "ready", receiver, handoff: { package, pages, undocumented }, outputs }` or `{ status: "blocked", open, failed_screens, missing_components, outputs }`, or `{ status: "blocked", doc_problems, handoff, outputs }` when the docs check fails.

Parallel agents never edit shared files; a single agent applies manifests, provenance lines and docs. A failed checker leaves items unverified and the result blocked.

## Related

- [Reference index](index.md)
- How-to: [How to hand off UI visuals to developers](../how-to/how-to-hand-off-ui-visuals.md)

## Run modes

Run modes v2. Besides its own args, the workflow takes the optional `run` arg defined in the engineering-practices
[workflow run modes reference](https://github.com/opsroller/engineering-practices/blob/main/docs/reference/workflow-run-modes.md):
`run: { mode: "inline" }` runs every phase in the calling session with no subagents, `run.only` runs chosen phases or steps,
and `run.from` with `run.results` resumes a stopped run. Without `run`, the workflow and its outputs are as above.
See [how to run a workflow inline](https://github.com/opsroller/engineering-practices/blob/main/docs/how-to/how-to-run-a-workflow-inline.md).

Step labels, for `run.only` and `run.results`: `plan`, `components`, `screen:<n>` (one per screen, from 1), `check:<round>`, `fix:<round>`, `handoff`, `docs-check`.

Independent steps: `check:<round>`, `docs-check`. They review work this run produced, so in inline mode send each to a reviewer with no part in the work and name them in `run.reviewers`; a step you answer yourself is reported in `self_reviewed`.
