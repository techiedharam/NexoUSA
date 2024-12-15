// import React from 'react'
import FooterLinks from "../../utils/FooterLinks";
import { Link } from "react-router-dom";
const LinkContainer = () => {
  console.log(FooterLinks);

  return (
    <div className="text-white lg:mt-20 mt-6 text-center flex flex-wrap justify-center gap-x-84">
      {
        FooterLinks?.map((link, i) => (
          <Link key={i} className="no-underline hover:text-[#ff9c00] mx-4 my-2 text-sm text-white/60 ">
            {link.name}
          </Link>
        ))
      }
    </div>
  )
}

export default LinkContainer
