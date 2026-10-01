"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play, RotateCw, Volume2, VolumeX } from "lucide-react";
import { filmCover, filmPoster } from "./portfolio-media";

type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };
const connection = () =>
  (navigator as Navigator & { connection?: Connection }).connection;
const conserveData = () => {
  const network = connection();
  return Boolean(
    network?.saveData || /^(slow-2g|2g|3g)$/.test(network?.effectiveType ?? ""),
  );
};
const filmSource = () =>
  window.matchMedia("(max-width: 700px)").matches || conserveData()
    ? "/videos/revizer/product-film-mobile-v1.mp4"
    : "/videos/revizer/product-film-hd-v1.mp4";

type ProjectFilmProps = {
  onOpenDetails: () => void;
  detailsOpen: boolean;
};

export default function ProjectFilm({
  onOpenDetails,
  detailsOpen,
}: ProjectFilmProps) {
  const film = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const userStarted = useRef(false);
  const [source, setSource] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [frameReady, setFrameReady] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [failed, setFailed] = useState(false);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [cover, setCover] = useState(filmCover);

  useEffect(() => {
    const video = film.current;
    if (!video) return;
    setHydrated(true);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const network = connection();
    let visible = false;
    const syncPlayback = () => {
      const allowed =
        userStarted.current || (!preference.matches && !conserveData());
      if (
        visible &&
        !document.hidden &&
        !detailsOpen &&
        allowed &&
        !userPaused.current &&
        !failed
      ) {
        // Do not attach a source until the film is in view or explicitly requested.
        if (!source) setSource(filmSource());
        else
          void video.play().catch((error: DOMException) => {
            if (error.name !== "AbortError") {
              setBuffering(false);
              setNeedsPlay(true);
            }
            setPlaying(!video.paused);
          });
      } else video.pause();
      if (visible && !source && !allowed) setNeedsPlay(true);
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
    network?.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreference);
      network?.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [detailsOpen, source, failed]);

  function togglePlayback() {
    const video = film.current;
    if (!video || detailsOpen) return;
    if (!video.paused && !failed) {
      userPaused.current = true;
      video.pause();
      setBuffering(false);
      return;
    }
    userPaused.current = false;
    userStarted.current = true;
    setNeedsPlay(false);
    setBuffering(true);
    if (!source) setSource(filmSource());
    else {
      if (failed) {
        setFailed(false);
        video.load();
      }
      void video.play().catch((error: DOMException) => {
        if (error.name !== "AbortError") {
          setBuffering(false);
          setNeedsPlay(true);
        }
        setPlaying(!video.paused);
      });
    }
  }

  function toggleMute() {
    const video = film.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  const status = failed
    ? "Film couldn’t load. Tap retry."
    : buffering
      ? "Loading film…"
      : needsPlay && !frameReady
        ? "Tap play to load the film."
        : "";

  return (
    <div
      className={`project-media project-film ${playing ? "is-playing" : "is-paused"} ${frameReady ? "has-frame" : ""}`}
    >
      <video
        ref={film}
        src={source ?? undefined}
        muted={muted}
        loop
        playsInline
        preload="none"
        onPlay={(event) => {
          if (detailsOpen) {
            event.currentTarget.pause();
            return;
          }
          setPlaying(true);
          setNeedsPlay(false);
        }}
        onPlaying={() => {
          setFrameReady(true);
          setBuffering(false);
        }}
        onLoadedData={() => setFrameReady(true)}
        onWaiting={(event) => setBuffering(!event.currentTarget.paused)}
        onPause={() => {
          setPlaying(false);
          setBuffering(false);
        }}
        onError={() => {
          setFailed(true);
          setFrameReady(false);
          setBuffering(false);
          setPlaying(false);
        }}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
        aria-hidden="true"
      />
      <span className="film-poster" aria-hidden="true">
        <Image
          src={filmPoster}
          alt=""
          fill
          placeholder="blur"
          quality={82}
          sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1600px) 70vw, 1080px"
        />
      </span>
      {hydrated && (
        <>
          <button
            type="button"
            className="film-detail-trigger"
            onClick={onOpenDetails}
            aria-label="Explore Revizer"
            aria-haspopup="dialog"
          />
          {status && (
            <span
              className={`film-status ${buffering ? "is-buffering" : ""}`}
              role="status"
              aria-live="polite"
            >
              {buffering && (
                <span className="film-spinner" aria-hidden="true" />
              )}
              {status}
            </span>
          )}
          <span
            className="film-controls"
            role="group"
            aria-label="Revizer video controls"
          >
            <button
              type="button"
              className="film-control"
              onClick={togglePlayback}
              aria-label={`${failed ? "Retry" : playing ? "Pause" : "Play"} Revizer product film`}
              title={failed ? "Retry" : playing ? "Pause" : "Play"}
            >
              {failed ? (
                <RotateCw size={15} aria-hidden="true" />
              ) : playing ? (
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
          placeholder="blur"
          quality={82}
          sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1600px) 70vw, 1080px"
          onError={() => {
            if (cover !== filmPoster) setCover(filmPoster);
          }}
        />
        <span className="film-cover-index">01</span>
      </span>
      <noscript>
        <a className="film-no-script" href="https://revizer.in">
          Visit Revizer ↗
        </a>
      </noscript>
    </div>
  );
}
