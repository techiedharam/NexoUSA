// import React from "react";
import fastenersCoverImg from "../../../assets/aboutNexoImg/aboutCoverImg.png";
import fastenersImg from "../../../assets/aboutNexoImg/Fasteners-Manufacturers-In-India.jpg";

const AboutUs = () => {
  const items = [
    {
      srNo: 1,
      item: "HEX BOLT",
      standards: {
        IS: ["1363-1", "1364-1"],
        DIN: ["601", "931"],
        ISO: ["4016", "4014"],
        ASTM: ["–"],
        BS: ["4190", "3692"],
        AS: ["1111"]
      }
    },
    {
      srNo: 2,
      item: "HEX SCREW",
      standards: {
        IS: ["1363-1", "1364-11"],
        DIN: ["933"],
        ISO: ["4018", "4017"],
        ASTM: ["–"],
        BS: ["1111", "3692"],
        AS: ["–"]
      }
    },
    {
      srNo: 3,
      item: "HEX NUT",
      standards: {
        IS: ["1363-111", "1364-111"],
        DIN: ["24034", "24032"],
        ISO: ["4034", "4032"],
        ASTM: ["–"],
        BS: ["4190"],
        AS: ["1112", "3692"]
      }
    },
    {
      srNo: 4,
      item: "COACH BOLT",
      standards: {
        IS: ["2609"],
        DIN: ["603"],
        ISO: ["–"],
        ASTM: ["–"],
        BS: ["4933"],
        AS: ["1390"]
      }
    },
    {
      srNo: 5,
      item: "HEX BOLT (STRUCTURAL)",
      standards: {
        IS: ["12427"],
        DIN: ["6639"],
        ISO: ["7990"],
        ASTM: ["A-394"],
        BS: ["4190"],
        AS: ["1559"]
      }
    },
    {
      srNo: 6,
      item: "SPRING WASHER",
      standards: {
        IS: ["3063"],
        DIN: ["127"],
        ISO: ["–"],
        ASTM: ["–"],
        BS: ["4464"],
        AS: ["–"]
      }
    },
    {
      srNo: 7,
      item: "PLAIN WASHER",
      standards: {
        IS: ["2016"],
        DIN: ["125", "126"],
        ISO: ["7089", "7091"],
        ASTM: ["–"],
        BS: ["4320"],
        AS: ["–"]
      }
    },
    {
      srNo: 8,
      item: "PACK WASHER",
      standards: {
        IS: ["6610"],
        DIN: ["7989"],
        ISO: ["–"],
        ASTM: ["–"],
        BS: ["–"],
        AS: ["–"]
      }
    },
    {
      srNo: 9,
      item: "HOT DIP GALVANISING",
      standards: {
        IS: ["1367", "267"],
        DIN: ["1461"],
        ISO: ["A-153M"],
        ASTM: ["729"],
        BS: ["–"],
        AS: ["–"]
      }
    },
    {
      srNo: 10,
      item: "HIGH STRENGTH STRUCTURAL NUT (HEAVY SERIES)",
      standards: {
        IS: ["6623", "6915"],
        DIN: ["7414"],
        ISO: ["A-563M"],
        ASTM: ["4395"],
        BS: ["1252"],
        AS: ["–"]
      }
    }
  ];

  return (
    <div>
      {/* Top Image Section */}
      <div>
        <img
          src={fastenersCoverImg}
          alt="Fasteners Cover"
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        />
        <h1 className="py-2 px-20 bg-[#ff9c00] text-2xl font-bold text-white">ABOUT NEXO</h1>
      </div>

      {/* Title Section */}
      <h1 className="m-4 text-xl md:text-2xl underline text-center font-bold">
        Fasteners Manufacturers in India
      </h1>

      {/* Description Section */}
      <div className="flex flex-col lg:flex-row px-4 md:px-10 lg:px-20 py-5 gap-5">
        <div className="lg:w-[70%] text-justify">
          <p className="font-arial text-sm md:text-base leading-relaxed">
            Nexo Group, a leading name in the world of fasteners and structure,
            has been assisting the Global economy in the areas of Electricity,
            Telecommunication, Railways, and Road Safety Guard Rails. Growing
            with growth in these areas Nexo Group today forms an Industry
            managing Two Divisions, Fasteners Division, and Structure Division.
            <br />
            Established its base in 1964 for manufacturing fasteners Nexo
            Industries Ltd. and High Tensile fasteners in 1978 with Hot Dip
            Galvanized fasteners in 1982. Nexo Industries Ltd., has attained a
            place among the leading manufacturers of fasteners in the world. In
            the year 1997, after a number of achievements towards our aim of
            “Total Quality Management,” Nexo became the first ISO 9002 Company
            in India for manufacturing Hot Dip Galvanized Fasteners. Nexo,
            having won the trust of OEM customers in highly competitive and
            quality-conscious markets, grows by doubling its turnover every 2
            years. Our team of highly motivated and dynamic technocrats and the
            most sophisticated technology have always had a close edge over our
            quality control at each level of production. While giving the
            customers – an extra touch, Nexo finds itself alone among others to
            provide the widest range of fasteners with surface coating. Nexo is
            the biggest manufacturer of the hot dip Galvanized Fasteners with a
            production of 4000 tons per month. Our aim of TQM is set to achieve
            the level of customer expectations beyond customer satisfaction.
            Nexo is also a CE-certified company for EN 15048 & EN 14592.
          </p>
        </div>

        <div className="lg:w-[30%] flex justify-center">
          <img
            src={fastenersImg}
            alt="Fasteners"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Responsive Table Section */}
      <div className="overflow-x-auto px-4 md:px-20 lg:px-60 text-sm">
        <table className="table-auto border-collapse border border-gray-300 w-full text-xs md:text-sm">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="border border-gray-300 px-2 md:px-4 py-2">Sr. No.</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">ITEM</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">IS</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">DIN</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">ISO</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">ASTM</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">BS</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">AS</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-orange-200" : ""}>
                <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">{row.srNo}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.item}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.standards.IS.join(", ")}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.standards.DIN.join(", ")}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.standards.ISO.join(", ")}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.standards.ASTM.join(", ")}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.standards.BS.join(", ")}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.standards.AS.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUs;
