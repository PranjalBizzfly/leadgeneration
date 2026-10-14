# Image prompt brief

Write one image-generation prompt per page. Each image will replace the framed illustration in that page's hero
(16:10, 1600×1000 WebP), so it must work as a wide, uncluttered photo.

## Read first
- The page's entry in `src/content/pages/*.ts`: its h1, intro, sections and example. The image must depict THIS page's actual subject.
- `src/content/plan.ts` for the page's audience.

## Output
A JSON file with an array of objects in page order:
```json
{
  "path": "/services/ai-lead-scoring",
  "file": "/images/pages/services--ai-lead-scoring.webp",
  "section": "Hero image (replaces framed illustration)",
  "scene": "One short line naming the scene, used to check for duplicates",
  "prompt": "…",
  "alt": "…"
}
```
`file`: `/images/pages/` + the path without its leading slash, with `/` replaced by `--` (use `home` for `/`) + `.webp`.

## Prompt rules
- 60–110 words. Concrete, visual and specific: who is shown, doing what, where, with what objects, composition, camera and lighting.
- **People:** realistic Indian or South/East Asian professionals of varied ages and genders, when people suit the topic. Natural expressions, not posed stock smiles, and no direct-to-camera grins.
- **Settings:** real Indian business contexts that fit the page, such as a Pune agency office, a Bengaluru SaaS team room, a Surat textile unit, a clinic reception in Chennai, a Delhi logistics yard or a Mumbai co-working space.
- **Screens:** laptops and monitors may show abstract dashboards, charts, maps with pins or kanban-style cards, but no readable text, numbers or logos. Say "screen shows abstract, unreadable UI".
- **Style:** premium editorial photography, natural light or soft practical lighting, a shallow depth of field, a 35mm or 50mm look, true-to-life colour with subtle cool indigo and violet accents where natural (to match the brand), and clean negative space on one side.
- End every prompt with this exact suffix: "Photorealistic, high detail, 16:10, no text, no letters, no logos, no watermarks, no brand names."
- For abstract topics (legal pages, metrics, formulas, glossary), use a tasteful realistic still life or workspace scene, such as hands on a laptop beside a printed checklist with an unreadable layout, or a whiteboard with abstract unreadable diagrams. Never use childish 3D icons, robots or glowing-brain clichés.
- **Variety is critical:** vary the people, setting, time of day, camera angle (over-the-shoulder, wide establishing, close-up of hands, top-down desk, candid meeting) and objects. Never reuse the same scene across pages. Industry pages must show that industry's real environment.
- Do not depict real people, real brands or recognisable trademarks.

## Alt text rules
- 8–20 words, describing what the image actually shows in plain language. Don't start with "Image of", and don't keyword-stuff.

## Negative prompt (applies to all images; listed once in the final document)
text, letters, numbers, watermark, logo, signature, cartoon, 3D render, illustration, CGI, plastic skin, extra fingers, distorted hands, oversaturated, stock-photo grin, futuristic hologram, robot, glowing brain
