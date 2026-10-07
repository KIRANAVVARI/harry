"use client";

import { motion } from "framer-motion";

export default function BirthdayFinale() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-pink-500/20
          blur-[220px]
        "
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            text-6xl
            md:text-9xl
            font-bold
            text-pink-300
          "
          style={{
            textShadow:
              "0 0 20px #f9a8d4, 0 0 60px #f9a8d4",
          }}
        >
          HAPPY BIRTHDAY
        </motion.h1>

        <motion.h2
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            text-5xl
            md:text-8xl
            mt-10
            text-white
          "
        >
          ❤️ HARRY ❤️
        </motion.h2>

        <p className="mt-12 text-2xl text-slate-300 max-w-4xl">
          May all your roads lead to happiness,
          may every dream find its way to reality,
          and may this year be your best one yet.
        </p>

        <div className="text-7xl mt-16">
          🎂 🎉 ✨ 🍫 ❤️
        </div>

      </div>

    </section>
  );
}