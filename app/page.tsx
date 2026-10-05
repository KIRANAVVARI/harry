import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden text-white">
        <Image
          src="/images/hero/hero1.jpeg"
          alt="Birthday background"
          fill
          priority
          className="object-cover scale-110"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-950/90" />
        <section className="relative z-10 h-screen flex items-center justify-center text-center px-6">
          <div className="relative max-w-4xl">
            <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  h-[400px]
                  w-[400px]
                  rounded-full
                  bg-blue-500/30
                  blur-[120px]
                  -z-10
                "
              />
            <p className="uppercase tracking-[0.4em] text-blue-400 mb-6">
              10 October 2026
            </p>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
              Happy Birthday
            </h1>

            <h2 className="text-5xl md:text-7xl lg:text-8xl text-blue-400 mt-4 font-bold">
              Harry ❤️
            </h2>

            <p className="mt-8 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
              A celebration of friendship, adventures,
              memories and all the beautiful moments
              that made this journey unforgettable.
            </p>

            <button className="mt-10 px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-lg font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              Begin The Journey
            </button>

          </div>
        </section>

      </main>
    </>
  );
}