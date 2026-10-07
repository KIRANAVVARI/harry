"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import ChocolateRain from "./ChocolateRain";

const revealImages = [
  "/images/special/special1.jpeg",
  "/images/special/special2.jpeg",
  "/images/special/special3.jpeg",
  "/images/special/special4.jpeg",
  "/images/special/special5.jpeg",
  "/images/special/special6.jpeg",
  "/images/special/special7.jpeg",
  "/images/special/special8.jpeg",
];

const stars = [
  {
    id: 1,
    x: "15%",
    y: "18%",
    title: "Strong 💪",
    text: "Because I've seen you keep moving forward through every challenge.",
  },
  {
    id: 2,
    x: "72%",
    y: "15%",
    title: "Adventurous 🏔️",
    text: "Because every journey becomes a memory worth keeping.",
  },
  {
    id: 3,
    x: "42%",
    y: "28%",
    title: "Dedicated 🎯",
    text: "Because when something matters to you, you give it everything.",
  },
  {
    id: 4,
    x: "82%",
    y: "42%",
    title: "Supportive 🤝",
    text: "Because you've always been there when it mattered.",
  },
  {
    id: 5,
    x: "18%",
    y: "52%",
    title: "Caring ❤️",
    text: "Because kindness appears in the smallest moments.",
  },
  {
    id: 6,
    x: "58%",
    y: "62%",
    title: "Fearless 🚀",
    text: "Because challenges never stop you.",
  },
  {
    id: 7,
    x: "10%",
    y: "76%",
    title: "Beautiful ✨",
    text: "Not just in photos, but in the way you carry yourself.",
  },
  {
    id: 8,
    x: "76%",
    y: "77%",
    title: "Determined 🔥",
    text: "Because hard work has always been one of your strengths.",
  },
  {
    id: 9,
    x: "45%",
    y: "86%",
    title: "Harry 💙",
    text: "And that's what makes you unforgettable.",
  },
];

