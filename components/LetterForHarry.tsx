"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LetterForHarry() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="letter"
      className="
        relative
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
      "
    >
      {!opened && (
        <motion.div
          className="text-center cursor-pointer"
          onClick={() => setOpened(true)}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="text-[150px]">✉️</div>

          <h2 className="text-5xl text-pink-300 mt-6">
            A Letter For Harry ❤️
          </h2>

          <p className="text-slate-400 mt-6 text-xl">
            Click To Open
          </p>
        </motion.div>
      )}

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              max-w-4xl
              bg-[#fdf6e3]
              text-black
              rounded-3xl
              shadow-2xl
              p-8
              md:p-14
              relative
            "
          >
            <div
              className="
                absolute
                inset-0
                opacity-10
                bg-[url('/paper-texture.png')]
              "
            />

            <h2 className="text-5xl mb-10 text-center">
              Dear Harry ❤️
            </h2>

            <div className="space-y-8 text-xl leading-relaxed">

              <p>
                If someone had told me that a random bike ride
                would become one of the most important chapters
                of my life...
                I probably wouldn't have believed it.
              </p>

              <p>
                Thank you for every ride.
                For every sunrise.
                For every memory.
              </p>

              <p>
                Thank you for turning ordinary days into
                stories I never want to forget.
              </p>

              <p>
                Thank you for being part of countless adventures,
                countless laughs,
                and countless moments that made life beautiful.
              </p>

              <p>
                I hope this year gives you happiness,
                peace,
                success,
                adventures,
                and everything your heart quietly wishes for.
              </p>

              <p>
                No matter where life takes us,
                these memories will always remain special.
              </p>

              <p>
                Happy Birthday Harry ❤️
              </p>

              <p className="text-right text-3xl mt-16">
                — Kiran
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}