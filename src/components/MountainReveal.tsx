"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function MountainReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.12, 1, 1.06],
  );

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black"
    >
      {/* Image */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/passu-cones.jpg"
          alt="Passu Cones in the Karakoram Mountains"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/65" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 px-5 text-center text-[#f4f0e8] sm:px-8"
      >
        <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-white/60 sm:mb-6 sm:text-xs sm:tracking-[0.5em]">
          Beyond the ordinary
        </p>

        <h2 className="text-[22vw] font-medium leading-[0.78] tracking-[-0.07em] sm:text-8xl md:text-9xl">
          GO
          <br />
          FURTHER.
        </h2>

        <p className="mx-auto mt-8 max-w-xs text-xs leading-6 text-white/60 sm:mt-10 sm:text-sm sm:leading-7">
          Follow the road beyond the familiar and discover places that
          stay with you.
        </p>
      </motion.div>
    </section>
  );
}