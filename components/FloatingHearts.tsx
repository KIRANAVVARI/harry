"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed text-pink-400 text-2xl pointer-events-none z-0"
          initial={{
            y: "100vh",
            x: Math.random() * 1000,
            opacity: 0.4,
          }}
          animate={{
            y: "-100vh",
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}