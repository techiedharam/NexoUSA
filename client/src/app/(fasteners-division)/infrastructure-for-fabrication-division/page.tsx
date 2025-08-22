import React from 'react';
import Image from 'next/image';

const InfrastructureForFabricationDivision = () => {
  return (
    <div className="mt-10">
      {/* Banner Section - Full Width */}
      <div>
        <Image
          src="/images/banners/fabrication-banner-1.jpg"
          alt="Fabrication Division Banner"
          width={1920}
          height={250}
          className="w-full h-[250px] object-cover"
        />
        <h1 className="py-2 px-4 sm:px-20 bg-[#ff9c00] text-2xl font-bold text-white">
          For Fabrication Division
        </h1>
      </div>

      {/* Tower Bolt Manufacturers Section */}
      <div className="py-10 px-6 sm:px-20 max-w-[90%] mx-auto">
        <h1 className="text-center lg:text-3xl text-xl font-bold underline mb-8">
          Tower Bolt Manufacturers India
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Text */}
          <div className="text-justify leading-relaxed space-y-4">
            <p>
              As per Draft National Electricity Plan, by 1012 The Power
              Transmission Lines in India will expand to 2, 93 372 Circuit K.M.
              Realizing the vast scope of Transmission Tower Material in India
              and worldwide, with a corporate vision, NEXO has ventured into the
              Fabrication, Galvanizing and Supply of Tower Material. We have
              targeted our aim at the Power Transmission Sector, Railway,
              Electrification and Manufacturers of Wind Mills, Guard Rails and
              Road Crash Barriers.
            </p>

            <p>
              After achieving Global presence in the field of Industrial
              Fasteners, Nexo has set the goals in the manufacturing of Tower
              Structures both TLT and Cellular Type. For this we have employed
              highly qualified engineers and most competent persons in their
              respective field and provided environmentally sound facilities for
              them to perform perfectly.
            </p>

            <p>
              For this plant we have acquired a vast land and have built Big
              Production Sheds and Galvanizing Section. We are having sufficient
              space for Raw Material storage and Tower Testing. An ETP Plant has
              also been installed to treat Water and Hazardous Wastes.
            </p>
            <p>
              The Raw Material and Finished items in our in–house well equipped
              Testing Laboratory where we have all the facilities to conduct
              Mechanical and Chemical Tests. We are having an imported Spectro –
              meter of German Make, which is the best available for accurate
              Chemical Analysis.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/img/Tower-Bolt-Manufacturers-India.jpg"
              alt="Fabrication Division"
              width={400}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Agriculture Products Section */}
      <div className="py-10 px-6 sm:px-20 max-w-[80%] mx-auto">
        <h1 className="text-center lg:text-3xl text-xl font-bold underline mb-8">
          Agriculture Products / Transmission / IT Communication Towers
        </h1>

        <p className="text-justify leading-relaxed mb-6">
          Besides Tower Manufacturing Division, Nexo Industries Private Limited
          have ventured to become the fabrication manufacturers for catering the
          requirement of Agriculture Industries, Fencing Industries, Cable
          Containment Systems and Road Safety, etc. We have developed into a
          global suppliers of high quality products and services to a wide range
          of industries. Nexo has been surrounded over 90000 sq. meter. We
          produce high quality, cost-effective Products as per specific need of
          the customers. We are already supplying these industries in Europe,
          U.S.A, Australia & New Zealand.
        </p>

        {/* Facilities */}
        <h2 className="text-xl font-bold text-[#ff9c00] uppercase mb-3">
          Facilities
        </h2>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>In-house manufacturing (Raw Material in-Finish Goods out).</li>
          <li>In-house Hot Dip Galvanizing.</li>
          <li>In-house Material Testing Facilities.</li>
          <li>Production Capacity 1000 ton Per Month.</li>
          <li>
            Galvanizing Bath for these gates Length 7 meter & 2 meter deep.
          </li>
        </ul>

        {/* Product Range */}
        <h2 className="text-xl font-bold text-[#ff9c00] uppercase mb-3">
          Product Range
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Farm Gates with Mesh, Farm Gates, Sheep Hurdles and Accessories.</li>
          <li>Post Support Brackets for Wood & Timber Construction.</li>
          <li>Transport Pallets.</li>
          <li>Wood Connectors.</li>
          <li>Angle Brackets.</li>
          <li>Strut Brackets & Strut Channels.</li>
          <li>Cantilever Arms/Channel Nuts.</li>
          <li>Crash Barrier & Accessories.</li>
          <li>Fabricated items as per Drawing or Samples.</li>
          <li>Cubicles.</li>
          <li>Scaffolding & Parts.</li>
          <li>Crowd Control Barriers.</li>
          <li>Construction Flange Pallets & Accessories.</li>
          <li>T Section Posts.</li>
          <li>L Section Posts.</li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="py-10 px-6 sm:px-20 max-w-[80%] mx-auto">
        <h2 className="text-center text-3xl font-bold underline mb-8">
          Fabrication Division Gallery
        </h2>

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <Image src="/images/products/Fabrication-division3.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division4.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division5.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division6.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division2.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division7.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division8.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division9.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division10.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
          <Image src="/images/products/Fabrication-division11.png" width={300} height={200} alt="Fabrication Work" className="rounded-xl shadow-md w-full h-40 object-cover transform transition duration-300 hover:scale-105 hover:shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default InfrastructureForFabricationDivision;
