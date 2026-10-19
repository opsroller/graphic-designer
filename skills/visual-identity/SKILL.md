---
name: visual-identity
description: 'Use when creating, refreshing or extending a product''s visual identity: brief, research, logo system, palette, typography and imagery style. Produces the identity that brand-guidelines then documents.'
---

# Visual identity

An identity is a system: a mark, a palette, type, an icon style and an
image style that work together and stay recognisable everywhere the product
appears. Build the system, not a single pretty logo.

## 1. Brief (do not skip)

Write or confirm a one-page brief in the project's design folder:

- **Product and audience**: what it is, who it is for, what they should feel.
- **Personality**: three to five adjectives, and three it must *not* be.
- **Where it appears**: app icon, store pages, website, in-app UI, social,
  print, merchandise. List the smallest size for each.
- **Constraints**: existing assets to keep, platforms, budget for licensed
  fonts, colour limits (e.g. print, one-colour engraving), languages and
  scripts the type must cover.
- **Approver and done-when**: who signs off, by what criteria.

## 2. Research

- **Category audit**: collect 10-20 competitors' icons, logos and store pages
  side by side at real size. Note the clichés (colours, symbols, type styles)
  everyone uses; decide deliberately whether to join or break them.
- **Name and meaning**: what the name evokes, words and ideas to draw from.
- **Conflict check**: search the stores and the web for marks similar to each
  direction before investing in it. Trademark clearance is a legal task; flag
  risks to the project manager rather than ruling on them.

## 3. Explore directions

- Sketch widely (dozens of thumbnails), then develop **three distinct
  directions**, each with a mark, a palette sketch, a type pairing and one
  application (app icon or store capsule). Distinct means a different idea,
  not three colourways.
- Present each against the brief: what idea it carries, where it is strong,
  where it is weak. Recommend one and say why.

## 4. Build the logo system

| Asset | Purpose |
|---|---|
| Primary lockup | Symbol + wordmark, the default |
| Alternate lockups | Horizontal and stacked, for wide and square spaces |
| Symbol (logomark) | App icon basis, avatars, favicons |
| Wordmark (logotype) | Where the symbol cannot appear |
| One-colour versions | Black, white (reversed), single brand colour |
| Small-size version | Simplified detail for 16-32 px, if the full mark breaks |

Rules:

- Draw in vector; outline text in the final mark; keep a live-text working
  file. Build on a grid and record the construction (clear-space unit, key
  ratios).
- The mark must survive: 16 px, one colour, reversed on dark, on a busy
  photo, embroidered or engraved if the brief includes merchandise.
- Customise or draw the wordmark rather than typing the name in a stock font;
  if it uses a font, the font licence must allow logo use (`design-licensing`).

## 5. Palette

- Start from meaning and contrast, not swatches. Pick a primary brand colour,
  one or two accents, and a neutral ramp (8-12 steps from near-white to
  near-black).
- Build tonal ramps for each hue (e.g. 50-950 steps) so UI and marketing can
  pick accessible pairs without inventing colours.
- Assign **roles**: brand, accent, surface, on-surface (text), outline,
  success, warning, danger, info, focus. Define light and dark values for
  every role.
- Check every intended text/background and icon/background pair with
  `contrast-and-legibility` before approval. Check the palette under
  protanopia, deuteranopia and tritanopia simulation; status colours must
  also differ in lightness or carry an icon.
- Record values in every space the project uses: hex/sRGB for screens,
  Display P3 if the platform supports it, CMYK and a spot-colour reference
  only if print is in scope.

## 6. Typography

- Choose by job: a display face for headings and marketing, a text face for
  UI and body, optionally a mono face for numbers or code. Two families is
  usually enough.
- Test with real content: the product name, a long title, numerals, and every
  script the brief lists. Check legibility at the smallest UI size.
- Prefer families with several weights, tabular figures and good hinting or
  variable axes. Platform system fonts for small UI text are a sound choice
  (Apple's HIG recommends custom fonts for headlines and system fonts for
  body text and captions).
- Confirm the licence covers every use: desktop design, app embedding, web
  font, logo, broadcast/video (`design-licensing`).
- Define a type scale (sizes, line heights, weights, letter-spacing) that
  `brand-guidelines` turns into tokens.

## 7. Iconography and imagery style

- Pick one icon style (outlined or filled, stroke weight, corner radius,
  grid) and hand it to `iconography`.
- Define illustration and photography direction: subject, framing, colour
  treatment, what to avoid. Give two or three example compositions.

## 8. Validate and hand over

Mock the system in at least four real applications (app icon, store capsule,
website hero, a UI screen). Then run `brand-guidelines` to document it.

## Quality bar

- [ ] Brief approved before exploration; directions answer the brief.
- [ ] Mark recognisable at 16 px and in one colour, positive and reversed.
- [ ] Not confusable with any category competitor found in research.
- [ ] Every palette role has light and dark values and passing contrast pairs.
- [ ] Type covers required scripts and is licensed for every intended use.
- [ ] All sources vector and committed; exports regenerable.

## Failure modes

- Designing the logo alone, then discovering it fails as an app icon.
- Three "directions" that are one idea in three colours.
- A palette chosen as swatches with no text pairs that pass contrast.
- Fine detail or thin strokes that vanish at small sizes.
- Trend-chasing (gradients, effects) that dates within a year.
- A font that looks right but whose licence forbids app embedding or logos.

## Documentation

Identity work needs an **explanation** (why this direction: brief, research,
rationale, rejected options) and **reference** (the brand guidelines, via
`brand-guidelines`). If the team will apply the identity themselves, add a
**how-to** ("use the logo in a new layout").
