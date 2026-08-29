"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

const destinations = [
  {
    id: "01",
    name: "Hunza",
    location: "Gilgit-Baltistan",
    description:
      "A valley of ancient villages, apricot orchards and some of the most dramatic mountain scenery in Pakistan.",
    image: "/images/hunza.jpeg",
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
    image: "/images/skardu.jpeg",
  },
  {
    id: "04",
    name: "Fairy Meadows",
    location: "Diamer",
    description:
      "A legendary alpine meadow overlooking Nanga Parbat, where forests and mountains meet beneath enormous skies.",
    image: "/images/fairy-meadows.jpeg",
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

export default function Destinations() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const destination = destinations[active];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 12);
    mouseY.set(y * 12);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovering(false);
  };

  return (
    <section
      id="destinations"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={resetMouse}
      className="relative min-h-[100svh] overflow-hidden bg-[#0b0d0c] text-[#f4f0e8]"
    >
      {/* Background image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={destination.id}
          initial={{
            opacity: 0,
            scale: 1.12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            opacity: {
              duration: 0.65,
              ease: "easeInOut",
            },
            scale: {
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="absolute inset-0"
        >
          <motion.div
            style={{
              x: smoothX,
              y: smoothY,
              scale: isHovering ? 1.015 : 1,
            }}
            className="absolute -inset-4 transition-transform duration-700"
          >
            <Image
              src={destination.image}
              alt={`${destination.name} in northern Pakistan`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={active === 0}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* 
        Lighter cinematic overlays.
        The image is intentionally much more visible now.
      */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Left side readability for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

      {/* Top/bottom cinematic contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />

      {/* Very subtle vignette */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.28)]" />

      {/* Large background number */}
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.7 }}
          className="pointer-events-none absolute right-[-2vw] top-[16%] hidden select-none text-[30vw] font-medium leading-none tracking-[-0.12em] text-white/[0.045] lg:block"
        >
          {destination.id}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between"
        >
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/65 sm:text-xs sm:tracking-[0.4em]">
              Explore the north
            </p>

            <h2 className="mt-2 text-xl tracking-[-0.03em] sm:text-2xl">
              Destinations
            </h2>
          </div>

          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/65 sm:text-xs">
              03 / 05
            </p>

            <motion.div
              animate={{
                width: `${((active + 1) / destinations.length) * 100}%`,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ml-auto mt-3 h-px w-12 bg-white sm:w-16"
            />
          </div>
        </motion.div>

        {/* Main destination */}
        <div className="grid gap-8 pb-6 sm:gap-10 md:grid-cols-12 md:items-end md:gap-12">
          {/* Number */}
          <motion.div
            key={`number-${destination.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:col-span-2 md:block"
          >
            <p className="text-sm tracking-[0.3em] text-white/55">
              {destination.id}
            </p>

            <div className="mt-4 h-20 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </motion.div>

          {/* Destination name */}
          <div className="min-w-0 md:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={destination.name}
                initial={{
                  y: 70,
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  y: -50,
                  opacity: 0,
                  filter: "blur(6px)",
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-w-0"
              >
                <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-white/75 sm:mb-6 sm:text-xs">
                  {destination.location}
                </p>

                <h3
                  className={`max-w-full font-medium leading-[0.78] tracking-[-0.07em] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)] ${
                    destination.name === "Fairy Meadows"
                      ? "text-[15vw] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
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
                key={destination.id}
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                }}
              >
                <p className="max-w-sm text-xs leading-6 text-white/85 sm:text-sm sm:leading-7">
                  {destination.description}
                </p>

                <button
                  type="button"
                  className="group mt-7 flex w-fit items-center gap-4 border-b border-white/40 pb-3 text-[9px] uppercase tracking-[0.2em] transition-all duration-300 hover:border-white sm:text-xs sm:tracking-[0.25em]"
                >
                  <span>Discover destination</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-black/10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <ArrowIcon />
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Destination selector */}
        <div className="border-t border-white/25 pt-5 sm:pt-6">
          <div className="grid grid-cols-4">
            {destinations.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`View ${item.name}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative min-w-0 py-3 text-left outline-none"
                >
                  {/* Progress line */}
                  <div className="absolute left-0 right-3 top-0 h-px overflow-hidden bg-white/25">
                    <motion.div
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full origin-left bg-white"
                    />
                  </div>

                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`text-[8px] tracking-[0.2em] transition-colors duration-300 sm:text-[10px] ${
                        isActive
                          ? "text-white"
                          : "text-white/55 group-hover:text-white/80"
                      }`}
                    >
                      {item.id}
                    </span>

                    <span
                      className={`truncate pr-2 text-[8px] uppercase tracking-[0.08em] transition-all duration-300 sm:text-xs sm:tracking-[0.2em] ${
                        isActive
                          ? "text-white"
                          : "text-white/55 group-hover:translate-x-1 group-hover:text-white/80"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.5,
                    }}
                    className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-white md:hidden"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}