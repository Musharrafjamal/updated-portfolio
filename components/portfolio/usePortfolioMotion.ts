"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioMotion(
  root: RefObject<HTMLDivElement>,
  onChapterChange: (index: number) => void,
) {
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = gsap.matchMedia();
    const cleanups: (() => void)[] = [];
    const select = <T extends Element = HTMLElement>(selector: string) =>
      Array.from(element.querySelectorAll<T>(selector));
    const header = element.querySelector<HTMLElement>(".site-header");
    let lenis: Lenis | undefined;

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        lenis = new Lenis({
          duration: 1.05,
          smoothWheel: true,
          syncTouch: false,
          anchors: { offset: -105 },
          prevent: (node) => node.closest("dialog") !== null,
        });
        const activeLenis = lenis;
        activeLenis.on("scroll", ScrollTrigger.update);
        const tick = (time: number) => activeLenis.raf(time * 1000);
        gsap.ticker.add(tick);

        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(
            "[data-hero-line]",
            { yPercent: 112, duration: 1.25, stagger: 0.13 },
            0.1,
          )
          .from(
            "[data-hero-portrait]",
            { y: 50, rotate: 13, autoAlpha: 0, duration: 1.1 },
            0.4,
          )
          .from(
            ".hero-asterisk",
            { rotate: -85, opacity: 0, duration: 1.2 },
            0.3,
          )
          .from(
            "[data-hero-reveal]",
            { y: 16, opacity: 0, duration: 0.8, stagger: 0.09 },
            0.5,
          );

        select<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.from(item, {
            y: 32,
            autoAlpha: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 92%", once: true },
          });
        });

        const marquee = element.querySelector<HTMLElement>(".marquee-track");
        if (marquee) {
          const tween = gsap.to(marquee, {
            xPercent: -50,
            repeat: -1,
            duration: 40,
            ease: "none",
            paused: true,
          });
          ScrollTrigger.create({
            trigger: ".craft-marquee",
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => (self.isActive ? tween.play() : tween.pause()),
          });
        }

        const resizeObserver = new ResizeObserver(() => {
          window.clearTimeout(refreshTimer);
          refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 160);
        });
        let refreshTimer = 0;
        resizeObserver.observe(element.querySelector("main")!);
        const onDialog = (event: Event) => {
          if ((event.target as HTMLElement).tagName === "DIALOG") {
            if (element.querySelector("dialog[open]")) activeLenis.stop();
            else activeLenis.start();
          }
        };
        const dialogObserver = new MutationObserver(() => {
          if (element.querySelector("dialog[open]")) activeLenis.stop();
          else activeLenis.start();
        });
        const dialog = element.querySelector("dialog");
        if (dialog)
          dialogObserver.observe(dialog, {
            attributes: true,
            attributeFilter: ["open"],
          });
        element.addEventListener("close", onDialog, true);

        return () => {
          gsap.ticker.remove(tick);
          activeLenis.destroy();
          lenis = undefined;
          resizeObserver.disconnect();
          dialogObserver.disconnect();
          element.removeEventListener("close", onDialog, true);
          clearTimeout(refreshTimer);
        };
      },
      element,
    );

    media.add(
      "(min-width: 801px) and (min-height: 680px) and (prefers-reduced-motion: no-preference)",
      () => {
        const stage = element.querySelector<HTMLElement>(".work-stage")!;
        const chapters = select<HTMLElement>(".project-chapter");
        let current = 0;
        stage.classList.add("is-pinned");
        chapters.forEach((chapter, index) => {
          gsap.set(chapter, { autoAlpha: index === 0 ? 1 : 0 });
          chapter.inert = index !== 0;
          chapter.setAttribute("aria-hidden", String(index !== 0));
        });

        function showChapter(index: number) {
          if (index === current) return;
          const previous = chapters[current];
          const next = chapters[index];
          gsap.killTweensOf(chapters);
          chapters.forEach((chapter) => {
            if (chapter !== previous && chapter !== next)
              gsap.set(chapter, { autoAlpha: 0, y: 0 });
          });
          gsap.to(previous, {
            autoAlpha: 0,
            duration: 0.26,
            ease: "power2.out",
          });
          previous.inert = true;
          previous.setAttribute("aria-hidden", "true");
          gsap.fromTo(
            next,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              delay: 0.1,
            },
          );
          gsap.fromTo(
            next.querySelector(".project-image-wrap"),
            { scale: 1.07 },
            { scale: 1, duration: 1.1, ease: "power3.out", overwrite: "auto" },
          );
          next.inert = false;
          next.setAttribute("aria-hidden", "false");
          current = index;
          onChapterChange(index);
        }

        const trigger = ScrollTrigger.create({
          trigger: stage,
          start: "top 105px",
          end: () => `+=${window.innerHeight * 2.45}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              chapters.length - 1,
              Math.floor(self.progress * chapters.length),
            );
            showChapter(index);
            gsap.set(".chapter-track > span", { scaleX: self.progress });
          },
        });

        const jump = (event: Event) => {
          const index = Math.max(
            0,
            Math.min(
              chapters.length - 1,
              (event as CustomEvent<number>).detail,
            ),
          );
          const target =
            trigger.start +
            ((trigger.end - trigger.start) * (index + 0.12)) / chapters.length;
          if (lenis) lenis.scrollTo(target, { duration: 1 });
          else window.scrollTo({ top: target, behavior: "smooth" });
        };
        window.addEventListener("portfolio:chapter", jump);
        gsap.to(".hero-portrait", {
          y: -36,
          rotation: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-asterisk", {
          rotation: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        return () => {
          window.removeEventListener("portfolio:chapter", jump);
          stage.classList.remove("is-pinned");
          chapters.forEach((chapter) => {
            chapter.inert = false;
            chapter.removeAttribute("aria-hidden");
          });
          onChapterChange(0);
        };
      },
      element,
    );

    media.add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const remove: (() => void)[] = [];
        const portrait = element.querySelector<HTMLElement>(".portrait-frame")!;
        gsap.set(portrait, { transformPerspective: 900 });
        const portraitX = gsap.quickTo(portrait, "rotationX", {
          duration: 0.65,
          ease: "power3.out",
        });
        const portraitY = gsap.quickTo(portrait, "rotationY", {
          duration: 0.65,
          ease: "power3.out",
        });
        const tiltPortrait = (event: PointerEvent) => {
          const bounds = portrait.getBoundingClientRect();
          portraitX((0.5 - (event.clientY - bounds.top) / bounds.height) * 9);
          portraitY(((event.clientX - bounds.left) / bounds.width - 0.5) * 9);
        };
        const resetPortrait = () => {
          portraitX(0);
          portraitY(0);
        };
        portrait.addEventListener("pointermove", tiltPortrait);
        portrait.addEventListener("pointerleave", resetPortrait);
        remove.push(() => {
          portrait.removeEventListener("pointermove", tiltPortrait);
          portrait.removeEventListener("pointerleave", resetPortrait);
        });
        select<HTMLElement>("[data-magnetic]").forEach((item) => {
          const xTo = gsap.quickTo(item, "x", {
            duration: 0.45,
            ease: "power3.out",
          });
          const yTo = gsap.quickTo(item, "y", {
            duration: 0.45,
            ease: "power3.out",
          });
          const move = (event: PointerEvent) => {
            const bounds = item.getBoundingClientRect();
            xTo((event.clientX - bounds.left - bounds.width / 2) * 0.13);
            yTo((event.clientY - bounds.top - bounds.height / 2) * 0.13);
          };
          const leave = () => {
            xTo(0);
            yTo(0);
          };
          item.addEventListener("pointermove", move);
          item.addEventListener("pointerleave", leave);
          remove.push(() => {
            item.removeEventListener("pointermove", move);
            item.removeEventListener("pointerleave", leave);
          });
        });

        const cursor = element.querySelector<HTMLElement>(".project-cursor")!;
        gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0.8 });
        const xTo = gsap.quickTo(cursor, "x", {
          duration: 0.2,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(cursor, "y", {
          duration: 0.2,
          ease: "power3.out",
        });
        const moveCursor = (event: PointerEvent) => {
          xTo(event.clientX);
          yTo(event.clientY);
        };
        const show = (event: PointerEvent) => {
          gsap.set(cursor, { x: event.clientX, y: event.clientY });
          gsap.to(cursor, { autoAlpha: 1, scale: 1, duration: 0.2 });
        };
        const hide = () =>
          gsap.to(cursor, { autoAlpha: 0, scale: 0.8, duration: 0.16 });
        const hovered = select<HTMLElement>("[data-project-hover]");
        hovered.forEach((item) => {
          item.addEventListener("pointerenter", show);
          item.addEventListener("pointerleave", hide);
          item.addEventListener("click", hide);
        });
        window.addEventListener("pointermove", moveCursor);
        remove.push(() => {
          window.removeEventListener("pointermove", moveCursor);
          hovered.forEach((item) => {
            item.removeEventListener("pointerenter", show);
            item.removeEventListener("pointerleave", hide);
            item.removeEventListener("click", hide);
          });
        });
        return () => remove.forEach((cleanup) => cleanup());
      },
      element,
    );

    const updateHeader = () =>
      header?.classList.toggle("is-scrolled", window.scrollY > 25);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", updateHeader));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          select<HTMLAnchorElement>("[data-nav]").forEach((link) => {
            const active = link.dataset.nav === entry.target.id;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    select("#intro, #work, #about, #contact").forEach((section) =>
      observer.observe(section),
    );

    const context = gsap.context(() => {
      gsap.to(".reading-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, element);
    const imageLoad = () => ScrollTrigger.refresh();
    const images = select<HTMLImageElement>("img");
    images.forEach((image) => image.addEventListener("load", imageLoad));
    document.fonts.ready.then(() => {
      if (element.isConnected) ScrollTrigger.refresh();
    });

    return () => {
      media.revert();
      context.revert();
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      images.forEach((image) => image.removeEventListener("load", imageLoad));
    };
  }, [root, onChapterChange]);
}
