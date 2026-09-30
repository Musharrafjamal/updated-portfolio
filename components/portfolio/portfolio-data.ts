import { projects } from "@/components/work/data";

export const selectedProjects = projects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, "0"),
  cover: `/projects/${project.slug}-cover${project.slug === "greenloom" ? "-v2" : ""}.webp`,
  category: [
    "AI study",
    "AI finance",
    "Open source",
    "Car care",
    "Organic commerce",
  ][index],
  shortDescription: [
    "Voice-led revision from notes, built for active recall.",
    "AI reconciliation connecting payments, payouts, and your books.",
    "Automated backups, encrypted storage, and database migrations.",
    "Book trusted mechanics for car repairs at your doorstep.",
    "An organic millet storefront, from farm to table.",
  ][index],
  highlights: [
    ["Voice-led active recall", "PDFs, notes & images", "Spaced repetition"],
    ["Payment reconciliation", "Exception review", "Audit-ready workflows"],
    [
      "PostgreSQL & MongoDB",
      "Encrypted S3 / R2 storage",
      "Scheduled backups & restores",
    ],
    ["Doorstep servicing", "Web, iOS & Android", "Booking & service discovery"],
    [
      "Organic millet products",
      "Farm-to-table sourcing",
      "End-to-end e-commerce",
    ],
  ][index],
}));

export type SelectedProject = (typeof selectedProjects)[number];

export const experience = [
  {
    company: "Greenmint Labs",
    role: "Senior Software Engineer",
    period: "Oct 2025 — Present",
    description:
      "Builds full-stack applications, owns MongoDB schemas and APIs, and delivers production features with a focus on performance, scale, and security.",
    tags: ["Full stack", "Architecture", "Product delivery"],
  },
  {
    company: "Code Query",
    role: "Team Lead",
    period: "Feb — Sep 2025",
    description:
      "Led a service-provider marketplace team, managing engineers and designers while building secure authentication and automating delivery workflows across the product.",
    tags: ["Team leadership", "Marketplace", "Automation"],
  },
  {
    company: "Ghosting Tech",
    role: "Software Development Engineer",
    period: "Feb 2024 — Jan 2025",
    description:
      "Shipped web applications and APIs, improved performance, integrated payments, and established an automated testing framework after progressing from intern to SDE.",
    tags: ["Web applications", "Performance", "Testing"],
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Interfaces with intention",
    label: "Frontend & design",
    description:
      "Responsive interfaces, considered down to the last interaction.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Figma"],
    detail: "Design through the final interaction.",
    shape: "interface",
  },
  {
    number: "02",
    title: "Products in your pocket",
    label: "Mobile engineering",
    description: "Native-feeling apps for everyday workflows.",
    tools: ["React Native", "Expo", "Firebase", "WebSockets"],
    detail: "Built for one hand.",
    shape: "mobile",
  },
  {
    number: "03",
    title: "Intelligence that helps",
    label: "AI & backend systems",
    description: "Useful AI, reliable APIs, and infrastructure that holds up.",
    tools: [
      "Node.js",
      "NestJS",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "Docker",
    ],
    detail: "Clear interfaces. Capable systems.",
    shape: "systems",
  },
];
