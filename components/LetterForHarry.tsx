"use client";

import { motion } from "framer-motion";

const lines = [
  "Before you go...",
  "There is something I never wanted this story to end without saying.",
  "Thank you for every ride.",
  "Thank you for every sunrise.",
  "Thank you for every memory.",
  "Thank you for being you.",
  "You turned ordinary moments into memories I never want to forget.",
  "Happy Birthday Harry ❤️",
  "- Kiran",
];

export default function LetterForHarry() {
  return (
    <section className="relative min-h-screen bg-black py-32 overflow-hidden">

      <div className="max-w-5xl mx-auto px-6">

        {lines.map((line, index) => (
          <motion.div
            key={line}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.3,
              duration: 0.8,
            }}
            className="text-center"
          >
            <p
              className={`
                ${
                  index === 7
                    ? "text-5xl md:text-8xl text-pink-300 mt-20"
                    : "text-xl md:text-3xl text-slate-200"
                }
                mb-10
              `}
            >
              {line}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}