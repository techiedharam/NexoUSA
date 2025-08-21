const Warehouse = () => {
  return (
    <div> {/* Main container */}
      <div> {/* banner image */}
        <img
          src="/assets/img/warehosueCoverImg.jpg"
          alt=""
          className="w-full h-[250px] bg-no-repeat bg-full bg-center bg-fixed"
        />
        <h1 className="py-2 px-4 sm:px-20 bg-[#ff9c00] text-2xl font-bold text-white">Warehouse</h1>
      </div>

      {/* first section */}
      <div className="max-w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-6"> {/* main content container */}
        <div className="p-6 space-y-4"> {/* left content container */}
          <h2 className="text-2xl font-semibold text-gray-800">Nexo Industries Pvt. Ltd.</h2>
          <p className="text-s text-gray-600">
            In addition to manufacturing, Nexo Industries Pvt. Ltd. is now a Stockist of Nuts & Bolts and associated products in India. We have our own Warehouse with a space of 6000 Pallets, surrounded over 90000 sq. meters. We accumulate stocks of many standard Fastener products including Nuts, Bolts in all threads of all common sizes. We dispatch 1500 tons/month from our Warehouse.
          </p>

        </div>
        <div className="flex justify-center items-center mt-5">  {/* right content container */}
          <img src="/assets/img/warehouseImg.jpg" alt="" className="w-full md:w-3/4" />
        </div>
        <ul className="list-disc md:pl-20 pl-10 space-y-2 text-sm text-gray-600 " >
          <h3 className="text-xl font-semibold text-gray-700">OUR PRODUCTS:</h3>
          <li>DIN 931/DIN933</li>
          <li>DIN 601</li>
          <li>DIN 603</li>
          <li>DIN 7990</li>
          <li>EN 15048 SB ASSEMBLIES</li>
          <li>DIN 125</li>
          <li>DIN 7989</li>
          <li>DIN 9021</li>
          <li>DIN 934</li>
          <li>DIN 555</li>
          <li>DIN 4032</li>
        </ul>

      </div>

      {/* second section */}
      <div className=" max-w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-12"> {/* main content container */}
        <div className="p-6 space-y-4"> {/* left content container */}
          <h2 className="text-2xl font-semibold text-gray-800">BENEFITS WE OFFER:</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
            <li>Goods can be packed in convenient styles as per the specific instructions of the customers.</li>
            <li>From the stock goods, we can make fast deliveries (Within a week).</li>
            <li>You can order FCL with Minimum order quantity 450 kgs.</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">  {/* right content container */}
          <img src="/assets/img/warehousePlant.png" alt="" className="w-full md:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
