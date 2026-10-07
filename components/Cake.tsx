"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white px-4">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-950/40 via-black to-black" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative text-5xl md:text-7xl font-light mb-12"
      >
        Make A Birthday Wish 🎉
      </motion.h2>

      {/* CAKE */}
      <div className="relative z-10">

        {/* Candles */}
        <div className="absolute flex gap-10 left-1/2 -translate-x-1/2 -top-24">

          {[1, 2, 3].map((n) => (
            <div key={n} className="relative flex flex-col items-center">

              <div className="w-3 h-14 bg-pink-300 rounded-full" />

              <AnimatePresence>
                {!candlesBlown && (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      y: [0, -3, 0],
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                    }}
                    className="absolute -top-6 w-5 h-7 bg-yellow-400 rounded-full blur-[1px]"
                  />
                )}
              </AnimatePresence>

              {candlesBlown && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.5, 0.2, 0],
                    y: -30,
                  }}
                  transition={{ duration: 2 }}
                  className="absolute -top-2 text-gray-400 text-xl"
                >
                  ☁️
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Cake Container */}
        <div className="relative flex">

          {/* Left Half */}
          <motion.div
            animate={{
              x: cakeCut ? -70 : 0,
              rotate: cakeCut ? -10 : 0,
            }}
            transition={{ duration: 1 }}
            className="
              w-40 h-40
              rounded-l-3xl
              bg-gradient-to-b
              from-pink-300
              via-pink-500
              to-pink-700
              border-r-2 border-black
            "
          >
            <div className="h-8 bg-white rounded-tl-3xl" />
          </motion.div>

          {/* Right Half */}
          <motion.div
            animate={{
              x: cakeCut ? 70 : 0,
              rotate: cakeCut ? 10 : 0,
            }}
            transition={{ duration: 1 }}
            className="
              w-40 h-40
              rounded-r-3xl
              bg-gradient-to-b
              from-pink-300
              via-pink-500
              to-pink-700
            "
          >
            <div className="h-8 bg-white rounded-tr-3xl" />
          </motion.div>

          {/* Cake Plate */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[420px] h-6 bg-gray-300 rounded-full" />
        </div>
      </div>

      {/* ACTION BUTTONS */}
      {!candlesBlown && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCandlesBlown(true)}
          className="mt-16 px-10 py-4 rounded-full bg-pink-500 text-lg"
        >
          Blow The Candles 🕯️
        </motion.button>
      )}

      {candlesBlown && !cakeCut && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setCakeCut(true)}
          className="mt-16 px-10 py-4 rounded-full bg-yellow-500 text-black font-semibold"
        >
          Cut The Cake 🍰
        </motion.button>
      )}

      {/* FINAL MESSAGE */}
      <AnimatePresence>
        {cakeCut && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16 text-center"
          >
            <div className="text-6xl mb-6">
              💖✨🎉✨💖
            </div>

            <h3 className="text-4xl md:text-6xl font-light">
              Happy Birthday
            </h3>

            <div className="mt-3 text-pink-400 text-5xl md:text-7xl">
              Haritha Chalumuri
            </div>

            <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-300">
              May your dreams grow bigger, your smile shine brighter,
              and every year bring you more happiness than the last.
              ❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Hearts */}
      {cakeCut &&
        Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 150,
              x: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: -400,
              x: Math.random() * 200 - 100,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute text-pink-400 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          >
            ❤️
          </motion.div>
        ))}
    </section>
  );
}