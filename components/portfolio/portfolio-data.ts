import { projects } from "@/components/work/data";

export const selectedProjects = projects.map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, "0"),
  cover: `/projects/${project.slug}-cover.webp`,
  category: [
    "AI learning · Mobile & web",
    "AI finance · Web platform",
    "Open source · Infrastructure",
    "On-demand services · Web & mobile",
    "Organic commerce · Web",
  ][index],
  shortDescription: [
    "A study companion that listens. Turn your notes into voice-led revision, built around active recall.",
    "From scattered payments to a clear picture. AI-powered reconciliation that connects payouts to the books.",
    "A calmer way to protect your data. Automated backups, encrypted storage, and restores in one place.",
    "Car care, without the detour. Bringing trusted mechanics and everyday repairs to your doorstep.",
    "Good food, closer to its roots. An organic millet storefront connecting the farm to the table.",
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
      "Engineering full-stack applications with a focus on performance, scale, and security. Owning the MongoDB schemas and APIs behind core business features, and working across the team to take new ideas into production.",
    tags: ["Full stack", "Architecture", "Product delivery"],
  },
  {
    company: "Code Query",
    role: "Team Lead",
    period: "Feb — Sep 2025",
    description:
      "Led end-to-end development of a service-provider marketplace. Managed engineers and designers, built secure authentication, and introduced automation across delivery workflows.",
    tags: ["Team leadership", "Marketplace", "Automation"],
  },
  {
    company: "Ghosting Tech",
    role: "Software Development Engineer",
    period: "Feb 2024 — Jan 2025",
    description:
      "Grew from intern to SDE, shipping responsive applications and REST APIs. Improved load times and report generation, integrated payments, and built an automated testing framework adopted by the team.",
    tags: ["Web applications", "Performance", "Testing"],
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Interfaces with intention",
    label: "Frontend & design",
    description:
      "Fast, responsive web experiences. Every layout, state, and small interaction considered.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Figma"],
    detail: "From the first wireframe to the smallest hover state.",
    shape: "interface",
  },
  {
    number: "02",
    title: "Products in your pocket",
    label: "Mobile engineering",
    description:
      "Native-feeling apps that make complex workflows feel natural, on the devices people use every day.",
    tools: ["React Native", "Expo", "Firebase", "WebSockets"],
    detail: "The same care, from a wide screen to one hand.",
    shape: "mobile",
  },
  {
    number: "03",
    title: "Intelligence that helps",
    label: "AI & backend systems",
    description:
      "Useful AI, reliable APIs, and thoughtful infrastructure. Built to solve the actual problem.",
    tools: [
      "Node.js",
      "NestJS",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "Docker",
    ],
    detail: "A clear interface. A capable system behind it.",
    shape: "systems",
  },
];
