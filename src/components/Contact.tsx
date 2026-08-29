"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const whatsappNumber = "923442084737";

  const whatsappMessage =
    "Hello! Welcome to Karakoram Trails by Luqman. I'm interested in planning a journey through the beautiful northern areas of Pakistan. I'd love to know more about your destinations, packages, and available dates.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-[90svh] overflow-hidden bg-[#0b0d0c] text-[#f4f0e8]"
    >
      {/* Background image */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        className="absolute -inset-[7%]"
      >
        <Image
          src="/images/skardu.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Readability layers */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/80" />

      {/* Soft WhatsApp atmosphere */}
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#25D366]/[0.045] blur-[130px]" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.4)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90svh] w-full max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-white/50" />

            <p className="text-[9px] uppercase tracking-[0.4em] text-white/60 sm:text-xs">
              05 / 05 · Contact
            </p>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-white/40 sm:block">
            The next trail awaits
          </span>
        </motion.div>

        {/* Main */}
        <div className="max-w-6xl pb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-[9px] uppercase tracking-[0.4em] text-white/65 sm:mb-7 sm:text-xs"
          >
            Your next adventure
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-[15vw] font-medium leading-[0.8] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[9rem]"
          >
            YOUR
            <br />
            JOURNEY
            <br />
            <span className="text-white/65">STARTS HERE.</span>
          </motion.h2>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-10"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp to plan your journey"
              className="group relative inline-flex w-full items-center justify-center gap-4 overflow-hidden rounded-full border border-white/25 bg-black/35 px-5 py-4 text-white shadow-[0_12px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:border-[#25D366]/60 hover:bg-black/20 hover:shadow-[0_15px_60px_rgba(37,211,102,0.12)] sm:w-auto sm:px-6"
            >
              {/* Soft hover glow */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#25D366]/[0.08] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              {/* WhatsApp icon */}
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.22)] transition-transform duration-500 group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    d="M20.5 11.5a8.5 8.5 0 0 1-12.56 7.46L4 20l1.1-3.72A8.5 8.5 0 1 1 20.5 11.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8.7 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.7 1.2 1.6 2.1 2.8 2.7l.5-.5c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.2-2.8-.8-5-2.8-6.2-5.3-.3-.6-.2-1.2.5-1.7Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              {/* Text */}
              <span className="relative flex flex-col items-start">
                <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/55">
                  Talk With Us
                </span>

                <span className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-white">
                  Plan Your Journey
                </span>
              </span>

              {/* Arrow */}
              <span className="relative ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#25D366]/50 group-hover:text-[#25D366]">
                →
              </span>
            </a>

            <p className="mt-5 max-w-md text-[9px] uppercase tracking-[0.2em] text-white/45 sm:text-xs">
              Tell us where you want to go. We&apos;ll help you plan the
              journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}