function HowItWorks() {
  const steps = [
    {
      title: "Buy BC (Bait Coin)",
      description: "Available on Solana network",
    },
    {
      title: "Share with Friends",
      description: "Spread the word and grow the community",
    },
    {
      title: "Start Fishing",
      description: "Hold BC until you're ready to fish for rewards",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#202020]">
      <h2 className="text-4xl font-bold mb-12 text-center text-amber-300">
        How It Works
      </h2>
      <div className="flex flex-wrap justify-around">
        {steps.map((step, index) => (
          <div key={index} className="w-full md:w-1/3 mb-8 px-4">
            <div className="bg-yellow-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
              {index + 1}
            </div>
            <h3 className="text-xl text-yellow-400 font-semibold mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-yellow-100 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
