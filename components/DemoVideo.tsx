"use client";

import { useRef, useState } from "react";

export default function DemoVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void el.requestFullscreen();
    }
  };

  return (
    <div ref={wrapRef} className="group relative cursor-pointer">
      <video
        ref={videoRef}
        className="w-full rounded-xl"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {/* Play overlay (shown while paused) */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="재생"
          className="absolute inset-0 grid place-items-center rounded-xl bg-black/30 transition-colors"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-black shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {/* Fullscreen button (bottom-right) */}
      <button
        type="button"
        onClick={toggleFullscreen}
        aria-label="전체화면"
        className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-lg bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/70 focus-visible:opacity-100 group-hover:opacity-100"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M8 3H5a2 2 0 0 0-2 2v3m0 8v3a2 2 0 0 0 2 2h3m8-18h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
