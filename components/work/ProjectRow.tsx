"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useCursorEffect } from "@/hooks/useCursorEffect";
import type { Project } from "./data";

interface ProjectRowProps {
  project: Project;
  index: number;
  total: number;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ProjectRow = ({ project, index, total }: ProjectRowProps) => {
  const articleRef = useRef<HTMLElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const inView = useInView(articleRef, { once: true, margin: "-15%" });

  useCursorEffect({
    targetRef: linkRef,
    variant: "button",
    icon: project.cta.variant === "github" ? <Github /> : <ArrowUpRight />,
    text: project.cta.variant === "github" ? "View on GitHub" : "View Project",
  });

  const { title, titleAccent, tagline, description, role, status, accent, image, stack, platforms, cta } = project;
  const chips = stack ?? platforms ?? [];
  const chipsLabel = stack ? "Stack" : "Platforms";

  return (
    <motion.article
      ref={articleRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: EASE }}
      className="border-t border-border py-16 first:border-t-0 first:pt-0 md:py-24"
    >
      {/* head row: NN/total + role tag */}
      <div className="flex items-center justify-between gap-4 font-merienda text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
        <span className="text-foreground">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-2 text-right">
          <span
            aria-hidden
            className="h-2 w-2 shrink-0 rounded-full"
            style={{
              background: accent,
              boxShadow: `0 0 0 4px ${accent}30`,
            }}
          />
          {role.split(" · ")[0]} · {status}
        </span>
      </div>

      {/* image — natural-aspect with per-project colored glow */}
      <Link
        href={cta.href}
        ref={linkRef}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project`}
        className="group relative mt-6 block cursor-none overflow-hidden rounded-2xl bg-neutral-950 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 active:scale-[0.995] md:mt-8"
        style={
          {
            "--accent": accent,
            boxShadow:
              "0 1px 2px rgba(0,0,0,0.06), 0 18px 40px -8px color-mix(in srgb, var(--accent) 32%, transparent), 0 38px 90px -16px color-mix(in srgb, var(--accent) 22%, transparent)",
          } as React.CSSProperties
        }
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={index === 0}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="block h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
        />
      </Link>

      {/* title + tagline */}
      <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-8">
        <h3 className="font-moonWalk text-4xl font-bold leading-[1] tracking-tight md:text-5xl lg:text-6xl">
          {title}
          {titleAccent && <span className="font-moonWalk italic"> {titleAccent}</span>}
          <span className="text-muted-foreground/50">.</span>
        </h3>
        <p className="max-w-md text-base text-muted-foreground md:text-right md:text-lg">
          {tagline}
        </p>
      </div>

      {/* body: description + meta column */}
      <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 md:mt-8 md:grid-cols-2">
        <p className="text-[0.95rem] leading-relaxed text-foreground/85 md:text-base">
          {description}
        </p>
        <div className="flex flex-col gap-5">
          <MetaRow label="Role">
            <span className="text-sm">{role}</span>
          </MetaRow>
          {chips.length > 0 && (
            <MetaRow label={chipsLabel}>
              <Chips items={chips} />
            </MetaRow>
          )}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <StatusPill accent={accent}>{status}</StatusPill>
            <CTAButton {...cta} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectRow;

/* ============ inline helpers ============ */

const MetaRow = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-1.5">
    <span className="font-merienda text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground/70">
      {label}
    </span>
    {children}
  </div>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <span
        key={item}
        className="rounded-md border border-border bg-muted/40 px-2 py-0.5 font-merienda text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground"
      >
        {item}
      </span>
    ))}
  </div>
);

const StatusPill = ({ accent, children }: { accent: string; children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] text-muted-foreground">
    <span
      aria-hidden
      className="h-1.5 w-1.5 rounded-full"
      style={{ background: accent }}
    />
    {children}
  </span>
);

const CTAButton = ({ label, href, variant }: { label: string; href: string; variant: "primary" | "github" }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-300 hover:translate-x-0.5"
  >
    {variant === "github" ? <Github className="h-3.5 w-3.5" /> : null}
    {label}
    <ArrowUpRight className="h-3.5 w-3.5" />
  </Link>
);
