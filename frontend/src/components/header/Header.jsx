// import React from 'react'
import logoOrange from "../../assets/logo-orange.png";
import NexoMenus from "../../utils/NexoMenus";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
const Header = () => {
  return (
    <header className="h-16 text-[15px] fixed inset-0 flex bg-white shadow-md text-black p-4 ">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto  font-semibold">
        <div>
          <img src={logoOrange} alt="logo" width={100} />
        </div>

        <ul className="lg:flex hidden gap-x-1">
          {
            NexoMenus.map((menus) => (
              <DesktopLayout menus={menus} key={menus.name} />
            ))
          }
        </ul>
        <div className="flex justify-center gap-2">
          <button className="bg-[#ff9c00] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#e68900] transition duration-300">Call to Action</button>
          <div className="lg:hidden">
            <MobileLayout NexoMenus={NexoMenus} />
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Header
