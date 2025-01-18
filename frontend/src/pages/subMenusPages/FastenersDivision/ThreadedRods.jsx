// import React from 'react';
import ThreadedRodsCoverImg from "../../../assets/img/ThreadedRodsCoverImg.jpg";
import ThreadedRodsManufacturersIndia from "../../../assets/img/ThreadedRodsManufacturersIndia.jpg";

const ThreadedRods = () => {
  return (
    <div> {/* Main Container */}
      <div> {/* Banner image */}
        <img
          src={ThreadedRodsCoverImg}
          alt="Threaded Rods Cover"
          className="w-full h-[250px] object-cover bg-center bg-fixed"
        />
        <h1 className="py-2 px-5 md:px-20 bg-[#ff9c00] text-2xl font-bold text-white">Threaded Rods</h1>
      </div>

      <h1 className="text-center text-xl md:text-2xl font-bold mt-5">
        <span className="underline">Threaded Rods Manufacturers India</span> Threaded Rod Manufacturers in Ludhiana
      </h1>

      <div className="flex flex-col md:flex-row  mt-6 md:py-10 py-4 md:px-20 px-4"> {/* Content Container */}
        <div className="md:w-1/2"> {/* Left content */}
          <p className="text-base md:text-lg">
            Nexo Industries is one of the largest Threaded Rods Manufacturers in India. To manufacture high-quality Threaded Rods for our clients, we use the finest quality materials, precision, and cutting-edge technology. Our company is a renowned stockist of many types of high-quality Threaded Rods for huge businesses and other industries. We supply and export a wide assortment of Threaded Rods in India and a few other countries. We have played a significant role in the development and growth of the Indian market.
          </p>
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0"> {/* Right content */}
          <img
            src={ThreadedRodsManufacturersIndia}
            alt="Threaded Rods Manufacturer"
            className="w-[80%] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ThreadedRods;
