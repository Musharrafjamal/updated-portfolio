"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ContactSection from "./ContactSection";
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
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [openExperience, setOpenExperience] = useState<number | null>(0);
  const [project, setProject] = useState<SelectedProject | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  usePortfolioMotion(root, setActiveChapter);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const changeChapter = (index: number) =>
    window.dispatchEvent(
      new CustomEvent("portfolio:chapter", { detail: index }),
    );

  return (
    <div ref={root} className="portfolio" id="top">
      <div className="reading-progress" aria-hidden="true" />
      <div className="project-cursor" aria-hidden="true">
        <Arrow />
        <span>Explore</span>
      </div>
      <header className="site-header">
        <a
          href="#top"
          className="wordmark"
          aria-label="Musharraf Jamal, back to top"
        >
          <span className="monogram">
            m<span>.</span>
          </span>
          <span>
            Musharraf
            <br />
            Jamal
          </span>
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
        </nav>
        <div className="header-right">
          <IndiaTime />
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
            <span className="eyebrow">
              A mind for engineering.
              <br />
              An eye for design.
            </span>
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
              <Asterisk className="hero-asterisk" />
            </span>
          </h1>
          <div className="hero-portrait" data-hero-portrait>
            <div className="portrait-frame">
              <Image
                src="/images/musharraf-editorial.webp"
                alt="Editorial portrait of Musharraf Jamal"
                width={1024}
                height={1536}
                priority
                sizes="(max-width: 650px) 230px, 332px"
              />
              <span className="portrait-label">
                A little curious. Always building.
              </span>
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
                Complex ideas.
                <br />
                <em>Thoughtfully simple</em> products.
              </p>
              <span>
                From the first line of code to the last little detail.
              </span>
            </div>
            <a href="#work" className="hero-work-link" data-magnetic>
              <span>Explore selected work</span>
              <span className="round-arrow">
                <Arrow direction="down" />
              </span>
            </a>
          </div>
          <div className="hero-footnote" data-hero-reveal>
            <span>Independent thinking. Collaborative building.</span>
            <span>
              Scroll to discover <span aria-hidden="true">↓</span>
            </span>
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
              <h2 id="work-title" data-reveal>
                Less talk.
                <br />
                <em>More making.</em>
              </h2>
              <p data-reveal>
                A few things I’ve helped bring to life.
                <br />
                Built with care. Made for real people.
              </p>
            </div>
          </div>
          <div className="work-stage page-container">
            <div className="work-stage-viewport">
              {selectedProjects.slice(0, 3).map((item, index) => (
                <article
                  className={`project-chapter cover-${item.slug}`}
                  id={`project-${item.slug}`}
                  key={item.slug}
                >
                  <div className="project-copy">
                    <span className="eyebrow project-category">
                      {item.category}
                    </span>
                    <h3 className="project-title">
                      {item.title}
                      <span className="project-title-dot">.</span>
                    </h3>
                    <p className="project-summary">{item.shortDescription}</p>
                    <ul className="project-highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>
                          <span />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="project-explore text-button"
                      data-magnetic
                      onClick={() => setProject(item)}
                    >
                      Inside the project <Arrow />
                    </button>
                    <span className="project-role">{item.role}</span>
                  </div>
                  <button
                    className="project-visual"
                    data-project-hover
                    onClick={() => setProject(item)}
                    aria-label={`Explore ${item.title}`}
                  >
                    <div className="project-image-wrap">
                      <Image
                        className="project-cover"
                        src={item.cover}
                        alt={`${item.title} product cover — ${item.tagline}`}
                        width={1536}
                        height={1024}
                        sizes="(max-width: 800px) 100vw, 65vw"
                      />
                    </div>
                    <span className="project-image-label">
                      <span>{item.status}</span>
                      <Arrow />
                    </span>
                    <span className="project-visual-number" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </button>
                </article>
              ))}
            </div>
            <div className="chapter-toolbar">
              <div
                className="chapter-picker"
                role="group"
                aria-label="Choose featured project"
              >
                {selectedProjects.slice(0, 3).map((item, index) => (
                  <button
                    onClick={() => changeChapter(index)}
                    key={item.slug}
                    className={activeChapter === index ? "is-active" : ""}
                    aria-label={`Show ${item.title}`}
                    aria-current={activeChapter === index ? "true" : undefined}
                  >
                    <span className={`chapter-symbol symbol-${item.slug}`}>
                      {item.title.slice(0, 1)}
                    </span>
                    <span className="chapter-picker-name">{item.title}</span>
                  </button>
                ))}
              </div>
              <div className="chapter-position">
                <span aria-live="polite">0{activeChapter + 1}</span>
                <span className="chapter-track">
                  <span />
                </span>
                <span>03</span>
              </div>
              <span className="chapter-scroll-hint">
                Keep scrolling <Arrow direction="down" />
              </span>
            </div>
          </div>
          <div className="more-work page-container">
            <div className="more-work-label" data-reveal>
              <span className="eyebrow">And there’s more</span>
              <span>Different problems. The same care.</span>
            </div>
            <div className="supporting-projects">
              {selectedProjects.slice(3).map((item) => (
                <article
                  className="supporting-project"
                  key={item.slug}
                  data-reveal
                >
                  <button
                    className={`supporting-cover cover-${item.slug}`}
                    onClick={() => setProject(item)}
                    data-project-hover
                    aria-label={`Explore ${item.title}`}
                  >
                    <Image
                      src={item.cover}
                      alt={`${item.title} — ${item.tagline}`}
                      width={1536}
                      height={1024}
                      sizes="(max-width: 800px) 100vw, 50vw"
                    />
                    <span className="supporting-cover-arrow">
                      <Arrow />
                    </span>
                  </button>
                  <div className="supporting-project-meta">
                    <div>
                      <span className="eyebrow">{item.category}</span>
                      <h3>
                        <button onClick={() => setProject(item)}>
                          {item.title}
                          {item.titleAccent && ` ${item.titleAccent}`}
                          <Arrow />
                        </button>
                      </h3>
                    </div>
                    <span className="supporting-number">{item.number}</span>
                  </div>
                  <p>{item.shortDescription}</p>
                </article>
              ))}
            </div>
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
              <h2 id="about-title" data-reveal>
                Good products
                <br />
                start with
                <br />
                <em>good questions.</em>
              </h2>
              <div className="about-signature" data-reveal>
                <Asterisk />
                <span>
                  Curiosity is part
                  <br />
                  of the process.
                </span>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead" data-reveal>
                I’m Musharraf, an engineer with a designer’s instinct. I like
                making complicated things feel surprisingly simple.
              </p>
              <p data-reveal>
                For 2+ years, I’ve been building across web, mobile, and AI —
                connecting thoughtful interfaces with the systems that make them
                work. Sometimes that means founding a product. Sometimes it
                means helping a team ship something better.
              </p>
              <p data-reveal>
                I care about the whole experience: how it looks, how it works,
                and how it feels when someone actually uses it.
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
                  <span className="eyebrow">My approach</span>
                  <span>
                    Think clearly.
                    <br />
                    Build thoughtfully.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="capabilities-section page-container"
          aria-labelledby="capabilities-title"
        >
          <div className="capabilities-heading" data-reveal>
            <span className="eyebrow">What I bring to the table</span>
            <h2 id="capabilities-title">
              Different tools.
              <br />
              <em>One thoughtful approach.</em>
            </h2>
          </div>
          <div className="capabilities-layout">
            <div className="capability-list">
              {capabilities.map((item, index) => (
                <div
                  className={`capability-row ${activeCapability === index ? "is-active" : ""}`}
                  key={item.title}
                  data-reveal
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
              data-reveal
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
          <div className="experience-heading" data-reveal>
            <span className="eyebrow">
              <span className="section-number">03 /</span> Along the way
            </span>
            <h2 id="experience-title">
              Always building.
              <br />
              <em>Always growing.</em>
            </h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article
                className={`experience-item ${openExperience === index ? "is-open" : ""}`}
                key={item.company}
                data-reveal
              >
                <button
                  className="experience-trigger"
                  onClick={() =>
                    setOpenExperience(openExperience === index ? null : index)
                  }
                  aria-expanded={openExperience === index}
                  aria-controls={`experience-${index}`}
                >
                  <span className="experience-period">{item.period}</span>
                  <span className="experience-name">
                    <span>{item.role}</span>
                    <span>{item.company}</span>
                  </span>
                  <span className="experience-plus" aria-hidden="true" />
                </button>
                <div className="experience-expand" id={`experience-${index}`}>
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
        <span>Made with intent. And a little GSAP.</span>
        <a href="#top" className="back-top" data-magnetic>
          Back to top <Arrow />
        </a>
      </footer>
      <ProjectDialog project={project} onClose={() => setProject(null)} />
    </div>
  );
}
