

// import SliderGPT from "../components/carousel/SliderGPT";

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
      </div>
    </>
  );
};

export default Home;
