// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";

// Import required modules
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Images
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";
import slide4 from "./img/slide4.jpg";
import slide5 from "./img/slide5.jpg";

const SliderGPT = () => {
  return (
    <div className="w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={800} // Adjust slide transition speed
        parallax={true} // Enable Parallax effect
        autoplay={{
          delay: 2500, // Auto slide every 2.5 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Enable pagination bullets
        }}
        navigation={true} // Enable navigation buttons
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[550px]"
      >
        {/* Parallax Background */}
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image": `url(${slide1})`,
            "background-size": "cover",
          }}
          data-swiper-parallax="-20%"
        ></div>

        {/* Slides */}
        <SwiperSlide>
          <div
            data-swiper-parallax="-300"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-swiper-parallax="-300"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-swiper-parallax="-300"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-swiper-parallax="-300"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={slide4}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            data-swiper-parallax="-300"
            className="w-full h-full flex items-center justify-center"
          >
            <img
              src={slide5}
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderGPT;
