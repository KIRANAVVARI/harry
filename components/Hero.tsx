"use client";

import { useEffect, useState } from "react";
import Floatingstars from "./Floatingstars";

const heroImages = [
  "/images/hero/hero1.jpeg",
  "/images/hero/hero2.jpeg",
  "/images/hero/hero3.jpeg",
  "/images/hero/hero4.jpeg",
  "/images/hero/hero5.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
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
            <p className="uppercase tracking-[0.6em] text-blue-300 text-sm font-light">
              10 October
            </p>

            <h1 className="heading text-6xl md:text-8xl xl:text-9xl font-bold tracking-tight">
              Happy
            </h1>

            <h1 className="heading text-6xl md:text-8xl xl:text-9xl font-bold tracking-tight">
              Birthday
            </h1>

            <h2 className="heading text-5xl md:text-7xl text-blue-300 tracking-wide">
              Harry ❤️
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
              A celebration of friendship, adventures, memories and all the
              beautiful moments that made life brighter.
            </p>

            <a
              href="#about"
              className="mt-12 px-10 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 hover:bg-blue-500 transition-all duration-300"
            >
              Explore the Story
            </a>
          </div>
          <div className="mt-16 animate-bounce">

            <div className="text-blue-400 text-2xl">
              ↓
            </div>

            <p className="text-xs tracking-[0.3em] mt-2">
              SCROLL
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