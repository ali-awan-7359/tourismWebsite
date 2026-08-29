"use client";

import { motion } from "motion/react";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0b0d0c] text-[#f4f0e8]"
    >
      {/* Cinematic Video Background */}
      <motion.video
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/passu-cones.jpg"
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
            className="text-[18vw] font-medium leading-[0.82] tracking-[-0.07em] sm:text-[14vw] md:text-[10vw]"
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

            <a
              href="#story"
              className="group flex w-fit items-center gap-4 border border-white/50 bg-black/10 px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm transition-all hover:bg-white hover:text-black sm:px-6 sm:py-4 sm:text-xs sm:tracking-[0.25em]"
            >
              Begin Journey

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
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