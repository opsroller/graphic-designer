---
name: contrast-and-legibility
description: Use when choosing or checking colours, type sizes and visual cues in any deliverable (palette, UI, website, icons, store art) against WCAG 2.2 contrast and use-of-colour criteria, colour-vision deficiency and small-size legibility.
---

# Contrast and legibility

Accessibility of visuals is measurable. Measure it; do not judge it by eye
on a bright, calibrated monitor.

## Criteria (WCAG 2.2, level AA unless noted)

| Criterion | Requirement |
|---|---|
| 1.4.3 Contrast (Minimum) | Text and images of text: **4.5:1**; large text (≥ 18 pt / 24 px, or ≥ 14 pt / about 18.7 px bold): **3:1** |
| 1.4.6 Contrast (Enhanced), AAA | 7:1 and 4.5:1 for large text |
| 1.4.11 Non-text Contrast | **3:1** against adjacent colours for visual information needed to identify UI components and their states (borders, focus indicators, selected states) and for parts of graphics needed to understand them (icons, chart lines and bars) |
| 1.4.1 Use of Color (A) | Colour is never the only way to convey information, indicate an action or distinguish an element |
| 1.4.4 Resize Text | Text can be resized to 200% without loss of content |

Ratios are not rounded: 4.47:1 fails 4.5:1.

**Exemptions** (narrow; do not stretch them): logotypes and brand-name text;
incidental or purely decorative text; inactive (disabled) components;
graphics whose particular presentation is essential (photos, flags,
screenshots). A logo that acts as a control should still use a contrasting
variant.

Games and apps outside the web are not legally bound by WCAG everywhere, but
it is the accepted, measurable baseline; use it unless the project profile
sets a stricter one.

## Computing contrast

For each colour in sRGB, scale channels to 0-1, linearise each channel:
`c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ^ 2.4`, then relative
luminance `L = 0.2126 R + 0.7152 G + 0.0722 B`. Contrast ratio
`(L_light + 0.05) / (L_dark + 0.05)`, from 1:1 to 21:1.

Use any contrast checker, a script in the repo, or this formula; record the
measured ratio next to each approved pair.

## Method

1. **List pairs**: every text/background, icon/background, control
   boundary/background and focus-indicator/adjacent pair, in every theme and
   state (default, hover, focus, pressed, selected, disabled, error).
2. **Measure** each pair; for translucent colours, measure the composited
   result over the real background.
3. **Text over images or gradients**: measure the lowest-contrast region the
   text can sit on; add a scrim, panel, outline or shadow until the worst
   case passes. Moving game scenes need a test over the brightest and
   busiest frames.
4. **Colour independence**: view in greyscale and under protanopia,
   deuteranopia and tritanopia simulation. Red/green status pairs need a
   second cue (icon, shape, label, position) and a lightness difference.
5. **Small sizes**: check text and icons at their real rendered size on a
   real device or at 1x; thin weights and light text lose contrast through
   anti-aliasing, so prefer heavier weights at small sizes.
6. **Fix at the token level**: change the semantic token mapping or pick a
   different ramp step, then re-measure everything using that token.
7. **Record** results in the project's docs (the approved pairs table).

## Quality bar

- [ ] Every text pair ≥ 4.5:1 (or ≥ 3:1 for qualifying large text).
- [ ] Every meaningful icon, control boundary and focus indicator ≥ 3:1.
- [ ] No state or status relies on colour alone.
- [ ] Worst-case text-over-image region passes.
- [ ] Results recorded with the ratios.

## Failure modes

- Placeholder and disabled-looking text used for real information.
- Brand colour fails as text on white; use a darker ramp step for text and
  keep the brand colour for fills.
- Focus ring the same colour as the button it surrounds.
- Checking light theme only.
- Treating "large text" as anything bigger than body text.

## Documentation

Contrast results are **reference** (the approved pairs table with ratios).
If the team must check new colours themselves, add a **how-to** ("How to
check a colour pair before using it").
