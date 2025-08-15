'use client'
import React from 'react'
import Link from "next/link";
import Image from "next/image";

import NexoMenus from "../../utils/NexoMenus";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
const Header = () => {
  return (
    <header className="h-16 text-[15px] fixed inset-0 flex bg-white shadow-md text-black p-4 z-50 ">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto  font-semibold">
        <div>
          <Link href="/"> <Image src="/images/logo.png" alt="logo" width={100} height={40} /></Link>
        </div>

        <ul className="lg:flex hidden gap-x-1">
          {
            NexoMenus.map((menus) => (
              <DesktopLayout menus={menus} key={menus.name} />
            ))
          }
        </ul>
        <div className="flex justify-center gap-2">
          <a href="tel:+1234567890">
            <button className="bg-[#ff9c00] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#e68900] transition duration-300">
              Call Now
            </button>
            {/* <button className="bg-[#ff9c00] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#e68900] transition duration-300">Call to Action</button> */}
          </a>
          <div className="lg:hidden">
            <MobileLayout NexoMenus={NexoMenus} />
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Header
