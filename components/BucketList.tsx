const goals = [
  "Visit Varanasi",
  "Ladakh Bike Trip",
  "Annapurna Base Camp",
  "Foreign Adventure",
  "Lifetime Friendship",
];

export default function BucketList() {
  return (
    <section id="bucketlist" className="bg-blue-950 text-white py-24">

      <h2 className="text-center text-5xl mb-16">
        Future Adventures I wish to do with you ❤️
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        {goals.map((goal) => (
          <div
            key={goal}
            className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-blue-500"
          >
            ✅ {goal}
          </div>
        ))}

      </div>

    </section>
  );
}
``