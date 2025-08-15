'use client'
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const DesktopLayout = ({ menus }) => {
  const hasSubMenus = menus?.subMenu?.length > 0;

  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  // Animation variants
  const subMenuVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      },
      display: "none",
    },
  };

  // Handle submenu link click
  const handleSubMenuClick = () => {
    setIsHovered(false); // Close submenu on click
  };

  return (
    <motion.li
      key={menus.name}
      className="flex group/link relative"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
        <Link
          className="cursor-pointer gap-1 px-3 py-1 hover:bg-[#ebe9e5] rounded-xl transition-colors duration-300 ease-in-out"
          href={menus.url}
        >
          {menus.name}
        </Link>
        {hasSubMenus && (
          <ChevronDown
            className="mt-[0.6px] transition-transform duration-200 group-hover/link:rotate-180"
          />
        )}

        {hasSubMenus && (
          <motion.div
            className="absolute top-full left-0 mt-4 bg-white shadow-xl rounded-lg border border-gray-200 z-50 py-2 whitespace-nowrap"
            initial="exit"
            animate={isHovered ? "enter" : "exit"}
            variants={subMenuVariants}>
           {menus?.subMenu?.map(({ name, url }, i) => (
               <div key={i} className="group/menubox relative cursor-pointer">
                  <div className="px-4 py-3 hover:bg-[#ff9c00] hover:text-white transition-colors duration-300 rounded-md mx-2">
                   <Link href={url} onClick={handleSubMenuClick} className="block w-full text-sm">
                     {name}
                   </Link>
                 </div>
               </div>
             ))}
          </motion.div>
        )}
      </motion.li>
  );
};

export default DesktopLayout;
