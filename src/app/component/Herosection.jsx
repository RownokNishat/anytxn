"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "../Assets/imgs/hero-section.jpg";
import web from "../Assets/backgrounds/WaveLinesDesktop3.svg";
import web4 from "../Assets/backgrounds/WaveLinesDesktop4.svg";
import Image from "next/image";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="lg:h-[90vh] flex flex-col items-center bg-blue-600 font-monts relative overflow-hidden px-[1.938rem]">
      <div className="relative w-full h-full flex flex-col lg:flex-row lg:items-center">
        {/* Text at the top for small screens, centered for large */}
        <div className="container h-fit z-10 mt-12 lg:mt-0 lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl space-y-4 mb-8 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">
              Embrace the <br /> future of finance
            </h1>
            <h5 className="text-white max-w-2xl text-lg">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation.
            </h5>
          </header>
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 w-full max-w-xl">
            <motion.a
              className="group py-4 px-10 rounded shadow-lg text-white flex items-center justify-between bg-orange-500 transition-all duration-300"
              href="/en/contact-us"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300 me-2">
                Reach Out to Us
              </span>
            </motion.a>
          </div>
        </div>

        {/* Hero image for large screens (clipped) */}
        <div
          className="hidden lg:block absolute top-0 left-[40%] lg:w-[65%] h-full pointer-events-none"
          style={{
            clipPath:
              "polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)",
          }}
        >
          <Image
            src={Hero}
            alt="Hero Section"
            width={2500}
            height={1600}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>

        {/* Image below text for small screens */}
        <div className="relative w-full lg:hidden mt-6">
          <Image
            src={Hero}
            alt="Hero Section"
            width={2500}
            height={1600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>

        {/* Background effects moving with mouse */}
        <motion.div
          className="hidden lg:block absolute h-full w-full inset-0"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          <Image src={web} alt="Web" layout="fill" objectFit="cover" />
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-[-20%] right-[10%] w-[65%] h-[50%] inset-0"
          style={{
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
          }}
        >
          <Image src={web4} alt="Web" layout="fill" objectFit="cover" />
        </motion.div>
      </div>
    </div>
  );
}
