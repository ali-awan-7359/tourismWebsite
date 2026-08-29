"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const destinations = [
  {
    id: "01",
    name: "Hunza",
    location: "Gilgit-Baltistan",
    description:
      "A valley of ancient villages, apricot orchards and some of the most dramatic mountain scenery in Pakistan.",
    image: "/images/passu-cones.jpg",
  },
  {
    id: "02",
    name: "Passu",
    location: "Upper Hunza",
    description:
      "Home to the unmistakable Passu Cones, where sharp peaks rise dramatically above the Karakoram Highway.",
    image: "/images/passu-cones.jpg",
  },
  {
    id: "03",
    name: "Skardu",
    location: "Baltistan",
    description:
      "A gateway to some of the world's greatest mountains, surrounded by vast valleys, lakes and high-altitude landscapes.",
    image: "/images/passu-cones.jpg",
  },
  {
    id: "04",
    name: "Fairy Meadows",
    location: "Diamer",
    description:
      "A legendary alpine meadow overlooking Nanga Parbat, where forests and mountains meet beneath enormous skies.",
    image: "/images/passu-cones.jpg",
  },
];

export default function Destinations() {
  const [active, setActive] = useState(0);

  const destination = destinations[active];

  return (
    <section
      id="destinations"
      className="relative min-h-[100svh] overflow-hidden bg-[#0b0d0c] text-[#f4f0e8]"
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${destination.image}-${active}`}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/20" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/50 sm:text-xs sm:tracking-[0.4em]">
              Explore the north
            </p>

            <h2 className="mt-2 text-xl tracking-[-0.03em] sm:text-2xl">
              Destinations
            </h2>
          </div>

          <p className="text-[9px] uppercase tracking-[0.25em] text-white/50 sm:text-xs">
            03 / 05
          </p>
        </div>

        {/* Main destination */}
        <div className="grid gap-8 pb-6 sm:gap-10 md:grid-cols-12 md:items-end md:gap-12">
          {/* Number */}
          <div className="hidden md:col-span-2 md:block">
            <p className="text-sm tracking-[0.3em] text-white/40">
              {destination.id}
            </p>
          </div>

          {/* Destination name */}
          <div className="min-w-0 md:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={destination.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-w-0"
              >
                <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-white/60 sm:mb-6 sm:text-xs">
                  {destination.location}
                </p>

                <h3
                  className={`max-w-full font-medium leading-[0.78] tracking-[-0.07em] ${
                    destination.name === "Fairy Meadows"
                      ? "text-[16vw] sm:text-7xl md:text-8xl lg:text-[9rem]"
                      : "text-[24vw] sm:text-8xl md:text-9xl lg:text-[11rem]"
                  }`}
                >
                  {destination.name === "Fairy Meadows" ? (
                    <>
                      Fairy
                      <br />
                      Meadows
                    </>
                  ) : (
                    destination.name
                  )}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="min-w-0 md:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={destination.description}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <p className="max-w-sm text-xs leading-6 text-white/70 sm:text-sm sm:leading-7">
                  {destination.description}
                </p>

                <button
                  type="button"
                  className="group mt-7 flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-[9px] uppercase tracking-[0.2em] transition-colors hover:border-white sm:text-xs sm:tracking-[0.25em]"
                >
                  <span>Discover destination</span>

                  <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Destination selector */}
        <div className="border-t border-white/20 pt-5 sm:pt-6">
          <div className="grid grid-cols-4">
            {destinations.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group relative min-w-0 py-3 text-left"
                >
                  {/* Active line */}
                  <div
                    className={`absolute left-0 right-3 top-0 h-px transition-all duration-500 ${
                      isActive
                        ? "bg-white"
                        : "bg-white/20 group-hover:bg-white/50"
                    }`}
                  />

                  <div className="flex min-w-0 flex-col gap-1">
                    <span
                      className={`text-[8px] tracking-[0.2em] transition-colors sm:text-[10px] ${
                        isActive ? "text-white" : "text-white/40"
                      }`}
                    >
                      {item.id}
                    </span>

                    <span
                      className={`truncate pr-2 text-[8px] uppercase tracking-[0.08em] transition-colors sm:text-xs sm:tracking-[0.2em] ${
                        isActive ? "text-white" : "text-white/40"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}