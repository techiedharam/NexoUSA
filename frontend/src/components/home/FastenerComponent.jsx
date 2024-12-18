// import React from 'react'
import FABRICATION from "./img/FABRICATION.png";

const FabricationComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full bg-gray-100 ">
      {/* Image Part */}
      <div className="lg:w-1/2 w-full">
        <img
          src={FABRICATION}
          alt="Fabrication"
          className="w-full h-auto"
        />
      </div>

      {/* Content Part */}
      <div className="lg:w-1/2 text-left space-y-4 px-4">
        <h1 className="text-3xl font-bold text-gray-800">FABRICATION DIVISION</h1>
        <p className="text-lg font-semibold text-gray-700">PRODUCTS RANGE</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>TELE COMMUNICATION TOWER</li>
          <li>BRACKETS</li>
          <li>GATES</li>
          <li>AGRICULTURE PRODUCTS</li>
          <li>FARM PART DIVISION</li>
        </ul>
      </div>
    </div>
  );
};

export default FabricationComponent;
