---
name: store-and-marketing-art
description: Use when producing store listing art (store icons, capsules, feature graphics, screenshots, banners, preview-video stills) to each store's current official spec, or marketing and press art (social images, press kit, key art) from the identity.
---

# Store and marketing art

Store art sells the product in a crowded list, in a second, under rules the
store enforces. Get the spec right, then make it persuasive.

## 1. Verify the spec (every time)

1. List the stores and platforms from the project profile.
2. For each, open the **official** spec page (the store's own developer or
   partner documentation, never a blog) and copy sizes, formats, counts,
   safe areas and content rules into the project's store-asset spec table
   with the URL and the date checked.
3. Compare with the last table; note what changed.

A starting table, verified 2026-10-18, is in [specs.md](specs.md). Treat it
as a map to the official pages, not as the spec.

## 2. Know the content rules

Common to the major stores (check each store's wording):

- **No ranking, price or promotion claims** in icons and capsules: "#1",
  "Best", "Free", "Sale", award logos, review scores, "Download now" (Google
  Play forbids these in graphics; Steam forbids review scores, awards,
  discount copy and calls to action on capsules).
- **No other stores' badges, device frames or third-party trademarks**
  without permission.
- **Screenshots show the real product**: captured footage, not concept art
  or mock-ups; captions short (Google Play: taglines no more than 20% of the
  image); clean status bars.
- **Text only where allowed**: some assets allow only the product's logo
  (e.g. Steam library capsule: logo only; library hero: no text at all).
- **Time-sensitive messaging** goes in the store's override or event
  mechanism, not the base art.

## 3. Design

- **Hierarchy**: logo legible first, one focal image second, nothing third.
  Small capsules are mostly logo.
- **Safe areas**: keep key content inside each format's safe area (e.g.
  Steam library hero's centred safe area; feature graphics centred away from
  edges that some placements crop).
- **Store background**: test on the store's light and dark backgrounds;
  Google Play advises against pure white, black or dark grey feature
  graphics, which blend in.
- **Family**: all formats share key art, palette and logo placement so the
  listing reads as one product. Build a master key-art file at high
  resolution with layers (background, character/subject, logo, optional
  text) and derive every crop from it.
- **Screenshots**: plan a sequence (the first two or three carry the pitch);
  one idea per screenshot; captions in the brand type, localised per
  locale; capture at native resolution in the required size(s).
- **Localisation**: keep text on separate layers; budget 30-40% extra length
  for translations; never bake text into art you cannot re-export.

## 4. Produce

1. Build each format from the master by a committed export script (crop,
   scale, flatten, strip alpha where the store requires no alpha, convert
   colour space to sRGB).
2. Name files `<store>/<asset>-<width>x<height>[-<locale>].<ext>` or per the
   project profile.
3. Verify each file: dimensions, format, alpha, colour space, file size
   limit, count per type.
4. Write a manifest per store (file, asset type, size, spec URL, check date)
   for the DevOps engineer, who uploads.

## 5. Marketing and press art

- **Press kit**: logo pack (all lockups, SVG + PNG, light and dark),
  app icon at large size, key art with and without logo, 5-10 high-res
  screenshots, short and long description, fact sheet, credits and licence
  notes. Hand to the front-end web developer for the press page.
- **Social**: templates per network aspect (square, portrait, landscape),
  safe zones for the network's overlays; check current sizes on the
  network's own help pages.
- **Trailer and video stills**: title cards and end cards from the
  identity; captions burned in only if the platform lacks captions.

## Quality bar

- [ ] Every asset matches the official spec checked within this work.
- [ ] No forbidden content (rankings, prices, CTAs, foreign badges).
- [ ] Logo legible at the smallest placement on light and dark store UI.
- [ ] Screenshots are real captures at the required sizes.
- [ ] All formats derive from one master; exports regenerable.
- [ ] Manifest and provenance entries complete.

## Failure modes

- Uploading from last year's spec table; check the date.
- Text baked into key art, blocking localisation.
- A beautiful capsule whose logo is unreadable at 184 px wide.
- Mock-up screenshots rejected by review.
- Several formats painted separately that no longer look like one product.

## Documentation

A store batch owes **reference** (the per-store asset manifest and spec
table with source URLs and dates) and a **how-to** for regenerating or
updating the assets if none exists. A press kit owes a reference page
listing its contents and licence terms.
