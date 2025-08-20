// import React from 'react'
import FooterLinks from "../../utils/FooterLinks";
import Link from "next/link";

const LinkContainer = () => {
  return (
    <div className="lg:mt-20 mt-6">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
        {FooterLinks?.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            className="no-underline text-gray-500 hover:text-[#ff9c00] transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkContainer;
