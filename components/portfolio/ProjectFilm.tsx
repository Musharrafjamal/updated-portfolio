"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

const filmPoster = "/videos/revizer/product-film-poster.webp";

export default function ProjectFilm() {
  const film = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const userStarted = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [cover, setCover] = useState("/projects/revizer-film-cover.webp");

  useEffect(() => {
    const video = film.current;
    if (!video) return;
    setHydrated(true);
    // Playback is driven by visibility rather than the browser's autoplay flag.
    video.autoplay = false;
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
      syncPlayback();
    };
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

  function toggleMute() {
    const video = film.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div
      className={`project-media project-film ${playing ? "is-playing" : "is-paused"}`}
    >
      <video
        ref={film}
        muted={muted}
        loop
        playsInline
        poster={filmPoster}
        preload="metadata"
        controls={!hydrated}
        style={{ pointerEvents: hydrated ? "none" : "auto" }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
        aria-hidden={hydrated || undefined}
        aria-label={hydrated ? undefined : "Revizer product film"}
      >
        <source
          src="/videos/revizer/product-film-landscape.mp4"
          type="video/mp4"
        />
      </video>
      {hydrated && (
        <>
          <button
            type="button"
            className="film-playback-toggle"
            onClick={togglePlayback}
            tabIndex={-1}
            aria-hidden="true"
          />
          <span
            className="film-controls"
            role="group"
            aria-label="Revizer video controls"
          >
            <button
              type="button"
              className="film-control"
              onClick={togglePlayback}
              aria-label={`${playing ? "Pause" : "Play"} Revizer product film`}
              title={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <Pause size={15} aria-hidden="true" />
              ) : (
                <Play size={15} aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              className="film-control film-mute-toggle"
              onClick={toggleMute}
              aria-label={`${muted ? "Unmute" : "Mute"} Revizer product film`}
              title={muted ? "Unmute" : "Mute"}
            >
              {muted ? (
                <VolumeX size={15} aria-hidden="true" />
              ) : (
                <Volume2 size={15} aria-hidden="true" />
              )}
            </button>
          </span>
        </>
      )}
      <span className="project-curtain project-film-cover" aria-hidden="true">
        <Image
          src={cover}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 700px) 100vw, (max-width: 1600px) 70vw, 1000px"
          onError={() => {
            if (cover !== filmPoster) setCover(filmPoster);
          }}
        />
        <span className="film-cover-index">01</span>
      </span>
    </div>
  );
}
