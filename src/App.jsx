import { LuSparkles, LuRocket, LuUsers, LuChartBar } from "react-icons/lu";
import { SiKick } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import bg from "./assets/animebg.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-600 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={bg}
            alt="AniMoon Logo"
            className="w-10 h-10 rounded-full object-contain"
          />
          <span className="text-2xl font-bold">AniMoon</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#features"
                className="hover:text-pink-200 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="hover:text-pink-200 transition-colors"
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#community"
                className="hover:text-pink-200 transition-colors"
              >
                Community
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 text-center bg-[url(./assets/animebg.png)] bg-contain bg-no-repeat bg-[90%]">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
          AniMoon: To the Moon with Anime Power!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          The most kawaii meme coin in the crypto universe!
        </p>
        <a
          href={import.meta.env.VITE_COIN}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 animate-bounce"
        >
          Buy AniMoon Now!
        </a>
      </section>

      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Choose AniMoon?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<LuSparkles className="w-12 h-12 mb-4" />}
            title="Anime-Inspired"
            description="Fueled by the power of anime and memes"
          />
          <FeatureCard
            icon={<LuRocket className="w-12 h-12 mb-4" />}
            title="Moon-Bound"
            description="Skyrocketing potential for massive gains"
          />
          <FeatureCard
            icon={<LuUsers className="w-12 h-12 mb-4" />}
            title="Strong Community"
            description="Join a passionate group of anime lovers"
          />
          <FeatureCard
            icon={<LuChartBar className="w-12 h-12 mb-4" />}
            title="Deflationary"
            description="Token burning mechanism for increased value"
          />
        </div>
      </section>

      <section
        id="tokenomics"
        className="container mx-auto px-4 py-20 bg-white/20 rounded-lg"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Tokenomics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <TokenomicCard percentage="100%" label="Burn liquidity" />
          <TokenomicCard percentage="20%" label="Liquidity Pool" />
          <TokenomicCard percentage="9.07%" label="Community Rewards" />
          <TokenomicCard percentage="3.14%" label="Team & Development" />
        </div>
      </section>

      <section id="community" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Join Our Vibrant Community!
        </h2>
        <div className="flex justify-center space-x-8">
          <SocialLink
            href={import.meta.env.VITE_KICK}
            icon={<SiKick className="w-8 h-8" />}
            label="Kick"
            target="_blank"
          />
          <SocialLink
            href={import.meta.env.VITE_TELEGRAM}
            icon={<FaTelegramPlane className="w-8 h-8" />}
            label="Telegram"
            target="_blank"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p>&copy; 2025 AniMoon. All rights reserved. To the moon! 🚀🌙</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/20 hover:bg-white/30 p-6 rounded-lg text-center transition-all duration-300">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function TokenomicCard({ percentage, label }) {
  return (
    <div className="p-6 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300">
      <h3 className="text-3xl font-bold mb-2">{percentage}</h3>
      <p>{label}</p>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center hover:text-pink-200 transition-colors duration-300"
    >
      {icon}
      <span className="mt-2">{label}</span>
    </a>
  );
}

export default App;
