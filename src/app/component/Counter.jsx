"use client";
import { useState, useEffect } from "react";

export default function Stats() {
  // State to hold the count
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    // Counter animation function
    const countTo = (target, setter, duration = 2000) => {
      let start = 0;
      const step = target / (duration / 60); // Update every 50ms
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(Math.floor(start)); // Update count
        }
      }, 30);
    };

    // Start counters
    countTo(20, setCount1);
    countTo(40, setCount2);
    countTo(200, setCount3);
  }, []);

  return (
    <div className="container px-8">
      <h6 className="lg:text-lg text-center lg:leading-6 tracking-widest font-bold text-[rgba(31,128,240,0.8)]  font-monts">
        TRUSTED BY THE BEST
      </h6>
      <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28  font-monts my-8 ">
        {/* First stat */}
        <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs bg-gradient-to-b from-blue-500 to-blue-900 bg-clip-text text-transparent">
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px]  tracking-[-0.02em] font-semibold leading-none">
            &gt;<span>{count1}</span>
          </h2>
          <p className="text-right lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Years of Experience
          </p>
        </div>

        {/* Second stat */}
        <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs bg-gradient-to-b from-blue-500 to-blue-900 bg-clip-text text-transparent">
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px]  tracking-[-0.02em] font-semibold leading-none">
            <span>{count2}</span>+
          </h2>
          <p className="text-right lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Financial Institutions
          </p>
        </div>

        {/* Third stat */}
        <div className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs bg-gradient-to-b from-blue-500 to-blue-900 bg-clip-text text-transparent">
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px]  tracking-[-0.02em] font-semibold leading-none">
            &gt;<span>{count3}</span>
          </h2>
          <p className="text-right lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            Customers Each
          </p>
        </div>
      </div>
    </div>
  );
}
