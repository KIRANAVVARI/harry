"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const balloons = [
  {
    title: "Strong 💪",
    text: "Because I've seen you keep moving forward even during difficult times.",
    color: "bg-blue-400",
  },
  {
    title: "Adventurous 🏔️",
    text: "Because every trip somehow becomes a beautiful memory.",
    color: "bg-purple-400",
  },
  {
    title: "Dedicated 🎯",
    text: "Because you never stop once you decide something matters.",
    color: "bg-pink-400",
  },
  {
    title: "Supportive 🤝",
    text: "Because you've always been there when it mattered.",
    color: "bg-red-400",
  },
  {
    title: "Caring ❤️",
    text: "Because your kindness appears in the smallest moments.",
    color: "bg-cyan-400",
  },
  {
    title: "Fearless 🚀",
    text: "Because challenges never stop you.",
    color: "bg-green-400",
  },
  {
    title: "Beautiful ✨",
    text: "Not just in photos, but in the way you carry yourself.",
    color: "bg-yellow-400",
  },
  {
    title: "Determined 🔥",
    text: "Because hard work has always been one of your strengths.",
    color: "bg-orange-400",
  },
  {
    title: "Harry 💙",
    text: "And that's what makes you unforgettable.",
    color: "bg-blue-600",
  },
];

export default function ThroughMyEyes() {
  const [opened, setOpened] = useState<number[]>([]);

  const reveal = (index: number) => {
    if (!opened.includes(index)) {
      setOpened([...opened, index]);
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="heading text-5xl md:text-7xl mb-6">
          Through My Eyes ✨
        </h2>

        <p className="text-slate-400 mb-20">
          Pop the balloons and discover
          what makes you special.
        </p>

        <div className="grid md:grid-cols-3 gap-16 place-items-center">

          {balloons.map((balloon, index) => (
            <div key={index} className="relative h-60 w-60">

              {!opened.includes(index) ? (

                <motion.button
                  onClick={() => reveal(index)}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className={`
                    ${balloon.color}
                    h-36
                    w-28
                    rounded-full
                    shadow-2xl
                    mx-auto
                    relative
                  `}
                >
                  <span className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 text-white">
                    |
                  </span>

                  <span className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 text-white">
                    |
                  </span>
                </motion.button>

              ) : (

                <AnimatePresence>

                  <motion.div
                    initial={{
                      scale: 0.5,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    className="
                      bg-white/5
                      backdrop-blur-xl
                      border
                      border-white/10
                      rounded-3xl
                      p-6
                    "
                  >
                    <div className="text-3xl mb-3">
                      🎉
                    </div>

                    <h3 className="text-xl text-blue-300">
                      {balloon.title}
                    </h3>

                    <p className="text-slate-300 mt-3">
                      {balloon.text}
                    </p>
                  </motion.div>

                </AnimatePresence>

              )}

            </div>
          ))}

        </div>

        {opened.length === balloons.length && (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="mt-20"
          >
            <h2 className="heading text-5xl md:text-7xl text-blue-300">
              This Is Harry ❤️
            </h2>

            <p className="mt-6 text-slate-400">
              Strong. Caring. Adventurous.
              Supportive. Beautiful. Unforgettable.
            </p>
          </motion.div>

        )}

      </div>
    </section>
  );
}