import { FaTelegramPlane } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#202020] text-white py-12 px-6">
      <div>
        <a
          className="flex gap-2 items-center justify-center mt-4"
          href="https://t.me/baitcoinchanel"
          target="_blank"
        >
          Join Our Telegram
          <FaTelegramPlane size={30} />
        </a>
        {/* <a
          className="flex gap-2 items-center justify-center mt-4"
          href="https://t.me/baitcoin"
          target="_blank"
        >
          Join us on
          <BsTwitterX size={30} />
        </a> */}
        <div className="text-center mt-2 text-gray-400 text-sm">
          © {new Date().getFullYear()} Bait Coin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
