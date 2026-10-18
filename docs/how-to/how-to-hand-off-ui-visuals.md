*How-to guide, for teams handing app screens or web pages from design to implementation with the graphic-designer plugin.*

# How to hand off UI visuals to developers

This guide shows you how to design a set of screens or pages on the shared
tokens and components and hand a complete package to the UI developer
(app) or front-end web developer (web), using `ui-visual-handoff`.

## Before you start

- A tokens file and component library exist (from
  [How to build a visual identity](how-to-build-a-visual-identity.md)).
- You know the screen or page names.

## Run it

For app screens:

```
/graphic-designer:ui-visual-handoff { "screens": ["Sign in", "Settings", "Pause menu"], "surface": "app" }
```

For website pages:

```
/graphic-designer:ui-visual-handoff { "screens": ["Landing page", "Press kit"], "surface": "web" }
```

## What you get

A package index in the design output folder linking: the tokens file and
its changelog, component specs with every state, screen specs at each size,
exported assets, and an intent note per screen. Docs pages are updated in
the same change.

## If it is blocked

`open` lists accessibility or completeness issues still failing;
`missing_components` lists components to add to the library before the
screens can be finished.

## After implementation

Ask the graphic designer to review the build against the specs on a real
device or at real browser widths; differences are filed as token, expected
and actual.

See the [ui-visual-handoff reference](../reference/workflow-ui-visual-handoff.md).
