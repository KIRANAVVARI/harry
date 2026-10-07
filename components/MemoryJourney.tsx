"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    date: "26 Nov 2023",
    title: "The First Ride ❤️",
    image: "/images/timeline/01-isha.jpeg",
    text: "The ride to Isha Foundation where everything quietly began.",
  },
  {
    date: "27 Nov 2023",
    title: "Nandi Hills Sunrise 🌄",
    image: "/images/timeline/02-nandihills.jpeg",
    text: "A sunrise that turned strangers into friends.",
  },
  {
    date: "Nov 2023",
    title: "Desk 45 & Desk 46 💻",
    image: "/images/timeline/03-desk4546.jpeg",
    text: "The little workplace corner where countless conversations began.",
  },
  {
    date: "01 Dec 2023",
    title: "Skandagiri Trek ⛰️",
    image: "/images/timeline/04-skandagiri.jpeg",
    text: "Cold winds, sunrise views and memories that stayed forever.",
  },
  {
    date: "Jun 2024",
    title: "Kedarnath Journey 🕉️",
    image: "/images/timeline/05-kedarnath.jpeg",
    text: "A journey of faith, trust, and unforgettable moments.",
  },
  {
    date: "Jun 2024",
    title: "Badrinath ✨",
    image: "/images/timeline/06-badrinath.jpeg",
    text: "Devotion, gratitude, and peaceful memories.",
  },
  {
    date: "Jun 2024",
    title: "Mathura & Vrindavan 💙",
    image: "/images/timeline/07-mathura.jpeg",
    text: "Where stories of Krishna felt closer than ever.",
  },
  {
    date: "Jun 2024",
    title: "Haridwar 🌊",
    image: "/images/timeline/08-haridwar.jpeg",
    text: "Moments beside the Ganga that brought calm and clarity.",
  },
  {
    date: "Jul 2024",
    title: "Udupi & Murudeshwar 🌴",
    image: "/images/timeline/09-udupi.jpeg",
    text: "Rainy roads, temples, beaches and shared smiles.",
  },
  {
    date: "Dec 2024",
    title: "Manali Snowfall ❄️",
    image: "/images/timeline/10-manali.jpeg",
    text: "Snowflakes, mountains and memories frozen in time.",
  },
  {
    date: "2025",
    title: "The Coorg Chapter ☕",
    image: "/images/timeline/11-coorg.jpeg",
    text: "Roads, coffee estates and endless conversations.",
  },
  {
    date: "May 2025",
    title: "Family Day 🫶",
    image: "/images/timeline/12-familyday.jpeg",
    text: "Where friends slowly began feeling like family.",
  },
  {
    date: "Oct 2026",
    title: "The Birthday ❤️",
    image: "/images/timeline/13-birthday.jpeg",
    text: "A birthday filled with surprises, effort and love.",
  },
  {
    date: "Oct 2026",
    title: "Wayanad Diaries 🌿",
    image: "/images/timeline/14-wayanad.jpeg",
    text: "The perfect ending to a beautiful chapter.",
  },
];

export default function MemoryJourney() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            heading
            text-center
            text-5xl
            md:text-7xl
            mb-24
          "
        >
          Our Journey Through Time ❤️
        </motion.h2>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-52 bottom-32 w-[2px] bg-blue-500/30 -translate-x-1/2 hidden md:block" />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className={`
              relative
              flex
              flex-col
              md:flex-row
              items-center
              gap-10
              mb-28
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Dot */}
            <div
              className="
                hidden md:block
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                h-5
                w-5
                rounded-full
                bg-blue-400
                shadow-[0_0_20px_rgba(96,165,250,1)]
              "
            />

            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-[520px] h-[280px] md:h-[340px] object-cover rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/10"
            />

            <div className="w-full md:w-[420px] text-center md:text-left">
              <p className="text-blue-200 text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-semibold">
                {item.date}
              </p>

              <h3 className="text-3xl md:text-4xl text-blue-300 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Finale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-center py-28"
        >
          <motion.h2
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              text-6xl
              md:text-8xl
              font-bold
              text-pink-300
              mb-10
            "
          >
            ❤️ Harry ❤️
          </motion.h2>

          <p
            className="
              text-2xl
              md:text-4xl
              text-slate-300
              leading-relaxed
              max-w-4xl
              mx-auto
            "
          >
            14 Moments.
            <br />
            1000 Memories.
            <br />
            1 Harry.
          </p>

          <p className="mt-10 text-slate-400 text-xl">
            Some journeys become stories.
            <br />
            Ours became a constellation of memories. ✨
          </p>
        </motion.div>

      </div>
    </section>
  );
}