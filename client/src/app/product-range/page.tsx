import Image from "next/image";
const ProductRange = () => {
  const fastenersData = [
    { diameter: 'M04', coldForged: '6 to 40', hotForged: '—-' },
    { diameter: 'M05', coldForged: '8 to 75', hotForged: '—-' },
    { diameter: 'M06', coldForged: '8 to 100', hotForged: '—-' },
    { diameter: 'M08', coldForged: '10 to 100', hotForged: '—-' },
    { diameter: 'M10', coldForged: '15 to 300', hotForged: '25 to 300' },
    { diameter: 'M12', coldForged: '20 to 300', hotForged: '35 to 400' },
    { diameter: 'M14', coldForged: '25 to 300', hotForged: '40 to 400' },
    { diameter: 'M16', coldForged: '25 to 300', hotForged: '40 to 3000' },
    { diameter: 'M18', coldForged: '25 to 300', hotForged: '50 to 3000' },
    { diameter: 'M20', coldForged: '30 to 300', hotForged: '50 to 3000' },
    { diameter: 'M22', coldForged: '30 to 300', hotForged: '60 to 3000' },
    { diameter: 'M24', coldForged: '40 to 300', hotForged: '60 to 3000' },
    { diameter: 'M27', coldForged: '50 to 300', hotForged: '60 to 3000' },
    { diameter: 'M30', coldForged: '60 to 300', hotForged: '60 to 3000' },
    { diameter: 'M33', coldForged: '—-', hotForged: '70 to 1500' },
    { diameter: 'M36', coldForged: '—-', hotForged: '80 to 1500' },
    { diameter: 'M39', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M42', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M45', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M48', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M52', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M56', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M60', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M64', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M72', coldForged: '—-', hotForged: '100 to 1500' },
    { diameter: 'M80', coldForged: '—-', hotForged: '100 to 1500' },
  ];
  return (
    // Main Containier
    <div className="mt-10">
      <div> {/* banner image  */}
        <Image src="/images/banners/productRanegBanner.jpg" alt=""
         width={1920}
          height={250}  
          className=" w-full h-[250px] bg-no-repeat bg-full bg-center bg-fixed" />
        <h1 className="py-2 px-20 bg-[#ff9c00] text-2xl font-bold text-white">PRODUCT RANGE</h1>
      </div>
      <h1 className="text-center md:text-3xl font-bold p-5">Threaded Rods Producers India, Threaded Rods Products Manufacturers</h1>
      <div className="w-[70%] m-auto mt-5"> {/* Range of Commercial & Precision Fasteners Table Container*/}
        <p className="md:text-2xl font-bold py-4">Range of Commercial & Precision Fasteners</p>
        <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#ff9c00', color: 'white' }}>
            <tr>
              <th>Diameter</th>
              <th>Cold Forged Length (mm)</th>
              <th>Hot Forged Length (mm)</th>
            </tr>
          </thead>
          <tbody>
            {fastenersData.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#ffcc66' }}>
                <td>{item.diameter}</td>
                <td>{item.coldForged}</td>
                <td>{item.hotForged}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* two column info  */}
        <div className="flex flex-col md:flex-row justify-between w-full p-4">
          {/* Left Column */}
          <div className="w-full md:w-[48%] mb-6 md:mb-0">
            <h2 className="font-bold text-lg mb-2">BOLTS RANGE:</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hex Bolts</li>
              <li>High Strength Friction Grip Bolts</li>
              <li>Flange Bolts</li>
              <li>Cup Head Bolts</li>
              <li>Crash Barrier</li>
              <li>Guard Rail Bolts</li>
              <li>Socket Head Cap Screws</li>
              <li>Wheel Bolts</li>
              <li>Counter Sunk</li>
              <li>Dome Head</li>
              <li>Machine Screw</li>
              <li>As per customers requirement</li>
              <li>Cold Forging (M4 to M30)</li>
              <li>Hot Forging (M10 to M80)</li>
            </ul>
            <h3 className="font-bold text-md mt-4 mb-2">GRADE:</h3>
            <p>
              4.6, 4.8, 5.6, BSW, BSF, UNC, UNF (Gr2) Precision, 6.6, 6.8, 6.9, 8.8,
              10.9, Gr 2, Gr 5, Gr 8, B7, Gr. R, S, T, U, V, A325, A490
            </p>
            <h3 className="font-bold text-md mt-4 mb-2">FINISH:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Black, Self</li>
              <li>Zinc Plated</li>
              <li>Rilsan Blue</li>
              <li>Hot Dip Galvanized</li>
            </ul>
            <h2 className="font-bold text-lg mt-6 mb-2">NUTS RANGE:</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hex Nuts</li>
              <li>Friction Grip Nuts</li>
              <li>Square Nuts</li>
              <li>Flange Nuts</li>
              <li>Nylock Nuts</li>
              <li>Dome Nuts</li>
              <li>Commercial Nuts</li>
              <li>Wheel Nuts</li>
            </ul>
            <h3 className="font-bold text-md mt-4 mb-2">GRADE:</h3>
            <p>Gr.4, 5, 6, 8, 10, 12, 2H, S, T, U, V</p>
            <h3 className="font-bold text-md mt-4 mb-2">FINISH:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Zinc Plated</li>
              <li>Hot Dip Galvanized</li>
              <li>Self, Black</li>
            </ul>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-[48%]">
            <h2 className="font-bold text-lg mb-2">WASHER RANGE:</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Plain Washers</li>
              <li>Heavy Washers</li>
              <li>Spring Washers</li>
              <li>High Strength Friction Grip Washers</li>
              <li>As per the requirement of the customer</li>
            </ul>
            <h3 className="font-bold text-md mt-4 mb-2">FINISH:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Zinc Plated</li>
              <li>Hot Dip Galvanized</li>
              <li>Black, Self</li>
            </ul>
            <h2 className="font-bold text-lg mt-6 mb-2">THREADED BARS:</h2>
            <p>
              Nexo produces Threaded Bars with a maximum Dia up to 100 mm and Length up to 3 meters.
            </p>
            <h3 className="font-bold text-md mt-4 mb-2">GRADE:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mild Steel</li>
              <li>High Tensile</li>
              <li>Stainless Steel</li>
            </ul>
            <h3 className="font-bold text-md mt-4 mb-2">FINISH:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Self, Black</li>
              <li>Zinc Plated</li>
              <li>Hot Dip Galvanized</li>
            </ul>
            <h2 className="font-bold text-lg mt-6 mb-2">
              STUD BOLTS & DOUBLE ENDED STUDS:
            </h2>
            <p>
              Nexo is manufacturing Stud Bolts as per ASTM A193 Gr. B7 and Double Ended Studs in Dia-½” to 4″ and length up to 76″ in inches series,
              and 8 mm to 100 mm and length up to 3 meters in metric series.
            </p>
            <h3 className="font-bold text-md mt-4 mb-2">GRADE:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>B7</li>
              <li>B7M</li>
              <li>2H</li>
              <li>2HM</li>
            </ul>
            <h3 className="font-bold text-md mt-4 mb-2">DOUBLE ENDED:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mild Steel</li>
              <li>High Tensile</li>
            </ul>
            <Image src="/assets/img/Threaded-Rods-Producers-India.jpg" width={500} height={250}  alt="" />
          </div>
        </div>
        {/* NEXO STANDARD SPECIFICATION TABLE */}
        <div className="overflow-x-auto p-4">
          <h1 className="text-xl font-bold mb-4">NEXO STANDARD SPECIFICATION TABLE</h1>
          <table className="table-auto border-collapse border border-gray-300 w-full min-w-full">
            <thead>
              <tr className="bg-[#ff9c00]">
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Sr. No.</th>
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Standard</th>
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Item</th>
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Mechanical</th>
                <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Dimensional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS<br />
                  ISO<br />
                  ASTM<br />
                  BS<br />
                  AS<br />
                  DIN
                </td>
                <td className="border border-gray-300 px-4 py-2">Hex Bolt</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1367 PART-III<br />
                  ISO 898 PART-I<br />
                  ASTM A307A<br />
                  ASTM A193<br />
                  BS EN ISO 898 PART-I &amp; BS 3692<br />
                  AS 1111 &amp; AS 1110<br />
                  DIN EN ISO 898 PART-I
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1363 PART P-I<br />
                  ISO 4016 &amp; ISO 4014<br />
                  ASME B18.2.1<br />
                  BS 3692<br />
                  AS 1111 &amp; AS 1110<br />
                  DIN 601, 931
                </td>
              </tr>
              <tr className="bg-[#ffcc66]">
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS<br />
                  ISO<br />
                  ASTM<br />
                  AS<br />
                  DIN
                </td>
                <td className="border border-gray-300 px-4 py-2">Heavy Hex Bolt</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1367 PART-III<br />
                  ISO 1367 898 PART<br />
                  ASTM A307B<br />
                  ASTM A325<br />
                  ASTM A325M<br />
                  ASTM A490<br />
                  AS 1252<br />
                  DIN EN ISO 898 PART-I
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 3757<br />
                  ISO 7411, ISO 7412<br />
                  ASME B18.2.1<br />
                  ASME B18.2.3.7M<br />
                  DIN 6914
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS<br />
                  DIN<br />
                  ASTM<br />
                  BS<br />
                  AS
                </td>
                <td className="border border-gray-300 px-4 py-2">HEX Structural Bolt</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1367 PART-III<br />
                  DIN EN ISO 898 PART-III<br />
                  ASTM A394<br />
                  BS EN ISO 898 PART-I<br />
                  AS 1111 &amp; AS 1110
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 12427, IS 6639<br />
                  DIN 7990<br />
                  ASME B18.2.1<br />
                  BS 4190<br />
                  AS 1559
                </td>
              </tr>
              <tr className="bg-[#ffcc66]">
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS<br />
                  DIN<br />
                  AS<br />
                  ASTM
                </td>
                <td className="border border-gray-300 px-4 py-2">Coach / Carriage Bolt</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1367 PART-III<br />
                  DIN EN ISO 898 PART-I<br />
                  AS 1390<br />
                  ASTM J429
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 2609<br />
                  DIN 603<br />
                  AS 1390<br />
                  ASME B18.5
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS<br />
                  AS<br />
                  ISO<br />
                  DIN
                </td>
                <td className="border border-gray-300 px-4 py-2">Hex Screw</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1367 PART-III<br />
                  AS 1111 &amp; AS 1110<br />
                  ISO 898 PART-I<br />
                  DIN EN ISO 898 PART-I
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1363 PART P-II<br />
                  ISO 4017 &amp; ISO 4018<br />
                  DIN 933, DIN 558
                </td>
              </tr>
              <tr className="bg-[#ffcc66]">
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS<br />
                  ISO<br />
                  DIN<br />
                  ASTM<br />
                  BS
                </td>
                <td className="border border-gray-300 px-4 py-2">Stud &amp; Bent / U Bolt</td>
                <td className="border border-gray-300 px-4 py-2">
                  IS 1367 PART-III<br />
                  ISO 898 PART-I<br />
                  DIN EN ISO PART-I<br />
                  ASTM A307-A<br />
                  BS EN ISO 898 PART-I
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  AS PER DRAWING<br />
                  DIN 975<br />
                  ASME B18.31.1<br />
                  IFI-136
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ProductRange
