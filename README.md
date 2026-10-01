# Musharraf Jamal's portfolio

An editorial portfolio built with the existing Next.js 14, React 18, and Tailwind 3 stack. The redesign is published from `main`. The previous portfolio is preserved on the local and remote branch `codex/backup-main-2026-10-01` (commit `59ad014`).

## Local preview

```sh
npm ci
npm run dev
```

Open http://localhost:3030. For a production preview, run `npm run build` followed by `npm start` (also port 3030).

## Design and motion

The page combines Manrope with Instrument Serif, warm ivory surfaces, ink typography, and a lime accent. A connected MJ monogram with a lime folded corner and personal name wordmark identify the header, with matching SVG/PNG favicons and an Apple icon. Navigation stays in normal document flow. The résumé link uses the original portfolio's Google document. GSAP and ScrollTrigger drive scroll-linked masked headings, a kinetic hero exit, an about-text reading reveal, rotating craft orbits, and a marquee that responds to scroll velocity. The experience timeline fills as you scroll, with drawn dividers, masked roles, moving markers and a rotating emblem. Lenis provides smooth wheel scrolling while retaining native touch scrolling.

Revizer leads the gallery in an asymmetric 16:9 film/content row, followed by four projects in a 2×2 grid. The complete film remains visible beside top-aligned content. Clicking the video, titles, or descriptions opens project details; separate compact play/pause and mute controls manage playback. Playback pauses offscreen, in a hidden tab, or behind any project dialog, and preserves manual pause and mute choices.

Each card has a reversible scroll timeline: the complete composition lifts into place, a numbered curtain uncovers still artwork, and titles reveal through masks. Cards hold steady for reading before drifting upward on exit. Still covers keep their native 3:2 aspect ratio, including in the detail dialog. Artwork remains stationary on hover; only the outline and caption arrow respond. Keyboard focus settles and opens a card immediately. Short captions keep the main page focused, with detailed facts available in native project dialogs. Dialogs manage focus and pause background scrolling. Experience details and the contact form are always visible; capability panels support keyboard interaction. Reduced-motion preferences remove decorative animations.

## Sharing

Metadata uses the verified public domain `https://musharrafjamal.com`, including canonical and Open Graph URLs and a Twitter large-image card. The generated social banner is `public/musharraf-jamal-social-v1.jpg`, a 1200×630 JPEG with the portrait, MJ personal identity and domain. Its fresh URL avoids reusing the prior banner's cached URL. These assets and metadata become publicly available when this branch is deployed; actual link previews depend on each social platform's surfaces and caching. The 67 KB JPEG can also be shared directly.

The Vercel project `portfolio` serves `musharrafjamal.com` from its Production environment. `www.musharrafjamal.com` permanently redirects to the root address with HTTP 308. Cloudflare manages DNS with automatic TTL and DNS-only CNAME records for `@` and `www`, both targeting `1979cc5bbdd0f08c.vercel-dns-017.com`. Cloudflare flattens the root CNAME; Vercel manages HTTPS certificates. The robots file and sitemap use the same root domain.

## Where to edit

- `components/portfolio/Portfolio.tsx`: page sections and project dialogs.
- `components/portfolio/PersonalBrand.tsx`: reusable SVG mark and wordmark.
- `components/portfolio/ProjectFilm.tsx`: Revizer playback and visibility behavior.
- `app/layout.tsx`: domain, page metadata and social previews.
- `lib/site.ts`, `app/robots.ts`, and `app/sitemap.ts`: shared site identity and crawl URLs.
- `components/portfolio/portfolio-data.ts`: curated presentation, capabilities, and experience.
- `components/work/data.ts`: project facts, roles, technology, and destination URLs.
- `components/portfolio/usePortfolioMotion.ts`: GSAP/Lenis behavior and cleanup.
- `app/globals.css`: responsive page design and interaction states.
- `components/portfolio/ContactSection.tsx` and `contact.css`: contact experience.

