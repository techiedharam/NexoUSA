import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";

// Dummy Image URL
import dummyImageURL from "./img/dummy.png"
// const dummyImageURL =

// Slide Background Images
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";
import slide4 from "./img/slide4.jpg";
import slide5 from "./img/slide5.jpg";

const SwiperComponent = () => {
  return (
    <div className="w-full relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={800}
        parallax={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[550px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative flex w-full h-full items-center bg-gradient-to-r from-gray-800 to-gray-900">
            {/* Left Animated Text */}
            <motion.div
              key="slide1"
              className="absolute left-10 text-white max-w-md z-10 sm:left-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-bold mb-4 sm:text-3xl md:text-4xl px-10">High-Quality Nut Bolts</h2>
              <p className="text-lg mb-6 sm:text-sm md:text-base px-10">
                Discover durable and precision-engineered nut bolts for all your
                industrial needs.
              </p>
              <button className="px-5 mx-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Learn More
              </button>
            </motion.div>

            {/* Right-Side Image Animation (Moving Right to Left) */}
            <motion.img
              src={dummyImageURL}
              alt="Nut Bolt"
              className="absolute right-10 mx-10 w-[350px] h-[350px] object-contain rounded-lg shadow-lg sm:right-5 sm:w-[250px] sm:h-[250px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            {/* Background Image */}
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full object-cover opacity-30"
              data-swiper-parallax="-300"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative flex w-full h-full items-center bg-gradient-to-r from-blue-700 to-indigo-900">
            <motion.div
              key="slide2"
              className="absolute left-10 text-white max-w-md z-10 sm:left-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-bold mb-4 sm:text-3xl md:text-4xl">Premium Materials</h2>
              <p className="text-lg mb-6 sm:text-sm md:text-base">
                Our products are built with premium-grade materials to ensure
                longevity and strength.
              </p>
              <button className="px-5 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                Learn More
              </button>
            </motion.div>

            <motion.img
              src={dummyImageURL}
              alt="Nut Bolt"
              className="absolute right-10 w-[350px] h-[350px] object-contain rounded-lg shadow-lg sm:right-5 sm:w-[250px] sm:h-[250px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full object-cover opacity-30"
              data-swiper-parallax="-300"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative flex w-full h-full items-center bg-gradient-to-r from-green-700 to-green-900">
            <motion.div
              key="slide3"
              className="absolute left-10 text-white max-w-md z-10 sm:left-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-bold mb-4 sm:text-3xl md:text-4xl">Engineered for Excellence</h2>
              <p className="text-lg mb-6 sm:text-sm md:text-base">
                Designed to meet rigorous quality standards for industrial and
                construction purposes.
              </p>
              <button className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                Learn More
              </button>
            </motion.div>

            <motion.img
              src={dummyImageURL}
              alt="Nut Bolt"
              className="absolute right-10 w-[350px] h-[350px] object-contain rounded-lg shadow-lg sm:right-5 sm:w-[250px] sm:h-[250px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-full object-cover opacity-30"
              data-swiper-parallax="-300"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative flex w-full h-full items-center bg-gradient-to-r from-purple-700 to-purple-900">
            <motion.div
              key="slide4"
              className="absolute left-10 text-white max-w-md z-10 sm:left-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-bold mb-4 sm:text-3xl md:text-4xl">Precision at Its Best</h2>
              <p className="text-lg mb-6 sm:text-sm md:text-base">
                Crafted with utmost precision for maximum reliability and durability.
              </p>
              <button className="px-5 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition">
                Learn More
              </button>
            </motion.div>

            <motion.img
              src={dummyImageURL}
              alt="Nut Bolt"
              className="absolute right-10 w-[350px] h-[350px] object-contain rounded-lg shadow-lg sm:right-5 sm:w-[250px] sm:h-[250px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            <img
              src={slide4}
              alt="Slide 4"
              className="w-full h-full object-cover opacity-30"
              data-swiper-parallax="-300"
            />
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative flex w-full h-full items-center bg-gradient-to-r from-yellow-700 to-yellow-900">
            <motion.div
              key="slide5"
              className="absolute left-10 text-white max-w-md z-10 sm:left-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h2 className="text-5xl font-bold mb-4 sm:text-3xl md:text-4xl">Designed for Performance</h2>
              <p className="text-lg mb-6 sm:text-sm md:text-base">
                Performance-driven design that ensures maximum strength and functionality.
              </p>
              <button className="px-5 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                Learn More
              </button>
            </motion.div>

            <motion.img
              src={dummyImageURL}
              alt="Nut Bolt"
              className="absolute right-10 w-[350px] h-[350px] object-contain rounded-lg shadow-lg sm:right-5 sm:w-[250px] sm:h-[250px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            <img
              src={slide5}
              alt="Slide 5"
              className="w-full h-full object-cover opacity-30"
              data-swiper-parallax="-300"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
