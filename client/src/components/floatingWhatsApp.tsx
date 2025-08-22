// components/floatingWhatsApp.tsx
"use client";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/15028897313"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
