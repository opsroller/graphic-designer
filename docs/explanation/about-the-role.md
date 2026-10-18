*Explanation, for anyone who wants to understand the graphic designer role: what it is, where it stops, and why it works the way it does.*

# About the graphic designer role

## What the job is

A graphic designer decides how a product looks wherever people see it:
the icon on a home screen, the listing in a store, the screens inside the
product, the website and the marketing around it. O*NET's description of
the occupation still fits: research the audience, confer on layout, choose
type, size and arrangement, develop graphics for logos, products and
websites, and prepare files for production. What has changed is where the
work lands. Most of it now ships to screens with strict, frequently
changing platform rules, and it has to be accessible and legally clean.

In this plugin the role covers four areas: the **visual identity** and its
guidelines, **icons** (UI and app), **store and marketing art**, and the
**visual design of app UI and websites** that developers then build. It is
deliberately 2D.

## Why the boundaries sit where they do

- **Technical artist.** In-game 3D art, materials and shaders sit on the far
  side of an engineering pipeline with performance budgets. The graphic
  designer sets the palette and mood; the technical artist matches them in
  3D. Splitting here keeps each role's quality bar coherent.
- **UI developer and front-end web developer.** Designers who also
  implement tend to design what is easy to build; developers who also
  design tend to design what they can build quickly. Separating the roles,
  and joining them with a tokens file and specs, lets each be good at one
  thing while the handoff stays exact. Apple's HIG frames brand expression
  inside platform conventions ("express your brand with familiar
  components"); the designer chooses the expression, the developer keeps the
  behaviour native.
- **DevOps engineer.** Uploading is release work; the designer supplies
  assets and a manifest, so a store submission never depends on a design
  tool being open.

## Why the methods look like this

**Brief before pixels.** Practitioner guidance and senior job postings
alike stress turning strategic briefs into concepts and justifying
decisions to stakeholders. A brief is what makes a critique possible:
without it, choosing between directions is taste.

**Three directions, then one system.** Exploring several distinct ideas is
how experienced designers avoid polishing the first idea. Converging into
a *system* (lockups, palette roles, type scale, icon rules) is what senior
brand roles mean by "building brand systems, not merely working within
them."

**Tokens as the source of truth.** Values copied by hand drift. The W3C
Design Tokens Community Group format, stable since 2025.10, gives a
vendor-neutral file that design and code can both read. Two tiers,
primitives and semantic roles, make themes and dark mode a remapping
instead of a search-and-replace.

**Specs are looked up, never remembered.** Store and platform specs change
often: Apple's app-icon guidance changed in 2024, 2025 and 2026 (layered
icons, dark and tinted variants, then Liquid Glass refinements); Android
added themed monochrome icons; Steam tightened capsule content rules in
2022. A snapshot is useful as a map, but the official page on the day of
production is the spec.

**Accessibility is measured.** WCAG 2.2 gives numbers: 4.5:1 for text, 3:1
for large text and for icons, control boundaries and focus indicators, and
no meaning by colour alone. Games and apps are not always legally bound by
WCAG, but it is the most widely understood measurable baseline, so the role
uses it unless a project sets a stricter one. Measuring at the token level
means a fix propagates everywhere.

**Licences are about uses.** A font can be fine for a poster and forbidden
in an app bundle or a logo. The SIL Open Font License is popular in
products because it allows embedding and bundling, with the condition that
the licence travels with the font file. Creative Commons variants differ in
ways that matter for commercial products (NC, ND, SA). Recording each use
in the provenance log is cheaper than replacing a logo after launch.

**Documentation is part of the work.** Every workflow ends by writing the
Diataxis page its output owes: brand guidelines are reference, the reasons
for a direction are explanation, regenerating store art is a how-to. The
designer is the person who knows why a choice was made, so the designer
writes it down.

## Trade-offs

- **Platform fit versus brand distinctiveness.** Platform conventions make
  an app feel trustworthy; distinctiveness makes it findable. The role
  resolves this by putting distinctiveness in the icon, the palette, type
  and imagery, and keeping controls familiar.
- **Exploration versus speed.** Three directions cost time. For a small
  refresh the workflow accepts an already approved direction and skips
  exploration.
- **Exactness versus flexibility in handoff.** Specs plus an intent note
  let developers make good calls when reality differs, instead of either
  pixel-matching blindly or improvising.

## How the role grows

Career ladders published by companies such as GitLab, and senior postings,
show a consistent progression:

| Level | Typical scope |
|---|---|
| Junior | Produces assets inside an existing system: ads, slides, social art, screenshots, landing-page graphics. Needs review on craft and specs. |
| Intermediate | Owns pieces of the brand (logos, icons, colours, type) and larger deliverables such as a site redesign; works independently in small iterations. |
| Senior | Builds and evolves brand systems, sets visual direction, owns store-asset strategy and conversion, presents rationale to senior stakeholders, mentors. |
| Staff / lead | Works upstream where product direction is set, defines design frameworks and quality standards across products, represents design in leadership discussions. |

AIGA's work on the designer of the future adds the competencies that
separate the levels: systems thinking, keeping brand and message consistent
across channels, managing stakeholders with different agendas, and
accountability for the effects of the work, including representation and
accessibility.

## Further reading

- [Reference index](../reference/index.md) for the skills and workflows.
- [SOURCES.md](../../SOURCES.md) for the research behind this page.
