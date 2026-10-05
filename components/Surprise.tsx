"use client";

import confetti from "canvas-confetti";

export default function Surprise() {

  const celebrate = () => {
    confetti({
      particleCount: 300,
      spread: 180,
    });
  };

  return (
    <section className="bg-black text-white py-32 text-center px-6">

      <h2 className="text-5xl mb-10">
        One Last Surprise 🎁
      </h2>

      <button
        onClick={celebrate}
        className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full text-xl"
      >
        Open Gift
      </button>

      <p className="mt-10 max-w-xl mx-auto text-gray-300">
        Congratulations ❤️
        <br />
        You have won my heart.
        <br />
        No expiration.
        No conditions.
        No limitations.
      </p>

    </section>
  );
}