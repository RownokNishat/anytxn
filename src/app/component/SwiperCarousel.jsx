"use client";
import React, { useState } from "react";
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
import Image from "next/image";
import tech1 from "../Assets/imgs/tech1.jpg";
import tech2 from "../Assets/imgs/tech2.jpg";
import tech3 from "../Assets/imgs/tech3.png";
import tech4 from "../Assets/imgs/tech4.jpg";

const slidesData = [
  {
    subtitle: "Purpose-built financial services",
    title: "Customer focused",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    additionalInfo:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: tech1,
    altText: "Customer Focused",
  },
  {
    subtitle: "Agile and adaptable for growth",
    title: "Agile and adaptable",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    additionalInfo:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: tech2,
    altText: "Agile and Adaptable",
  },
  {
    title: "Compliance Ready",
    subtitle: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    additionalInfo:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image: tech3,
    altText: "Compliance Ready",
  },
  {
    subtitle: "Highly secure and safe",
    title: "Secure and safe",
    description:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    additionalInfo:
      "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure, robust, and reliable infrastructure.",
    image: tech4,
    altText: "Secure and Safe",
  },
];

export default function SwiperComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="container px-[1.938rem] mt-[62px] font-monts">
      <h6 className="lg:text-lg text-center lg:leading-6 tracking-widest font-bold text-[rgba(31,128,240,0.8)]  font-monts">
        TECHNOLOGY BUILT FOR YOU
      </h6>
      <p className="lg:text-[52px] text-center leading-[110%] mt-8 sm:text-[32px] sm:leading-[120%] font-semibold text-[rgba(11,48,91)] whitespace-pre-line font-monts">
        The future of finance
      </p>

      {/* Title Buttons */}
      <div className="hidden md:block">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 py-12 items-center">
          {slidesData.map((slide, index) => (
            <button
              key={index}
              className={`py-3 px-4 font-bold rounded-full text-[rgba(31,128,240,0.8)] ${
                activeIndex === index ? "bg-[rgba(185,217,255,1)]" : ""
              } ${
                index === 3 ? "md:col-start-2 lg:col-start-auto" : "" // Center on md, left-align on lg
              }`}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.autoplay.stop(); // Stop autoplay
                  swiperInstance.slideTo(index); // Navigate to the specific slide
                }
              }}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
      {/* Swiper Component */}
      <div className="p-8 bg-white">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={false}
          autoplay={{ delay: 4000 }} // Enable autoplay with a 3-second delay
          effect="fade"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)} // Get the Swiper instance
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="pe-8">
                  <h6 className="lg:text-lg lg:leading-6 tracking-widest font-bold text-[rgba(31,128,240,0.8)]  font-monts">
                    {slide.title}
                  </h6>
                  <p className="lg:text-[40px] leading-[110%] mt-8 sm:text-[32px] sm:leading-[120%] font-semibold text-[rgba(11,48,91)] whitespace-pre-line font-monts">
                    {slide.subtitle}
                  </p>
                  <p className="text-[12px] mt-8 leading-[160%] font-[400]  text-[rgba(11,48,91)] font-monts">
                    <strong>{slide.description}</strong>
                  </p>
                  <p className="text-[12px] leading-[160%] font-[400]  text-[rgba(11,48,91)] font-monts my-6">
                    {slide.additionalInfo}
                  </p>
                </div>
                <div className="w-full h-[350px]">
                  <Image
                    src={slide.image}
                    alt={slide.altText}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
