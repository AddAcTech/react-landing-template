import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaBitcoin } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#202020] py-4 px-6 flex justify-between items-center relative">
      <a
        href="/"
        className="flex items-center px-2 py-1 rounded-full text-yellow-500"
      >
        <FaBitcoin size={30} />
        <p className="text-xl font-bold w-full ml-2">Bait Coin</p>
      </a>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <GrClose size={30} className="text-white" />
        ) : (
          <RxHamburgerMenu size={30} className="text-white" />
        )}
      </div>
      {/* Menú móvil */}
      <nav
        className={`absolute z-30 justify-center gap-20 top-full left-0 w-full bg-black opacity-90 flex flex-col items-center transition-all duration-300 ease-in-out 
        ${
          isOpen ? "block py-4" : "hidden"
        } md:relative md:flex md:flex-row md:items-center md:bg-transparent md:py-0`}
        onClick={toggleMenu}
      >
        <a
          href="#features"
          className="block py-2 text-white hover:text-yellow-500 font-bold transition-all duration-300 ease-in-out"
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="block py-2 text-white hover:text-yellow-500 font-bold transition-all duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          How It Works
        </a>
        <a
          href="#cta"
          className="block py-2 text-white hover:text-yellow-500 font-bold transition-all duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Header;
