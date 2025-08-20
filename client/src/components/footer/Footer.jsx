// import React from 'react'
import { MapPinMinusInside, Phone, Mail } from "lucide-react"
import LinkContainer from "./LinkContainer"

const Footer = () => {
  return (    
    <footer className="relative w-full lg:px-32 px-4 py-12 text-gray-200 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/footerBackground.jpg')",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Main container */}
      <div className="relative z-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {/* About Us */}
        <div>
          <h1 className="text-xl font-semibold underline underline-offset-4 text-gray-200">
            ABOUT US
          </h1>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Nexo is an EN 15048 & CE Certified company leading manufacturer of high tensile hot dip
            Galvanized fastener & cold forged Fasteners Manufacturers in India.
          </p>
        </div>

        {/* Get in Touch */}
        <div>
          <h1 className="text-xl font-semibold underline underline-offset-4 text-gray-200">
            GET IN TOUCH
          </h1>
          <ul className="mt-4 space-y-3 text-gray-500">
            <li className="flex items-start gap-x-3">
              <MapPinMinusInside className="text-orange-400 shrink-0 mt-1" />
              <span>Village Mangarh, Machhiwara Road, Kohara Ludhiana-141112 (INDIA).</span>
            </li>
            <li className="flex items-center gap-x-3">
              <Phone className="text-orange-400 shrink-0" />
              <span>+91-98140-22767, 98142-22767, 98148-22767</span>
            </li>
            <li className="flex items-center gap-x-3">
              <Mail className="text-orange-400 shrink-0" />
              <span>info@nexoindia.com</span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h1 className="text-xl font-semibold underline underline-offset-4 text-gray-200">
            LOCATE US
          </h1>
          <div className="mt-4 w-full h-36 lg:h-50 rounded-lg overflow-hidden border border-gray-700 shadow-md">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.741357153004!2d77.10309279114583!3d28.708466262521114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19228e46bd1f%3A0xe1f07fa40f4b2afb!2sGayatri%20Computer%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1734261834711!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-10">
        <hr className="border-gray-700" />
      </div>

      {/* Links */}
      <div className="relative z-10 mt-8">
        <LinkContainer />
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-6 text-gray-500 text-center text-sm">
        <p>
          © 2025 – NEXO INDIA Powered By :
          <span className="text-orange-400 font-medium"> Aseem Chaudhry </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
