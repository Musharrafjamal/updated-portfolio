"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ContactSection from "./ContactSection";
import SharcodeBrand from "./SharcodeBrand";
import ProjectFilm from "./ProjectFilm";
import {
  capabilities,
  experience,
  selectedProjects,
  type SelectedProject,
} from "./portfolio-data";
import { usePortfolioMotion } from "./usePortfolioMotion";

export function Arrow({
  className = "",
  direction = "up",
}: {
  className?: string;
  direction?: "up" | "down";
}) {
  return (
    <svg
      className={`arrow-icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={
          direction === "down"
            ? "M12 4v16m-7-7 7 7 7-7"
            : "M5 19 19 5M5 5h14v14"
        }
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 5v90M5 50h90M18 18l64 64M18 82l64-64"
        stroke="currentColor"
        strokeWidth="14"
      />
    </svg>
  );
}

function IndiaTime() {
  const [time, setTime] = useState("INDIA · IST");
  useEffect(() => {
    const update = () =>
      setTime(
        `INDIA · ${new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date())}`,
      );
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  return <span className="local-time">{time}</span>;
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: SelectedProject | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) {
      ref.current?.close();
      return;
    }
    const previousOverflow = document.body.style.overflow;
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      data-lenis-prevent
    >
      {project && (
        <div className="project-dialog-content">
          <button
            className="dialog-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <span /> <span />
          </button>
          <div className={`dialog-cover cover-${project.slug}`}>
            <Image
              src={project.cover}
              quality={90}
              alt={`${project.title} — editorial product presentation`}
              width={1536}
              height={1024}
              sizes="(max-width: 800px) 100vw, 850px"
            />
          </div>
          <div className="dialog-copy">
            <span className="eyebrow">{project.category}</span>
            <h2 id="project-dialog-title">
              {project.title}
              {project.titleAccent && ` ${project.titleAccent}`}
            </h2>
            <p className="dialog-intro">{project.shortDescription}</p>
            <p>{project.description}</p>
            <div className="dialog-facts">
              <div>
                <span className="eyebrow">My contribution</span>
                <p>{project.role}</p>
              </div>
              <div>
                <span className="eyebrow">Project status</span>
                <p>{project.status}</p>
              </div>
            </div>
            <div className="project-tags">
              {(project.stack || project.highlights).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              href={project.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button ink-button"
            >
              {project.cta.label}
              <Arrow />
            </a>
            <p className="cover-caption">
              Cover art inspired by the product. Explore the live project for
              the actual experience.
            </p>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  const [activeCapability, setActiveCapability] = useState(0);
  const [project, setProject] = useState<SelectedProject | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  usePortfolioMotion(root);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div ref={root} className="portfolio" id="top">
      <div className="reading-progress" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Sharcode, back to top">
          <SharcodeBrand />
        </a>
        <nav
          id="main-navigation"
          className={`site-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {[
            ["Work", "work"],
            ["About", "about"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a
              href={`#${id}`}
              key={id}
              onClick={() => setMenuOpen(false)}
              data-nav={id}
            >
              {label}
              <span className="nav-dot" />
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1kAhpCs_0WL15mLLamYSsPfBZD_IMOBhNA_u8EWOQg6Y/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            Résumé <Arrow />
          </a>
        </nav>
        <div className="header-right">
          <IndiaTime />
          <a
            href="https://docs.google.com/document/d/1kAhpCs_0WL15mLLamYSsPfBZD_IMOBhNA_u8EWOQg6Y/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="header-resume"
          >
            Résumé <Arrow />
          </a>
          <a href="#contact" className="header-contact" data-magnetic>
            Let’s talk <Arrow />
          </a>
        </div>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section
          id="intro"
          className="hero page-container"
          aria-labelledby="hero-title"
        >
          <div className="hero-kicker" data-hero-reveal>
            <span className="eyebrow">Engineer & designer</span>
            <span className="hero-occupation">
              Senior software engineer
              <br />
              <span>Full stack · AI · Design</span>
            </span>
          </div>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-line">
              <span data-hero-line>Musharraf</span>
            </span>
            <span className="hero-line second-line">
              <span data-hero-line>
                Jamal<span className="name-period">.</span>
              </span>
              <span className="hero-asterisk-orbit" aria-hidden="true">
                <Asterisk className="hero-asterisk" />
              </span>
            </span>
          </h1>
          <div className="hero-portrait" data-hero-portrait>
            <div className="portrait-reveal">
              <div className="portrait-frame">
                <Image
                  src="/images/musharraf-editorial.webp"
                  alt="Editorial portrait of Musharraf Jamal"
                  width={1024}
                  height={1536}
                  priority
                  sizes="(max-width: 650px) 230px, 332px"
                />
                <span className="portrait-label">Always building.</span>
              </div>
            </div>
            <span className="portrait-note">
              the human
              <br />
              behind the code{" "}
              <svg viewBox="0 0 80 45" aria-hidden="true">
                <path
                  d="M2 3c20 25 43 30 65 17m-15-2 15 2-4 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </div>
          <div className="hero-bottom" data-hero-reveal>
            <div className="hero-intro">
              <p>
                Engineer by trade.
                <br />
                <em>Designer at heart.</em>
              </p>
            </div>
            <a href="#work" className="hero-work-link" data-magnetic>
              <span>Selected work</span>
              <span className="round-arrow">
                <Arrow direction="down" />
              </span>
            </a>
          </div>
        </section>

        <section
          id="work"
          className="work-section"
          aria-labelledby="work-title"
        >
          <div className="section-heading page-container">
            <span className="eyebrow" data-reveal>
              <span className="section-number">01 /</span> Selected work
            </span>
            <div className="section-heading-row">
              <h2
                id="work-title"
                aria-label="Made with care."
                data-motion-heading
              >
                <span className="motion-line">
                  <span>Made with</span>
                </span>
                <span className="motion-line">
                  <em>care.</em>
                </span>
              </h2>
              <span className="work-index" data-reveal>
                {String(selectedProjects.length).padStart(2, "0")} PROJECTS
              </span>
            </div>
          </div>
          <div className="project-gallery page-container">
            {selectedProjects.map((item) => (
              <article
                className={`project-card cover-${item.slug}`}
                key={item.slug}
                data-project-reveal
              >
                <div className="project-scroll-scene">
                  {item.slug === "revizer" ? (
                    <ProjectFilm />
                  ) : (
                    <button
                      className="project-media"
                      onClick={() => setProject(item)}
                      aria-label={`Explore ${item.title}`}
                    >
                      <Image
                        src={item.cover}
                        alt={`${item.title} — ${item.tagline}`}
                        width={1536}
                        height={1024}
                        quality={90}
                        sizes="(max-width: 700px) 100vw, 50vw"
                      />
                      <span className="project-curtain" aria-hidden="true">
                        <Asterisk />
                        <span>{item.number}</span>
                      </span>
                    </button>
                  )}
                  <div className="project-caption">
                    <span className="project-caption-rule" aria-hidden="true" />
                    <div className="project-card-meta">
                      <span>
                        {item.number} / {item.category}
                      </span>
                    </div>
                    <div className="project-name-row">
                      <h3>
                        <span>
                          {item.title}
                          {item.titleAccent && ` ${item.titleAccent}`}
                        </span>
                      </h3>
                      <button
                        className="project-open"
                        onClick={() => setProject(item)}
                        aria-label={`Read about ${item.title}`}
                      >
                        <Arrow />
                      </button>
                    </div>
                    <p>{item.shortDescription}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="craft-marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1, 2, 3].map((i) => (
              <span key={i}>
                Code with purpose <Asterisk /> Design with feeling <Asterisk />
              </span>
            ))}
          </div>
        </div>

        <section
          id="about"
          className="about-section page-container"
          aria-labelledby="about-title"
        >
          <span className="eyebrow" data-reveal>
            <span className="section-number">02 /</span> The person & the
            process
          </span>
          <div className="about-grid">
            <div className="about-heading">
              <h2
                id="about-title"
                aria-label="Code. Craft. Curiosity."
                data-motion-heading
              >
                <span className="motion-line">
                  <span>Code. Craft.</span>
                </span>
                <span className="motion-line">
                  <em>Curiosity.</em>
                </span>
              </h2>
              <div className="about-signature" data-reveal>
                <Asterisk />
                <span>From idea to interaction.</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead" data-reading-reveal>
                <span className="sr-only">
                  I build thoughtful digital products, from first idea to final
                  interaction.
                </span>
                {"I build thoughtful digital products, from first idea to final interaction."
                  .split(" ")
                  .map((word, index) => (
                    <span
                      className="reading-word"
                      aria-hidden="true"
                      key={`${word}-${index}`}
                    >
                      {word}{" "}
                    </span>
                  ))}
              </p>
              <div className="about-facts" data-reveal>
                <div>
                  <span className="eyebrow">Currently</span>
                  <span>
                    Senior Software Engineer
                    <br />
                    at Greenmint Labs
                  </span>
                </div>
                <div>
                  <span className="eyebrow">Experience</span>
                  <span>2+ years building products</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="capabilities-section page-container"
          aria-labelledby="capabilities-title"
        >
          <div className="capabilities-heading">
            <span className="eyebrow" data-reveal>
              What I bring to the table
            </span>
            <h2
              id="capabilities-title"
              aria-label="Different tools. One thoughtful approach."
              data-motion-heading
            >
              <span className="motion-line">
                <span>Different tools.</span>
              </span>
              <span className="motion-line">
                <em>One thoughtful approach.</em>
              </span>
            </h2>
          </div>
          <div className="capabilities-layout">
            <div className="capability-list">
              {capabilities.map((item, index) => (
                <div
                  className={`capability-row ${activeCapability === index ? "is-active" : ""}`}
                  key={item.title}
                  data-capability-reveal
                >
                  <button
                    onClick={() => setActiveCapability(index)}
                    onMouseEnter={() => setActiveCapability(index)}
                    aria-expanded={activeCapability === index}
                    aria-controls={`capability-detail-${index}`}
                  >
                    <span className="capability-number">{item.number}</span>
                    <span>
                      <span className="eyebrow">{item.label}</span>
                      <span className="capability-title">{item.title}</span>
                    </span>
                    <Arrow />
                  </button>
                  <div
                    className="capability-expand"
                    id={`capability-detail-${index}`}
                  >
                    <div>
                      <p>{item.description}</p>
                      <div className="tool-tags">
                        {item.tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`craft-object craft-object-${capabilities[activeCapability].shape}`}
              data-object-reveal
              aria-hidden="true"
            >
              <div className="object-grid" />
              <div className="object-orbit orbit-one" />
              <div className="object-orbit orbit-two" />
              <div className="object-window">
                <div className="object-window-top">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="object-content">
                  <Asterisk />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="object-label">
                <span className="eyebrow">Craft, in every layer</span>
                <p>{capabilities[activeCapability].detail}</p>
              </div>
              <span className="object-coordinate">
                [ {capabilities[activeCapability].number} : 03 ]
              </span>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="experience-section page-container"
          aria-labelledby="experience-title"
        >
          <div className="experience-heading">
            <span className="eyebrow" data-reveal>
              <span className="section-number">03 /</span> Along the way
            </span>
            <div className="experience-title-row">
              <h2
                id="experience-title"
                aria-label="Always building. Always growing."
                data-motion-heading
              >
                <span className="motion-line">
                  <span>Always building.</span>
                </span>
                <span className="motion-line">
                  <em>Always growing.</em>
                </span>
              </h2>
              <div className="experience-emblem" aria-hidden="true">
                <span />
                <Asterisk />
              </div>
            </div>
          </div>
          <div className="experience-list">
            <div className="experience-spine" aria-hidden="true">
              <span />
            </div>
            {experience.map((item, index) => (
              <article
                className="experience-item"
                key={item.company}
                data-experience-reveal
              >
                <span className="experience-node" aria-hidden="true" />
                <div className="experience-trigger">
                  <span className="experience-period">{item.period}</span>
                  <span className="experience-name">
                    <span className="experience-role">
                      <span>{item.role}</span>
                    </span>
                    <span className="experience-company">
                      <span>{item.company}</span>
                    </span>
                  </span>
                  <span className="experience-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <div className="experience-detail">
                  <div>
                    <p>{item.description}</p>
                    <div className="tool-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <footer className="site-footer page-container">
        <span>Built by Musharraf.</span>
        <a href="#top" className="back-top" data-magnetic>
          Back to top <Arrow />
        </a>
      </footer>
      <ProjectDialog project={project} onClose={() => setProject(null)} />
    </div>
  );
}
