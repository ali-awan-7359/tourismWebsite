"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M3 10h13M10.5 4.5 16 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LuqmanStory() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section
      ref={sectionRef}
      id="luqman"
      className="relative overflow-hidden bg-[#0b0d0c] px-5 py-28 text-[#f4f0e8] sm:px-8 sm:py-36 md:px-12 md:py-48"
    >
      {/* Ambient background glow */}
      <motion.div
        style={{ y: titleY }}
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d8c7a3]/5 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4 sm:mb-24"
        >
          <span className="h-px w-10 bg-white/40" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/50 sm:text-xs sm:tracking-[0.45em]">
            The man behind the trails
          </span>
        </motion.div>

        {/* Main story */}
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-white/10 sm:-inset-5" />

            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
                className="absolute -inset-[8%]"
              >
                <Image
                  src="/images/luqman.jpeg"
                  alt="Luqman of Karakoram Trails"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                  priority={false}
                />
              </motion.div>

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                    Karakoram Trails
                  </p>

                  <p className="mt-1 text-sm tracking-wide text-white sm:text-base">
                    Luqman
                  </p>
                </div>

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">
                  Skardu
                </span>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mb-6 text-[10px] uppercase tracking-[0.35em] text-white/45 sm:text-xs"
            >
              A local connection
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl text-[13vw] font-medium leading-[0.86] tracking-[-0.07em] sm:text-[10vw] lg:text-[7vw]"
            >
              THE
              <br />
              NORTH
              <br />
              IS HOME.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mt-10 max-w-xl space-y-5 text-sm leading-7 text-white/65 sm:mt-12 sm:text-base sm:leading-8"
            >
              <p>
                I live in Skardu, surrounded by the mountains, valleys,
                roads and communities that make the north unforgettable.
              </p>

              <p>
                I knows the places beyond the photographs. The people, the
                quieter roads, the changing landscapes and the little moments
                that can turn a trip into a memory.
              </p>

              <p>
                Karakoram Trails was born from that connection: a desire to
                share the beauty of northern Pakistan with people who want to
                experience it for themselves.
              </p>
            </motion.div>

            {/* Location marker */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="mt-10 flex items-center gap-4 sm:mt-14"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                <span className="block h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                  Based in
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/80">
                  Skardu · Gilgit-Baltistan
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
          }}
          className="mt-32 border-t border-white/10 pt-12 sm:mt-48 sm:pt-16"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-2xl text-2xl leading-tight tracking-tight text-white/85 sm:text-3xl md:text-4xl">
              Come for the mountains.
              <br />

              <span className="text-white/40">
                Leave with a connection to them.
              </span>
            </p>

            {/* Softer CTA */}
            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="group relative flex w-fit items-center gap-4 overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-6 py-4 text-[9px] uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/[0.09] hover:text-white hover:shadow-[0_8px_35px_rgba(0,0,0,0.25)] sm:px-7 sm:py-4 sm:text-xs"
            >
              {/* Soft hover glow */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

              <span className="relative">
                Meet the mountains
              </span>

              {/* Circular arrow */}
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/[0.08]">
                <span className="transition-transform duration-500 ease-out group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}