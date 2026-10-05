"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-slate-950 to-black" />

      <div className="relative z-10 text-center px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.3em] text-blue-300"
        >
          10 October
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mt-6"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-6xl mt-4 text-blue-400"
        >
          Harry ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto mt-8 text-gray-300"
        >
          A celebration of memories, adventures,
          friendship and all the moments that made life brighter.
        </motion.p>

      </div>
    </section>
  );
}