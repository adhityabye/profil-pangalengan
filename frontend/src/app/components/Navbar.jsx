"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 300);
  };

  const menuItems = [
    { text: "Tentang", href: "#letak" },
    { text: "Wilayah", href: "#wilayah" },
    { text: "Rekomendasi Wisata", href: "#wisata" },
    { text: "Data Desa", href: "/dataDesa" },
  ];

  return (
    <nav className="w-full fixed top-0 z-40 bg-main border-gray-200 pb-5 h-14 md:h-16">
      <div className="max-w-screen-2xl h-full flex items-center justify-between mx-auto pt-8 px-4 sm:px-6 lg:px-12">
        <Link href="./" legacyBehavior>
          <a className="flex items-center gap-2 md:gap-3">
            <h3 className="bg-secondary font-josefin px-3 sm:px-4 md:px-5 py-2 text-base text-white-100 font-semibold rounded-md text-center">
              Banjarsari
            </h3>
          </a>
        </Link>
        <div className="hidden sm:flex bg-secondary font-josefin px-3 sm:px-8 py-2 text-base rounded-md text-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
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
        </div>
        <div className="sm:hidden">
          <button
            className="text-white-100 bg-secondary"
            onClick={() => setClicked(!clicked)}
          >
            ☰
          </button>
        </div>
      </div>
      {clicked && (
        <div className="sm:hidden flex flex-col bg-secondary font-josefin px-4 py-2 mt-4 text-base rounded-md text-center space-y-2">
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
        </div>
      )}
    </nav>
  );
}
