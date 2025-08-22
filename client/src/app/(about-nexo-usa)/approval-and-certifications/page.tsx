"use client";

import React from "react";
import Image from "next/image";

const ApprovalAndCertifications = () => {
  return (
    <div className="flex flex-col space-y-10 mt-10">
      {/* Banner Section */}
      <div>
        <Image
          src="/assets/aboutNexoImg/iso-1.jpg"
          alt="bannerImg"
          width={1920}
          height={400}
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        />
        <h1 className="py-2 px-4 md:px-20 bg-[#ff9c00] text-2xl font-bold text-white">
          Approvals & Certifications
        </h1>
      </div>

      {/* Title Section */}
      <div className="px-4 md:px-10 lg:px-20 text-center">
        <h1 className="text-xl md:text-2xl font-bold mb-2">
          SB Bolting Manufacturers, SB Bolting Manufacturers in India
        </h1>
        <p className="text-justify">
          Nexo is the first HDG Fasteners manufacturing unit in India to receive
          ISO-9001-2008 certification from TUV-CERT of Germany.
        </p>
      </div>

      {/* Approvals Table Section */}
      <div className="px-4 md:px-10 lg:px-20">
        <h1 className="text-2xl font-bold text-center mb-5 underline">
          Our Registrations & Approvals
        </h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Registered In India
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Approved Internationally
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bureau of Indian Standards (BIS)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  IBERDROLA (Spain)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Power Grid Corporation of India Ltd. (PGCIL)
                  <br />
                  (Electricity Authority for Transmission of Power, Govt. of
                  India)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Abu Dhabi Water & Electricity Authority (UAE)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  National Thermal Corporation of India Ltd. (NTPC)
                  <br />
                  (Electricity Generation Authority, Govt. of India)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Ceylon Electricity Board (Sri Lanka)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Bharat Sanchar Nigam Ltd. (BSNL)
                  <br />
                  (Tele-communication Authority, Govt. of India)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Electricity Authority of Cyprus (Cyprus)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Central Organization of Railway Electrification (CORE)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Electricity Authority of Egypt (Egypt)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Directorate General of Supplies & Disposal (DGS&D)
                  <br />
                  (Central Purchasing Authority, Govt. of India)
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Electricity Authority of Syria (Syria)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Nuclear Thermal Power Corporation Ltd.
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Israel Electricity Corporation (Israel)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Department of Power - Royal Govt. of Bhutan
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  TUV for EN-15048 (CE)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Certification Section */}
      <div className="px-4 md:px-10 lg:px-20 space-y-5">
        <h1 className="text-2xl font-bold">CERTIFICATIONS</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <p className="text-justify leading-relaxed">
              Year 1964 Witnessed a star which reconstituted the fastener
              Industry. Our dynamic team of technocrats innovated most modern
              design for fasteners. In a short spell our products were
              embellished with ISI mark and got accepted by NTPC/PGCIL/EIL &
              CORE. Above all we enjoy recognition of DIN/ASTM/BRITISH/JIS
              Standards.
              <br />
              Our extensive range of Fasteners from M-3 to M-100 dia, and 10mm
              to 3000 mm length and experience of technologists makes it easy
              with the help of our most advance machines that includes bolt
              formers (i.e. NEDSCHROEF, HATEBUR, NATIONAL, CHUNZU, JERNYAO) for
              us to evaluate each application on its merits.
              <br />
              Nexo Industries has a flair of maintaining high quality standards
              and catering the best to our customers as per their need.
              <br />
              To Serve compatible best quality durable product. Nexo Industries
              has a Quality Assurance Cell. This Cell ensures Result Oriented
              quality since procurement of new material till the distribution.
              during which it under goes strict measures on every stage of
              manufacturing. It is consistently appreciated by well equipped
              testing & quality control Laboratory.
              <br />
              Through, the company endures to high quality it only reflects our
              commitment to achieve precious ISO-9002.
              <br />
              Our high-tech, manufacturing unit is highlighted by Cold forging
              Unit, Hot Forging Unit, Automatic Heat Treatment Furnaces for heat
              treatment of bolts and nuts and other parts & High temperature
              Ceramic galvanizing plants.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/aboutNexoImg/SB-Bolting-Manufacturers.jpg"
              alt="Bolting Manufacturers"
              width={600}
              height={400}
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Certificate Images Section */}
      <div className="px-4 md:px-10 lg:px-20 flex flex-wrap justify-center gap-5">
        <Image
          src="/assets/aboutNexoImg/certificate1.jpg"
          alt="Certificate 1"
          width={300}
          height={400}
          className="w-full md:w-[300px] h-auto rounded shadow-md"
        />
        <Image
          src="/assets/aboutNexoImg/certificate2.jpg"
          alt="Certificate 2"
          width={300}
          height={400}
          className="w-full md:w-[300px] h-auto rounded shadow-md"
        />
        <Image
          src="/assets/aboutNexoImg/certificate3.jpg"
          alt="Certificate 3"
          width={300}
          height={400}
          className="w-full md:w-[300px] h-auto rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default ApprovalAndCertifications;
