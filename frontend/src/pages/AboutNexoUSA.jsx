// import React from 'react'
import fastenersCoverImg from "../assets/aboutNexoImg/aboutCoverImg.png"
import fastenersImg from "../assets/aboutNexoImg/Fasteners-Manufacturers-In-India.jpg"
const AboutNexoUSA = () => {
  return (
    <div> {/* Main Container*/}
      <div> {/* top image  */}
        <img src={fastenersCoverImg} alt="" className=" w-full h-[250px] bg-no-repeat bg-full bg-center bg-fixed" />
        <h1 className="py-2 px-20 bg-[#ff9c00] text-2xl font-bold text-white">ABOUT NEXO</h1>
      </div>
      {/* Fasteners Manufacturers in India */}
      <h1 className="m-4 text-2xl underline text-center font-bold">Fasteners Manufacturers in India</h1>
      <div className="flex px-20 py-5 gap-5 mb-5"> {/*container*/}
        <div className=" w-[70%] text-justify">{/* left container */}
          <p className=" font-arial text-s " >Nexo Group, a leading name in the world of fasteners and structure, has been assisting the Global economy in the areas of Electricity, Telecommunication, Railways and Road Safety Guard Rails. Growing with growth in these areas Nexo Group, today forms an Industry managing Two Divisions, Fasteners Division and Structure Division <br />
            Established its base in 1964 for manufacturing fasteners Nexo Industries Ltd. and High Tensilefasteners in 1978 with Hot Dip Galvanized fasteners in 1982. Nexo Industries Ltd., has attained a place among the leading manufacturers of fasteners in the world. In the year 1997, after a number of achievements towards our aim of “Total Quality Management”, Nexo became the first ISO 9002 Company in India of manufacturing Hot Dip Galvanized Fasteners. Nexo, having won the trust of OEM customers in highly competitive and quality-conscious makers, grows by Doubling its turnover every 2 years. Our team of highly motivated and Dynamic Technocrats and and the most sophisticated technology have always had a close edge over our quality control at each level of production. While giving the customers – an extra touch Nexo finds itself alone among others, to provide a widest range of fasteners with surface coating. Nexo as the biggest manufacturer of the hot dip Galvanized Fasteners with the production of 4000 tonns per month. Our aim of TQM is set to achieve the level of customer expectations beyond customer satisfaction. Nexo is also CE certified company for EN 15048 & EN 14592.</p>
        </div>
        <div className="w-[30%]"> {/* right container */}
          <img src={fastenersImg} alt="fasternerImg" />
        </div>
      </div>

      <div className="overflow-x-auto px-60 text-sm"> {/* Table container */}
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Sr. No.</th>
              <th className="border border-gray-300 px-4 py-2">ITEM</th>
              <th className="border border-gray-300 px-4 py-2">IS</th>
              <th className="border border-gray-300 px-4 py-2">DIN</th>
              <th className="border border-gray-300 px-4 py-2">ISO</th>
              <th className="border border-gray-300 px-4 py-2">ASTM</th>
              <th className="border border-gray-300 px-4 py-2">BS</th>
              <th className="border border-gray-300 px-4 py-2">AS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-orange-200">
              <td className="border border-gray-300 px-4 py-2 text-center">1</td>
              <td className="border border-gray-300 px-4 py-2">HEX BOLT</td>
              <td className="border border-gray-300 px-4 py-2">1363-1, 1364-1</td>
              <td className="border border-gray-300 px-4 py-2">601, 931</td>
              <td className="border border-gray-300 px-4 py-2">4016, 4014</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">4190, 3692</td>
              <td className="border border-gray-300 px-4 py-2">1111</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">2</td>
              <td className="border border-gray-300 px-4 py-2">HEX SCREW</td>
              <td className="border border-gray-300 px-4 py-2">1363-1, 1364-11</td>
              <td className="border border-gray-300 px-4 py-2">933</td>
              <td className="border border-gray-300 px-4 py-2">4018, 4017</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">4190</td>
              <td className="border border-gray-300 px-4 py-2">1111, 3692</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="border border-gray-300 px-4 py-2 text-center">3</td>
              <td className="border border-gray-300 px-4 py-2">HEX NUT</td>
              <td className="border border-gray-300 px-4 py-2">1363-111, 1364-111</td>
              <td className="border border-gray-300 px-4 py-2">24034, 24032</td>
              <td className="border border-gray-300 px-4 py-2">4034, 4032</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">4190</td>
              <td className="border border-gray-300 px-4 py-2">1112, 3692</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">4</td>
              <td className="border border-gray-300 px-4 py-2">COACH BOLT</td>
              <td className="border border-gray-300 px-4 py-2">2609</td>
              <td className="border border-gray-300 px-4 py-2">603</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">4933</td>
              <td className="border border-gray-300 px-4 py-2">1390</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="border border-gray-300 px-4 py-2 text-center">5</td>
              <td className="border border-gray-300 px-4 py-2">HEX BOLT(STRUCTURAL)</td>
              <td className="border border-gray-300 px-4 py-2">12427, 6639</td>
              <td className="border border-gray-300 px-4 py-2">7990</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">A-394</td>
              <td className="border border-gray-300 px-4 py-2">4190</td>
              <td className="border border-gray-300 px-4 py-2">1559</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">6</td>
              <td className="border border-gray-300 px-4 py-2">SPRING WASHER</td>
              <td className="border border-gray-300 px-4 py-2">3063</td>
              <td className="border border-gray-300 px-4 py-2">127</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">4464</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="border border-gray-300 px-4 py-2 text-center">7</td>
              <td className="border border-gray-300 px-4 py-2">PLAIN WASHER</td>
              <td className="border border-gray-300 px-4 py-2">2016</td>
              <td className="border border-gray-300 px-4 py-2">125, 126</td>
              <td className="border border-gray-300 px-4 py-2">7089, 7091</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">4320</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">8</td>
              <td className="border border-gray-300 px-4 py-2">PACK WASHER</td>
              <td className="border border-gray-300 px-4 py-2">6610</td>
              <td className="border border-gray-300 px-4 py-2">7989</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
            </tr>
            <tr className="bg-orange-200">
              <td className="border border-gray-300 px-4 py-2 text-center">13</td>
              <td className="border border-gray-300 px-4 py-2">HOT DIP GALVANISING</td>
              <td className="border border-gray-300 px-4 py-2">1367</td>
              <td className="border border-gray-300 px-4 py-2">267</td>
              <td className="border border-gray-300 px-4 py-2">1461</td>
              <td className="border border-gray-300 px-4 py-2">A-153M</td>
              <td className="border border-gray-300 px-4 py-2">729</td>
              <td className="border border-gray-300 px-4 py-2">–</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AboutNexoUSA