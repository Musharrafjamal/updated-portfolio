---

## Image Assets

One hero image per project lives in `/public`:

- `/public/mockups/revizer.png` — Revizer
- `/public/mockups/greenloom.png` — Greenloom
- `/public/mockups/db-backup.png` — DB Backup Tool
- `/public/mockups/mistribulao.png` — Mistribulao
- `/public/mockups/millet.png` — Millet Fresh Field

---

## Projects (in the order they should appear)

### 1. Revizer
- **URL:** https://revizer.in
- **Tagline:** AI Study Buddy for Active Recall
- **Description:** Mobile-first AI study app that turns PDFs, notes, and images into voice-driven revision sessions using active recall and spaced repetition. Built for Indian exam aspirants (JEE, NEET, UPSC, CAT).
- **My Role:** Solo founder · full-stack + AI engineer
- **Stack:** Expo / React Native, Convex, voice AI (TTS + STT), Cloudflare R2
- **Status:** Live on Google Play Store
- **Image:** `/revizer.png`
- **CTA:** Visit site → revizer.in

### 2. Greenloom
- **URL:** https://greenloom.ai
- **Tagline:** AI ERP Agents That Actually Close the Loop
- **Description:** Pre-built AI agents (Accounting, HR, Procurement, Communications) wired into Odoo, Tally, Gmail, Outlook, and Calendar — with institutional memory that learns vendors, policies, and approval patterns over time.
- **My Role:** Solo founder · architect + full-stack engineer
- **Stack:** Next.js 15, Convex, Clerk, FastAPI + LangGraph, SSE streaming, Docker Compose
- **Status:** Early access
- **Image:** `/greenloom.png`
- **CTA:** Visit site → greenloom.ai

### 3. DB Backup Tool (Open Source)
- **URL:** https://github.com/Musharrafjamal
- **Tagline:** End-to-End Database Backup & Migration for Startups and Indie Devs
- **Description:** Open-source platform for managing database backups across MongoDB, PostgreSQL, MySQL, and Redis. Supports DB-to-DB migration, scheduled backups with N-day retention, encrypted push to AWS S3 / Cloudflare R2, and a unified cost + health dashboard across all client projects.
- **Used by:** Greenmint Labs (greenmintlabs.com) and individual developers
- **My Role:** Creator · full-stack + infrastructure
- **Status:** Production · Open Source
- **Image:** `/db-backup.png`
- **CTA:** View on GitHub

### 4. Mistribulao
- **URL:** https://mistribulao.in
- **Tagline:** Your Digital Saathi for Doorstep Auto Care
- **Description:** On-demand car servicing platform — certified mechanics arrive at your driveway for diagnostics, repairs, AC service, brakes, battery, and more. Live on Play Store and App Store with 500+ active mechanics and 25k+ completed repairs.
- **My Role:** _Engineering contributor — adjust to match your actual contribution_
- **Status:** Live · web + iOS + Android
- **Image:** `/mistribulao.png`
- **CTA:** Visit site → mistribulao.in

### 5. Millet Fresh Field
- **URL:** https://www.freshfieldcrops.com
- **Tagline:** Premium Organic Millet Products
- **Description:** E-commerce platform for 100% organic millet products — Little, Kodo, Foxtail, and Barnyard millets, flours, ghee, oils, and gift hampers. Farm-to-table sourcing with full ISO and organic certifications for local and global markets.
- **My Role:** _Engineering contributor — adjust to match your actual contribution_
- **Status:** Live e-commerce
- **Image:** `/millet-fresh-field.png`
- **CTA:** Visit site → freshfieldcrops.com

---

## Build Guidelines

**Ordering rationale:** Founder projects first (Revizer, Greenloom, DB Backup Tool — strongest signals of ownership and depth), client/contributor projects after (Mistribulao, Millet Fresh Field — show breadth and shipping ability).

**Per-project card should surface:**
- Hero image (full-bleed or contained, your call based on layout)
- Project name + tagline
- 2–3 line description
- Role badge (Founder / Creator / Engineering)
- Tech stack chips (where listed)
- Primary CTA (Visit live / GitHub)
- Status indicator (Live / Early Access / Open Source)

**Brand tone:** Senior software engineer + solo founder who ships. Confident, calm, technically grounded — not flashy. Prefer specific data ("500+ mechanics", "25k+ repairs", "12 projects backed up") over generic marketing language.

**Layout suggestions** (the agent can pick what fits the chosen design system):
- Vertical scroll with one project per viewport (storytelling) OR
- A 2-column grid with the founder projects spanning full-width and the contributor projects in compact cards
- Each card/section should let the hero image breathe — these images were crafted as the visual anchor.

**Constraints:**
- Don't auto-generate placeholder images — only use the 5 in `/public`.
- Don't invent project details beyond what's specified above.
- Keep copy tight; no marketing fluff or AI-flavored superlatives.