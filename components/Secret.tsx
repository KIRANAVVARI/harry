"use client";

import { useState } from "react";

export default function Secret() {
  const [show, setShow] = useState(false);

  return (
    <section className="bg-gradient-to-b from-black to-blue-950 py-24 text-white text-center">

      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 px-8 py-4 rounded-full"
      >
        Open Secret Gift 🎁
      </button>

      {show && (
        <div className="mt-10 text-2xl">

          ❤️ Congratulations ❤️

          <br />
          <br />

          You Have Won My Heart

          <br />

          No Expiration.

          <br />

          No Limitations.

          <br />

          Lifetime Validity.

        </div>
      )}
    </section>
  );
}