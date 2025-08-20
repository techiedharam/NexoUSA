"use client";

import Image from "next/image";

const FabricationComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full bg-[#ff9c00]">
      {/* Content Part */}
      <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-4 px-8 py-12">
        <h1 className="text-3xl font-bold text-black uppercase">
          FABRICATION DIVISION
        </h1>
        <p className="text-lg font-semibold text-black/80">PRODUCTS RANGE</p>
        <div className="w-12 h-[2px] bg-black/40 mb-2"></div>
        <ul className="list-disc list-inside space-y-2 text-blue-900 font-semibold">
          <li>TELE COMMUNICATION TOWER</li>
          <li>BRACKETS</li>
          <li>GATES</li>
          <li>AGRICULTURE PRODUCTS</li>
          <li>FARM PART DIVISION</li>
        </ul>
      </div>

      {/* Image Part */}
      <div className="lg:w-1/2 w-full">
        <Image
          src="/assets/img/FABRICATION-BG.png"
          alt="Fabrication Division"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default FabricationComponent;
