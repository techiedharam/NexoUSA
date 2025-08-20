"use client";

import Link from "next/link";

const FastnersLinks = () => {
  const fastenerProducts = [
    { name: "Fasteners Manufacturers in India", url: "/fasteners-manufacturers-india" },
    { name: "Fasteners Products in India", url: "/fasteners-products-india" },
    { name: "Galvanized Fasteners in India", url: "/galvanized-fasteners-india" },
    { name: "Tower Bolt Manufacturers India", url: "/tower-bolt-manufacturers" },
    { name: "EN 15048 SB Bolting Manufacturers", url: "/en15048-sb-bolting-manufacturers" },
    { name: "Guardrail Fasteners in India", url: "/guardrail-fasteners-india" },
    { name: "Threaded Rods Manufacturers India", url: "/threaded-rods-manufacturers" },
    { name: "Threaded Rods Producers India", url: "/threaded-rods-producers" },
    { name: "Industrial Fasteners Manufacturers India", url: "/industrial-fasteners-manufacturers" },
    { name: "Post Support Manufacturers in India", url: "/post-support-manufacturers" },
    { name: "Fence Post Spikes Manufacturers in India", url: "/fence-post-spikes-manufacturers" },
    { name: "H Form Manufacturers India", url: "/h-form-manufacturers" },
    { name: "Temporary Fencing Manufacturers in India", url: "/temporary-fencing-manufacturers" },
    { name: "Construction Fence Manufacturers in India", url: "/construction-fence-manufacturers" },
    { name: "Farm Agriculture Gates Manufacturers", url: "/farm-agriculture-gates-manufacturers" },
    { name: "Sheep Hurdles Manufacturers India", url: "/sheep-hurdles-manufacturers" },
    { name: "Pedestrian Barriers Manufacturers in India", url: "/pedestrian-barriers-manufacturers" },
    { name: "Crowd Control Barrier Manufacturers in India", url: "/crowd-control-barrier-manufacturers" },
    { name: "Transport Pallet Manufacturers in India", url: "/transport-pallet-manufacturers" },
    { name: "Fence Coupler Manufacturers India", url: "/fence-coupler-manufacturers" },
    { name: "Struts Channels Manufacturers India", url: "/struts-channels-manufacturers" },
    { name: "Strut Accessories Manufacturers India", url: "/strut-accessories-manufacturers" },
    { name: "Channels Nuts Manufacturers India", url: "/channels-nuts-manufacturers" },
  ];

  return (
    <div className="px-6 py-6">
      <ul className="grid gap-2 text-sm sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {fastenerProducts.map((item, i) => (
          <li key={i} className="py-1">
            <Link 
              href={item.url} 
              className="text-gray-700 hover:text-blue-700 hover:underline transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FastnersLinks;
