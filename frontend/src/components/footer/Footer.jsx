// import React from 'react'
import { MapPinMinusInside, Phone, Mail } from "lucide-react"
import LinkContainer from "./LinkContainer"
const Footer = () => {
  return (
    <footer className=" w-full bg-black lg:px-32 px-4 py-10">
      {/* Main container of footer */}
      <div className=" grid lg:grid-cols-3 grid-cols-1 gap-5 text-white">
        <div>
          <h1 className=" text-2xl text-[#ff9c00] font-semibold ">ABOUS US</h1>
          <p className="mt-4 text-white/60">Nexo is an EN 15048 & CE Certified company leading manufacturer of high
            tensile hot dip Galvanized fastener & cold forged Fasteners Manufacturers in India.
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-[#ff9c00] font-semibold">GET IN TOUCH</h1>
          <ul className=" mt-4 text-white/60">
            <li className="flex items-start  gap-x-2 leading-relaxed">
              <MapPinMinusInside />
              <span>Village Mangarh, Machhiwara Road, Kohara Ludhiana-141112 (INDIA).</span>
            </li>
            <li className="flex items-center gap-x-2 leading-relaxed">
              <Phone />
              <span>+91-98140-22767, 98142-22767, 98148-22767</span>
            </li>
            <li className="flex items-center gap-x-2 leading-relaxed">
              <Mail />
              <span>info@nexoindia.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" text-2xl text-[#ff9c00] font-semibold">LOCATE US</h1>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.741357153004!2d77.10309279114583!3d28.708466262521114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19228e46bd1f%3A0xe1f07fa40f4b2afb!2sGayatri%20Computer%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1734261834711!5m2!1sen!2sin"
              width="400px"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <LinkContainer />
      <div className="text-white/60 mt-6 text-center text-sm ">
        <p>© 2024 – NEXO USA Powered By : <span className="text-white"> Aseem Chaudhry </span></p>
      </div>
    </footer>
  )
}

export default Footer
