---
name: iconography
description: Use when designing UI icon sets (system icons on a shared grid) or the product's app icon for each platform it ships to, including layered sources, appearance variants and small-size checks.
---

# Iconography

Two different jobs share one skill: **UI icons** (many small symbols that
must read as one family) and the **app icon** (one symbol that carries the
brand on a home screen). Both start from the identity's icon style.

## A. UI icon sets

### Set up the system

- **Grid and live area.** Pick a base size and keep padding around the live
  area. A widely used scheme (Material): 24 dp icon, 20 × 20 dp live area
  with 2 dp padding, keyline shapes (circle, square, portrait and landscape
  rectangles) so circles, squares and rectangles look the same optical size.
  A dense variant at 20 dp with a 16 dp live area.
- **Stroke and corners.** One stroke weight for the whole set (e.g. 2 units
  at 24), one exterior corner radius, one terminal style (square or round).
  Allow optical exceptions (e.g. 1.5 units) only where detail demands.
- **Style.** Outlined or filled, chosen once. If both are needed, filled
  marks the selected/active state and outlined the rest, consistently.
- **Perspective.** Front-facing and flat for UI icons; no perspective, drop
  shadows or lighting unless the identity defines them.
- **Pixel fit.** Coordinates on whole units at the base size so strokes stay
  crisp; check at 1x as well as high densities.

### Draw

1. List every icon needed from the screens (with the UI developer); reuse
   platform conventions for common actions (back, close, share, settings,
   search) so meaning is familiar.
2. Sketch metaphors; prefer the simplest widely understood one; avoid text,
   letters and culturally specific gestures unless localised.
3. Draw on the grid; compare each new icon beside three existing ones at
   actual size.
4. Name by meaning, not shape (`delete`, not `trash-can`), plus size and
   style suffixes if several exist.
5. Export SVG (and any raster sizes the project profile asks for) from one
   source by script or recorded steps.

### Check

- [ ] All icons share grid, stroke, corner, terminal and fill rules.
- [ ] Optical sizes match; no icon looks bolder or larger than its peers.
- [ ] Each icon is identifiable at its base size and in one colour.
- [ ] Icon/background contrast at least 3:1 where the icon carries meaning
      (WCAG 1.4.11; see `contrast-and-legibility`).
- [ ] Interactive icons have a touch target the platform expects (commonly
      44-48 pt/dp) even if the glyph is 24.
- [ ] Icons that mean something have a text label or accessible name
      supplied by the UI developer.

## B. App icon

### Design principles (from Apple's HIG and Android/Google Play guidance)

- One simple, distinctive idea built from few shapes; a simple background
  (solid or gradient) so the subject stands out.
- No text unless the brand essentially is a letter; never words like "Play",
  "New" or a platform name. No photos, screenshots or copies of UI controls.
- No platform hardware or store trademarks.
- Avoid very thin lines and sharp tiny details; they vanish at small sizes.
- Same core design on every platform so people find the app everywhere.

### Build in layers

Modern platforms compose the icon from layers and apply their own masks and
effects:

- **Apple platforms**: square, unmasked layers (background plus one or more
  foreground layers) on a 1024 × 1024 px canvas for iOS/iPadOS/macOS and
  visionOS, 1088 × 1088 px for watchOS, 800 × 480 px layers for tvOS (2-5
  layers, parallax). The system masks the shape and adds highlights,
  shadows and translucency, so do not bake in corners, shadows, blurs or
  glows. Provide default, dark, clear and tinted appearance variants for
  iOS/iPadOS/macOS, keeping the same core features in each. Export layers as
  SVG (text outlined) or PNG for raster parts.
- **Android adaptive icon**: foreground and background layers of
  108 × 108 dp; keep the logo inside the centred 66 × 66 dp safe zone
  (the outer 18 dp per side is for masks and motion effects); logo between
  48 and 66 dp. Provide a monochrome layer for themed icons. No baked-in mask
  or outline shadow.
- **Store listing icons** (e.g. Google Play 512 × 512 px, 32-bit PNG, full
  square, no rounded corners or shadow; the store masks it): see
  `store-and-marketing-art` and its spec table.
- **Desktop and web** icons (window/taskbar icons, favicons) usually need a
  set of sizes from 16 px upward; design a simplified small-size variant if
  the full icon breaks below 32 px.

These numbers were checked against the official pages on 2026-10-18. Before
producing, fetch the current official page for every target platform and
record the date in the asset's provenance entry.

### Method

1. Start from the identity's symbol; design at full canvas size on the
   platform template grid.
2. Split into layers: background, main subject, optional detail layer.
   Keep primary content centred so masks never clip it.
3. Make the appearance variants (dark, tinted/monochrome) from the same
   shapes, not new artwork.
4. Preview at every size and mask the platforms use: rounded square, circle,
   squircle, and the smallest list size (e.g. 29-48 px on screen).
5. Place it on a mock home screen among real competitor icons, on light and
   dark wallpapers. It must stand out and still look at home.
6. Export every required size and layer from the source by script; commit
   source, script and outputs per the project profile.

### Check

- [ ] Recognisable at the smallest size, in every mask, in every appearance.
- [ ] No text, photos, UI replicas, trademarks or baked-in masks/effects.
- [ ] Content inside each platform's safe zone.
- [ ] Every platform the project ships to has its full set.
- [ ] Spec source URLs and check date recorded.

## Failure modes

- A detailed illustration that becomes mud at 48 px.
- Corners or shadows baked in, then double-masked by the platform.
- A dark variant that swaps in different artwork.
- UI icons drawn one at a time with drifting stroke weights.
- Icons whose meaning depends on colour alone.

## Documentation

A new icon set owes **reference** (the icon list with names, sizes and usage
rules) and, if contributors will add icons, a **how-to** ("How to add an
icon to the set"). A new app icon owes a reference entry (files, sizes,
platforms, spec check date) and, if a notable design choice was made, a
short **explanation**.
