// import React from 'react'
import FABRICATION from "./img/FABRICATION.png";

const FabricationComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center w-full bg-[#ff9c00]">
      {/* Content Part */}
      <div className="lg:w-1/2 text-left space-y-6 px-8 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-900">FABRICATION DIVISION</h1>
        <p className="text-xl font-medium text-gray-700">PRODUCTS RANGE</p>
        <ul className="list-disc list-inside space-y-3 text-gray-600 text-lg">
          <li>Tele Communication Tower</li>
          <li>Brackets</li>
          <li>Gates</li>
          <li>Agriculture Products</li>
          <li>Farm Part Division</li>
        </ul>
      </div>

      {/* Image Part */}
      <div className="lg:w-1/2 w-full lg:ml-0 flex-shrink-0">
        <img
          src={FABRICATION}
          alt="Fabrication"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FabricationComponent;
