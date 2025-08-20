"use client";

import Image from "next/image";

const FastenerComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full ">
      {/* Image Part */}
      <div className="lg:w-1/2 w-full">
        <Image
          src="/assets/img/FASTENERS-BG.png"
          alt="Fastener Division"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content Part */}
      <div className="lg:w-1/2 flex flex-col justify-center text-left space-y-4 px-8 py-12">
        <h1 className="text-3xl font-bold text-black uppercase">
          FASTENER DIVISION
        </h1>
        <p className="text-lg font-semibold text-black/80">PRODUCTS RANGE</p>
        <div className="w-12 h-[2px] bg-black/40 mb-2"></div>
        <ul className="list-disc list-inside space-y-2 text-blue-900 font-semibold">
          <li>FOR STRUCTURES</li>
          <li>FOR FOUNDATIONS</li>
          <li>FOR WIND MILL & REFINERY</li>
          <li>FOR TRANSMISSION LINES</li>
          <li>FOR RAILWAYS ELECTRICAL</li>
          <li>FOR STEEL/WOODEN CRASH BARRIER</li>
          <li>FOR GENERAL USES</li>
        </ul>
      </div>
    </div>
  );
};

export default FastenerComponent;
