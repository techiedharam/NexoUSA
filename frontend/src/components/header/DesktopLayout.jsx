import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const DesktopLayout = ({ menus }) => {
  const hashSubMenus = menus?.subMenu?.length > 0;
  return (
    <div key={menus.name}>
      <li className="flex group cursor-pointer gap-1 px-3 py-1 rounded-xl transition-colors duration-300 ease-in-out">
        <Link to={menus.url}> {menus.name}</Link>
        {
          hashSubMenus && (
            <ChevronDown
              className="mt-[0.6px] transition-transform duration-200 group-hover:rotate-180"
            />
          )
        }

        {
          hashSubMenus && (
            <div className="sub-menu hidden group-hover:block">
              {
                menus?.subMenu?.map((submenu, i) => (
                  <div key={i} className="">
                    <Link>
                      {submenu.name}
                    </Link>
                  </div>
                ))
              }
            </div>
          )
        }
      </li>
    </div>
  );
};

export default DesktopLayout;
