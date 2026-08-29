"use client";

import { motion } from "motion/react";

const socials = [
  {
    name: "Instagram",
    handle: "Karakoram Trails By Luqman",
    href: "https://www.instagram.com/malik98765432100000?igsi=eG9uaHNvN2FjNnBn",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Karakoram Trails By Luqman",
    href: "https://www.facebook.com/KarakoramTrailsByLuqman?mibextid=ZbWKwL",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "Karakoram Trails By Luqman",
    href: "https://youtube.com/@karakoramtrailsbyluqman?si=bPXTtxRUmCSPrXvu",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <section className="border-t border-white/10 bg-[#0b0d0c] px-5 py-20 text-[#f4f0e8] sm:px-8 sm:py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-white/40 sm:text-xs">
              Follow the journey
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl">
              Stay close to
              <br />
              the mountains.
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
            Follow Karakoram Trails by Luqman for new journeys, mountain
            stories, destinations and adventures from Pakistan&apos;s north.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative flex min-h-40 flex-col justify-between bg-[#0b0d0c] p-6 transition-colors duration-500 hover:bg-[#151816] sm:min-h-48 sm:p-8"
              aria-label={`Follow Karakoram Trails by Luqman on ${social.name}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                  {social.icon}
                </span>

               <span className="flex h-8 w-8 items-center justify-center text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <path d="M5 19L19 5" />
                    <path d="M9 5h10v10" />
                </svg>
                </span>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
                  {social.name}
                </p>

                <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-white sm:text-base">
                  {social.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>© {new Date().getFullYear()} Karakoram Trails</span>
          <span>By Luqman · Pakistan&apos;s Northern Frontier</span>
        </div>
      </div>
    </section>
  );
}