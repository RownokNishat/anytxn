import React from "react";

const AIBlockchainDiagram = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 p-8">
      <div className="flex bg-white p-6 rounded-2xl shadow-lg">
        {/* AI Section */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center w-64">
          <h3 className="text-blue-600 font-semibold">CORE TECH</h3>
          <h2 className="text-2xl font-bold">Artificial Intelligence</h2>
          <p className="text-sm text-gray-600 mt-2">
            Using AI/ML to upgrade legacy processes, reduce cost, and improve
            efficiency
          </p>
        </div>

        {/* Connector */}
        <div className="flex items-center mx-4">
          <svg
            width="94"
            height="18"
            viewBox="0 0 94 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 9L15 17.6603V0.339746L0 9ZM94 9L79 0.339746V17.6603L94 9ZM13.5 10.5H80.5V7.5H13.5V10.5Z"
              fill="url(#paint0_linear_4250_2331)"
            />
          </svg>
        </div>

        {/* Blockchain Section */}
        <div className="bg-orange-100 p-6 rounded-lg shadow-md text-center w-64">
          <h3 className="text-orange-600 font-semibold">MECHANISM</h3>
          <h2 className="text-2xl font-bold">Blockchain</h2>
          <p className="text-sm text-gray-600 mt-2">
            Enhanced security by eliminating intermediaries
          </p>
        </div>

        {/* Connections to Cloud & Data */}
        <div className="flex flex-col justify-center mx-6">
          <svg
            width="117"
            height="135"
            viewBox="0 0 117 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M108 135L116.66 120H99.3398L108 135ZM0.985596 3.5H79.0001V0.5H0.985596V3.5ZM106.5 31V121.5H109.5V31H106.5ZM79.0001 3.5C94.1879 3.5 106.5 15.8122 106.5 31H109.5C109.5 14.1553 95.8447 0.5 79.0001 0.5V3.5Z"
              fill="url(#paint0_linear_4250_2317)"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          {/* Cloud Section */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center w-48">
            <h3 className="text-blue-600 font-semibold">INFRASTRUCTURE</h3>
            <h2 className="text-xl font-bold">Cloud</h2>
            <p className="text-sm text-gray-600">
              Scale resources easily on-demand
            </p>
          </div>

          {/* Data Section */}
          <div className="bg-green-100 p-4 rounded-lg shadow-md text-center w-48">
            <h3 className="text-green-600 font-semibold">RESOURCE</h3>
            <h2 className="text-xl font-bold">Data</h2>
            <p className="text-sm text-gray-600">
              Valuable, actionable insights from mass data sources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBlockchainDiagram;
