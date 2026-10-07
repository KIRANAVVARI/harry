"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = Array.from(
  { length: 51 },
  (_, i) =>
    `/images/gallery/gallery${String(i + 1).padStart(2, "0")}.jpeg`
);

export default function BirthdayFinale() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === photos.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="birthday" className="relative min-h-screen overflow-hidden bg-black">

      {/* Slideshow */}

      <AnimatePresence mode="wait">
        <motion.img
          key={photos[current]}
          src={photos[current]}
          alt=""
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            absolute
            inset-0
            h-full
            w-[900px]
            h-[900px]
            rounded-full
            bg-pink-500/20
            blur-[220px]
          "
        />
      </AnimatePresence>

      {/* Text */}

      <div
        className="
          relative
          z-20
          flex
          flex-col
          justify-center
          items-center
          min-h-screen
          text-center
          px-6
        "
      >

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-5xl
            md:text-8xl
            font-bold
            text-white
            tracking-wide
          "
        >
          HAPPY BIRTHDAY
        </motion.h1>

        <motion.h2
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
                cursive-title
                mt-8
                text-5xl
                md:text-8xl
                text-pink-300
                "
          style={{
            textShadow:
              "0 0 20px #f9a8d4, 0 0 50px #f9a8d4",
          }}
        >
          Haritha Chalumuri ❤️
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="
            mt-10
            text-lg
            md:text-2xl
            text-slate-200
            max-w-4xl
          "
        >
          May every dream find its way to reality.
          <br />
          May every road lead to happiness.
          <br />
          May this year be your most beautiful one yet.
        </motion.p>

      </div>
    </section>
  );
}