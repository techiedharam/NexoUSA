import agriculturebanner from "../../../assets/img/agriculturebanner.png"
import pro1 from "../../../assets/img/pro1.png"
import pro2 from "../../../assets/img/pro2.png"
import pro3 from "../../../assets/img/pro3.png"
import pro4 from "../../../assets/img/pro4.png"
import pro5 from "../../../assets/img/pro5.png"
import pro6 from "../../../assets/img/pro6.png"
import pro7 from "../../../assets/img/pro7.png"
import pro8 from "../../../assets/img/pro8.png"
import pro9 from "../../../assets/img/pro9.png"

const FarmPartDivision = () => {
  return (
    <div> {/* Main Container*/}
      <div> {/* banner image */}
        <img src={agriculturebanner} alt="" className="w-full h-[250px] bg-no-repeat bg-full bg-center bg-fixed" />
        <h1 className="py-2 px-20 bg-[#ff9c00] text-2xl font-bold text-white">Farm Part Division</h1>
      </div>
      <h1 className="text-center mt-4 text-2xl font-bold">Farm Part Division, Combine Parts India.</h1>
      <p className="my-10 px-8 md:px-36">Nexo Industries Limited is also engaged in manufacturing a wide array of Combine parts like Harvester Finger, Agriculture Spike, Tine Spring, Pins, Reaper Blade, Combine Blade, Thresher Blade.</p>

      <div className="w-full md:w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 gap-4 pb-5"> {/* Image Container */}
        <div className="w-full border"><img src={pro2} alt="" /><p className="text-center text-lg font-bold">Harvest Finger</p></div>
        <div className="w-full border"><img src={pro1} alt="" /><p className="text-center text-lg font-bold">Agriculture Spike</p></div>
        <div className="w-full border"><img src={pro3} alt="" /><p className="text-center text-lg font-bold">Tine Spring</p></div>
        <div className="w-full border"><img src={pro4} alt="" /><p className="text-center text-lg font-bold">Tine Spring</p></div>
        <div className="w-full border"><img src={pro5} alt="" /><p className="text-center text-lg font-bold">Tine Spring</p></div>
        <div className="w-full border"><img src={pro6} alt="" /><p className="text-center text-lg font-bold">Pins</p></div>
        <div className="w-full border"><img src={pro7} alt="" /><p className="text-center text-lg font-bold">Reaper Blade</p></div>
        <div className="w-full border"><img src={pro8} alt="" /><p className="text-center text-lg font-bold">Thresher Blade</p></div>
        <div className="w-full border"><img src={pro9} alt="" /><p className="text-center text-lg font-bold">Thresher Blade</p></div>
      </div>
    </div>
  )
}

export default FarmPartDivision;
