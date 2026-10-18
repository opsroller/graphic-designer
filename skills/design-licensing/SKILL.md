---
name: design-licensing
description: Use before using any font, image, icon, texture, mockup or third-party mark in design work, and when delivering the identity: checks the licence covers every intended use, records it in the provenance log, and avoids trademark conflicts.
---

# Design licensing

The base rule comes from `engineering-practices` (`provenance`): ship only
what the project may ship, and log where everything came from. This skill
adds what is specific to design assets. It is not legal advice; escalate
doubtful cases to the project manager instead of guessing.

## Fonts

A font licence is about **uses**, and they differ:

| Use | Question to answer |
|---|---|
| Desktop | May we install it to design with? |
| Logo / wordmark | May letterforms appear in a logo or trademark? |
| Images and print | Static output (store art, posters) |
| App or game embedding | May the font file ship inside the product? |
| Web font | May it be served to browsers? Traffic limits? Self-hosting? |
| Video / broadcast | Trailers, streams |
| Modification | May we subset, convert or alter glyphs? |

Rules:

- Read the actual licence text, not the shop page summary. Record the
  licence name, version and source URL.
- **SIL Open Font License (OFL)** fonts suit most products: they may be
  used, embedded and bundled (including in commercial products); artwork
  and documents made with them are not covered by the OFL; when you
  distribute the font file, the licence and copyright notice must go with
  it; the font may not be sold on its own; modified versions must not use
  any Reserved Font Name and stay under the OFL. Keep `OFL.txt` beside the
  shipped font.
- Commercial licences often split desktop, app and web; buy or confirm each
  use the brief lists. Keep the receipt/licence reference in the provenance
  log.
- Platform system fonts may be used in the UI on that platform; their
  licences usually forbid bundling them elsewhere or using them in logos.
- Fonts arriving in a template, a design file or an online editor carry
  their own licence; check it before relying on them.

## Images, icons and textures

- Prefer making your own or generating by committed script.
- For stock or shared images, record source URL, author, licence and
  version. With Creative Commons, attribution (title, author, source,
  licence) is required for BY licences; NC excludes commercial products;
  ND forbids adaptations, so it rarely fits design work; SA requires
  derivatives under the same licence, which may conflict with the project
  licence. Check the project profile for which licences it accepts.
- "Free" sites have their own terms: check redistribution and trademark
  clauses, and whether recognisable people or property need releases.
- Icon libraries: note licence and attribution needs per library; do not
  mix styles to save time.
- AI-generated imagery: follow the project profile's policy; record the
  tool and prompt; never prompt for a living artist's style or another
  brand's marks.

## Marks and trade dress

- Do not imitate another product's logo, icon, colour-and-layout trade
  dress or store art closely enough to be confused with it. Keep the
  category audit from `visual-identity` as evidence of difference.
- Platform and store trademarks (device images, store badges, platform
  names) only per their owner's usage guidelines; official badges from
  the official kits, unmodified.
- When the project recreates or is inspired by an existing work, follow the
  `provenance` rules: reimplement ideas, never copy expression, and use the
  original's name only where the profile allows.

## Delivering the identity

- Ship sources and exports with a licence statement consistent with the
  project's licence and the asset terms.
- Make sure the project holds the rights it needs to everything you made
  (the project profile states its licence and contributor terms).

## Checklist

- [ ] Every font: licence read; each intended use covered; licence file
      shipped with any font file.
- [ ] Every image/icon/texture: source, author, licence, attribution
      recorded; licence accepted by the profile.
- [ ] No third-party marks or badges outside their guidelines.
- [ ] Provenance log updated in the same change as the asset.
- [ ] Credits/licence page entries handed to the front-end web developer
      where attribution is required.

## Failure modes

- A logo set in a font whose licence excludes logos.
- A web font served under a desktop-only licence.
- A CC BY-NC image in a paid product.
- Attribution required but missing from the credits page.
- A store screenshot that shows another company's character or mark.

## Documentation

Licensing work owes **reference**: the provenance log entries and the
credits/licence list. If a licensing decision was made (e.g. choosing an OFL
family over a commercial one), record it as a short **explanation**.
