"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function ProjectFilm() {
  const film = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const userStarted = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = film.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const syncPlayback = () => {
      const allowed = !preference.matches || userStarted.current;
      if (visible && !document.hidden && allowed && !userPaused.current) {
        void video.play().catch(() => setPlaying(!video.paused));
      } else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.08;
        syncPlayback();
      },
      { threshold: 0.08 },
    );
    observer.observe(video);
    const onPreference = () => {
      userStarted.current = false;
      video.autoplay = !preference.matches;
      syncPlayback();
    };
    video.autoplay = !preference.matches;
    preference.addEventListener("change", onPreference);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreference);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  function togglePlayback() {
    const video = film.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      userStarted.current = true;
      void video.play().catch(() => setPlaying(!video.paused));
    } else {
      userPaused.current = true;
      video.pause();
    }
  }

  return (
    <button
      type="button"
      className={`project-media project-film ${playing ? "is-playing" : "is-paused"}`}
      onClick={togglePlayback}
      aria-label={`${playing ? "Pause" : "Play"} Revizer product film`}
    >
      <video
        ref={film}
        muted
        loop
        playsInline
        poster="/videos/revizer/product-film-poster.webp"
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-hidden="true"
      >
        <source
          src="/videos/revizer/product-film-landscape.mp4"
          type="video/mp4"
        />
      </video>
      <span className="film-control" aria-hidden="true">
        {playing ? <Pause size={17} /> : <Play size={17} />}
      </span>
    </button>
  );
}
