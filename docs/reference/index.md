*Reference landing page, for anyone looking up what the graphic-designer plugin contains.*

# Graphic-designer plugin reference

The plugin is one agent, eight skills and three workflows. Each page below
describes one part in the same format.

## Agent

- [graphic-designer agent](agent.md): mission, responsibilities, quality
  bar, boundaries and the never-list of the role as a subagent.

## Skills

Identity and brand:

- [visual-identity](skill-visual-identity.md): brief to logo system,
  palette, type and imagery style.
- [brand-guidelines](skill-brand-guidelines.md): the written rules and the
  tokens file.
- [iconography](skill-iconography.md): UI icon sets and per-platform app
  icons.

Applying the brand:

- [store-and-marketing-art](skill-store-and-marketing-art.md): store
  listing art to official specs, press and social art.
- [ui-visual-design](skill-ui-visual-design.md): app screens and
  components for the UI developer.
- [web-visuals](skill-web-visuals.md): website visuals for the front-end
  web developer.

Across all work:

- [contrast-and-legibility](skill-contrast-and-legibility.md): WCAG 2.2
  contrast and colour-independence checks.
- [design-licensing](skill-design-licensing.md): fonts, images and marks
  the project may ship.

## Workflows

- [identity-build](workflow-identity-build.md): build an identity end to end.
- [store-art-batch](workflow-store-art-batch.md): store art for several
  stores in parallel.
- [ui-visual-handoff](workflow-ui-visual-handoff.md): design screens or pages
  and hand them off.

## Plugin manifest

`.claude-plugin/plugin.json` fields:

| Field | Value |
|---|---|
| `name` | `graphic-designer` |
| `version` | `0.3.0` |
| `author.name` | `opsroller` |
| `repository` | `https://github.com/opsroller/graphic-designer` |
| `license` | `GPL-2.0-or-later` |
| `keywords` | `role`, `job-function`, and graphic-design topics |

## Sources

The research behind the plugin is listed in [SOURCES.md](../../SOURCES.md).
