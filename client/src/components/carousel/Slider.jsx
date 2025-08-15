'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import 'swiper/css/effect-fade';
import Image from "next/image";

import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';

// Custom styles for enhanced slider
const customStyles = `
  .swiper-pagination-bullet {
    background: #ff9c00 !important;
    opacity: 0.7 !important;
    transition: all 0.3s ease !important;
    width: 8px !important;
    height: 8px !important;
    cursor: pointer !important;
  }
  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    transform: scale(1.2) !important;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px !important;
    font-weight: bold !important;
    cursor: pointer !important;
  }
  @media (min-width: 640px) {
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 18px !important;
      cursor: pointer !important;
    }
    .swiper-pagination-bullet {
      width: 10px !important;
      height: 10px !important;
      cursor: pointer !important;
    }
  }
  @media (min-width: 768px) {
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 20px !important;
      cursor: pointer !important;
    }
    .swiper-pagination-bullet {
      width: 12px !important;
      height: 12px !important;
      cursor: pointer !important;
    }
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
  }
`;

const slidesData = [
  {
    background: "/images/banners/slide1.jpg",
    contentImage: "/images/banners/content1.png",
    title: "FOR TRANSMISSION LINES",
    subtitle: "POWER TRANSMISSION SECTOR, TELE-COMMUNICATION SECTOR",
    description: "Power Transmission and Tele-communication sector is the key feature in the progress and prosperity of any country.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: "/images/banners/slide2.jpg",
    contentImage: "/images/banners/content2.png",
    title: "FOR STRUCTURES",
    subtitle: "EN 15048 Non-Preload Bolt Assemblies (CE Marked)",
    description: "Most steel structure use non-preloaded structural Bolts. For that reason Nexo keeps a complete range of stock of Structural Bolts Conforming to EN 15048. This assures you of competitive condition and fast deliveries, as and when needed by you.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: "/images/banners/slide3.jpg",
    contentImage: "/images/banners/content3.png",
    title: "FOR RAILWAYS ELECTRICAL",
    subtitle: "Empowering Railways with Efficient Electrical Solutions",
    description: "Nexo plays a vital role in supporting the electrification of railway networks by providing reliable products and services. With registrations with RDSO, CORE, and DMRC, Nexo ensures the highest standards for railway electrification components, including all grades of bolts, nuts, and more.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: "/images/banners/slide4.jpg",
    contentImage: "/images/banners/content4.png",
    title: "FOR STEEL/WOODEN CRASH BARRIERS",
    subtitle: "Strengthening Road Safety with High-Quality Barriers",
    description: "Nexo's products are widely recognized for their durability and reliability, serving major manufacturers of guard rails and road crash barriers across Europe, the Middle East, Australia, New Zealand, and the Asian subcontinent.",
    buttonText: "More Info",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
  {
    background: "/images/banners/slide5.jpg",
    contentImage: "/images/banners/content5.png",
    title: "FABRICATION DIVISION",
    subtitle: "MANUFACTURERS & SUPPLY OF TOWER MATERIAL, WIND MILLS, GUARD RAILS AND ROAD CRASH BARRIERS.",
    description: "As per Draft National Electricity Plan, by 2012, the Power Transmission Lines in India will expand to 2,93,372 Circuit KM.",
    buttonText: "MORE INFO",
    buttonColor: "bg-[#ff9c00] hover:bg-black hover:text-white",
  },
];

export default function App() {
  return (
    <div>
      <style jsx global>{customStyles}</style>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' bg-[#ff9c00] opacity-70 hover:opacity-100 transition-all duration-300"></span>';
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        parallax={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, Parallax]}
        className="w-full h-[70vh] sm:h-[80vh] md:h-[80vh] lg:h-[85vh] min-h-[500px] sm:min-h-[600px] md:min-h-[600px] lg:min-h-[650px] mySwiper relative overflow-hidden"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center flex flex-col md:flex-row items-center transform transition-all duration-1000"
              style={{
                backgroundImage: `url(${slide.background})`,
              }}
            >
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70 z-10"></div>

              {/* Animated background particles */}
              <div className="absolute inset-0 z-5">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#ff9c00] rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-ping opacity-40"></div>
                <div className="absolute bottom-1/3 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#ff9c00] rounded-full animate-bounce opacity-50"></div>
              </div>

              <div className="relative z-20 flex w-full flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-16 animate-fade-in">
                {/* Image Div */}
                <div
                  className={`flex-1 flex justify-center items-center p-2 sm:p-4 md:p-4 lg:p-6 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"} mt-4 sm:mt-6 md:mt-0`}
                >
                  <div className="relative group w-full max-w-[300px] sm:max-w-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff9c00]/20 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl blur-lg sm:blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <Image
                      src={slide.contentImage}
                      alt={`Slide ${index + 1} Content`}
                      width={400}
                      height={300}
                      className="relative w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[400px] object-contain transform transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:rotate-1 sm:hover:rotate-2 drop-shadow-lg sm:drop-shadow-xl md:drop-shadow-2xl cursor-pointer"
                      data-swiper-parallax="-100"
                    />
                  </div>
                </div>

                {/* Text Div */}
                <div
                  className={`flex-1 flex flex-col justify-center px-2 sm:px-4 md:px-4 lg:px-6 xl:px-8 text-center lg:text-left ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} mt-2 sm:mt-4 md:mt-0`}
                  data-swiper-parallax="-50%"
                >
                  <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white drop-shadow-lg sm:drop-shadow-xl md:drop-shadow-2xl" data-swiper-parallax="-300">
                      <span className="bg-gradient-to-r from-[#ff9c00] to-[#ff6b00] bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>
                    <h4 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg lg:mr-auto text-[#ff9c00] drop-shadow-md sm:drop-shadow-lg" data-swiper-parallax="-200">
                      {slide.subtitle}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-5 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg lg:mr-auto text-gray-200 leading-relaxed sm:leading-normal drop-shadow-sm sm:drop-shadow-md" data-swiper-parallax="-200">
                      {slide.description}
                    </p>
                    <button
                      className={`py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full w-[140px] sm:w-[160px] md:w-[180px] mx-auto lg:mx-0 text-xs sm:text-sm md:text-base font-bold transform transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-lg sm:hover:shadow-xl text-black ${slide.buttonColor} shadow-md sm:shadow-lg border-2 border-transparent hover:border-white/20 cursor-pointer`}
                      data-swiper-parallax="-100"
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-[#ff9c00] !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12 !bg-white/20 !backdrop-blur-sm !rounded-full !border-2 !border-[#ff9c00]/30 hover:!bg-[#ff9c00] hover:!text-white transition-all duration-300 !hidden md:!flex !cursor-pointer"></div>
        <div className="swiper-button-next !text-[#ff9c00] !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12 !bg-white/20 !backdrop-blur-sm !rounded-full !border-2 !border-[#ff9c00]/30 hover:!bg-[#ff9c00] hover:!text-white transition-all duration-300 !hidden md:!flex !cursor-pointer"></div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-4 sm:!bottom-6 md:!bottom-6 lg:!bottom-8 !cursor-pointer"></div>
      </Swiper>
    </div>
  );
}