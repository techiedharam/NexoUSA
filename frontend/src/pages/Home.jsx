import Description from "../components/home/Description";
import FabricationComponent from "../components/home/FabricationComponent";
import FastenerComponent from "../components/home/FastenerComponent";
import FastnersLinks from "../components/home/FastnersLinks";
import WelcomeSection from "../components/home/WelcomeSection";

// Slider Component
import Slider from "../components/carousel/Slider";


const Home = () => {
  return (
    <>
      {/* <h1 className="p-10 text-center">This is Home Page </h1> */}
      <div>
        <Slider />
        <WelcomeSection />
        <FastenerComponent />
        <FabricationComponent />
        <Description />
        <FastnersLinks />
      </div>
    </>
  );
};

export default Home;
