"use client";

import Image from "next/image";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <section className="flex justify-center px-6 lg:px-24 xl:px-32 py-10 bg-[#ff9c00]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-[90%] gap-10 lg:gap-20">
        {/* Content Part */}
        <div className="lg:w-[65%] text-left space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
            WELCOME TO NEXO INDUSTRIES PVT. LTD.
          </h1>

          <p className="text-xs md:text-sm text-gray-800 font-semibold uppercase tracking-wide">
            Manufacturers of Fasteners in the World
          </p>

          <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
            Nexo Group, a leading name in the world of fasteners and structure, has
            been assisting the Global economy in the areas of Electricity,
            Telecommunication, Railways, and Road Safety Guard Rails. Growing with
            growth in these areas, Nexo Group today forms an Industry managing Two
            Divisions, Fasteners Division and Structure Division.{" "}
            <Link
              href="/more-info"
              className="text-blue-800 underline font-medium hover:text-blue-950 transition-colors"
            >
              MORE INFO…
            </Link>
          </p>

          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Quality Policy
            </h3>
            <p className="text-xs md:text-sm text-gray-800">
              The Company in order to attain excellence, follows its quality policy to
              the core. The policy states that:
            </p>

            <h5 className="text-sm md:text-base font-semibold text-gray-900">
              We at NEXO Industries (P.) Ltd. commit ourselves to put in our best
              endeavor to achieve total customer satisfaction by:
            </h5>

            <ul className="list-disc list-inside text-xs md:text-sm text-gray-800 space-y-1">
              <li>Producing Quality Goods</li>
              <li>Adhering to delivery schedules</li>
            </ul>

            <p className="text-xs md:text-sm text-gray-800">
              Continuously upgrading our products and processes through upgradation in
              technology and active participation of employees at all levels.
            </p>
          </div>
        </div>

        {/* Image Part */}
        <div className="lg:w-[35%] flex justify-center lg:justify-start mt-10 lg:mt-0">
          <Image
            src="/assets/img/welcomeImg.png"
            alt="Welcome"
            width={250}
            height={250}
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[140px] xl:w-[220px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
