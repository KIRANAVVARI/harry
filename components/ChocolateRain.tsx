"use client";

import { motion } from "framer-motion";

const chocolates = [
  "🍫",
  "🍩",
  "🍬",
  "🍪",
  "🍫",
  "🍫",
  "🍩",
  "🍬",
];

export default function ChocolateRain() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: "-100px",
          }}
          animate={{
            y: ["0vh", "120vh"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "linear",
          }}
        >
          {
            chocolates[
              Math.floor(Math.random() * chocolates.length)
            ]
          }
        </motion.div>
      ))}
    </div>
  );
}
