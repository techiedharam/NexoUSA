import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax'; // Import parallax styles

// Import your images
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpg";
import slide5 from "../../assets/img/slide5.jpg";
import contentImg1 from "../../assets/img/content1.png";
import contentImg2 from "../../assets/img/content2.png";
import contentImg3 from "../../assets/img/content3.png";
import contentImg4 from "../../assets/img/content4.png";
import contentImg5 from "../../assets/img/content5.png";

import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';

const slidesData = [
  {
    background: slide1,
    contentImage: contentImg1,
    title: "FOR TRANSMISSION LINES",
    subtitle: "POWER TRANSMISSION SECTOR, TELE-COMMUNICATION SECTOR",
    description: "Power Transmission and Tele-communication sector is the key feature in the progress and prosperity of any country.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: slide2,
    contentImage: contentImg2,
    title: "FOR STRUCTURES",
    subtitle: "EN 15048 Non-Preload Bolt Assemblies (CE Marked)",
    description: "Most steel structure use non-preloaded structural Bolts. For that reason Nexo keeps a complete range of stock of Structural Bolts Conforming to EN 15048. This assures you of competitive condition and fast deliveries, as and when needed by you.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: slide3,
    contentImage: contentImg3,
    title: "FOR RAILWAYS ELECTRICAL",
    subtitle: "Empowering Railways with Efficient Electrical Solutions",
    description: "Nexo plays a vital role in supporting the electrification of railway networks by providing reliable products and services. With registrations with RDSO, CORE, and DMRC, Nexo ensures the highest standards for railway electrification components, including all grades of bolts, nuts, and more.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: slide4,
    contentImage: contentImg4,
    title: "FOR STEEL/WOODEN CRASH BARRIERS",
    subtitle: "Strengthening Road Safety with High-Quality Barriers",
    description: "Nexo's products are widely recognized for their durability and reliability, serving major manufacturers of guard rails and road crash barriers across Europe, the Middle East, Australia, New Zealand, and the Asian subcontinent.",
    buttonText: "More Info",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: slide5,
    contentImage: contentImg5,
    title: "FABRICATION DIVISION",
    subtitle: "MANUFACTURERS & SUPPLY OF TOWER MATERIAL, WIND MILLS, GUARD RAILS AND ROAD CRASH BARRIERS.",
    description: "As per Draft National Electricity Plan, by 2012, the Power Transmission Lines in India will expand to 2,93,372 Circuit KM.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
];

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      parallax={true}
      modules={[Autoplay, Pagination, Navigation, Parallax]}
      className="w-full h-[600px] mySwiper"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-full bg-cover bg-center flex flex-col md:flex-row items-center"
            style={{
              backgroundImage: `url(${slide.background})`,
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10"></div>

            <div className="relative z-20 flex w-full flex-col md:flex-row md:px-10">
              {/* Image Div */}
              <div
                className={`flex-1 flex justify-center items-center p-4 md:p-0 ${index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
              >
                <img
                  src={slide.contentImage}
                  alt={`Slide ${index + 1} Content`}
                  className="w-[80%] md:w-[80%] max-h-[50%] md:max-h-[100%] object-contain transform transition-transform duration-700 hover:scale-105"
                  data-swiper-parallax="-100"
                />
              </div>

              {/* Text Div */}
              <div
                className={`flex-1 flex flex-col justify-center px-4 md:px-20 text-[#ff9c00] text-center md:text-left ${index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                data-swiper-parallax="-50%"
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-2" data-swiper-parallax="-300">
                  {slide.title}
                </h1>
                <h4 className="text-sm md:text-xl font-light mb-4 max-w-md md:mr-auto" data-swiper-parallax="-200">
                  {slide.subtitle}
                </h4>
                <p className="text-sm md:text-sm mb-6 max-w-md md:mr-auto" data-swiper-parallax="-200">
                  {slide.description}
                </p>
                <button
                  className={`py-2 px-0 rounded w-[200px] mx-auto  lg:mx-0  text-sm transform transition-transform duration-500 hover:scale-105 text-black font-bold ${slide.buttonColor}`}
                  data-swiper-parallax="-100"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
