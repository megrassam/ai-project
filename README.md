# Who checks the machine?

A plain-language website explaining artificial intelligence: what it is, its benefits, its risks (four real case studies), its electricity demand and possible futures.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content, written in semantic HTML |
| `styles.css` | Layout, colours, fonts and responsive design |
| `script.js` | Buttons that switch the fact / interpretation / prediction highlights on and off |
| `assets/how-ai-works.svg` | Diagram for desktop |
| `assets/how-ai-works-mobile.svg` | Vertical version of the diagram for phones |
| `assets/favicon.svg` | Browser tab icon |

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a "Skip to content" link
- Highlight types differ by colour **and** underline style (solid, dotted, wavy), plus hidden screen-reader labels
- Case studies use native `<details>` elements, usable by keyboard
- Visible focus outline, alt text on diagrams, reduced-motion support

## AI-use acknowledgement

I acknowledge the use of Claude by Anthropic (https://claude.ai) to find and summarise sources, draft the text and write the HTML, CSS and JavaScript. I checked each fact against its source, edited the content and tested the site. The final work is my responsibility.
