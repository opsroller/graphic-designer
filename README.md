# Graphic Designer

Graphic designer: owns visual identity and 2D design: logo, colour and type, app icons, store and marketing art, UI visual design and website visuals.

This plugin is a **job function**, not a project. It says how the job is done; the project it works on says with which tools, in its `CLAUDE.md` and project profile.

## Skills

| Skill | Use when |
|---|---|
| `visual-identity` | Use when creating or applying a logo, palette, typography or style guide. |
| `app-icons-store-art` | Use when making app icons, store listing graphics or promotional images. |
| `ui-visual-design` | Use when designing the look of screens, HUD, components or website pages for others to build. |

## Workflows

Multi-agent workflows (Claude Code Workflow scripts in `workflows/`).

| Workflow | Does |
|---|---|
| `/graphic-designer:store-art-batch` | Produce app icons and store graphics for several stores in parallel from one identity, then check consistency |

## Agent

`agents/graphic-designer.md` defines the role as a subagent.

## Install

```
/plugin marketplace add opsroller/claude-plugins
/plugin install graphic-designer@opsroller
```

Versioned on its own with semver tags (`v0.1.0`). Changes follow Conventional Commits.
