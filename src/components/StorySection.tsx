"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.75, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0b0d0c] px-5 py-24 text-[#f4f0e8] sm:px-8 sm:py-28 md:px-12 md:py-32"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="grid gap-10 sm:gap-14 md:grid-cols-12 md:items-center md:gap-16">
          {/* Section number */}
          <div className="md:col-span-2">
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40 sm:text-xs sm:tracking-[0.4em]">
              02 / 05
            </p>
          </div>

          {/* Main statement */}
          <div className="md:col-span-8">
            <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-white/40 sm:mb-8 sm:text-xs sm:tracking-[0.4em]">
              The journey begins here
            </p>

            <h2 className="text-[13vw] font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-9xl">
              THE NORTH
              <br />
              IS NOT JUST
              <br />
              A DESTINATION.
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-sm md:col-span-2 md:max-w-none md:self-end">
            <p className="text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
              It is a place where ancient valleys, towering peaks and
              generations of culture come together.
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 flex items-center gap-4 sm:mt-24 sm:gap-6">
          <div className="h-px flex-1 bg-white/10" />

          <p className="text-[8px] uppercase tracking-[0.25em] text-white/30 sm:text-xs sm:tracking-[0.3em]">
            Keep exploring
          </p>

          <div className="h-px w-10 bg-white/10 sm:w-16" />
        </div>
      </motion.div>
    </section>
  );
}