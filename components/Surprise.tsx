"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Surprise() {
  const [opened, setOpened] = useState(false);

  const openGift = () => {
    setOpened(true);

    confetti({
      particleCount: 250,
      spread: 180,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
      });
    }, 500);
  };

  return (
    <section id="gift" className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-6 text-center">

      {!opened && (
        <>
          <h2 className="text-white text-5xl md:text-7xl mb-10">
            One Last Surprise 🎁
          </h2>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[150px]"
          >
            🎁
          </motion.div>

          <button
            onClick={openGift}
            className="mt-8 px-8 py-4 rounded-full bg-pink-500 hover:bg-pink-400 text-white text-xl"
          >
            Open Your Gift ❤️
          </button>
        </>
      )}

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-[180px]"
            >
              ❤️
            </motion.div>

            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl text-pink-400 font-bold"
            >
              You Won My Heart
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="max-w-2xl mt-8 text-xl text-gray-300 leading-relaxed"
            >
              Congratulations ❤️
              <br />
              This heart is now officially yours.
              <br />
              No expiry date.
              <br />
              No terms and conditions.
              <br />
              No limitations.
              <br />
              No take-backs.
              <br />
              Just endless wishes for your happiness.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {opened &&
        [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 150,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: -600,
              x: Math.random() * 400 - 200,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute text-pink-500 text-3xl"
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