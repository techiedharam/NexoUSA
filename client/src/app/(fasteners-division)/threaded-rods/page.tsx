import Image from "next/image"
const FastenersDivision = () => {
  return (
    <div className="mt-10"> {/* Main Container */}
      <div> {/* Banner image */}
        <Image
          src="/images/banners/ThreadedRodsCoverImg.jpg"
          alt="Threaded Rods Cover"
          width={1920}
          height={250}
          className="w-full h-[250px] object-cover bg-center bg-fixed"
        />
        <h1 className="py-2 px-5 md:px-20 bg-[#ff9c00] text-2xl font-bold text-white">Threaded Rods</h1>
      </div>

      <h1 className="text-center text-xl md:text-2xl font-bold mt-5">
        <span className="underline">Threaded Rods Manufacturers India</span>, Threaded Rod Manufacturers in Ludhiana
      </h1>

      <div className="flex flex-col md:flex-row  mt-6 md:py-10 py-4 md:px-20 px-4"> {/* Content Container */}
        <div className="md:w-1/2"> {/* Left content */}
          <p className="text-base md:text-lg">
            Nexo Industries is one of the largest Threaded Rods Manufacturers in India. To manufacture high-quality Threaded Rods for our clients, we use the finest quality materials, precision, and cutting-edge technology. Our company is a renowned stockist of many types of high-quality Threaded Rods for huge businesses and other industries. We supply and export a wide assortment of Threaded Rods in India and a few other countries. We have played a significant role in the development and growth of the Indian market.
          </p>
        </div>

        <div className="md:w-1/2 mt-4 md:mt-0"> {/* Right content */}
          <Image
            src="/assets/img/ThreadedRodsManufacturersIndia.jpg"
            alt="Threaded Rods Manufacturer"
            width={500} height={250}
            className="w-[80%] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default FastenersDivision
