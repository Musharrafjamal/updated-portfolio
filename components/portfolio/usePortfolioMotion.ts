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
        const preferenceCleanups: (() => void)[] = [];
        lenis = new Lenis({
          duration: 1.25,
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
            ".portrait-reveal",
            { y: 85, rotate: 16, scale: 0.82, autoAlpha: 0, duration: 1.4 },
            0.4,
          )
          .from(
            ".hero-asterisk",
            { rotate: -160, scale: 0.65, opacity: 0, duration: 1.4 },
            0.3,
          )
          .from(
            "[data-hero-reveal]",
            { y: 35, opacity: 0, duration: 1, stagger: 0.12 },
            0.5,
          );

        select<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.from(item, {
            y: 65,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        });

        // The masks keep large typography crisp while each line travels into view.
        select<HTMLElement>("[data-motion-heading]").forEach((heading) => {
          gsap.from(heading.querySelectorAll(".motion-line > *"), {
            yPercent: 125,
            rotate: 4,
            duration: 1.25,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.fromTo(
          "[data-reading-reveal] .reading-word",
          {
            color: "#727967",
          },
          {
            color: "#20231f",
            stagger: 0.12,
            duration: 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-reading-reveal]",
              start: "top 82%",
              end: "bottom 48%",
              scrub: 0.6,
            },
          },
        );

        select<HTMLElement>("[data-project-reveal]").forEach((item, index) => {
          const cover = item.querySelector(".supporting-cover");
          gsap.from(cover, {
            clipPath: "inset(18% 0% 82% 0% round 12px)",
            y: 90,
            rotate: index % 2 ? 4 : -4,
            duration: 1.3,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          });
          gsap.from(
            item.querySelectorAll(".supporting-project-meta, :scope > p"),
            {
              y: 40,
              opacity: 0,
              stagger: 0.12,
              duration: 0.9,
              delay: 0.35,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
          gsap.fromTo(
            item.querySelector(".supporting-image-wrap"),
            {
              yPercent: -7,
              scale: 1.26,
            },
            {
              yPercent: 7,
              scale: 1.18,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });

        select<HTMLElement>("[data-capability-reveal]").forEach(
          (item, index) => {
            gsap.from(item, {
              x: -70,
              opacity: 0,
              duration: 1,
              delay: index * 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            });
          },
        );

        const object = element.querySelector<HTMLElement>(".craft-object");
        if (object) {
          gsap.from(object, {
            y: 110,
            rotation: 9,
            scale: 0.85,
            ease: "none",
            scrollTrigger: {
              trigger: object,
              start: "top 95%",
              end: "top 38%",
              scrub: 1,
            },
          });
          [".orbit-one", ".orbit-two"].forEach((selector, index) => {
            gsap.to(object.querySelector(selector), {
              rotation: index ? -220 : 280,
              ease: "none",
              scrollTrigger: {
                trigger: object,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            });
          });
          gsap.to(object.querySelector(".object-grid"), {
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: object,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
          const capabilityObserver = new MutationObserver(() => {
            gsap.fromTo(
              object.querySelector(".object-label p"),
              { y: 18, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.45,
                ease: "power3.out",
                overwrite: true,
              },
            );
          });
          capabilityObserver.observe(object, {
            attributes: true,
            attributeFilter: ["class"],
          });
          preferenceCleanups.push(() => {
            capabilityObserver.disconnect();
            const label = object.querySelector(".object-label p");
            gsap.killTweensOf(label);
            gsap.set(label, { clearProps: "transform,opacity,visibility" });
          });
        }

        select<HTMLElement>("[data-experience-reveal]").forEach((item) => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
          timeline
            .fromTo(
              item,
              { "--line-progress": 0 },
              { "--line-progress": 1, duration: 0.9, ease: "power3.inOut" },
            )
            .from(
              item.querySelectorAll(
                ".experience-period, .experience-name, .experience-index, .experience-detail",
              ),
              {
                y: 55,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.09,
                ease: "power4.out",
              },
              0.1,
            );
        });

        const marquee = element.querySelector<HTMLElement>(".marquee-track");
        if (marquee) {
          const tween = gsap.to(marquee, {
            xPercent: -50,
            repeat: -1,
            duration: 26,
            ease: "none",
            paused: true,
          });
          ScrollTrigger.create({
            trigger: ".craft-marquee",
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => (self.isActive ? tween.play() : tween.pause()),
            onUpdate: (self) => {
              gsap.to(tween, {
                timeScale: 1 + Math.min(Math.abs(self.getVelocity()) / 550, 3),
                duration: 0.5,
                overwrite: true,
              });
            },
          });
          gsap.fromTo(
            ".craft-marquee",
            { rotation: -4, scale: 1.08 },
            {
              rotation: 3,
              scale: 1.08,
              ease: "none",
              scrollTrigger: {
                trigger: ".craft-marquee",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            },
          );
          gsap.to(".marquee-track svg", {
            rotation: 180,
            ease: "none",
            scrollTrigger: {
              trigger: ".craft-marquee",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Contact stays usable throughout its entrance; only its framing moves.
        const contact = element.querySelector<HTMLElement>("#contact");
        if (contact) {
          gsap.from(".contact-talk-button", {
            rotation: -100,
            scale: 0.65,
            duration: 1.3,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: ".contact-heading-row",
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
          gsap.from("[data-contact-field]", {
            y: 55,
            duration: 1,
            stagger: 0.13,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".contact-form-panel",
              start: "top 89%",
              toggleActions: "play none none reverse",
            },
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
          preferenceCleanups.forEach((cleanup) => cleanup());
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
          gsap.set(chapter, {
            autoAlpha: index === 0 ? 1 : 0,
            zIndex: index + 1,
          });
          chapter.inert = index !== 0;
          chapter.setAttribute("aria-hidden", String(index !== 0));
        });

        function updateAccessibleChapter(index: number) {
          if (index === current) return;
          chapters.forEach((chapter, chapterIndex) => {
            chapter.inert = chapterIndex !== index;
            chapter.setAttribute("aria-hidden", String(chapterIndex !== index));
          });
          current = index;
          onChapterChange(index);
        }

        // One reversible timeline owns every chapter transition, so fast scrolling
        // and project navigation cannot leave overlapping entrance tweens behind.
        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: stage,
            start: "top 105px",
            end: () => `+=${window.innerHeight * 3.4}`,
            pin: true,
            scrub: 0.85,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(stage.querySelector(".chapter-track > span"), {
                scaleX: self.progress,
              });
            },
          },
        });
        const sceneStarts = [0, 1.85, 3.7];
        const transitions = [1.1, 2.95];
        chapters.forEach((chapter, index) => {
          timeline.fromTo(
            chapter.querySelector(".project-image-wrap"),
            {
              scale: 1.18,
              yPercent: -3,
            },
            {
              scale: 1.08,
              yPercent: 3,
              duration: 1.85,
              ease: "none",
            },
            index ? transitions[index - 1] : 0,
          );
          if (!index) return;
          const previous = chapters[index - 1];
          const at = transitions[index - 1];
          timeline
            .set(chapter, { autoAlpha: 1 }, at)
            .fromTo(
              previous.querySelector(".project-copy"),
              { clipPath: "inset(0% 0% 0% 0%)" },
              {
                clipPath: "inset(0% 0% 100% 0%)",
                duration: 0.65,
                immediateRender: false,
              },
              at,
            )
            .fromTo(
              chapter.querySelector(".project-copy"),
              {
                clipPath: "inset(100% 0% 0% 0%)",
              },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.8,
              },
              at + 0.25,
            )
            .fromTo(
              previous.querySelectorAll(".project-copy > *"),
              { y: 0, opacity: 1 },
              {
                y: -75,
                opacity: 0,
                duration: 0.55,
                stagger: 0.035,
                ease: "power3.in",
                immediateRender: false,
              },
              at,
            )
            .fromTo(
              previous.querySelector(".project-visual"),
              {
                clipPath: "inset(0% 0% 0% 0% round 12px)",
                yPercent: 0,
                rotation: 0,
              },
              {
                clipPath: "inset(0% 0% 100% 0% round 12px)",
                yPercent: -12,
                rotation: -3,
                duration: 0.85,
                immediateRender: false,
              },
              at,
            )
            .fromTo(
              chapter.querySelector(".project-visual"),
              {
                clipPath: "inset(100% 0% 0% 0% round 12px)",
                yPercent: 16,
                rotation: 4,
              },
              {
                clipPath: "inset(0% 0% 0% 0% round 12px)",
                yPercent: 0,
                rotation: 0,
                duration: 0.95,
              },
              at + 0.05,
            )
            .fromTo(
              chapter.querySelectorAll(".project-copy > *"),
              {
                y: 85,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                stagger: 0.055,
                ease: "power3.out",
              },
              at + 0.18,
            )
            .set(previous, { autoAlpha: 0 }, at + 1.1);
        });
        timeline.to({}, { duration: 1.15 }, sceneStarts[2]);
        timeline.eventCallback("onUpdate", () => {
          const time = timeline.time();
          updateAccessibleChapter(time < 1.62 ? 0 : time < 3.47 ? 1 : 2);
        });
        const trigger = timeline.scrollTrigger!;

        gsap.from(stage.querySelector(".work-stage-viewport"), {
          y: 110,
          duration: 1.35,
          ease: "power4.out",
          scrollTrigger: { trigger: stage, start: "top 88%", once: true },
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
            ((trigger.end - trigger.start) * (sceneStarts[index] + 0.5)) /
              timeline.duration();
          if (lenis) lenis.scrollTo(target, { duration: 1.35 });
          else window.scrollTo({ top: target, behavior: "smooth" });
        };
        window.addEventListener("portfolio:chapter", jump);
        const heroExit = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
        heroExit
          .to(".hero-line:first-child", { xPercent: -15, y: -60 }, 0)
          .to(".hero-line.second-line", { xPercent: 18, y: -20 }, 0)
          .to(".hero-portrait", { y: -185, rotation: -12, scale: 0.86 }, 0)
          .to(".hero-asterisk-orbit", { rotation: 210, scale: 0.65 }, 0)
          .to(".hero-kicker", { yPercent: -80 }, 0)
          .to(".hero-bottom", { yPercent: -70 }, 0);

        select<HTMLElement>("[data-motion-heading]").forEach(
          (heading, index) => {
            gsap.fromTo(
              heading,
              { x: index % 2 ? 35 : -35 },
              {
                x: index % 2 ? -35 : 35,
                ease: "none",
                scrollTrigger: {
                  trigger: heading,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.3,
                },
              },
            );
          },
        );
        gsap.to(".about-signature svg", {
          rotation: 260,
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
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
      "(max-width: 800px) and (prefers-reduced-motion: no-preference), (max-height: 679px) and (prefers-reduced-motion: no-preference)",
      () => {
        const heroExit = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
        heroExit
          .to(".hero-line:first-child", { xPercent: -9 }, 0)
          .to(".hero-line.second-line", { xPercent: 9 }, 0)
          .to(".hero-portrait", { y: -65, rotation: -6 }, 0)
          .to(".hero-asterisk-orbit", { rotation: 150 }, 0);
        select<HTMLElement>(".project-chapter").forEach((chapter) => {
          gsap.from(chapter.querySelectorAll(".project-copy > *"), {
            y: 55,
            opacity: 0,
            duration: 1,
            stagger: 0.07,
            ease: "power4.out",
            scrollTrigger: {
              trigger: chapter,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          });
          gsap.from(chapter.querySelector(".project-visual"), {
            clipPath: "inset(20% 0% 80% 0% round 12px)",
            y: 75,
            duration: 1.2,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: chapter.querySelector(".project-visual"),
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });
          gsap.fromTo(
            chapter.querySelector(".project-image-wrap"),
            { yPercent: -5, scale: 1.15 },
            {
              yPercent: 5,
              scale: 1.12,
              ease: "none",
              scrollTrigger: {
                trigger: chapter.querySelector(".project-visual"),
                start: "top bottom",
                end: "bottom top",
                scrub: 0.7,
              },
            },
          );
        });
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
          gsap.killTweensOf(cursor);
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
