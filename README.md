# Graphic designer

A Claude Code role plugin for the **graphic designer** job function: the
person who gives a product one recognisable, accessible, legally clean look.
It builds visual identities (logo system, palette, typography, iconography,
brand guidelines with a design-tokens file), designs app icons and store
and marketing art to each store's current official specs, and designs app
screens and website visuals that the UI developer and front-end web
developer build. 2D only; in-game 3D art belongs to the technical artist.

The plugin says how to do the job well. The project it works in says with
which tools, folders and stores, in its `CLAUDE.md` and project profile.

## Install

```
/plugin marketplace add opsroller/claude-plugins
/plugin install graphic-designer@opsroller
```

## Documentation

**New to the plugin?** Start with the tutorial,
[Check and fix a palette's contrast](docs/tutorials/first-task.md). It walks
through one complete task: onboarding, a skill, a fix and the doc it owes.

**Doing a job?** The how-to guides are organised by goal:

- [How to build a visual identity](docs/how-to/how-to-build-a-visual-identity.md)
- [How to prepare store assets for several stores](docs/how-to/how-to-prepare-store-assets.md)
- [How to hand off UI visuals to developers](docs/how-to/how-to-hand-off-ui-visuals.md)
- [How to check a colour pair before using it](docs/how-to/how-to-check-colour-contrast.md)
- [How to clear a font for use](docs/how-to/how-to-license-a-font.md)

**Looking something up?** The [reference](docs/reference/index.md) describes
the agent, each of the eight skills and each of the three workflows, with
arguments, phases and outputs. The research behind it is in
[SOURCES.md](SOURCES.md).

**Want the background?** [About the graphic designer role](docs/explanation/about-the-role.md)
explains the job, its boundaries with neighbouring roles, its quality bars
and the reasons behind its methods.

## License

Copyright (C) 2026 Charles (opsroller) and contributors. Licensed under the GNU General Public License v2.0 or later (`GPL-2.0-or-later`); see `LICENSE`.
