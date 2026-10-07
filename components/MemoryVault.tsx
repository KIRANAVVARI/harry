"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = Array.from(
  { length: 51 },
  (_, i) =>
    `/images/gallery/gallery${String(i + 1).padStart(2, "0")}.jpg`
);

export default function MemoryVault() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            heading
            text-center
            text-5xl
            md:text-8xl
            mb-10
          "
        >
          Memory Vault 📸
        </motion.h2>

        <p className="text-center text-slate-400 mb-24">
          51 memories. One beautiful story.
        </p>

        {/* POLAROID WALL */}

        <div className="columns-2 md:columns-4 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                zIndex: 999,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2 + (index % 5),
                repeat: Infinity,
              }}
              onClick={() => setSelected(photo)}
              className="
                cursor-pointer
                break-inside-avoid
                bg-white
                p-3
                rounded-lg
                shadow-2xl
              "
              style={{
                rotate: `${(index % 8) - 4}deg`,
              }}
            >
              <img
                src={photo}
                alt=""
                className="w-full h-auto rounded-md object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelected(null)}
            className="
              fixed
              inset-0
              bg-black/90
              backdrop-blur-lg
              z-[999]
              flex
              items-center
              justify-center
              p-6
            "
          >
            <motion.img
              initial={{
                scale: 0.7,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.7,
              }}
              src={selected}
              alt=""
              className="
                max-h-[90vh]
                max-w-[90vw]
                rounded-3xl
                shadow-[0_0_80px_rgba(255,255,255,0.15)]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
   