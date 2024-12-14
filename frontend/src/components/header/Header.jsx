// import React from 'react'
import logoBlack from "../../assets/logo-black.png";
import NexoMenus from "../../utils/NexoMenus";
import DesktopLayout from "./DesktopLayout";
const Header = () => {
  return (
    <header className="h-16 text-[15px] fixed top-0 left-0 right-0 flex bg-[#ffb703] text-black">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto  font-semibold">
        <div>
          <img src={logoBlack} alt="logo" width={100} />
        </div>

        <ul className="lg:flex hidden">
          {
            NexoMenus.map((menus) => (
              <DesktopLayout menus={menus} key={menus.name} />
            ))
          }
        </ul>
        <button>Call to Action</button>
      </nav>
    </header >
  )
}

export default Header
