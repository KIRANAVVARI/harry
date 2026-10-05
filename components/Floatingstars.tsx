"use client";

export default function FloatingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute text-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          ✦
        </div>
      ))}

    </div>
  );
}