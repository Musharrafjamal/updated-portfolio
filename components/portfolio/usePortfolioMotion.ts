"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioMotion(root: RefObject<HTMLDivElement>) {
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const media = gsap.matchMedia();
    const select = <T extends Element = HTMLElement>(selector: string) =>
      Array.from(element.querySelectorAll<T>(selector));
    let lenis: Lenis | undefined;

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const preferenceCleanups: (() => void)[] = [];
        lenis = new Lenis({
          duration: 1.25,
          smoothWheel: true,
          syncTouch: false,
          anchors: { offset: -32 },
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
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 92%",
              end: "top 36%",
              scrub: 0.65,
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
              start: "top 90%",
              end: "top 24%",
              scrub: 0.65,
            },
          });
          timeline
            .fromTo(
              item,
              { "--line-progress": 0 },
              { "--line-progress": 1, duration: 0.55, ease: "power3.inOut" },
            )
            .from(
              item.querySelector(".experience-period"),
              {
                x: -32,
                opacity: 0.2,
                duration: 0.6,
                ease: "power4.out",
              },
              0.1,
            )
            .from(
              item.querySelector(".experience-role > span"),
              { yPercent: 125, duration: 0.55, ease: "power3.out" },
              0.1,
            )
            .from(
              item.querySelector(".experience-company > span"),
              { yPercent: 120, duration: 0.4, ease: "power3.out" },
              0.22,
            )
            .from(
              item.querySelector(".experience-index"),
              {
                y: 42,
                rotation: -18,
                opacity: 0.15,
                duration: 0.65,
                ease: "power3.out",
              },
              0.08,
            )
            .from(
              item.querySelector(".experience-detail p"),
              { y: 32, opacity: 0.15, duration: 0.5, ease: "power3.out" },
              0.23,
            )
            .from(
              item.querySelectorAll(".experience-detail .tool-tags > span"),
              {
                y: 18,
                opacity: 0.2,
                stagger: 0.045,
                duration: 0.3,
                ease: "power2.out",
              },
              0.32,
            )
            .from(
              item.querySelector(".experience-node"),
              {
                scale: 0.35,
                backgroundColor: "#f3f2ed",
                duration: 0.5,
                ease: "power2.out",
              },
              0.15,
            );
        });
        gsap.fromTo(
          ".experience-spine > span",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".experience-list",
              start: "top 65%",
              end: "bottom 50%",
              scrub: 0.5,
            },
          },
        );
        gsap.to(".experience-emblem > svg", {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: "#experience",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".experience-emblem > span", {
          rotation: -180,
          ease: "none",
          scrollTrigger: {
            trigger: "#experience",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
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
      {
        desktop: "(min-width: 701px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (!context.conditions?.motion) return;
        const desktop = Boolean(context.conditions.desktop);

        select<HTMLElement>("[data-project-reveal]").forEach((card, index) => {
          const scene = card.querySelector<HTMLElement>(
            ".project-scroll-scene",
          )!;
          const curtain = card.querySelector(".project-curtain");
          const column = index === 0 ? 0 : (index - 1) % 2;
          // The trigger stays in normal flow. Only the complete composition moves;
          // its image has no crop, zoom or hover transform.
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 94%",
              end: "bottom 12%",
              scrub: desktop ? 0.7 : 0.4,
              invalidateOnRefresh: true,
            },
          });
          timeline.fromTo(
            scene,
            { y: desktop ? 180 + column * 65 : 110 },
            { y: 0, duration: 0.48, ease: "power3.out" },
            0,
          );
          if (curtain)
            timeline.fromTo(
              curtain,
              { y: 0, yPercent: 0 },
              { y: 0, yPercent: -101, duration: 0.34, ease: "power2.inOut" },
              0.09 + (desktop ? column * 0.035 : 0),
            );
          timeline
            .fromTo(
              card.querySelector(".project-card-meta > span"),
              { yPercent: 115 },
              { yPercent: 0, duration: 0.24, ease: "power3.out" },
              0.19,
            )
            .fromTo(
              card.querySelector("h3 > span"),
              { yPercent: 125 },
              { yPercent: 0, duration: 0.28, ease: "power3.out" },
              0.23,
            )
            .fromTo(
              card.querySelector(".project-caption > p"),
              { y: 20, opacity: 0.25 },
              { y: 0, opacity: 1, duration: 0.24, ease: "power2.out" },
              0.29,
            )
            .fromTo(
              card.querySelector(".project-open"),
              { y: 25, rotation: -45 },
              { y: 0, rotation: 0, duration: 0.3, ease: "power3.out" },
              0.24,
            )
            .to(
              scene,
              { y: desktop ? -55 : -24, duration: 0.3, ease: "none" },
              0.7,
            );
          const features = card.querySelector(".revizer-features");
          const visit = card.querySelector(".revizer-visit");
          if (features && visit) {
            timeline
              .fromTo(
                features,
                { y: 18, opacity: 0.25 },
                { y: 0, opacity: 1, duration: 0.26, ease: "power2.out" },
                0.32,
              )
              .fromTo(
                visit,
                { y: 18, opacity: 0.25 },
                { y: 0, opacity: 1, duration: 0.26, ease: "power2.out" },
                0.37,
              );
          }
        });
      },
      element,
    );

    media.add(
      {
        wide: "(min-width: 801px) and (min-height: 680px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        if (!context.conditions?.motion) return;
        const wide = context.conditions.wide;
        const heroExit = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: wide ? 1.2 : 0.8,
          },
        });
        heroExit
          .to(
            ".hero-line:first-child",
            { xPercent: wide ? -15 : -9, y: wide ? -60 : 0 },
            0,
          )
          .to(
            ".hero-line.second-line",
            { xPercent: wide ? 18 : 9, y: wide ? -20 : 0 },
            0,
          )
          .to(
            ".hero-portrait",
            {
              y: wide ? -185 : -65,
              rotation: wide ? -12 : -6,
              scale: wide ? 0.86 : 1,
            },
            0,
          )
          .to(
            ".hero-asterisk-orbit",
            { rotation: wide ? 210 : 150, scale: wide ? 0.65 : 1 },
            0,
          );
        if (wide) {
          heroExit
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
        }
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

        return () => remove.forEach((cleanup) => cleanup());
      },
      element,
    );

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
      images.forEach((image) => image.removeEventListener("load", imageLoad));
    };
  }, [root]);
}
