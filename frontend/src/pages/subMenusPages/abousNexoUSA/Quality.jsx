import qualityBannerImg from "../../../assets/aboutNexoImg/QualityPolicy.jpg";
import GalvanizedFastenersManufacturers from "../../../assets/aboutNexoImg/GalvanizedFastenersManufacturers.jpg";

const Quality = () => {
  return (
    <div> {/* Main container */}
      {/* Banner Section */}
      <div>
        <img
          src={qualityBannerImg}
          alt="bannerImg"
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        />
        <h1 className="py-2 px-4 md:px-20 bg-[#ff9c00] text-2xl font-bold text-white">
          Quality Policy
        </h1>
      </div>

      <h1 className="text-xl md:text-2xl font-semibold mt-6 text-center">Galvanized Fasteners Manufacturers</h1>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 mt-6 px-4">
        <div className="md:w-1/2 p-4">
          <p>
            The Company in order to attain excellence, follows its quality policy to the core. The policy states that:
            We at NEXO Industries (P.) Ltd. commit ourselves to put in our best endeavor to achieve total customer satisfaction by:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Producing Quality Goods</li>
            <li>Adhering to delivery schedules</li>
          </ul>
          <p className="mt-4">
            Continuously upgrading our products and processes through upgradation in technology and active participation of employees at all levels.
          </p>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2">
          <img src={GalvanizedFastenersManufacturers} alt="Galvanized Fasteners" className="w-full md:w-[300px] h-auto" />
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mt-6 text-center">OUR CONTRIBUTION TO THE NATION BUILDING</h2>

      <div className="overflow-x-auto mt-6">
        {/* Table Container */}
        <table className="min-w-full table-auto border-separate border border-white px-4 md:px-20 mb-5">
          <tbody>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">Bureau of Indian Standards (ISI).</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">Power Grid Corporation of India Ltd. (PGCIL) Electricity Distribution Authority of Govt. of India.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">National Thermal Corporation of India Ltd. (NTPC) Electricity Generation Authority of Govt. of India.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">Department of Telecommunication (DOT) Telecommunication Authority of Govt. of India.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">Central Organization of Railway Electrification (CORE) Railway Controlling Authority of India.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">Electricity Departments of Various States in India and Globally.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">Director General Supplies & Disposal (DGS&D) Central Purchasing Authority of Govt. of India.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">India’s forts 800KVA Line was established between ‘Kishanpura Moga” with the fasteners of ” Nexo “. The total order was 1500 M.T. from Cobra- Spain.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">We are supplying our fasteners to World’s reputed Transmission Tower Lines manufacturer i.e. KEC International Ltd., Kalpathru Ltd. Inabensa, Lait, ABB, Stamens and many more.</td>
            </tr>
            <tr className="border-2 border-white bg-[#ffcc66]">
              <td className="px-4 py-2">»</td>
              <td className="px-4 py-2">CE Certification for EN 15048 & EN 14592.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Quality;
