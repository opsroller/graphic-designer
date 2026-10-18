*How-to guide, for designers and developers who need to confirm a colour pair is accessible before using it.*

# How to check a colour pair before using it

This guide shows you how to confirm a text, icon or border colour meets
WCAG 2.2 contrast against its background.

1. Decide what the foreground is:
   - body text: needs 4.5:1;
   - large text (at least 24 px, or about 18.7 px bold): needs 3:1;
   - icon, input border, focus ring, chart line: needs 3:1.
2. Find both colours as tokens in the project's tokens file. If either is
   translucent, take the colour it composites to over the real background.
3. Ask the graphic designer:

   ```
   Using contrast-and-legibility, measure <foreground token> on <background token>
   in light and dark themes, for <body text | large text | icon | border>.
   ```

   or measure it with any contrast checker.
4. If text sits on an image or gradient, measure the lightest or darkest
   region the text can cover, not the average.
5. If it fails, pick a different step of the same ramp; do not invent a new
   colour. Re-measure every other pair that uses the changed token.
6. Add the passing pair and its ratio to the project's approved-pairs
   reference page.

If the information is shown by colour (a red error, a green success), also
add an icon, label or shape so it does not rely on colour alone.

See the [contrast-and-legibility reference](../reference/skill-contrast-and-legibility.md)
for the criteria and the formula.
