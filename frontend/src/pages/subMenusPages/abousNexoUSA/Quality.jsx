// import React from 'react'
import qualityBannerImg from "../../../assets/aboutNexoImg/QualityPolicy.jpg"
import GalvanizedFastenersManufacturers from "../../../assets/aboutNexoImg/GalvanizedFastenersManufacturers.jpg"
const Quality = () => {
  return (
    <div>   {/* Main container */}
      {/* Banner Section */}
      <div>
        <img
          src={qualityBannerImg}
          alt="bannreImg"
          className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
        />
        <h1 className="py-2 px-4 md:px-20 bg-[#ff9c00] text-2xl font-bold text-white">
          Quality Policy
        </h1>
      </div>
      <h1>Galvanized Fasteners Manufacturers</h1>
      <div className="flex">
        <div>
          <p>The Company in order to attain excellence, follows its quality policy to the core. The policy states that:
            We at NEXO Industries (P.) Ltd. commit ourselves to put in our best endeavor to achieve total customer satisfaction by:-</p>
          <ul>
            <li>Producing Quality Goods</li>
            <li>Adhering to delivery schedules</li>
          </ul>
          <p>Continuously upgrading our products and process through and process through up gradation in technology and active participation of employees at all levels.</p>
        </div>
        <div>
          <img src={GalvanizedFastenersManufacturers} alt="" />
        </div>
      </div>
      <h2>OUR CONTRIBUTION TO THE NATION BUILDING</h2>
      <div> { /* Table Container */}
        <table>
          <tr>
            <td>»</td>
            <td>Bureau of Indian Standards (ISI).</td>
          </tr>
          <tr>
            <td>»</td>
            <td>Bureau of Indian Standards (ISI).</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Quality
