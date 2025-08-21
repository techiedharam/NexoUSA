import Image from "next/image";
import { Smartphone, Phone, Globe, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <div>
      {/* Banner Section */}
      <div>
        <Image
          src="/assets/img/contactBanner.jpg"
          alt="Contact Banner"
          width={1920}
          height={250}
          className="w-full h-[250px] object-cover"
          priority
        />
        <h1 className="py-2 px-4 sm:px-20 bg-[#ff9c00] text-2xl font-bold text-white">
          Contact Nexo USA
        </h1>
      </div>

      {/* Company Info */}
      <h1 className="text-center text-2xl font-semibold mt-4">
        NEXO INDUSTRIES PVT. LTD.
      </h1>
      <p className="text-center text-sm text-gray-600">
        Village Mangarh Machhiwara Road, Kohara Ludhiana-141 112 (INDIA).
      </p>

      {/* Contact Grid */}
      <div className="max-w-[90%] sm:max-w-[80%] m-auto grid grid-cols-2 sm:grid-cols-4 gap-6 p-6">
        {/* Mobile Numbers */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Smartphone size={24} />
          </div>
          <p className="text-center text-sm">
            +91-98140-22767, 98142-22767,
            <br /> 98148-22767
          </p>
        </div>

        {/* Landline */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Phone size={24} />
          </div>
          <p className="text-center text-sm">
            +91-161-2848686, 2848080,
            <br /> 2848040
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Mail size={24} />
          </div>
          <p className="text-center text-sm">nexo@nexoindia.com</p>
        </div>

        {/* Website */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Globe size={24} />
          </div>
          <p className="text-center text-sm">www.nexoindia.com</p>
        </div>

        {/* Export */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Mail size={24} />
          </div>
          <h3 className="text-center font-semibold">Export</h3>
          <p className="text-center text-sm">
            export@nexoindia.com <br /> +91-95929-01381
          </p>
          <p className="text-center text-sm">
            export2@nexoindia.com <br /> +91-99145-26601
          </p>
        </div>

        {/* Marketing */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Mail size={24} />
          </div>
          <h3 className="text-center font-semibold">Marketing</h3>
          <p className="text-center text-sm">
            marketing@nexoindia.com <br /> +91-99145-26643
          </p>
          <p className="text-center text-sm">
            india@nexoindia.com <br /> +91-99145-26638
          </p>
        </div>

        {/* Purchase */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Mail size={24} />
          </div>
          <h3 className="text-center font-semibold">Purchase</h3>
          <p className="text-center text-sm">
            epurchase@nexoindia.com <br /> +91-99145-26609
          </p>
        </div>

        {/* HR */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-16 h-16 bg-[#ffa10f] text-black rounded-full flex items-center justify-center">
            <Mail size={24} />
          </div>
          <h3 className="text-center font-semibold">HR Dept.</h3>
          <p className="text-center text-sm">
            hr@nexoindia.com <br /> +91-82880-03705
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-[90%] sm:w-[80%] m-auto h-[450px] py-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d428.0630532434875!2d76.014582!3d30.872547!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9fc3452dfb23%3A0xd2b421aa7fabadd4!2sNexo%20Industries%20LTD.!5e0!3m2!1sen!2sin!4v1737190984991!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
