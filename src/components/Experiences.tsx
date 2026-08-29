"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section
      ref={sectionRef}
      id="experiences"
      className="relative min-h-[85svh] overflow-hidden bg-[#0b0d0c] text-[#f4f0e8]"
    >
      {/* Background image */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute -inset-[8%]"
      >
        <Image
          src="/images/hunza.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Soft cinematic overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Left readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65" />

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.35)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85svh] w-full max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-white/50" />

          <p className="text-[9px] uppercase tracking-[0.4em] text-white/60 sm:text-xs">
            04 / 05 · Experiences
          </p>
        </motion.div>

        {/* Main content */}
        <div className="max-w-5xl pb-8">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-5 text-[9px] uppercase tracking-[0.4em] text-white/65 sm:mb-7 sm:text-xs"
          >
            Beyond the photographs
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[15vw] font-medium leading-[0.8] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[9rem]"
          >
            LIVE THE
            <br />
            <span className="text-white/70">JOURNEY.</span>
          </motion.h2>

          <div className="mt-8 flex flex-col gap-7 sm:mt-10 md:flex-row md:items-end md:gap-16">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="max-w-md text-xs leading-6 text-white/75 sm:text-sm sm:leading-7"
            >
              Trek through remote valleys, cross high mountain passes and
              experience the landscapes of the Karakoram from a perspective
              that photographs can&apos;t quite capture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex items-center gap-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/45">
                  Experience
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                  Valleys · Peaks · Culture
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}