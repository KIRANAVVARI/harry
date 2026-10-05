const traits = [
  "Strong",
  "Adventurous",
  "Determined",
  "Supportive",
  "Caring",
  "Fearless",
  "Beautiful",
  "Dedicated",
  "Unforgettable",
];

export default function AboutHarry() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="heading text-center text-5xl mb-16">
          Who Is Harry?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {traits.map((trait) => (
            <div
              key={trait}
              className="glass rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl">
                {trait}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}