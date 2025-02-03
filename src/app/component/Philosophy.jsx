"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import flowPc from "../Assets/imgs/flowPc.avif";
import flowM from "../Assets/imgs/flowMob.avif";
const philosophies = [
  {
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg",
    imgAlt: "Full suite solutions",
  },
  {
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png",
    imgAlt: "Simplify the complex",
  },
  {
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    imgSrc:
      "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg",
    imgAlt: "Cutting-edge tech",
  },
];

export default function HomePhilosophies() {
  return (
    <div>
      <div className="container px-[1.938rem] font-monts ">
        <h6 className="lg:text-lg text-center lg:leading-6 tracking-widest font-bold text-[rgba(31,128,240,0.8)]  font-monts">
          OUR PHILOSOPHY
        </h6>
        <p className="lg:text-[52px] text-center leading-[110%] mt-8 sm:text-[32px] sm:leading-[120%] font-semibold text-[rgba(11,48,91)] whitespace-pre-line font-monts">
          Human-centred innovation
        </p>
        <div className="md:block hidden mt-8">
          <Image src={flowPc} alt="flow" width={1400} height={400}></Image>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] mt-8">
            {philosophies.map((item, index) => (
              <li
                key={index}
                className=" z-20 h-full px-6 bg-[rgba(248,252,255)] shadow py-8 rounded md:p-md p-sm space-y-2 md:space-y-4"
              >
                <figure className="w-fit rounded-full">
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={50}
                    height={50}
                    className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                    loading="lazy"
                  />
                </figure>
                <h4 className="font-monts text-blue-text text-res-head-4 lg:text-head-4">
                  <strong>{item.title}</strong>
                </h4>
                <p className="text-[13px] tracking-wider leading-5">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex justify-center items-center mt-8">
          <Image src={flowM} alt="flow" width={400} height={600}></Image>
        </div>
        <div className="flex items-center justify-center  mt-8">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            loop={true}
            centeredSlides={true} // Center the active slide
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with a 3-second delay
            navigation // Enable navigation arrows
            pagination={{ clickable: true }} // Enable pagination dots
            scrollbar={{ draggable: true }} // Enable scrollbar
            effect="fade" // Fade effect for transitions
            breakpoints={{
              320: { slidesPerView: 1 }, // 1 slide for small screens
              480: { slidesPerView: 1 }, // 2 slides for tablets
              600: { slidesPerView: 2 }, // 3 slides for medium screens
            }}
          >
            {philosophies.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full"
              >
                {" "}
                <li
                  key={index}
                  className="w-[80%] mx-auto h-[250px] z-20 px-6 bg-[rgba(248,252,255)] shadow py-8 rounded md:p-md p-sm space-y-2 md:space-y-4"
                >
                  <figure className="w-fit rounded-full">
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      width={50}
                      height={50}
                      className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
                      loading="lazy"
                    />
                  </figure>
                  <h4 className="font-monts text-blue-text text-res-head-4 lg:text-head-4">
                    <strong>{item.title}</strong>
                  </h4>
                  <p className="text-[13px] tracking-wider leading-5">
                    {item.description}
                  </p>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
