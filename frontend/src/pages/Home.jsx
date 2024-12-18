

// import SliderGPT from "../components/carousel/SliderGPT";

import FabricationComponent from "../components/home/FabricationComponent";
import FastenerComponent from "../components/home/FastenerComponent";
import SwiperComponent from "../components/home/SwiperComponent";
import WelcomeSection from "../components/home/WelcomeSection";


const Home = () => {
  return (
    <>
      {/* <h1 className="p-10 text-center">This is Home Page </h1> */}
      <div>
        {/* <SliderGPT /> */}
        <SwiperComponent />
        <WelcomeSection />
        <FastenerComponent />
        <FabricationComponent />
      </div>
    </>
  );
};

export default Home;
