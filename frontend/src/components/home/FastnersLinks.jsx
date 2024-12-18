// import React from 'react'

const FastnersLinks = () => {
  const fastenerProducts = [
    { name: "Fasteners Manufacturers in India" },
    { name: "Fasteners Products in India" },
    { name: "Galvanized Fasteners in India" },
    { name: "Tower Bolt Manufacturers India" },
    { name: "EN 15048 SB Bolting Manufacturers" },
    { name: "Guardrail Fasteners in India" },
    { name: "Threaded Rods Manufacturers India" },
    { name: "Threaded Rods Producers India" },
    { name: "Industrial Fasteners Manufacturers India" },
    { name: "Post Support Manufacturers in India" },
    { name: "Fence Post Spikes Manufacturers in India" },
    { name: "H Form Manufacturers India" },
    { name: "Temporary Fencing Manufacturers in India" },
    { name: "Construction Fence Manufacturers in India" },
    { name: "Farm Agriculture Gates Manufacturers" },
    { name: "Sheep Hurdles Manufacturers India" },
    { name: "Pedestrian Barriers Manufacturers in India" },
    { name: "Crowd Control Barrier Manufacturers in India" },
    { name: "Transport Pallet Manufacturers in India" },
    { name: "Fence Coupler Manufacturers India" },
    { name: "Struts Channels Manufacturers India" },
    { name: "Strut Accessories Manufacturers India" },
    { name: "Channels Nuts Manufacturers India" }
  ];

  return (
    <div>
      <ul className="grid grid-cols-3 gap-2 py-10 px-52 text-sm">
        {
          fastenerProducts?.map((items, i) => (
            <li key={i} className="">{items.name}</li>
          ))
        }
      </ul>

    </div>
  )
}

export default FastnersLinks
