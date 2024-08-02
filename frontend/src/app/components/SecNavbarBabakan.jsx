"use client";

import { useState } from "react";
import Link from "next/link";

export default function SecNavbar() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 300);
  };

  const menuItems = [
    { text: "Wisata", href: "#wisata-babakan" },
    { text: "Data Ternak", href: "#ternak-babakan" },
    // { text: "Data Kesehatan", href: "#data-kesehatan-section" },
  ];

  return (
    <nav className="w-full fixed top-0 z-40 bg-main border-gray-200 h-14 md:h-16">
      <div className="max-w-screen-2xl h-full flex items-center justify-between mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <Link
          href="./"
          className="flex items-center gap-2 md:gap-3"
          legacyBehavior
        >
          <a>
            <h3 className="bg-secondary font-josefin px-3 mt-4 ml-2 sm:ml-8 sm:px-4 md:px-5 py-1.5 text-base text-white-100 font-semibold rounded-md text-center">
              Dusun Babakan
            </h3>
          </a>
        </Link>
        <div className="bg-secondary font-josefin px-4 py-2 mt-4 mr-2 sm:mr-8 sm:px-6 md:px-8 lg:px-10 text-base rounded-md text-center flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} legacyBehavior>
              <a
                className={`text-base text-white-100 font-semibold ${
                  clicked === index ? "click-effect" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item.text}
              </a>
            </Link>
          ))}
          {/* Adding Data Desa separately to link to another page
          <Link href="/data-desa" legacyBehavior>
            <a
              className={`text-base text-white-100 font-semibold ${
                clicked === menuItems.length ? "click-effect" : ""
              }`}
              onClick={() => handleClick(menuItems.length)}
            >
              Data Desa
            </a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
