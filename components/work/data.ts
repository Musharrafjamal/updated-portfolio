export type ProjectRole = "Founder" | "Creator" | "Engineering";

export type CtaVariant = "primary" | "github";

export interface Project {
  slug: string;
  title: string;
  titleAccent?: string;
  tagline: string;
  description: string;
  role: string;
  roleKind: ProjectRole;
  status: string;
  accent: string;
  image: { src: string; width: number; height: number; alt: string };
  stack: string[] | null;
  platforms: string[] | null;
  cta: { label: string; href: string; variant: CtaVariant };
}

export const projects: Project[] = [
  {
    slug: "revizer",
    title: "Revizer",
    tagline: "AI Study Buddy for Active Recall",
    description:
      "Mobile-first AI study app that turns PDFs, notes, and images into voice-driven revision sessions using active recall and spaced repetition. Built for Indian exam aspirants — JEE, NEET, UPSC, CAT — with low-bandwidth audio caching, offline review, and TTS in regional voices.",
    role: "Solo founder · full-stack + AI engineer",
    roleKind: "Founder",
    status: "Live · Play Store",
    accent: "#F97316",
    image: {
      src: "/mockups/revizer.png",
      width: 1672,
      height: 941,
      alt: "Revizer",
    },
    stack: [
      "Expo / React Native",
      "NestJS",
      "MongoDB",
      "Redis",
      "Voice AI",
      "AWS S3",
    ],
    platforms: null,
    cta: {
      label: "Visit revizer.in",
      href: "https://revizer.in",
      variant: "primary",
    },
  },
  {
    slug: "greenloom",
    title: "Greenloom",
    tagline: "AI-Powered Payment Reconciliation",
    description:
      "AI-powered payment reconciliation that matches bank, gateway, and marketplace payouts to ERP records. Brings exception review, reconciliation workflows, and an audit trail into one workspace so finance teams can trace the transactions behind their books.",
    role: "Lead engineer · architect + full-stack",
    roleKind: "Engineering",
    status: "Early Access",
    accent: "#10B981",
    image: {
      src: "/mockups/greenloom.png",
      width: 1672,
      height: 941,
      alt: "Greenloom",
    },
    stack: [
      "Next.js 15",
      "Convex",
      "Clerk",
      "FastAPI · LangGraph",
      "SSE",
      "Docker",
    ],
    platforms: null,
    cta: {
      label: "Visit greenloom.ai",
      href: "https://greenloom.ai",
      variant: "primary",
    },
  },
  {
    slug: "snaplock",
    title: "Snaplock",
    tagline:
      "End-to-End Database Backup & Migration for Startups and Indie Devs",
    description:
      "Open-source platform for managing PostgreSQL and MongoDB backups. Supports restore and clone workflows, scheduled backups with retention policies, encrypted storage on AWS S3 or Cloudflare R2, and a unified health and cost dashboard across projects. Used by Greenmint Labs and individual developers.",
    role: "Creator · full-stack + infrastructure",
    roleKind: "Creator",
    status: "Production · Open Source",
    accent: "#3B82F6",
    image: {
      src: "/mockups/snaplock.png",
      width: 1672,
      height: 941,
      alt: "Snaplock",
    },
    stack: ["MongoDB", "PostgreSQL", "Encrypted backups", "S3 · R2"],
    platforms: null,
    cta: {
      label: "View on GitHub",
      href: "https://github.com/Musharrafjamal/snaplock",
      variant: "github",
    },
  },
  {
    slug: "mistribulao",
    title: "Mistribulao",
    tagline: "Your Digital Saathi for Doorstep Auto Care",
    description:
      "On-demand car servicing platform — certified mechanics arrive at your driveway for diagnostics, repairs, AC service, brakes, battery, and more. Live on Play Store and App Store with 500+ active mechanics and 25,000+ completed repairs across cities.",
    role: "Engineering contributor",
    roleKind: "Engineering",
    status: "Live · Web · iOS · Android",
    accent: "#F59E0B",
    image: {
      src: "/mockups/mistribulao.png",
      width: 1536,
      height: 1024,
      alt: "Mistribulao",
    },
    stack: null,
    platforms: ["Web", "iOS", "Android", "500+ mechanics", "25k+ repairs"],
    cta: {
      label: "Visit mistribulao.in",
      href: "https://mistribulao.in",
      variant: "primary",
    },
  },
  {
    slug: "millet",
    title: "Millet Fresh",
    titleAccent: "Field",
    tagline: "Premium Organic Millet Products",
    description:
      "E-commerce platform for 100% organic millet products — Little, Kodo, Foxtail, and Barnyard millets, flours, ghee, oils, and gift hampers. Farm-to-table sourcing with full ISO and organic certifications for both local and global markets.",
    role: "Sole engineer · full-stack · built end-to-end",
    roleKind: "Engineering",
    status: "Live e-commerce",
    accent: "#84CC16",
    image: {
      src: "/mockups/millet.png",
      width: 1672,
      height: 941,
      alt: "Millet Fresh Field",
    },
    stack: null,
    platforms: [
      "E-commerce",
      "Local + Global",
      "ISO certified",
      "Organic certified",
    ],
    cta: {
      label: "Visit freshfieldcrops.com",
      href: "https://www.freshfieldcrops.com",
      variant: "primary",
    },
  },
];
