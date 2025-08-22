import React from "react";
import Image from "next/image";
const Quality = () => {
  return (
    <div className="mt-10">
      {/* Banner Section */}
      <div>
        <Image
          src="/assets/aboutNexoImg/QualityPolicy.jpg"
          width={1920}
          height={250}
          alt="bannerImg"
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        />
        <h1 className="py-2 px-4 md:px-20 bg-[#ff9c00] text-xl md:text-2xl font-bold text-white">
          Quality Policy
        </h1>
      </div>

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-semibold mt-6 text-center">
        Galvanized Fasteners Manufacturers
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 mt-6 px-4 md:px-10 lg:px-20">
        {/* Left Text */}
        <div className="md:w-1/2 p-4 text-justify text-sm md:text-base leading-relaxed">
          <p>
            The Company in order to attain excellence, follows its quality policy
            to the core. The policy states that: We at NEXO Industries (P.) Ltd.
            commit ourselves to put in our best endeavor to achieve total
            customer satisfaction by:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Producing Quality Goods</li>
            <li>Adhering to delivery schedules</li>
          </ul>
          <p className="mt-4">
            Continuously upgrading our products and processes through upgradation
            in technology and active participation of employees at all levels.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/assets/aboutNexoImg/GalvanizedFastenersManufacturers.jpg"
            alt="Galvanized Fasteners"
            width={500}
            height={250}
            className="w-full md:w-[300px] h-auto rounded-md"
          />
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold mt-6 text-center">
        OUR CONTRIBUTION TO THE NATION BUILDING
      </h2>

      {/* Table Section */}
      <div className="overflow-x-auto mt-6 px-4 md:px-10 lg:px-20 mb-10">
        <table className="min-w-full table-auto border-collapse">
          <tbody>
            {[
              "Bureau of Indian Standards (ISI).",
              "Power Grid Corporation of India Ltd. (PGCIL) Electricity Distribution Authority of Govt. of India.",
              "National Thermal Corporation of India Ltd. (NTPC) Electricity Generation Authority of Govt. of India.",
              "Department of Telecommunication (DOT) Telecommunication Authority of Govt. of India.",
              "Central Organization of Railway Electrification (CORE) Railway Controlling Authority of India.",
              "Electricity Departments of Various States in India and Globally.",
              "Director General Supplies & Disposal (DGS&D) Central Purchasing Authority of Govt. of India.",
              "India’s first 800KVA Line was established between ‘Kishanpura Moga’ with the fasteners of ‘Nexo’. The total order was 1500 M.T. from Cobra- Spain.",
              "We are supplying our fasteners to World’s reputed Transmission Tower Lines manufacturer i.e. KEC International Ltd., Kalpathru Ltd., Inabensa, Lait, ABB, Stamens and many more.",
              "CE Certification for EN 15048 & EN 14592.",
            ].map((item, index) => (
              <tr
                key={index}
                className="border border-white bg-[#ffcc66] text-sm md:text-base"
              >
                <td className="px-4 py-2">»</td>
                <td className="px-4 py-2">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quality;
