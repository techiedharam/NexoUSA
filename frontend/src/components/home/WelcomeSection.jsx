// import React from 'react'
import { Link } from "react-router-dom";
import welcomeImg from "./img/welcomeImg.png";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-40 py-10 bg-[#ff9c00]">
      {/* Content Part */}
      <div className="lg:w-1/2 text-left space-y-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-black">
          WELCOME TO NEXO INDUSTRIES PVT. LTD.
        </h1>
        <p className="text-sm text-black font-semibold">
          MANUFACTURERS OF FASTENERS IN THE WORLD.
        </p>
        <p className="text-sm text-black leading-relaxed">
          Nexo Group, a leading name in the world of fasteners and structure, has been assisting the Global economy in the areas of Electricity, Telecommunication, Railways, and Road Safety Guard Rails. Growing with growth in these areas, Nexo Group today forms an Industry managing Two Divisions, Fasteners Division and Structure Division.{" "}
          <Link
            to="/more-info"
            className="text-blue-700 underline hover:text-blue-900"
          >
            MORE INFO…
          </Link>
        </p>
        <h3 className="text-xl font-semibold text-black">QUALITY POLICY</h3>
        <p className="text-sm text-black">
          The Company in order to attain excellence, follows its quality policy to the core. The policy states that:
        </p>
        <h5 className="text-base font-medium text-black">
          We at NEXO Industries (P.) Ltd. commit ourselves to put in our best endeavor to achieve total customer satisfaction by:
        </h5>
        <ul className="list-disc list-inside text-sm text-black space-y-1">
          <li>Producing Quality Goods</li>
          <li>Adhering to delivery schedules</li>
        </ul>
        <p className="text-sm text-black">
          Continuously upgrading our products and processes through upgradation in technology and active participation of employees at all levels.
        </p>
      </div>

      {/* Image Part */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <img
          src={welcomeImg}
          alt="Welcome"
          className="w-[200px] max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