export default function ThroughMyEyes() {
  const [opened, setOpened] = useState<number[]>([]);
  const [slide, setSlide] = useState(0);
  const [showChocolateRain, setShowChocolateRain] = useState(false);
  const [feeding, setFeeding] = useState(false);
  const triggerChocolateRain = () => {
  setFeeding(true);

  setShowChocolateRain(false);

  setTimeout(() => {
    setShowChocolateRain(true);

    setTimeout(() => {
      setShowChocolateRain(false);
      setFeeding(false);
    }, 8000);
  }, 50);
};
  const allOpened = opened.length === stars.length;
  useEffect(() => {
  if (!allOpened) return;

  setShowChocolateRain(true);

  const timer = setTimeout(() => {
    setShowChocolateRain(false);
  }, 8000);

  return () => clearTimeout(timer);
}, [allOpened]);

  const reveal = (id: number) => {
    if (!opened.includes(id)) {
      setOpened([...opened, id]);
    }
  };

  useEffect(() => {
    if (!allOpened) return;

    const timer = setInterval(() => {
      setSlide((prev) =>
        prev === revealImages.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(timer);
  }, [allOpened]);

  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-950 overflow-hidden py-24"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="heading text-5xl md:text-7xl mb-6">
          Through My Eyes ✨
        </h2>

        <p className="text-slate-400">
          Discover the constellation that tells your story.
        </p>

        <p className="mt-6 text-blue-300">
          Constellation Completed:{" "}
          {Math.round((opened.length / stars.length) * 100)}%
        </p>

      </div>

      <div className="relative h-[1000px]">

        {/* constellation lines */}

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {opened.length >= 2 && (
            <line
              x1="18%"
              y1="18%"
              x2="42%"
              y2="28%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}

          {opened.length >= 3 && (
            <line
              x1="42%"
              y1="28%"
              x2="72%"
              y2="15%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}

          {opened.length >= 4 && (
            <line
              x1="72%"
              y1="15%"
              x2="82%"
              y2="42%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}

          {opened.length >= 5 && (
            <line
              x1="82%"
              y1="42%"
              x2="58%"
              y2="62%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}

          {opened.length >= 6 && (
            <line
              x1="58%"
              y1="62%"
              x2="18%"
              y2="52%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}

          {opened.length >= 7 && (
            <line
              x1="18%"
              y1="52%"
              x2="10%"
              y2="76%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}

          {opened.length >= 8 && (
            <line
              x1="10%"
              y1="76%"
              x2="76%"
              y2="77%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}

          {opened.length >= 9 && (
            <line
              x1="76%"
              y1="77%"
              x2="45%"
              y2="86%"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          )}
        </svg>

        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: star.x,
              top: star.y,
            }}
          >
            <motion.button
              onClick={() => reveal(star.id)}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className={`text-4xl ${
                opened.includes(star.id)
                  ? "text-blue-300"
                  : "text-white"
              }`}
            >
              ✦
            </motion.button>

            {!allOpened &&
              opened.includes(star.id) && (
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
                    mt-4
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-blue-400/20
                    rounded-3xl
                    p-5
                  "
                >
                  <h3 className="text-blue-300 text-xl mb-2">
                    {star.title}
                  </h3>

                  <p className="text-slate-300">
                    {star.text}
                  </p>
                </motion.div>
            )}
          </div>
        ))}

        {allOpened && (
          <AnimatePresence>

            {showChocolateRain && <ChocolateRain />}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
                absolute
                inset-0
                flex
                flex-col
                items-center
                justify-center
                text-center
                z-50
              "
            >
              <div className="absolute h-[700px] w-[700px] rounded-full bg-blue-500/20 blur-[180px]" />

              <img
                src={revealImages[slide]}
                alt="Harry"
                className="
                  w-64
                  h-64
                  md:w-80
                  md:h-80
                  rounded-full
                  object-cover
                  border-4
                  border-blue-400
                  shadow-[0_0_60px_rgba(59,130,246,0.5)]
                  z-10
                "
              />

              <div className="mt-6 flex flex-wrap justify-center gap-3 z-10">
                {[
                  "Supportive",
                  "Determined",
                  "Fearless",
                  "Adventurous",
                  "Dedicated",
                  "Unforgettable",
                  "Beautiful",
                  "Caring",
                  "Strong",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      px-5
                      py-3
                      rounded-full
                      bg-blue-500/10
                      border
                      border-blue-400/20
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="
                  heading
                  text-center
                  text-6xl
                  md:text-8xl
                  text-blue-300
                  mt-10
                "
              >
                This Is Harry ❤️
              </motion.h2>
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.5,
                }}
                className="
                  text-2xl
                  md:text-4xl
                  text-yellow-300
                  mt-6
                  font-bold
                "
              >
                WARNING 🍫
                <br />
                Excessive Sweetness Detected
              </motion.h3>

              <p className="mt-8 text-slate-300 z-10">
                <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2,
              }}
              className="
                mt-10
                text-lg
                text-slate-300
                max-w-3xl
                mx-auto
              "
            >
              Because every birthday deserves
              extra sweetness.
              🍫✨❤️
            </motion.p>
            <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-4xl mt-4"
              >
                🍫 🍩 🍪 🍬
              </motion.div>
            <motion.button
              onClick={triggerChocolateRain}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px rgba(234,179,8,0.4)",
                  "0 0 30px rgba(234,179,8,0.8)",
                  "0 0 0px rgba(234,179,8,0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                mt-8
                px-8
                py-4
                bg-yellow-500
                rounded-full
                text-black
                font-bold
                z-20
              "
            >
              {feeding
                  ? "Deploying Chocolates... 🍫🚀"
                  : "Feed Harry More Chocolates 🍫"}
            </motion.button>
            ``
              </p>

            </motion.div>

          </AnimatePresence>
        )}

      </div>
    </section>
  );
}