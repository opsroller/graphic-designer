*How-to guide, for project leads and designers who need a product identity built with the graphic-designer plugin.*

# How to build a visual identity

This guide shows you how to get a logo system, palette, type, icon style,
brand guidelines and a tokens file for a product, using the
`identity-build` workflow.

## Before you start

- The project has a `CLAUDE.md` and profile naming the design folder and
  docs location.
- Optional: an identity brief. If you have none, the workflow writes one.

## Run the workflow

```
/graphic-designer:identity-build { "product": "Example App" }
```

With an existing brief:

```
/graphic-designer:identity-build { "product": "Example App", "brief": "design/brief.md" }
```

## Choose the direction yourself

By default the workflow develops three directions in
`<design folder>/directions/1..3/` and picks one against the brief. To make
the choice yourself, first ask the graphic designer for the directions only:

```
Use the graphic-designer agent. Follow visual-identity steps 1-3 for Example App
and stop after presenting the three directions in design/directions/.
```

Review the folders, then run the workflow with your pick; it skips
exploration and refines that direction:

```
/graphic-designer:identity-build { "product": "Example App", "brief": "design/brief.md", "direction": 2 }
```

## Read the result

- `status: "ready"`: guidelines, tokens file and docs are in place.
- `status: "blocked"`: the `open` list names what still fails (contrast,
  small-size legibility, licences, docs). Fix them or rerun.

## Hand it on

Point the UI developer and front-end web developer at the tokens file; see
[How to hand off UI visuals](how-to-hand-off-ui-visuals.md).

See the [identity-build reference](../reference/workflow-identity-build.md)
for all arguments and outputs.
