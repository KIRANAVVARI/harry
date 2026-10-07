"use client";

import { Dancing_Script, Great_Vibes } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

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
            

            <div
  className={`${dancingScript.className} space-y-8 text-3xl md:text-4xl leading-relaxed`}
>
<p>
                Dear Harry,
              </p>

              <p>
                If someone had told me that a random bike ride
                would become one of the most important chapters
                of my life...
                I probably wouldn't have believed it.
              </p>

              <p>
                As another beautiful year of your life begins, there is only one thing I truly wish for you:
              </p>

              <p>
                I hope you are happy.
              </p>

              <p>
                Not just on your birthday. Not just on the good days.
              </p>

              <p>
                I hope you find the kind of happiness that stays with you through ordinary mornings, quiet evenings, long journeys, unexpected adventures, and every little moment in between.
              </p>

              <p>
                I wish for you a life filled with peace, purpose, laughter, and countless reasons to smile.
              </p>

              <p>
                I hope every dream you carry in your heart finds its way into reality.
              </p>

              <p>
                I hope every road you choose leads you to places that make you feel alive.
              </p>

              <p>
                I hope you never stop exploring, never stop believing in yourself, and never stop becoming the wonderful person you were always meant to be.
              </p>

              <p>
                You deserve success.
              </p>

              <p>
                You deserve respect.
              </p>

              <p>
                You deserve love.
              </p>

              <p>
                And more than anything, you deserve a life that feels full.
              </p>

              <p>
                Thank you for the memories, the smiles, the rides, the conversations, and for being a part of a story that I will always consider special.
              </p>

              <p>
                Life may take people in different directions, and the future may unfold in ways neither of us can predict.
              </p>

              <p>
                But there is something I want you to remember.
              </p>

              <p>
                No matter where life takes you...
              </p>

              <p>
                No matter how much time passes...
              </p>

              <p>
                No matter what challenges come your way...
              </p>

              <p>
                If there ever comes a day when you need help, support, a friend to listen, a shoulder to lean on, or simply someone who genuinely wishes the best for you...
              </p>

              <p>
                I will be here.
              </p>

              <p>
                Not because I have to.
              </p>

              <p>
                But because I want to.
              </p>

              <p>
                Because some people become important to us in ways that time cannot easily erase.
              </p>

              <p>
                So today, on your birthday, I don't ask for anything.
              </p>

              <p>
                I simply pray that your life is filled with love, good health, meaningful relationships, unforgettable adventures, and the happiness that you truly deserve.
              </p>

              <p>
                May this year be kinder to you.
              </p>

              <p>
                May it surprise you in the best possible ways.
              </p>

              <p>
                May it give you stories worth telling, memories worth keeping, and moments worth cherishing forever.
              </p>

              <p>
                Happy Birthday, Harry. ❤️
              </p>

              <p>
                May your smile always stay brighter than your worries, and may your heart always find its way back to peace.
              </p>

              <p>
                With warmth, respect, and endless good wishes,
              </p>

              <p className={greatVibes.className} style={{ fontSize: "2.5rem" }}>
                — Mahi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}