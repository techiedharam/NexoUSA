import { Link } from "react-router-dom";
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
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  // Handle submenu link click
  const handleSubMenuClick = () => {
    setIsHovered(false); // Close submenu on click
  };

  return (
    <div key={menus.name}>
      <motion.li
        className="flex group/link"
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <Link
          className="cursor-pointer gap-1 px-3 py-1 hover:bg-[#ebe9e5] rounded-xl transition-colors duration-300 ease-in-out"
          to={menus.url}
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
            className="sub-menu"
            initial="exit"
            animate={isHovered ? "enter" : "exit"}
            variants={subMenuVariants}
          >
            {menus?.subMenu?.map(({ name, url }, i) => (
              <div key={i} className="group/menubox relative cursor-pointer">
                <div className="w-fit p-2 rounded-md group-hover/menubox:bg-[#ff9c00] group-hover/menubox:text-[#fff] duration-300">
                  <Link to={url} onClick={handleSubMenuClick}>
                    {name}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.li>
    </div>
  );
};

export default DesktopLayout;
