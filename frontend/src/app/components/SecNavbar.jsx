"use client";

import { useState } from "react";
import Link from "next/link";

export default function SecNavbar() {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(index);
    setTimeout(() => setClicked(null), 300);
  };

  return (
    <nav className="w-full fixed top-0 z-40 bg-main border-gray-200 pb-5 h-14 md:h-16">
      <div className="max-w-screen-2xl h-full flex items-center justify-between mx-auto px-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          {/* Uncomment and adjust the path to the logo image if needed */}
          {/* <Image
            src={Logo}
            className="w-8 sm:w-9 md:w-11"
            alt="Web Banjarsari Logo"
          /> */}
          <div>
            <h3 className="bg-secondary font-josefin px-3 mt-4 ml-8 sm:px-4 md:px-5 py-1.5 text-base text-white-100 font-semibold rounded-md text-center">
              Dusun Cibolang
            </h3>
          </div>
        </Link>
        <div className="bg-secondary font-josefin px-8 py-2 mt-4 mr-8 text-base rounded-md text-center flex space-x-6 md:space-x-8 lg:space-x-10">
          {["Wisata", "Data Masyarakat", "Data Kesehatan"].map(
            (text, index) => (
              <Link
                key={index}
                href={`/${text.toLowerCase().replace(" ", "-")}`}
                passHref
              >
                <h3
                  className={`text-base text-white-100 font-semibold ${
                    clicked === index ? "click-effect" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {text}
                </h3>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>

    
  );
}
