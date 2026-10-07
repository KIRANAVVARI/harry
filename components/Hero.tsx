"use client";

import { useEffect, useState } from "react";
import Floatingstars from "./Floatingstars";
import { motion } from "framer-motion";

const heroImages = [
  "/images/hero/hero1.jpeg",
  "/images/hero/hero2.jpeg",
  "/images/hero/hero3.jpeg",
  "/images/hero/hero4.jpeg",
  "/images/hero/hero5.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-10-10T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center hero-slide transition-opacity duration-[2500ms] ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-950/90" />
      <Floatingstars />
      {/* Blue Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="uppercase tracking-[0.8em] text-blue-300 text-sm font-light mb-8">
              10 October • SPECIAL DAY
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="heading text-6xl md:text-8xl xl:text-9xl font-bold"
            >
              Happy Birthday
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="cursive text-6xl md:text-8xl text-blue-300 mt-10"
            >
              Harry ❤️
            </motion.h2>
            {timeLeft.days === 0 &&
timeLeft.hours === 0 &&
timeLeft.minutes === 0 &&
timeLeft.seconds === 0 ? (
  <div className="mt-10">
    <div className="text-blue-300 uppercase tracking-[0.4em] text-xs mb-4">
      🎉 IT'S HARRY'S BIRTHDAY 🎉
    </div>
  </div>
) : (
  <div className="mt-10">
    <p className="text-blue-300 uppercase tracking-[0.4em] text-xs mb-4">
      Countdown To Celebrate ✨
    </p>

    <div className="flex flex-wrap gap-4">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map((item) => (
        <div
          key={item.label}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-5 py-4 min-w-[90px] text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-white">
            {String(item.value).padStart(2, "0")}
          </div>

          <div className="text-xs text-slate-400 mt-1">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </div>
)}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              Celebrating the memories, adventures, laughter and beautiful moments that made this friendship unforgettable.
            </p>
            <p className="mt-8 italic text-blue-200 text-lg">
                "Some people become memories. 
                 Some become stories.
                 And some become unforgettable."
            </p>

          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />

            <img
              src={heroImages[currentImage]}
              alt="Harry"
              className="relative w-[420px] max-w-full rounded-3xl border border-white/10 bg-slate-900/50 shadow-2xl shadow-blue-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}