import Image from "next/image"
const FabricationDivision = () => {
  return (
    <div className="mt-10"> {/* Main Container*/}
      <div> {/* banner image */}
        <Image src="/images/banners/agriculturebanner.png" alt="" 
        width={1920}
        height={250}
        className="w-full h-[250px] bg-no-repeat bg-full bg-center bg-fixed" />
        <h1 className="py-2 px-20 bg-[#ff9c00] text-2xl font-bold text-white">Farm Part Division</h1>
      </div>
      <h1 className="text-center mt-4 text-2xl font-bold">Farm Part Division, Combine Parts India.</h1>
      <p className="my-10 px-8 md:px-36">Nexo Industries Limited is also engaged in manufacturing a wide array of Combine parts like Harvester Finger, Agriculture Spike, Tine Spring, Pins, Reaper Blade, Combine Blade, Thresher Blade.</p>

      <div className="w-full md:w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-4 pb-5"> {/* Image Container */}
        <div className="w-full border"><Image src="/images/products/pro1.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Harvest Finger</p></div>
        <div className="w-full border"><Image src="/images/products/pro2.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Agriculture Spike</p></div>
        <div className="w-full border"><Image src="/images/products/pro3.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Tine Spring</p></div>
        <div className="w-full border"><Image src="/images/products/pro4.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Tine Spring</p></div>
        <div className="w-full border"><Image src="/images/products/pro5.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Tine Spring</p></div>
        <div className="w-full border"><Image src="/images/products/pro6.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Pins</p></div>
        <div className="w-full border"><Image src="/images/products/pro7.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Reaper Blade</p></div>
        <div className="w-full border"><Image src="/images/products/pro8.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Thresher Blade</p></div>
        <div className="w-full border"><Image src="/images/products/pro9.png" width={600} height={200} alt="" /><p className="text-center text-lg font-bold">Thresher Blade</p></div>
      </div>
    </div>
  )
}

export default FabricationDivision
