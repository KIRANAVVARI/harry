"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="bg-black text-white py-24">

      <h2 className="text-center text-5xl mb-16">
        Friendship In Numbers
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        <div className="text-center">
          <CountUp end={3} duration={3} />
          <p>Years</p>
        </div>

        <div className="text-center">
          <CountUp end={40} duration={3} />
          <p>Photos</p>
        </div>

        <div className="text-center">
          <CountUp end={1000} duration={3} />
          <p>Memories</p>
        </div>

        <div className="text-center">
          <CountUp end={1} duration={3} />
          <p>Irreplaceable Friend</p>
        </div>

      </div>
    </section>
  );
}