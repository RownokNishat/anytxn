import React from "react";
import arrow from "../Assets/icons/easy-banking/Line4.svg";
import Bridge from "../Assets/icons/easy-banking/new-bridge.svg";
import Image from "next/image";
import Line2 from "../Assets/icons/easy-banking/Line2.svg";
import Line3 from "../Assets/icons/easy-banking/Line3.svg";
const Flowchart = () => {
  return (
    <div className="container mt-[62px] px-[1.938rem]">
      <div className="flex md:flex-col flex-row justify-center items-center ">
        <div className="w-full flex md:flex-row flex-col items-center rounded-2xl">
          {/* Left Section - AI */}
          <div className="min-w-[380px] h-[400px] font-monts flex flex-col bg-gradient-to-r from-blue-100 to-blue-50 items-center justify-center py-24 rounded px-8 shadow-md">
            <div className="w-[80%] mx-auto bg-white text-center py-4 rounded relative">
              <h3 className="text-blue-600 leading-5 font-bold text-sm">
                CORE TECH
              </h3>
              <h2 className="text-2xl leading-8 font-semibold mt-2">
                Artificial <br /> Intelligence
              </h2>
              <p className="text-gray-500  text-center text-xs absolute bottom-[-35%] z-10 left-0">
                Using AI/ML to upgrade legacy processes, reduce cost, and
                improve efficiency
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="relative">
            <Image
              src={Bridge}
              alt="Arrow"
              className=" object-cover overflow-visible rotate-90 w-[80px] h-[80px] "
            />
            <div className="absolute w-[200px] flex items-center top-[25%] left-[-75%]">
              <Image
                src={arrow}
                alt="Arrow"
                width={120}
                height={120}
                className=" overflow-auto"
              />
            </div>
          </div>
          <div className="font-monts w-full h-[400px] grid grid-cols-2  bg-gradient-to-r from-blue-50 to-blue-100    rounded px-16 bg-white shadow-md">
            <div className="flex flex-col py-8 gap-0 items-center">
              {/* div1 - Right Aligned */}
              <div
                id="div1"
                className="w-[160px] h-[115px] bg-red-900 text-center  self-end "
              >
                {" "}
                <Image
                  className="rotate-[-90deg] w-[150px] h-[240px]"
                  src={Line3}
                  alt="arrow"
                ></Image>
              </div>

              {/* div2 - Left Aligned */}
              <div
                id="div2"
                className="w-[160px] h-[100px] text-center z-10 rounded relative py-4 bg-green-300  self-start"
              >
                <h3 className="z-100 text-blue-600 leading-5 font-bold text-sm">
                  MECHANISM
                </h3>
                <h2 className="text-2xl leading-8 font-semibold mt-2">
                  Blockchain
                </h2>
                <p className="text-gray-500 text-center text-xs absolute bottom-[-35%] z-10 left-0">
                  Enhanced security by eliminating intermediaries
                </p>
                {/* Arrow Line */}
                {/* <div className="w-[250px] h-[10px] rotate-[-90deg] top-[-80%] left-[0%] absolute">
                  <Image src={Line3} alt="arrow"></Image>
                </div> */}
              </div>

              <div
                id="div3"
                className="bg-red-900 text-center rotate-[270deg] self-end w-[115px] h-[160px] flex items-center justify-center"
              >
                <Image className="bg-green-900" src={Line2} alt="arrow"></Image>
              </div>
            </div>

            <div className=" flex justify-between flex-col items-start h-full py-8">
              <div className="w-[160px] h-[100px] text-center rounded relative py-4 bg-white">
                <h3 className="text-blue-600 leading-5 font-bold text-sm">
                  INFRASTRUCTURE
                </h3>
                <h2 className="text-2xl leading-8 font-semibold mt-2">Cloud</h2>
                <p className="text-gray-500  text-center text-xs absolute right-[-75%] z-10 top-[30%]">
                  Scale resources <br /> easily on-demand
                </p>
              </div>
              <div className="w-[160px] h-[100px] text-center rounded relative py-4 bg-white">
                <h3 className="text-blue-600 leading-5 font-bold text-sm">
                  Resource
                </h3>
                <h2 className="text-2xl leading-8 font-semibold mt-2">Data </h2>
                <p className="text-gray-500  text-center text-xs absolute right-[-80%] z-10 top-[30%]">
                  Valuable, actionable <br /> insights from mass <br /> data
                  sources
                </p>
              </div>
            </div>
          </div>

          {/* className="flex bg-gradient-to-r from-blue-50 to-blue-100 py-24">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md relative">
            <h3 className="text-orange-500 font-bold text-sm">MECHANISM</h3>
            <h2 className="text-2xl font-semibold">Blockchain</h2>
            <p className="text-gray-500 text-center mt-2 text-sm">
              Enhanced security by eliminating intermediaries
            </p>

           
          </div>

          <div className="flex flex-col space-y-6 ml-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-teal-500 font-bold text-sm">
                INFRASTRUCTURE
              </h3>
              <h2 className="text-2xl font-semibold">Cloud</h2>
              <p className="text-gray-500 text-center mt-2 text-sm">
                Scale resources easily on-demand
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-yellow-500 font-bold text-sm">RESOURCE</h3>
              <h2 className="text-2xl font-semibold">Data</h2>
              <p className="text-gray-500 text-center mt-2 text-sm">
                Valuable, actionable insights from mass data sources
              </p>
            </div>
          </div> 
        </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