The contact form validates input on the client and server and uses the existing Gmail SMTP action. It stays visible and retains your message if delivery fails.

## Contact email

Set the server-only `EMAIL_USER` and `EMAIL_PASS` variables in `.env.local` or your deployment environment. `.env.example` documents both keys. The local setup file has the public owner address filled in and leaves the password blank.

`EMAIL_PASS` must be a Google App Password for the account in `EMAIL_USER`. Eligible accounts require 2-Step Verification; follow [Google’s App Password instructions](https://support.google.com/accounts/answer/185833?hl=en). Enter the password privately in the local file or hosting provider’s secret settings. Restart the local Next.js server after changing `.env.local`; update/restart the deployment when changing hosted settings. Never put these credentials in a `NEXT_PUBLIC_` variable.

Without credentials, the form reports that email delivery is not connected and offers **Open email draft**, preserving the entered email and message in a draft addressed to `musharrafjamal08@gmail.com`. Opening a draft does not send it or show a success confirmation. The form only confirms success after SMTP accepts the message.

Input validation, configuration failures, delivery failures, and draft generation were verified with mocked transport. No external message was sent.

## Artwork

Five product covers are stored in `public/projects/`, and the new identity-preserving editorial portrait is `public/images/musharraf-editorial.webp`. All are optimized WebP assets. The original portrait and mockups remain available. Covers are art-directed product presentations; project dialogs link to the live/source products.

The built-in image generation tool created the artwork. Prompts and source notes are preserved in:

- `output/imagegen/prompts.md`
- `output/imagegen/secondary-prompts.md`
- `output/imagegen/portrait-prompt.md`
- `output/imagegen/greenloom-v2-prompt.md` (cleaner replacement Greenloom cover)
- `output/imagegen/greenloom-v3-prompt.md` (current cube logo and audit-trail presentation)
- `output/imagegen/musharraf-jamal-social-prompt.md` (current personal identity social sharing banner)

Project research corrected Greenloom's current payment-reconciliation positioning and visual identity from its [live website](https://greenloom.ai/en), Snaplock's documented PostgreSQL/MongoDB backup support, and Revizer's stack using the existing résumé.

## Performance and loading

- Active portrait and project artwork use compressed WebP sources, static imports, responsive `next/image` sizing, and embedded blur previews. Next negotiates AVIF/WebP, preserves image dimensions, and caches generated variants. Only the hero portrait is prioritized; dialog artwork loads on opening.
- The social banner is 67 KB (previously 1.09 MB). The portrait source is 35 KB (previously 122 KB).
- The Revizer film has a 4.3 MB 1080p/60 fps desktop version and a 2.5 MB 720p/30 fps mobile version, both with stereo audio, H.264/AAC, and fast-start metadata. Versioned URLs have immutable cache headers and support HTTP range streaming. The original source remains for compatibility.
- No video source is attached before the film enters view. Browsers reporting Data Saver or a 2G/3G connection, and reduced-motion users, load it only after pressing Play. A poster stays visible until a decoded frame is ready; delayed buffering shows a status indicator, and network failures expose Retry while project details remain available.
- Motion code is loaded separately from the initial interactive page bundle (106 KB, previously 156 KB). Delayed motion code does not replay the hero entrance over content already being read. Image-triggered scroll measurements are batched per animation frame.
- The form keeps its draft after network errors, detects offline submission, disables duplicate sends, and provides feedback after eight seconds of waiting. A network timeout never creates a false delivery confirmation.
- Original unused artwork and prior social banners remain available for compatibility and are not referenced by the current page.

## Checks

```sh
npx tsc --noEmit
npm run lint
npm run build
```

Browser verification covers desktop/mobile layouts, full-cover visibility and stationary hover, video autoplay/pause/resume, project modal and Escape behavior, mobile navigation/résumé, contact validation/focus and draft preservation, reduced-motion fallback, image loading, horizontal overflow, and console errors. Local screenshots are kept in the ignored `output/playwright/` folder.
