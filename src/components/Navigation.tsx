"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  {
    number: "01",
    label: "Home",
    href: "#home",
  },
  {
    number: "02",
    label: "The Journey",
    href: "#story",
  },
  {
    number: "03",
    label: "Destinations",
    href: "#destinations",
  },
  {
    number: "04",
    label: "Experiences",
    href: "#experiences",
  },
  {
    number: "05",
    label: "Contact",
    href: "#contact",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <>
      {/* Menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        className="group absolute right-5 top-5 z-50 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white sm:right-8 sm:top-7 sm:text-xs md:right-12 md:top-8"
      >
        <span>Menu</span>

        <span className="flex flex-col gap-1">
          <span className="h-px w-5 bg-white transition-all duration-300 group-hover:w-7 sm:w-6" />
          <span className="h-px w-3 bg-white transition-all duration-300 group-hover:w-7 sm:w-4" />
        </span>
      </button>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-[100] overflow-hidden bg-[#0b0d0c] text-[#f4f0e8]"
          >
            {/* Subtle background */}
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full border border-white/10" />

              <div className="absolute -right-20 top-1/4 h-[350px] w-[350px] rounded-full border border-white/10" />

              <div className="absolute right-10 top-1/4 h-[200px] w-[200px] rounded-full border border-white/10" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-start justify-between px-5 py-5 sm:px-8 sm:py-7 md:px-12 md:py-8">
              <div>
                <p className="text-xs font-medium tracking-[0.3em] sm:text-sm sm:tracking-[0.35em]">
                  KARAKORUM
                </p>

                <p className="mt-1 text-[9px] tracking-[0.4em] text-white/50 sm:text-xs sm:tracking-[0.45em]">
                  TRAILS
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] sm:text-xs"
              >
                <span>Close</span>

                <span className="relative block h-6 w-6">
                  <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white transition-transform duration-300 group-hover:rotate-[135deg]" />

                  <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white transition-transform duration-300 group-hover:-rotate-[135deg]" />
                </span>
              </button>
            </div>

            {/* Navigation */}
            <div className="relative z-10 flex h-[calc(100svh-100px)] items-center px-5 sm:px-8 md:px-12">
              <nav className="w-full max-w-5xl">
                <div className="mb-8 border-b border-white/10 pb-5 sm:mb-10">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 sm:text-xs">
                    Explore Karakorum
                  </p>
                </div>

                <div>
                  {links.map((link, index) => (
                    <motion.button
                      key={link.href}
                      type="button"
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => handleNavigation(link.href)}
                      className="group flex w-full items-center gap-4 border-b border-white/10 py-4 text-left sm:gap-6 sm:py-5 md:py-6"
                    >
                      <span className="w-7 text-[9px] tracking-[0.2em] text-white/30 sm:w-10 sm:text-xs">
                        {link.number}
                      </span>

                      <span className="text-[11vw] font-medium leading-[0.8] tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-3 sm:text-6xl md:text-7xl lg:text-8xl">
                        {link.label}
                      </span>

                      <span className="ml-auto text-lg text-white/30 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-2xl">
                        →
                      </span>
                    </motion.button>
                  ))}
                </div>
              </nav>
            </div>

            {/* Footer */}
            <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between text-[8px] uppercase tracking-[0.2em] text-white/30 sm:bottom-7 sm:left-8 sm:right-8 sm:text-[10px] md:bottom-8 md:left-12 md:right-12 md:text-xs">
              <span>Pakistan&apos;s Northern Frontier</span>

              <span>By Luqman</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}