"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ham from "../Assets/imgs/ham.svg";
import Image from "next/image";
import close from "../Assets/imgs/close.png";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="font-monts">
      <header className="bg-transparent text-white w-full py-8 px-[1.938rem] top-0 lg:absolute bg-blue-600 ">
        <div id="" className="relative z-[20]">
          <div className="container flex items-center flex-wrap justify-between ">
            <h1>
              <a aria-label="Go to home page" href="/#" rel="home">
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format"
                  width="200"
                  height="32"
                  className="w-[134px] h-auto object-contain lg:w-[170px]"
                  alt="AnyTech"
                />
              </a>
            </h1>
            <div className="flex items-center">
              <nav
                className="desktop-menu max-lg:hidden"
                aria-label="Main navigation desktop"
              >
                <ul className="flex">
                  <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                    <a href="/#" className="text-white">
                      Solutions
                    </a>
                  </li>
                  <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                    <a href="/#" className="text-white">
                      Services
                    </a>
                  </li>
                  <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                    <a href="/#" className="text-white">
                      About Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:block hidden ">
              <motion.div
                className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  className="group md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link  flex items-center justify-between bg-transparent text-white border-[1px] border-white hover:bg-white hover:border-[1px] hover:border-blue-800 hover:text-blue-800 rounded transition-all duration-300 ease-in-out"
                  href="/en/contact-us"
                >
                  {/* Text moves 5px left on hover */}
                  <span className="group-hover:-translate-x-1 transition-transform duration-300 me-2">
                    Contact Us
                  </span>

                  {/* SVG moves 5px right on hover */}
                  <div className="group">
                    <svg
                      width="6"
                      height="9"
                      viewBox="0 0 6 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 transition-transform duration-300 fill-white group-hover:fill-blue-500"
                    >
                      <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z" />
                    </svg>
                  </div>
                </a>
              </motion.div>
            </div>
            <div className="md:hidden block">
              {" "}
              {menuOpen ? (
                <Image
                  className="text-white rounded-sm w-[30px]"
                  onClick={toggleMenu}
                  src={close}
                  width={20}
                  height={20}
                  alt="Close"
                />
              ) : (
                <Image
                  onClick={toggleMenu}
                  src={ham}
                  alt="ham"
                  width={20}
                  height={20}
                  className="text-white bg-white rounded-sm w-[30px]"
                />
              )}
            </div>
          </div>
          {/* mobile */}
          {menuOpen && (
            <div className="absolute top-full right-0 bg-blue-500 pt-4 shadow-lg w-full md:w-auto py-4 flex flex-col items-center md:items-start z-50">
              <a
                href="#"
                className="text-white py-2 px-6 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                Solution
              </a>
              <a
                href="#"
                className="text-white py-2 px-6 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#"
                className="text-white py-2 px-6 transition-opacity duration-300 ease-in-out hover:underline hover:text-theme"
                onClick={toggleMenu}
              >
                About Us
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
