import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MobileLayout = ({ NexoMenus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null)

  // toggle side drawer 
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // toggle sub menu 
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",

    },
    exit: {
      height: 0,
      overflow: "hidden"
    }
  }

  return (
    <div className="relative top-2">
      <button className="text-3xl" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Menu Container with menu here */}
      {isOpen && (
        <motion.div className="fixed left-0 right-0 top-16 overflow-y-auto h-full p-6 bg-white shadow-md"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
        >
          <ul>
            {
              NexoMenus.map(({ name, url, subMenu }, i) => {
                // Cheking is submenu exits or not
                const hasSubMenu = subMenu?.length > 0
                // checking if menu is clicked or not 
                const isClicked = clicked === i;
                return (
                  <li key={name}>
                    <Link onClick={() => setClicked(isClicked ? null : i)} to={url} className="flex justify-between p-2 hover:bg-[#ff9c00] hover:text-white rounded-md">
                      {name}
                      {hasSubMenu && <ChevronDown className={`ml-auto ${isClicked && "rotate-180"}`} />}
                    </Link>

                    {
                      hasSubMenu && (
                        <motion.ul
                          initial="exit"
                          animate={isClicked ? "enter" : "exit"}
                          variants={subMenuDrawer}
                          className="ml-5"
                        >
                          {
                            subMenu?.map(({ name, url }) => (
                              <li key={url} className="p-2 hover:bg-[#ff9c00] hover:text-white rounded-md cursor-pointer gap-x-2">
                                <Link> {name}</Link>
                              </li>
                            ))
                          }
                        </motion.ul>
                      )
                    }

                  </li>
                )
              })
            }
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MobileLayout;
