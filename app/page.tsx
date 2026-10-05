import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="min-h-screen flex items-center pt-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="uppercase tracking-[0.4em] text-blue-400 mb-6">
                10 October 2026
              </p>

              <h1 className="text-6xl md:text-8xl xl:text-9xl font-black leading-none">
                Happy Birthday
              </h1>

              <h2 className="text-5xl md:text-7xl text-blue-400 mt-4 font-bold">
                Haritha Chalumuri ❤️
              </h2>

              <p className="mt-8 text-slate-300 text-lg leading-8">
                A celebration of friendship,
                adventures, memories and all
                the beautiful moments that made
                this journey unforgettable.
              </p>

              <button className="mt-10 px-10 py-4 rounded-full bg-blue-600 text-lg font-semibold shadow-xl shadow-blue-500/30 hover:scale-105 transition-all duration-300">
                Begin The Journey
              </button>
            </div>

            {/* Right Photo */}
            <div className="relative flex justify-center items-center">
              <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[100px]" />

              <img
                src="/images/hero/hero1.jpeg"
                alt="Harry"
                className="
                  w-full
                  max-w-[500px]
                  h-auto
                  rounded-[30px]
                  shadow-2xl
                  shadow-blue-500/20
                  border
                  border-slate-700
                  object-cover
                "
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
  