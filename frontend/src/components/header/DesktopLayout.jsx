import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion"

const DesktopLayout = ({ menus }) => {
  const hashSubMenus = menus?.subMenu?.length > 0;

  const [isHoverd, setIshovered] = useState(false)

  const toggleHover = () => {
    setIshovered(!isHoverd)
  }

  // animation variants 
  const subMenuVarients = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5
      },
      display: "none"
    }
  }

  return (
    <div key={menus.name}>
      <motion.li className="flex group/link" onHoverStart={toggleHover} onHoverEnd={toggleHover} >
        <Link className="cursor-pointer gap-1 px-3 py-1 hover:bg-[#ebe9e5] rounded-xl transition-colors duration-300 ease-in-out" to={menus.url}> {menus.name} </Link>
        {
          hashSubMenus && (
            <ChevronDown
              className="mt-[0.6px] transition-transform duration-200 group-hover/link:rotate-180"
            />
          )
        }

        {
          hashSubMenus && (
            <motion.div className="sub-menu"
              initial="exit"
              animate={isHoverd ? "enter" : "exit"}
              variants={subMenuVarients}
            >
              {
                menus?.subMenu?.map(({ name, url }, i) => (
                  <div key={i} className="group/menubox relative cursor-pointer">
                    <div className=" w-fit p-2 rounded-md group-hover/menubox:bg-[#ff9c00] group-hover/menubox:text-[#fff] duration-300">
                      <Link to={url}>
                        {name}
                      </Link>
                    </div>
                  </div>
                ))
              }
            </motion.div>
          )
        }
      </motion.li>
    </div>
  );
};

export default DesktopLayout;
