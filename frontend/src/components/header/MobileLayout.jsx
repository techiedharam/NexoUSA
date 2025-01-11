import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileLayout = ({ NexoMenus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  // Toggle side drawer
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for submenus
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  // Handle submenu link click
  const handleSubMenuLinkClick = () => {
    setIsOpen(false); // Close the entire menu
    setClicked(null); // Reset the clicked state
  };

  // Handle top-level link click
  const handleTopLevelLinkClick = () => {
    setIsOpen(false); // Close the menu box
  };

  return (
    <div className="relative top-2">
      <button className="text-3xl" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Menu Container */}
      {isOpen && (
        <motion.div
          className="fixed left-0 right-0 top-16 overflow-y-auto h-full p-6 bg-white shadow-md"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
        >
          <ul>
            {NexoMenus.map(({ name, url, subMenu }, i) => {
              // Check if submenu exists
              const hasSubMenu = subMenu?.length > 0;
              // Check if the current menu is clicked
              const isClicked = clicked === i;

              return (
                <li key={name}>
                  <div className="flex justify-between p-2 w-full text-left hover:bg-[#ff9c00] hover:text-white rounded-md">
                    <Link to={url} onClick={handleTopLevelLinkClick}>
                      {name}
                    </Link>
                    {hasSubMenu && (
                      <button
                        onClick={() => setClicked(isClicked ? null : i)}
                        className="ml-auto"
                      >
                        <ChevronDown
                          className={`transition-transform ${isClicked ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSubMenu && (
                    <motion.ul
                      initial="exit"
                      animate={isClicked ? "enter" : "exit"}
                      variants={subMenuDrawer}
                      className="ml-5"
                    >
                      {subMenu?.map(({ name, url }) => (
                        <li
                          key={url}
                          className="p-2 hover:bg-[#ff9c00] hover:text-white rounded-md"
                        >
                          <Link to={url} onClick={handleSubMenuLinkClick}>
                            {name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MobileLayout;
