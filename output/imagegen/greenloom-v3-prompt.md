# Greenloom v3: source review and cover

Reviewed on 2026-10-01 (Asia/Calcutta) using the official website in a dedicated `greenloom-research` Playwright session and the web tool.

## Sources

- [Official homepage](https://greenloom.ai/en): daily reconciliation across bank statements, gateways, marketplaces and ERP records. Explains fees, tax and FX differences; keeps approval before posting and a timestamped audit trail.
- [Official FAQ](https://greenloom.ai/en#faq): QuickBooks, Xero and Qoyod are supported today; NetSuite/SAP Business One are pilots. Other ERPs use CSV/API bridges. Memory retains account mappings, tolerances and previously approved exceptions. Tax preparation exists, but filing remains with the person or accountant.
- `resume.md`, Greenloom project: multi-tenant dashboard and agent service, accounting workflows, company-specific knowledge search, Qdrant and Neo4j. Existing lead-engineer role and stack were preserved; resume-backed Qdrant/Neo4j added.

The website localizes currency and footer location to the visitor, so project copy avoids geographic claims. No team counts, financial amounts or performance statistics were added.

## Visual sources

The CURRENT real site uses a black geometric cube G mark, black/white interface, lime arrow buttons, blue/yellow transaction cards and a monospaced audit list. The old forest-green leaf mockup no longer matches this identity.

Live screenshots used as image-generation references:

- `output/playwright/greenloom-live-hero.png`
- `output/playwright/greenloom-live-audit.png`

The v3 cover is an art-directed source-informed browser mockup rather than a direct application screenshot. Its five illustrative audit rows condense the real website's matched, exception and pending states. The title, wordmark, cube mark, lime accents and audit-list treatment are informed by the live source. It includes no invented metrics or product modules.

## Output and code changes

- `public/projects/greenloom-cover-v3.webp`: 1536 × 1024, exact 3:2, 48,936 bytes. Built-in image generation; inspected visually. Converted only to WebP at quality 90 / method 6, without crop, resize or manual imagery edits.
- Generated PNG: `C:/Users/Musha/.codex/generated_images/01a0f2d1-0946-79b1-9b3e-4325f78f5fc5/exec-728fcd4a-f5d0-4f56-a51e-ac6c93cce6a2.png`.
- `components/work/data.ts`: Greenloom title/tagline, current product description, demo/trial status, current lime accent, v3 image metadata, resume-backed search/memory tools.
- `components/portfolio/portfolio-data.ts`: only Greenloom v3 mapping, short caption and highlights updated; other project content unchanged.

Visually verified the current cube branding, complete browser frame, 3:2 margins, clean readable typography and absence of invented numerical claims. Earlier assets remain unchanged.

## Built-in image-generation prompt

```text
Use case: ui-mockup.
Asset type: premium source-informed Greenloom portfolio project cover, EXACT LANDSCAPE 3:2, 1536 x 1024.
Primary request: Create an elegant highly legible browser-window presentation of the REAL current Greenloom visual identity and its actual live audit-trail component. Reference image 1 is the real live homepage captured from https://greenloom.ai/en, supplying the exact CURRENT black geometric cube G mark, plain Greenloom wordmark, black/white/lime design identity. Reference image 2 is the real audit-trail component screenshot from the same live website, supplying its minimal table/list UI and monospaced row typography. This is a restrained art-directed presentation of that source UI, not an invented ERP dashboard. IMPORTANT do NOT use a leaf logo, forest sidebar, fake charts, financial summary metrics, or the previous mockup identity.
Composition: one complete front-facing browser window centered in a landscape field with 8-10 percent generous safe margin on every side. No cropping. Premium flat product design, no perspective tilt, no physical monitor, no laptop, no stand, no architecture. A soft pale mint-lime background #DEF1CA makes the mostly ivory-and-black source window stand out. The browser has a slim dark-ink chrome header with tiny neutral controls and verified domain "greenloom.ai", a fine dark outline and very restrained soft shadow. Entire app window is visible, generously spaced.
Inside source window: top left small exact black geometric cube G logo and wordmark "Greenloom" on white as in reference 1; understated black pill at top right reads "Approve & post", with the source lime arrow-square visual. Large simple title "Audit trail". Small subtitle "Every decision, accounted for." Main source component is a beautifully proportioned warm-white list with a small upper label "GREENLOOM / AUDIT TRAIL", a right label "STATUS", horizontal hairline separators, monospaced dark text and understated colored status labels. Use only these five short source-grounded rows:
"Stripe payout" / "MATCHED"
"Chase statement" / "MATCHED"
"Fee above agreed rate" / "EXCEPTION"
"Awaiting approval" / "PENDING"
"Amazon payout" / "MATCHED"
Keep source screenshot's calm white list styling, charcoal row text, muted green MATCHED, muted coral EXCEPTION, grey PENDING. NO financial amounts, timestamps, numerical claims, performance metrics, statistics, graphs, sidebars, logos of payment companies, new integrations or extra modules. An elegantly small lime checkmark sits beside matched rows, no extra floating UI elements.
Visual hierarchy: readable large typography, generous row height, luxurious whitespace, exact aligned columns, beautifully clear simple finance interface. Think thoughtful current SaaS brand cover, visually calm, exceptionally polished, factual source-informed.
Constraints: maintain current Greenloom wordmark and geometric cube mark from the actual supplied homepage screenshot. Maximum five simple source-informed rows. No external floating transaction cards, no copied marketing paragraph, no customer count, no percentages, no made-up amounts, no decorative props, no leaf motif, no forest green background, no human characters, no watermark. All contents remain inside one fully visible browser window. Use the real current identity and audit-trail idea from references, rather than complex generated dashboard invention.
```
