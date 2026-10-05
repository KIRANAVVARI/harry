import { memories } from "@/data/memories";

export default function Timeline() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-center text-4xl md:text-6xl font-bold mb-20">
          Our Journey
        </h2>

        <div className="space-y-10">

          {memories.map((memory, index) => (
            <div
              key={index}
              className="border border-blue-900 bg-white/5 backdrop-blur-lg rounded-3xl p-8"
            >
              <h3 className="text-2xl mb-3 text-blue-400">
                {memory.title}
              </h3>

              <p className="text-gray-300">
                {memory.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}