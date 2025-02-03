"use client";
import React from "react";
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
// Array of image sources
const imageSources = [
  "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png",
  "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png",
  "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png",
  "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png",
  "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png",
  "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png",
  "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png",
  "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png",
  "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png",
  "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png",
  "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg",
  "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png",
  "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png",
  "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
  "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png",
];

export default function TrustedBy() {
  return (
    <div>
      <div className="container px-[1.938rem] mt-[62px]">
        <div className="mt-xl grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5 justify-center items-center">
          {imageSources.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Trusted Partner ${index + 1}`} // Generic alt text
              loading="lazy"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex items-center justify-center">
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
              320: { slidesPerView: 2 }, // 1 slide for small screens
              480: { slidesPerView: 3 }, // 2 slides for tablets
              600: { slidesPerView: 4 }, // 3 slides for medium screens
              768: { slidesPerView: 5 }, // 4 slides for large screens
            }}
          >
            {imageSources.map((src, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full"
              >
                <img
                  className="w-[80px] h-[80px] object-contain"
                  src={src}
                  alt={`Trusted Partner ${index + 1}`} // Generic alt text
                  loading="lazy"
                  style={{
                    width: "100%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
