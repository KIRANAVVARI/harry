const memories = [
  {
    year: "2023 November",
    title: "Isha Foundation",
    image: "public/images/timeline/01-isha.jpeg",
    text: "Where everything began."
  },
  {
    year: "2023 December",
    title: "Nandi Hills",
    image: "public/images/timeline/02-nandihills.jpeg",
    text: "Sunrises become memories."
  },
  {
    year: "2024 May",
    title: "Kedarnath",
    image: "public/images/timeline/05-kedarnath.jpeg",
    text: "Faith, mountains and friendship."
  },
  {
    year: "2024 December",
    title: "Manali",
    image: "public/images/timeline/10-manali.jpeg",
    text: "Snow, smiles and stories."
  },
  {
    year: "2025 October",
    title: "Wayanad Birthday",
    image: "public/images/timeline/14-wayanad.jpeg",
    text: "One very special birthday journey."
  }
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="heading text-center text-5xl mb-20">
          Our Best Memories
        </h2>

        <div className="space-y-16">

          {memories.map((item) => (
            <div
              key={item.title}
              className="glass rounded-3xl overflow-hidden"
            >
              {item.image}

              <div className="p-8">

                <p className="text-blue-400">
                  {item.year}
                </p>

                <h3 className="text-3xl mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {item.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}