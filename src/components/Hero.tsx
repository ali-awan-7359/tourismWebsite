"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const loadVideo = () => {
      video.load();

      const playVideo = async () => {
        try {
          await video.play();
        } catch {
          // If autoplay is blocked, keep the poster image visible.
        }
      };

      playVideo();
    };

    const timeout = window.setTimeout(loadVideo, 800);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#0b0d0c] text-[#f4f0e8]"
    >
      {/* Fast-loading optimized poster image */}
      <Image
        src="/images/passu-cones.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover"
      />

      {/* Cinematic Video Background */}
      <motion.video
        ref={videoRef}
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{
          scale: videoReady ? 1 : 1.06,
          opacity: videoReady ? 1 : 0,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/10" />

      {/* Animated Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 sm:pt-20 md:px-12 md:pt-0">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-5 text-[9px] uppercase tracking-[0.35em] text-white/70 sm:mb-6 sm:text-xs sm:tracking-[0.5em] md:text-sm"
          >
            Pakistan&apos;s Northern Frontier
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="max-w-full overflow-hidden text-[15vw] font-medium leading-[0.82] tracking-[-0.07em] sm:text-[14vw] md:text-[10vw]"
          >
            THE
            <br />
            MOUNTAINS
          </motion.h1>

          {/* Description + CTA */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-7 flex flex-col gap-6 sm:mt-8 md:flex-row md:items-center md:gap-12"
          >
            <p className="max-w-sm text-xs leading-6 text-white/80 sm:text-sm sm:leading-7 md:text-base">
              Journeys through the valleys, peaks and cultures of
              Pakistan&apos;s extraordinary north.
            </p>

            {/* Begin Journey */}
            <a
              href="#story"
              className="group relative flex w-fit items-center gap-4 overflow-hidden rounded-full border border-white/30 bg-white/[0.06] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md transition-all duration-500 hover:border-white/60 hover:bg-white/[0.12] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.25em]"
            >
              {/* Soft animated light sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              {/* Button text */}
              <span className="relative">
                Begin Journey
              </span>

              {/* Clean SVG arrow */}
              <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:border-white/50">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M3 10h13M10.5 4.5 16 10l-5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-5 left-0 right-0 z-10 flex items-end justify-between px-5 text-[8px] uppercase tracking-[0.2em] text-white/70 sm:bottom-7 sm:px-8 sm:text-[10px] md:px-12 md:text-xs"
      >
        <span>By Luqman</span>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
          <span className="hidden sm:inline">Scroll to explore</span>

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </div>

        <span>01 / 05</span>
      </motion.div>
    </section>
  );
}