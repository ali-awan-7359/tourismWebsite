"use client";

import { motion } from "motion/react";

const socials = [
  {
    name: "Instagram",
    handle: "Karakoram Trails By Luqman",
    description: "Visual stories from the north.",
    href: "https://www.instagram.com/karakoram_trails_by_luqman?igsi=eG9uaHNvN2FjNnBn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Karakoram Trails By Luqman",
    description: "Journeys, updates and stories.",
    href: "https://www.facebook.com/KarakoramTrailsByLuqman?mibextid=ZbWKwL",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "Karakoram Trails By Luqman",
    description: "See the mountains in motion.",
    href: "https://youtube.com/@karakoramtrailsbyluqman?si=bPXTtxRUmCSPrXvu",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
      </svg>
    ),
  },
];

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

export default function SocialLinks() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#0b0d0c] px-5 py-20 text-[#f4f0e8] sm:px-8 sm:py-24 md:px-12 md:py-28">
      {/* Very subtle ambient light */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-white/35" />

              <p className="text-[9px] uppercase tracking-[0.4em] text-white/40 sm:text-xs">
                Follow the journey
              </p>
            </div>

            <h2 className="text-[12vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[6rem]">
              STAY CLOSE{" "}
              <span className="text-white/30">TO THE NORTH.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-white/40 sm:text-sm sm:leading-7">
            Follow Karakoram Trails by Luqman for mountain stories, new
            journeys and moments from Pakistan&apos;s northern frontier.
          </p>
        </motion.div>

        {/* Social links */}
        <div className="grid gap-3 md:grid-cols-3">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] px-5 py-5 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.045] sm:px-6 sm:py-6"
              aria-label={`Follow Karakoram Trails by Luqman on ${social.name}`}
            >
              {/* Soft hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/[0.04] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex items-center gap-4">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/[0.06] group-hover:text-white">
                  {social.icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-[8px] uppercase tracking-[0.3em] text-white/35">
                    {social.name}
                  </p>

                  <p className="truncate text-sm tracking-tight text-white/75 transition-colors duration-300 group-hover:text-white sm:text-[15px]">
                    {social.handle}
                  </p>

                  <p className="mt-1 text-[10px] text-white/30">
                    {social.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/25 transition-all duration-500 group-hover:translate-x-1 group-hover:border-white/25 group-hover:text-white/70">
                  <ArrowIcon />
                </div>
              </div>

              {/* Bottom progress line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-0 right-0 h-px origin-left bg-white/40"
              />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.2em] text-white/25 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]"
        >
          <span>© {new Date().getFullYear()} Karakoram Trails</span>

          <span>By Luqman · Pakistan&apos;s Northern Frontier</span>
        </motion.div>
      </div>
    </section>
  );
}