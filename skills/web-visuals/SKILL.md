---
name: web-visuals
description: Use when designing a website's visuals (page layouts, hero and section art, responsive image sets, favicons, social-share images, press page) and handing them to the front-end web developer.
---

# Website visuals

The website is often the first place people meet the product outside a
store. You design how it looks; the front-end web developer builds it and
owns performance, SEO and the markup. Design with the web's constraints in
mind: fluid widths, slow networks, user font and zoom settings.

## 1. Inputs

- Identity, tokens and guidelines.
- Page list and content from the requester (landing page, download page,
  press kit, credits and licences, news), with real copy where possible.
- Constraints from the front-end web developer: site generator, component
  approach, image pipeline, font loading budget, performance targets.

## 2. Layout

- Mobile first: design the narrowest width (about 320-360 CSS px) first,
  then the widest (1440 px or more), then the breakpoints where the layout
  actually breaks. Show reflow, not three unrelated designs.
- Use the identity's spacing scale and a fluid type scale (min/max sizes per
  step). Body text at a comfortable reading size (commonly 16 px or more)
  and line length around 45-80 characters.
- One primary action per page (e.g. the download or store buttons), visible
  without scrolling on common sizes.
- Official store badges come from the store's own badge kit and follow its
  usage rules; never redraw them.
- Layouts must survive 200% zoom and user font-size changes without
  clipping (WCAG resize text); avoid text inside images.

## 3. Imagery

- **Hero/key art**: derive from the master key art; plan art direction for
  narrow screens (a different crop, not just a smaller image) and mark the
  focal point so automated crops keep it.
- **Responsive sets**: supply each image at several widths (e.g. 640, 1280,
  1920, 2560) from the master; the developer chooses formats and markup.
  Provide vector (SVG) for logos, icons and simple illustrations.
- **Text over images**: guarantee contrast with a scrim or panel; measure the
  worst region (`contrast-and-legibility`).
- **Alt text**: write a draft alt text for every meaningful image and mark
  decorative ones as decorative; the developer places it.
- **Weight**: avoid decorative images that cost more than they add; agree a
  per-page image budget with the developer.

## 4. Site icons and share images

Hand over a set the developer can wire up. Confirm current requirements
with the front-end web developer, who owns the markup:

- **Favicon**: an SVG favicon (can include a dark-mode variant via CSS media
  query) plus raster fallbacks (small sizes such as 16, 32, 48 px), drawn
  from the small-size version of the mark.
- **Touch and install icons**: square PNGs at the sizes the target browsers
  and web app manifest need (commonly 180 px for home-screen shortcuts and
  192 and 512 px for manifests), plus a maskable variant with content inside
  the central safe area.
- **Social-share images**: a template at the size the target networks
  currently recommend (commonly about 1200 × 630 px, 1.91:1), logo and
  title large, safe margins, legible as a small thumbnail. One per key page
  where useful.

## 5. Handoff

- Page designs at narrow, wide and one middle width, built from tokens.
- Component specs (header, footer, buttons, cards, store-badge row, media
  gallery) with hover, focus, active and visited states.
- Asset folder: images at each width, SVGs, favicons and touch icons, share
  images, fonts with licence files (web-font licence confirmed, see
  `design-licensing`).
- Alt-text drafts and the intent note per page.
- Review the built pages at real widths and zoom levels; file differences
  as concrete issues.

## Quality bar

- [ ] Works from 320 px to wide screens with deliberate reflow.
- [ ] Text contrast AA; focus states visible; no text baked into images.
- [ ] Hero art keeps its focal point in every crop.
- [ ] Favicon legible at 16 px; share image legible as a thumbnail.
- [ ] Store badges official and unmodified.
- [ ] Every font and image licensed for web use and logged.

## Failure modes

- A desktop comp that the developer has to "make responsive".
- Giant uncompressed hero images; agree budgets early.
- Headline text inside a hero image (not translatable, not accessible).
- Favicon made by shrinking the full lockup.
- Web fonts used under a desktop-only licence.

## Documentation

Website visual work owes **reference** (page and component specs, asset
inventory, image sizes) and, if editors will add pages or images later, a
**how-to** ("How to add a news image that fits the site"). Notable design
decisions get an **explanation** page.
