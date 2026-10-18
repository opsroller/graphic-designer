---
name: brand-guidelines
description: Use when documenting an identity so others can apply it: the brand guidelines (style guide) with logo rules, colour specs, type scale, iconography and imagery rules, do/don't examples, and a design-tokens file developers consume directly.
---

# Brand guidelines

Guidelines exist so that someone who never met the designer applies the
brand correctly. Write rules with numbers and examples, not adjectives.

## Contents

Use this order; skip sections the brief has no use for. A fuller checklist
is in [checklist.md](checklist.md).

1. **Brand essence**: one paragraph on what the brand stands for and its
   personality (from the identity brief).
2. **Logo**: every lockup and when to use it; construction; **clear space**
   expressed in a unit of the mark itself (e.g. the height of the symbol, or
   half its width); **minimum size** in px for screens and mm for print, per
   lockup; approved colour versions and the backgrounds each may sit on.
3. **Misuse**: a page of "don't" examples: stretching, recolouring, adding
   effects, outlines or shadows, rotating, rearranging lockup parts, placing
   on low-contrast or busy backgrounds, re-typesetting the wordmark.
4. **Colour**: every colour with its role and values in each space in use
   (hex, RGB, optionally Display P3, CMYK/spot for print); ramps; light and
   dark theme mappings; approved text/background pairs with their contrast
   ratios; proportions (e.g. mostly neutral, brand colour for emphasis).
5. **Typography**: families and weights, the type scale (size, line height,
   letter-spacing per step), fallbacks, which face for which job, licence
   notes.
6. **Iconography**: style rules, grid, stroke, sizes, where the icon library
   lives.
7. **Imagery**: illustration and photography direction with examples;
   captures for store screenshots (see `store-and-marketing-art`).
8. **Layout**: grids, spacing scale, templates for recurring formats (social
   post, store capsule, press image, slide).
9. **Voice and tone** (short; the copy owner may extend it).
10. **Legal**: trademark notices, attribution lines, font and image licences.
11. **Downloads**: where the source files, exports and tokens live.

## Design tokens

Ship the values as a machine-readable tokens file alongside the guide so UI
and web developers never copy values by hand. The W3C Design Tokens
Community Group format (first stable version 2025.10) is a vendor-neutral
choice: JSON, `.tokens.json`, each token an object with `$value`, optional
`$type` and `$description`, groups as nested objects, aliases as
`"{group.token}"`.

```json
{
  "color": {
    "$type": "color",
    "brand": { "500": { "$value": { "colorSpace": "srgb", "components": [0.11, 0.42, 0.85], "hex": "#1c6bd9" } } },
    "role": {
      "primary": { "$value": "{color.brand.500}", "$description": "Primary actions, selected states" }
    }
  },
  "space": { "$type": "dimension", "4": { "$value": { "value": 16, "unit": "px" } } }
}
```

Rules:

- Two tiers at least: **primitive** tokens (the ramp values) and **semantic**
  tokens (roles like `color.role.on-surface`) that alias primitives. UI uses
  semantic tokens only, so a theme change is a remap, not a hunt.
- Light and dark themes are two mappings of the same semantic names.
- If the project profile names another token format or tool, use it; the
  structure (primitive → semantic) still applies.
- The tokens file is the source of truth; the written guide quotes it.

## Method

1. Collect the approved identity sources from `visual-identity`.
2. Write the tokens file first, then the guide from it.
3. Make every rule checkable: a number, a named token, or an image example.
4. Build do/don't examples from the real mark, not generic placeholders.
5. Have someone outside the design work apply the guide to a new format
   (e.g. a social banner) and fix every question they had to ask.
6. Version the guide; log changes at the top.

## Quality bar

- [ ] Clear space and minimum size stated as numbers for every lockup.
- [ ] Every colour has a role, values in each space in use, and listed
      passing contrast pairs.
- [ ] Type scale is complete (size, line height, weight, tracking).
- [ ] Misuse page uses the real mark.
- [ ] Tokens file validates as JSON and matches the guide exactly.
- [ ] A non-designer applied it without asking for help.

## Failure modes

- A beautiful PDF nobody can find; keep it in the repo's docs and link it.
- Guides with "use plenty of space" instead of a clear-space unit.
- Values duplicated in guide and code that drift apart; generate one from
  the other.
- No dark-theme mapping, so developers invent one.

## Documentation

The guidelines are **reference** documentation. Put the reasons behind the
rules in an **explanation** page, and common tasks ("make a social image",
"place the logo on a photo") in **how-to** guides. Keep them separate.
