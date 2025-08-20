import Slider from "@/components/carousel/Slider";
import Description from "@/components/home/Description";
import FastenerComponent from "@/components/home/FastenerComponent";
import FabricationComponent from "@/components/home/FabricationComponent";
import FastnersLinks from "@/components/home/FastnersLinks";
import WelcomeSection from "@/components/home/WelcomeSection";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Slider />
      <WelcomeSection />
      <FastenerComponent />
      <FabricationComponent />
      <Description />
      <FastnersLinks />

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/15028897313"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
