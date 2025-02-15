function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('./src/assets/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Bait Coin
        </h1>
        <p className="text-xl md:text-2xl mb-8">The memecoin from the future</p>
        <a
          href="https://react-icons.github.io/react-icons/search/#q=bitcoin"
          target="_blank"
          className="bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 text-lg"
        >
          Go Fishing
        </a>
      </div>
    </section>
  );
}

export default Hero;
