import React from "react";
import Image from "next/image";

const Structures = () => {
  return (
    <div className="mt-10">
      {/* Banner Section */}
      <div>
        <Image
          src="/images/banners/for-structures-banner.jpg"
          alt="Fabrication Division Banner"
          width={1920}
          height={250}
          className="w-full h-[250px] object-cover"
        />
        <h1 className="py-4 lg:px-35 px-20  bg-[#ff9c00] text-2xl font-bold text-white">
          Structures
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-[80%] mx-auto my-10 text-justify">
        <h2 className="text-xl sm:text-2xl font-bold italic mb-4">
          EN 15048 SB Bolting Manufacturers, Manufacturers of SB Bolting
        </h2>

        <h3 className="text-lg sm:text-xl font-bold text-[#ff9c00] mb-4">
          EN 15048 Non-Preload Bolt Assemblies (CE Marked)
        </h3>

        <h4 className="font-semibold mb-2">Structural Bolting Assemblies (SB)</h4>
        <p className="mb-4">
          We are manufacturers of CE-Marked Non-Preload Bolt assemblies from M8
          to M36, Grade 4.6, 5.6, 8.8 in zinc Plated and Hot Dip Galvanized
          oversize / Hot Dip Galvanized ISO Fit.
        </p>

        <p className="mb-6">
          Nexo Industries Pvt. Ltd. are also manufacturing Fasteners for
          wood-construction, as per EN-14592.
        </p>

        <h4 className="font-semibold mb-2">Complete Stock in Warehouse :</h4>
        <p className="mb-6">
          Most steel structures use Non-preloaded Structural Bolts. For that
          reason Nexo keeps a complete range of stock of Structural Bolts
          conforming to EN 15948. This assures you of competitive conditions and
          fast deliveries, as and when needed by you.
        </p>

        <h4 className="font-semibold mb-2">Packing Regulation :</h4>
        <p>
          We do packing of Structural Bolts with assembly of washer and without
          assembly as per customer’s specific requirement. We do packing in
          colored bags as per UK’s specification and in small boxes. Labeling is
          done as per Standard EN 15048.
        </p>
      </div>

      {/* Image Section */}
        <div className="w-[80%] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <Image
              src="/assets/img/EN-15048-SB-Bolting-Manufacturers.jpg"
              alt="EN 15048 SB Bolting Manufacturers"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-contain"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/img/Manufacturers-of-SB-Bolting.png"
              alt="Manufacturers of SB Bolting"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-contain"
            />
          </div>
        <p><strong>Note :</strong> <br />Pleased  to inform you that we shall soon have the distinction of having EN 14399 Certification.</p>
        </div>

        <div className="flex justify-center my-6">
          <Image
            src="/assets/img/structures.png"
            alt="Manufacture"
            width={1000}
            height={800}
            className="rounded-lg shadow-md object-contain px-6"
          />
        </div>
    </div>
  );
};

export default Structures;
