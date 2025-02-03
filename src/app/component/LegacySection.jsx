"use client"; // Required for Framer Motion and interactivity
import { motion } from "framer-motion";
import bg from "../Assets/imgs/footerDek.svg";
import Image from "next/image";
import CTABackground from "../Assets/imgs/footerDek.svg";
export default function CTASection() {
  return (
    <div className="font-monts">
      <section
        id="container"
        style={{
          backgroundImage: "url('../Assets/imgs/footerDek.svg')",
          clipPath: "polygon(0 0, 100% 29%, 100% 100%, 0% 100%)",
          background:
            "radial-gradient(24.45% 88.58% at 23.57% 2%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
        }}
        className="relative font-monts h-[60vh] lg:h-[530px] w-full bg-blue-500 text-white bg-clip-cta overflow-hidden  bg-no-repeat bg-cover md:z-20 z-0"
      >
        {/* Background SVG for Desktop */}

        <Image
          className="absolute inset-0 object-cover"
          src={CTABackground}
          alt="bg"
          width={1500}
          height={600}
        />

        {/* Background SVG for Mobile */}
        <motion.svg
          id="cta-mobile-background-pattern"
          className="block lg:hidden absolute inset-0 top-0 left-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 390 348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Add your SVG paths here */}
        </motion.svg>

        {/* Content Container */}
        <div className="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6 px-[1.938rem]">
          {/* Heading */}
          <motion.h2
            className="font-monts text-res-head-2 text-white lg:text-head-2 font-semibold mb-[24px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Legacy no longer
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Talk to us to find out how we can transform your organisation for
            the future
          </motion.p>

          {/* Button */}
          <motion.div
            className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              className="group md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-between bg-[rgba(254,139,83)] rounded transition-all duration-300 ease-in-out"
              href="/en/contact-us"
            >
              {/* Text moves 5px left on hover */}
              <span className="group-hover:-translate-x-1 transition-transform duration-300 me-2">
                Contact Us
              </span>

              {/* SVG moves 5px right on hover */}
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
                  fill="white"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
      <footer>
        <div className="bg-[#002045]">
          <div className="container flex items-center justify-between py-11">
            <a href="/en">
              <picture>
                <source
                  srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
                  type="image/webp"
                  sizes="127px, (min-width: 1024px) 217px"
                />
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg"
                  width="200"
                  height="32"
                  className="w-[127px] lg:w-[217px] object-contain"
                  alt="AnyTech"
                />
              </picture>
            </a>
            <div className="hidden lg:flex items-center text-[#00E9EA]">
              <p className="border-r border-blue-800 px-6 py-4 text-sm lg:font-semibold">
                Our Solutions
              </p>
              <ul className="flex items-end">
                <li>
                  <a
                    className="px-6 py-4 text-sm transition-colors duration-300  lg:text-sm hover:text-blue-600"
                    href="/#"
                  >
                    AnyCaaS
                  </a>
                </li>
                <li>
                  <a
                    className="px-6 py-4 text-sm transition-colors duration-300  lg:text-sm hover:text-blue-600"
                    href="/#"
                  >
                    AnyBaaS
                  </a>
                </li>
                <li>
                  <a
                    className="px-6 py-4 text-sm transition-colors duration-300  lg:text-sm hover:text-blue-600"
                    href="/#"
                  >
                    AnyPaaS
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-6 lg:hidden lg:gap-10">
              <a
                href="https://www.linkedin.com/company/anytxn"
                className="flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold"
              >
                <img
                  src="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg"
                  width="24"
                  height="24"
                  className="object-contain"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#00152D] border-t-[1px] border-t-blue-800 text-[#00E9EA] text-xs font-monts">
        <div className="container flex flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <div>
              <a
                className="transition-colors duration-300 lg:text-xs hover:text-blue-600"
                href="/#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
