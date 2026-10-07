"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LetterForHarry() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-32">

      <div className="max-w-5xl mx-auto px-6">

        {!opened && (
          <div className="flex flex-col items-center justify-center min-h-[70vh]">

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="cursor-pointer"
              onClick={() => setOpened(true)}
            >
              <div className="text-[180px]">✉️</div>
            </motion.div>

            <p className="text-slate-300 text-xl mt-8">
              One Last Thing...
            </p>

          </div>
        )}

        {opened && (
          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-10
              md:p-16
            "
          >

            <h2 className="text-5xl md:text-7xl text-pink-300 mb-12 text-center">
              Dear Harry ❤️
            </h2>

            <div className="space-y-8 text-slate-200 text-xl leading-relaxed">

              <p>
                If someone had told me that a random bike ride
                would become one of the most important chapters
                of my life, I probably wouldn't have believed it.
              </p>

              <p>
                Thank you for every ride.
                Every sunrise.
                Every laugh.
                Every memory.
              </p>

              <p>
                Thank you for turning ordinary days into stories
                worth remembering forever.
              </p>

              <p>
                I hope this year gives you everything your heart
                quietly wishes for...
              </p>

              <p>
                Happiness.
                Success.
                Peace.
                Adventures.
                And countless beautiful moments.
              </p>

              <p>
                No matter where life takes us,
                these memories will always remain special.
              </p>

              <p>
                Thank you for being part of my story.
              </p>

            </div>

            <h3 className="mt-16 text-right text-3xl text-pink-300">
              ❤️ Kiran
            </h3>

          </motion.div>
        )}

      </div>

    </section>
  );
}