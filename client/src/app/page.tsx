import Slider from "@/components/carousel/Slider";
import Description from "@/components/home/Description";
import FastenerComponent from "@/components/home/FastenerComponent";
import FabricationComponent from "@/components/home/FabricationComponent";
import FastnersLinks from "@/components/home/FastnersLinks";
import WelcomeSection from "@/components/home/WelcomeSection";

export default function Home() {
  return (
    <div className="mt-10">
      <Slider />
      <WelcomeSection />
      <FastenerComponent />
      <FabricationComponent />
      <Description />
      <FastnersLinks /> 
    </div>
  );
}
