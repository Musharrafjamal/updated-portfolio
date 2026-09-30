# Musharraf Jamal — portfolio

An editorial portfolio built with the existing Next.js 14, React 18, and Tailwind 3 stack. The redesign lives on `codex/portfolio-reimagined`; `main` retains the previous portfolio.

## Local preview

```sh
npm ci
npm run dev
```

Open http://localhost:3030. For a production preview, run `npm run build` followed by `npm start` (also port 3030).

## Design and motion

The page combines Manrope with Instrument Serif, warm ivory surfaces, ink typography, and a lime accent. GSAP and ScrollTrigger drive masked line reveals, a kinetic hero exit, gallery-card entrances, an about-text reading reveal, rotating craft orbits, drawn experience dividers, and a marquee that responds to scroll velocity. Lenis provides smooth wheel scrolling while retaining native touch scrolling.

The gallery presents two featured projects above three smaller projects, then stacks on mobile. Every cover keeps its native 3:2 aspect ratio, including in the detail dialog. Artwork remains stationary on hover; only the outline and caption arrow respond. Short captions keep the main page focused, with detailed facts available in the native project dialogs. Dialogs manage focus and pause background scrolling. Experience details and the contact form are always visible; capability panels support keyboard interaction. Reduced-motion preferences remove decorative animations.

## Where to edit

- `components/portfolio/Portfolio.tsx`: page sections and project dialogs.
- `components/portfolio/portfolio-data.ts`: curated presentation, capabilities, and experience.
- `components/work/data.ts`: project facts, roles, technology, and destination URLs.
- `components/portfolio/usePortfolioMotion.ts`: GSAP/Lenis behavior and cleanup.
- `app/globals.css`: responsive page design and interaction states.
- `components/portfolio/ContactSection.tsx` and `contact.css`: contact experience.

The contact form uses the existing SMTP server action. Configure the variables in `.env.example` in `.env.local` or the deployment environment. Client and server both validate input; missing credentials produce an actionable email fallback. No external email was sent during verification.

## Artwork

Five product covers are stored in `public/projects/`, and the new identity-preserving editorial portrait is `public/images/musharraf-editorial.webp`. All are optimized WebP assets. The original portrait and mockups remain available. Covers are art-directed product presentations; project dialogs link to the live/source products.

The built-in image generation tool created the artwork. Prompts and source notes are preserved in:

- `output/imagegen/prompts.md`
- `output/imagegen/secondary-prompts.md`
- `output/imagegen/portrait-prompt.md`
- `output/imagegen/greenloom-v2-prompt.md` (cleaner replacement Greenloom cover)

Project research corrected Greenloom's current payment-reconciliation positioning, Snaplock's documented PostgreSQL/MongoDB backup support, and Revizer's stack using the existing résumé.

## Checks

```sh
npx tsc --noEmit
npm run lint
npm run build
```

Browser verification covers desktop/mobile layouts, full-cover visibility and stationary hover, project modal and Escape behavior, mobile navigation, contact validation/focus, reduced-motion fallback, image loading, horizontal overflow, and console errors. Local screenshots are kept in the ignored `output/playwright/` folder.
