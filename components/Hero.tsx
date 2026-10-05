"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-4xl md:text-6xl mt-5"
        >
          Haritha ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 text-xl"
        >
          A journey through our beautiful memories
        </motion.p>
      </div>
    </section>
  );
}