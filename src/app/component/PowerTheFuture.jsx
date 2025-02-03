"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Power from "../Assets/imgs/power.avif";
import fofBackground from "../Assets/imgs/fof-background.svg";
import fofBg from "../Assets/imgs/fof-bg.png";
import "../../app/globals.css";
import { motion, useScroll, useTransform } from "framer-motion";

const floatingAnimation = {
  y: [-10, 10, -10], // Moves up 10px, down 10px, back up
  transition: {
    duration: 7, // Speed between 3-4 seconds
    repeat: Infinity,
    ease: "easeInOut",
  },
};
const floatingDownAnimation = {
  y: [10, -10, 10], // Moves up 10px, down 10px, back up
  transition: {
    duration: 7, // Speed between 3-4 seconds
    repeat: Infinity,
    ease: "easeInOut",
  },
};
const PowerTheFuture = () => {
  const { scrollY } = useScroll(); // Track vertical scroll

  //   // Limit movement range (-20px to 20px) → Adjust values for smoother effect
  const yTranslate = useTransform(scrollY, [0, 1000], [-30, 30]);
  return (
    <section className="container mt-[62px] mx-auto px-[1.938rem] ">
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px] relative">
        <div className="md:space-y-[24px] space-y-[20px]">
          <h6 className="lg:text-sm lg:leading-6 tracking-widest font-bold text-[rgba(31,128,240,0.8)]  font-monts">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <p className="lg:text-[52px] leading-[110%] sm:text-[32px] sm:leading-[120%] font-semibold text-[rgba(11,48,91)] whitespace-pre-line font-monts">
            Uncovering new ways to delight customers
          </p>
          <div className="block md:hidden relative h-fit lg:text-clip my-8">
            <figure
              className="w-[76%] mx-auto"
              style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
            >
              <Image
                className="object-cover w-full h-full"
                sizes="(min-width: 1024px) 45vw, 95vw"
                src={Power}
                alt="Power The Future"
                width={1124}
                height={1364}
              />
            </figure>
            <div>
              {/* First Figure */}
              <motion.figure
                animate={floatingAnimation}
                className="absolute top-[10%] right-[2%] translate-x-1/2 w-[min(95px,30%)] rounded-full drop-shadow-2xl"
              >
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
                  width="116"
                  height="115"
                  alt="anybass"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </motion.figure>

              {/* Second Figure */}
              <motion.figure
                animate={floatingAnimation}
                className="absolute top-[40%] left-[20%] w-[min(70px,20%)] rounded-full drop-shadow-2xl"
              >
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
                  width="89"
                  height="88"
                  alt="anypass"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </motion.figure>

              {/* Third Figure */}
              <motion.figure
                animate={floatingDownAnimation}
                className="absolute top-[20%] left-[6%] -translate-x-1/2 w-[min(60px,18%)] rounded-full drop-shadow-2xl"
              >
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
                  width="74"
                  height="75"
                  alt="anycaas"
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </motion.figure>
            </div>
            <motion.figure
              className="absolute inset-0 w-full h-full -z-10"
              style={{ y: yTranslate }}
            >
              <Image
                className="object-cover mt-6 w-full h-full overflow-visible"
                loading="lazy"
                src={fofBackground}
                alt="background frame"
              />
            </motion.figure>
            <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
              <Image
                className="object-cover w-full h-full overflow-visible"
                loading="lazy"
                src={fofBg}
                alt="foreground frame"
                width={500} // Adjust as needed
                height={500} // Adjust as needed
              />
            </figure>
          </div>

          <div className="lg:pt-2">
            <p className="text-[12px] leading-[160%] font-[400]  text-[rgba(11,48,91)] font-monts">
              <strong>
                AnyTech is revolutionising financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </strong>
            </p>
            <p className="text-[12px] leading-[160%] font-[400]  text-[rgba(11,48,91)] font-monts my-6">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
        </div>
        <div className="hidden md:block relative h-fit lg:text-clip">
          <figure
            className="w-[76%] mx-auto"
            style={{ boxShadow: "0px 23px 30px 0px #16437763" }}
          >
            <Image
              className="object-cover w-full h-full"
              sizes="(min-width: 1024px) 45vw, 95vw"
              src={Power}
              alt="Power The Future"
              width={1124}
              height={1364}
            />
          </figure>
          <div>
            {/* First Figure */}
            <motion.figure
              animate={floatingAnimation}
              className="absolute top-[10%] right-[2%] translate-x-1/2 w-[min(95px,30%)] rounded-full drop-shadow-2xl"
            >
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?auto=format"
                width="116"
                height="115"
                alt="anybass"
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </motion.figure>

            {/* Second Figure */}
            <motion.figure
              animate={floatingAnimation}
              className="absolute top-[40%] left-[20%] w-[min(70px,20%)] rounded-full drop-shadow-2xl"
            >
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?auto=format"
                width="89"
                height="88"
                alt="anypass"
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </motion.figure>

            {/* Third Figure */}
            <motion.figure
              animate={floatingDownAnimation}
              className="absolute top-[20%] left-[6%] -translate-x-1/2 w-[min(60px,18%)] rounded-full drop-shadow-2xl"
            >
              <img
                src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?auto=format"
                width="74"
                height="75"
                alt="anycaas"
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </motion.figure>
          </div>
          <motion.figure
            className="absolute inset-0  w-full h-full -z-10"
            style={{ y: yTranslate }}
          >
            <Image
              className="object-cover w-full mt-6 h-full overflow-visible"
              loading="lazy"
              src={fofBackground}
              alt="background frame"
            />
          </motion.figure>

          <figure className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
            <Image
              className="object-cover w-full h-full overflow-visible"
              loading="lazy"
              src={fofBg}
              alt="foreground frame"
              width={500} // Adjust as needed
              height={500} // Adjust as needed
            />
          </figure>
        </div>
      </section>
    </section>
  );
};
export default PowerTheFuture;
