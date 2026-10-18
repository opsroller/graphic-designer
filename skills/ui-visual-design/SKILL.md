---
name: ui-visual-design
description: Use when designing the look of an app's screens, menus, HUD and components (theme, colour roles, type scale, spacing, component states, layouts) and handing it to the UI developer as tokens, specs and exported assets.
---

# UI visual design

You decide how the interface looks; the UI developer builds it. The
deliverable is not a picture of a screen but a system the developer can
implement exactly: tokens, components with all their states, layouts that
adapt, and assets.

## 1. Inputs

- The identity and tokens (`visual-identity`, `brand-guidelines`).
- Screen list, flows and content from the game designer or product owner;
  wireframes if they exist.
- Platform and input targets from the project profile (touch, mouse,
  controller, TV distance), screen sizes and aspect ratios, safe areas
  (notches, TV overscan), dark/light support, minimum text size.
- The UI developer's constraints: what the UI toolkit can do cheaply
  (nine-slice, vector, shaders, animation), localisation and font fallback.

## 2. Foundations first

1. **Theme mapping**: semantic colour roles for surfaces, content, outline,
   primary/secondary actions, states, and feedback, mapped for light and
   dark (or the single theme the product uses). Brand colour goes on primary
   actions and key accents, not on every control (Apple HIG: apply the
   accent colour judiciously; let branding defer to content).
2. **Type scale** for UI: display, title, body, label, caption, numerals.
   Body text no smaller than the platform's comfortable minimum; support
   the platform's text-size settings where the toolkit allows.
3. **Spacing and layout**: a spacing scale (e.g. 4- or 8-unit steps), grid,
   margins, safe-area insets, breakpoints or size classes.
4. **Shape, elevation, motion**: corner radii, borders, shadows or layering
   rules, and motion tokens (durations, easing) with a reduced-motion
   alternative.
5. **Iconography** from `iconography`.

Write these as semantic tokens in the project's tokens file.

## 3. Components and states

Design each reusable component before full screens. For each component,
specify every state that applies:

| State | Must show |
|---|---|
| Default | Resting appearance |
| Hover / pointer over | Only for pointer input |
| Focused | Visible focus indicator, 3:1 against adjacent colours (keyboard, controller, TV) |
| Pressed / active | Feedback on press |
| Selected / on | Distinguishable without colour alone (icon, weight, shape) |
| Disabled | Clearly inactive; still legible if it carries information |
| Loading / busy | If it can wait |
| Error / invalid | Colour plus icon or text |

Also: minimum touch target (commonly 44 pt iOS, 48 dp Android), content
overflow behaviour (long labels, translations ~30-40% longer, right-to-left
if in scope), and empty states.

Use familiar platform patterns and standard symbols for common actions;
customise appearance, not behaviour.

## 4. Screens

- Compose screens from components only. A one-off element is a missing
  component; add it to the library or remove it.
- Design at the smallest and largest supported sizes plus one in between;
  show how the layout reflows.
- For game HUDs: legibility over busy, moving backgrounds (scrims, outlines
  or panels), placement inside safe areas, colour-blind-safe status cues,
  readable at TV distance if TV is a target.
- Prototype key transitions if motion carries meaning.

## 5. Check before handoff

Run `contrast-and-legibility` on every text and meaningful graphic pair in
every theme and state. Then:

- [ ] All values are tokens; no raw colours or sizes in specs.
- [ ] Every component has every applicable state.
- [ ] Focus order and focus appearance shown for non-touch input.
- [ ] Long-text, translated and enlarged-text versions checked.
- [ ] Nothing communicated by colour alone.
- [ ] Assets exported at every density the profile lists, from vector where
      possible, named predictably.

## 6. Handoff package

Deliver in the project's design folder (paths per profile):

1. **Tokens file** (source of truth) and a changelog of token changes.
2. **Component specs**: anatomy, measurements in tokens, states, behaviour
   notes, accessibility notes (labels, roles, focus).
3. **Screen specs**: layouts at each size with component references.
4. **Assets**: icons (SVG plus required rasters), images, nine-slice
   sources with slice guides, fonts (with licence files).
5. **Intent note**: a short paragraph per screen on what matters most, so the
   developer can make good calls when reality differs.

Then review the implementation: compare builds against specs at real size
on a device, file differences as concrete issues (token, expected,
actual), and fix the design where the implementation revealed a better
answer.

## Failure modes

- Handing over flat mock-ups with no states; the developer invents them.
- Hex values in specs instead of tokens; themes drift.
- Designing only for the designer's monitor size.
- Brand colour on everything, so nothing stands out.
- HUD text unreadable over bright scenes.
- Focus states forgotten because the designer uses a mouse.

## Documentation

UI visual work owes **reference** (component specs, token tables, asset
inventory) in the project's docs. A new theme or significant design choice
owes an **explanation** (why this structure, rejected alternatives). If
other contributors will build screens from the library, add a **how-to**
("How to compose a new screen from the component library").
