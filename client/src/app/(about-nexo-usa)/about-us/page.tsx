"use client";

import Image from "next/image";

// Table data
const tableData = [
  { sr: 1, item: "HEX BOLT", is: "1363-1, 1364-1", din: "601, 931", iso: "4016, 4014", astm: "–", bs: "4190, 3692", as: "1111" },
  { sr: 2, item: "HEX SCREW", is: "1363-1, 1364-11", din: "933", iso: "4018, 4017", astm: "–", bs: "4190", as: "1111, 3692" },
  { sr: 3, item: "HEX NUT", is: "1363-111, 1364-111", din: "24034, 24032", iso: "4034, 4032", astm: "–", bs: "4190", as: "1112, 3692" },
  { sr: 4, item: "COACH BOLT", is: "2609", din: "603", iso: "–", astm: "–", bs: "4933", as: "1390" },
  { sr: 5, item: "HEX BOLT (STRUCTURAL)", is: "12427, 6639", din: "7990", iso: "–", astm: "A-394", bs: "4190", as: "1559" },
  { sr: 6, item: "SPRING WASHER", is: "3063", din: "127", iso: "–", astm: "–", bs: "4464", as: "–" },
  { sr: 7, item: "PLAIN WASHER", is: "2016", din: "125, 126", iso: "7089, 7091", astm: "–", bs: "4320", as: "–" },
  { sr: 8, item: "PACK WASHER", is: "6610", din: "7989", iso: "–", astm: "–", bs: "–", as: "–" },
  { sr: 13, item: "HOT DIP GALVANISING", is: "1367", din: "267", iso: "1461", astm: "A-153M", bs: "729", as: "–" },
];

const AboutUs = () => {
  return (
    <div className="mt-10"> {/* Added bottom padding */}
      {/* Banner Section */}
      <div>
        <Image
          src="/assets/aboutNexoImg/aboutCoverImg.png"
          alt="About Cover"
          width={1920}
          height={250}
          className="w-full h-[250px] object-cover"
        />
        <h1 className="py-2 px-4 sm:px-20 bg-[#ff9c00] text-xl sm:text-2xl font-bold text-white">
          ABOUT NEXO
        </h1>
      </div>

      {/* Fasteners Manufacturers in India */}
      <h1 className="m-4 text-xl sm:text-2xl underline text-center font-bold">
        Fasteners Manufacturers in India
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-10 lg:px-20 py-5 gap-5 mb-5">
        {/* Left Content */}
        <div className="w-full lg:w-[70%] text-justify">
          <p className="font-arial text-sm sm:text-base leading-relaxed">
            Nexo Group, a leading name in the world of fasteners and structure,
            has been assisting the Global economy in the areas of Electricity,
            Telecommunication, Railways and Road Safety Guard Rails. Growing
            with growth in these areas Nexo Group, today forms an Industry
            managing Two Divisions, Fasteners Division and Structure Division.
            <br /><br />
            Established its base in 1964 for manufacturing fasteners Nexo
            Industries Ltd. and High Tensile fasteners in 1978 with Hot Dip
            Galvanized fasteners in 1982. Nexo Industries Ltd. has attained a
            place among the leading manufacturers of fasteners in the world. In
            the year 1997, after a number of achievements towards our aim of
            “Total Quality Management”, Nexo became the first ISO 9002 Company
            in India of manufacturing Hot Dip Galvanized Fasteners. Nexo, having
            won the trust of OEM customers in highly competitive and
            quality-conscious markets, grows by doubling its turnover every 2
            years.
            <br /><br />
            Our team of highly motivated and dynamic technocrats, along with the
            most sophisticated technology, has always had a close edge over our
            quality control at each level of production. While giving the
            customers an extra touch, Nexo finds itself alone among others to
            provide the widest range of fasteners with surface coating. Nexo is
            the biggest manufacturer of hot dip Galvanized Fasteners with the
            production of 4000 tons per month. Our aim of TQM is set to achieve
            the level of customer expectations beyond satisfaction. Nexo is also
            a CE certified company for EN 15048 & EN 14592.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[30%]">
          <Image
            src="/assets/aboutNexoImg/Fasteners-Manufacturers-In-India.jpg"
            alt="Fastener"
            width={500}
            height={400}
            className="rounded-md w-full object-cover"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto px-4 sm:px-10 lg:px-20 text-sm">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="border border-gray-300 px-2 sm:px-4 py-2">Sr. No.</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2">ITEM</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2">IS</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2">DIN</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2">ISO</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2">ASTM</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2">BS</th>
              <th className="border border-gray-300 px-2 sm:px-4 py-2">AS</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={row.sr} className={index % 2 === 0 ? "bg-orange-200" : ""}>
                <td className="border px-2 sm:px-4 py-2 text-center">{row.sr}</td>
                <td className="border px-2 sm:px-4 py-2">{row.item}</td>
                <td className="border px-2 sm:px-4 py-2">{row.is}</td>
                <td className="border px-2 sm:px-4 py-2">{row.din}</td>
                <td className="border px-2 sm:px-4 py-2">{row.iso}</td>
                <td className="border px-2 sm:px-4 py-2">{row.astm}</td>
                <td className="border px-2 sm:px-4 py-2">{row.bs}</td>
                <td className="border px-2 sm:px-4 py-2">{row.as}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUs;
