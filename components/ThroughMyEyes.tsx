"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const qualities = [
  {
    title: "Str",
    text: "Because I've seen you keep moving forward through every challenge.",
  },
  {
    title: "Adventurous 🏔️",
    text: "Because every trip becomes a memory worth keeping.",
  },
  {
    title: "Dedicated 🎯",
    text: "Because when you commit, you give your best.",
  },
  {
    title: "Supportive 🤝",
    text: "Because you've always been there when it mattered.",
  },
  {
    title: "Caring ❤️",
    text: "Because your kindness appears in the smallest moments.",
  },
  {
    title: "Fearless 🚀",
    text: "Because challenges never stop you.",
  },
  {
    title: "Beautiful ✨",
    text: "Inside and out.",
  },
  {
    title: "Determined 🔥",
    text: "Because hard work is one of your superpowers.",
  },
  {
    title: "Harry 💙",
    text: "And that's what makes you unforgettable.",
  },
];

export default function ThroughMyEyes() {
  const [opened, setOpened] = useState<number[]>([]);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-950 overflow-hidden py-24"
    >
      <div className="text-center mb-20">

        <h2 className="heading text-5xl md:text-7xl">
          Through My Eyes ✨
        </h2>

        <p className="text-slate-400 mt-6">
          Pop the balloons and discover
          what makes you special.
        </p>

      </div>

      <div className="relative h-[900px]">

        {qualities.map((item, index) => {

          const top = 80 + Math.random() * 650;
          const left = 10 + Math.random() * 75;

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top,
                left: `${left}%`,
              }}
            >
              {!opened.includes(index) ? (

                <motion.button
                  onClick={() =>
                    setOpened([...opened, index])
                  }
                  animate={{
                    y: [0, -20, 0],
                    rotate: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="text-7xl"
                >
                  🎈
                </motion.button>

              ) : (

                <motion.div
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  className="
                    w-72
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    rounded-3xl
                    p-5
                    shadow-xl
                  "
                >
                  <div className="text-3xl mb-3">
                    🎉
                  </div>

                  <h3 className="text-blue-300 text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-300">
                    {item.text}
                  </p>

                </motion.div>

              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <p className="text-blue-300">
          {opened.length} / 9 Memories Discovered
        </p>
      </div>
    </section>
  );
}
``