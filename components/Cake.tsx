"use client";

import { useState } from "react";

export default function Cake() {
  const [blown, setBlown] = useState(false);

  return (
    <section className="bg-black py-28 text-center text-white">

      <h2 className="text-5xl mb-8">
        Make A Birthday Wish
      </h2>

      <div className="text-9xl">
        🎂
      </div>

      {!blown ? (
        <button
          onClick={() => setBlown(true)}
          className="mt-8 bg-pink-500 px-8 py-4 rounded-full"
        >
          Blow The Candles
        </button>
      ) : (
        <div className="mt-8 text-2xl text-yellow-400">
          ✨ Wish Accepted ✨
        </div>
      )}

    </section>
  );
}
``