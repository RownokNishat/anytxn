"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ words, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is in progress
  const [direction, setDirection] = useState("right"); // Track animation direction
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlay && !isAnimating) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setDirection("right");
        console.log("here");
        if (currentIndex === words.length - 1) {
          handleNavigation(0, true);
        }
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, interval);
    }

    return () => resetTimeout();
  }, [currentIndex, isAutoPlay, interval, words.length, isAnimating]);

  const handleNext = () => {
    if (!isAnimating) {
      setDirection("right"); // Set direction to right
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection("left"); // Set direction to left
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + words.length) % words.length
      );
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay((prev) => !prev);
  };

  const handleNavigation = (targetIndex, autoPlay = false) => {
    if (isAnimating || targetIndex === currentIndex) return;

    setIsAnimating(true); // Start animation
    setIsAutoPlay(autoPlay); // Turn off autoplay
    const step = targetIndex > currentIndex ? 1 : -1; // Determine direction
    setDirection(step === 1 ? "right" : "left"); // Set animation direction
    let index = currentIndex;

    // Function to animate through intermediate slides
    const animateSlides = () => {
      index += step;

      if (
        (step === 1 && index > targetIndex) ||
        (step === -1 && index < targetIndex)
      ) {
        // Final slide animation (slow)
        setTimeout(() => {
          setCurrentIndex(targetIndex); // Set final index
          setIsAnimating(false); // End animation
        }, 500); // Delay to ensure smooth transition
        return;
      }

      // Intermediate slide animation (fast)
      setCurrentIndex(index); // Update index
      setTimeout(animateSlides, 500); // Fast animation speed (50ms per slide)
    };

    animateSlides();
  };

  return (
    <div className="relative w-full max-w-[1240px] mx-auto overflow-hidden">
      {/* Navigation Buttons at the Top */}
      <div className="flex justify-center space-x-4 mb-4">
        {words.map((word, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index, false)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentIndex === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {word.title}
          </button>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Next
        </button>
        <button
          onClick={toggleAutoPlay}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isAutoPlay ? "Pause" : "Play"}
        </button>
      </div>

      {/* Carousel Slides */}
      <div className="h-96">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }} // Slide starts from right or left
            animate={{ opacity: 1, x: 0 }} // Slides to the center
            exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }} // Slides out to the left or right
            transition={{
              duration: isAnimating ? 0.1 : 0.5, // Fast for intermediate, slow for final
            }}
            className="flex justify-center items-center text-4xl font-bold bg-gray-100 rounded-lg absolute w-full h-full"
          >
            {words[currentIndex].title}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
