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
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <section className="relative z-10 h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.4em] text-blue-400 mb-6">
              10 October 2026
            </p>

            <h1 className="text-6xl md:text-8xl font-bold">
              Happy Birthday
            </h1>

            <h2 className="text-5xl md:text-7xl text-blue-400 mt-4">
              Harry ❤️
            </h2>

            <p className="mt-8 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
              A celebration of friendship, adventures,
              memories and all the beautiful moments
              that made this journey unforgettable.
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300">
              Begin The Journey
            </button>

          </div>
        </section>

      </main>
    </>
  );
}