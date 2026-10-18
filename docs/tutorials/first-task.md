*Tutorial, for people new to the graphic-designer plugin: one guided first task, start to finish.*

# Check and fix a palette's contrast with the graphic designer

In this tutorial we will give the graphic designer a small colour palette,
have it measure every colour pair against WCAG 2.2 contrast, fix the pairs
that fail, and publish an approved-pairs reference page. It takes about
fifteen minutes. You need Claude Code and the plugin installed (see the
[README](../../README.md)).

## 1. Make a practice project

First, create an empty folder and two files in it.

`CLAUDE.md`:

```markdown
# Practice project
Project profile: docs/project-profile.md
```

`docs/project-profile.md`:

```markdown
# Project profile
- Design folder: design/
- Docs: docs/ (Diataxis: tutorials, how-to, reference, explanation)
- Graphic designer owns: design/, docs/reference/colour.md
```

Now create `design/tokens.json` with this palette:

```json
{
  "color": {
    "$type": "color",
    "surface":        { "$value": "#ffffff" },
    "text-primary":   { "$value": "#1a1a1a" },
    "text-secondary": { "$value": "#8a8a8a" },
    "brand":          { "$value": "#1c6bd9" },
    "outline":        { "$value": "#d0d0d0" }
  }
}
```

(Real tokens files use the full colour-object format; plain hex keeps this
lesson short.)

## 2. Ask for the check

Start Claude Code in the folder and type:

```
Use the graphic-designer agent. Following its contrast-and-legibility skill,
measure every pair in design/tokens.json used as: text-primary, text-secondary
and brand as text on surface; white text on brand; outline as an input-field
border on surface. Report a table with the ratio and pass/fail.
```

The agent first reads `CLAUDE.md` and the profile (its onboarding step).
Then the output should contain a table like this:

| Pair | Ratio | Needs | Result |
|---|---|---|---|
| text-primary on surface | 17.40:1 | 4.5:1 | pass |
| text-secondary on surface | 3.45:1 | 4.5:1 | fail |
| brand text on surface | 5.05:1 | 4.5:1 | pass |
| white text on brand | 5.05:1 | 4.5:1 | pass |
| outline border on surface | 1.54:1 | 3:1 | fail |

Notice that the border is held to 3:1, not 4.5:1: it is a UI component
boundary (WCAG 1.4.11), not text.

## 3. Fix the failures

Type:

```
Fix the two failures at the token level and re-measure.
```

The agent should darken `text-secondary` (for example to `#6b6b6b`, 5.33:1)
and `outline` (for example to `#8a8a8a`, 3.45:1), edit `design/tokens.json`,
and show the table again with every row passing. Open the file and notice
that only the two token values changed.

## 4. Write the reference page

Type:

```
Document the approved pairs as the skill says.
```

The agent writes `docs/reference/colour.md`: one line saying it is a
reference page, then the table of approved pairs with their ratios. Notice
that the page describes and does not instruct; that is what makes it
reference.

## What we did

We gave the graphic designer a palette, it measured every pair against the
right criterion, fixed failures at the token level, and recorded the result
as reference documentation. Every graphic-designer task follows the same
shape: onboard, do the work with a skill, check it, document it.

Next: [How to build a visual identity](../how-to/how-to-build-a-visual-identity.md),
or read [About the graphic designer role](../explanation/about-the-role.md).
