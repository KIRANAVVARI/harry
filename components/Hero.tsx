"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-5 tracking-[0.4em] text-blue-300 uppercase"
        >
          October 10 • Birthday Special
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-5 text-4xl md:text-6xl text-blue-400"
        >
          Harry ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 max-w-3xl text-lg md:text-2xl text-gray-300"
        >
          A story about a girl who turned ordinary moments
          into unforgettable memories.
        </motion.p>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-20 text-blue-400"
        >
          ↓ Scroll To Begin
        </motion.div>
      </div>
    </section>
  );
}