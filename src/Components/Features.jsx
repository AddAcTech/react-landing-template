function Features() {
  const features = [
    {
      title: "Revolutionary Security",
      description:
        "Built on blockchain technology for unmatched security that challenges the status quo.",
    },
    {
      title: "Unmatched Speed",
      description:
        "Lightning-fast transactions worldwide, breaking down barriers and intermediaries.",
    },
    {
      title: "Power to the People",
      description:
        "No central authority, fully community-driven. Empower yourself today!",
    },
    {
      title: "Join the Revolution",
      description:
        "Break free from traditional capitalism. Buy our coin and be part of the change.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-yellow-100">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Why Choose Bait Coin?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md bg-yellow-200 border"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
