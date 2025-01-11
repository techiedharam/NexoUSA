import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

// bg images
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpg";
import slide5 from "../../assets/img/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      speed={1000}
      parallax={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <motion.div
          className="relative h-[200px] md:h-[550px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide1})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 flex justify-between h-full items-center md:px-8">
            {/* Animated Image */}
            <motion.div
              className="w-[45%] md:w-[50%] flex justify-center items-center mt-20"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <img
                src="https://www.nexoindia.com/wp-content/uploads/2017/09/wind-mill.png"
                alt="Wind Mill"
                className="max-w-full h-auto"
              />
            </motion.div>

            {/* Animated Text */}
            <motion.div
              className="w-[55%] md:w-[50%] flex flex-col items-end justify-end text-right text-yellow-500 font-bold pt-20 md:pt-40 pr-1"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-[8px] md:text-lg">
                NEXO FASTENERS IS BEST FOR YOUR INDUSTRIES.
              </p>
              <h3 className="text-[12px] md:text-4xl mt-2">
                FOR WIND MILL & REFINERY
              </h3>
              <button className="text-[8px] md:text-md mt-2 md:mt-4 px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                MORE INFO
              </button>
            </motion.div>
          </div>
        </motion.div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <motion.div
          className="relative h-[200px] md:h-[550px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide2})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 flex justify-between h-full items-center md:px-8">
            {/* Animated Image */}
            <motion.div
              className="w-[45%] md:w-[50%] flex justify-center items-center mt-20 p-5"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <img
                src="https://www.nexoindia.com/wp-content/uploads/2017/09/transmission-line.png"
                alt="Transmission Line"
                className="max-w-full md:h-[400px]"
              />
            </motion.div>

            {/* Animated Text */}
            <motion.div
              className="w-[55%] md:w-[50%] flex flex-col items-end justify-end text-right text-yellow-500 font-bold pt-20 md:pt-40 pr-1"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h3 className="text-[12px] md:text-4xl mt-2">
                FOR TRANSMISSION LINES
              </h3>
              <p className="text-[8px] md:text-lg">
                POWER TRANSMISSION SECTOR, TELE-COMMUNICATION SECTOR
              </p>
              <button className="text-[8px] md:text-md mt-2 md:mt-4 px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                MORE INFO
              </button>
            </motion.div>
          </div>
        </motion.div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <motion.div
          className="relative h-[200px] md:h-[550px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide3})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 flex justify-between h-full items-center md:px-8">
            <div className="w-[55%] md:w-[50%] flex flex-col items-start justify-end text-left text-yellow-500 font-bold pt-20 md:pt-40 pr-1 pl-2">
              <h3 className="text-[12px] md:text-4xl mt-2">FOR STRUCTURES</h3>
              <p className="text-[8px] md:text-lg">
                EN 15048 Non-Preload Bolt Assemblies (CE Marked)
              </p>
              <button className="text-[8px] md:text-md mt-2 md:mt-4 px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                MORE INFO
              </button>
            </div>
            <div className="w-[45%] md:w-[50%] flex justify-center items-center mt-20 p-5 md:p-10">
              <img
                src="https://www.nexoindia.com/wp-content/uploads/2017/09/non-preload-bolts.png"
                alt="Non-Preload Bolts"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <motion.div
          className="relative h-[200px] md:h-[550px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide4})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 flex flex-col justify-center h-full items-center text-center text-yellow-500 font-bold">
            <h3 className="text-[12px] md:text-4xl">FOR RAILWAY ELECTRICAL</h3>
            <p className="text-[8px] md:text-lg mt-2">
              RDSO, CORE & DMRC Registered for Quality Bolts.
            </p>
            <button className="text-[8px] md:text-md mt-4 px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
              MORE INFO
            </button>
          </div>
        </motion.div>
      </SwiperSlide>

      {/* Slide 5 */}
      <SwiperSlide>
        <motion.div
          className="relative h-[200px] md:h-[550px] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide5})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 flex flex-col justify-center h-full items-center text-center text-yellow-500 font-bold">
            <h3 className="text-[12px] md:text-4xl">FOR CRASH BARRIERS</h3>
            <p className="text-[8px] md:text-lg mt-2">
              Reliable Guard Rail & Road Crash Barrier Solutions.
            </p>
            <button className="text-[8px] md:text-md mt-4 px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
              MORE INFO
            </button>
          </div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
