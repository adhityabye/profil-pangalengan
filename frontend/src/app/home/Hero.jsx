"use client";

import Link from "next/link";

const Button = ({ title, href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-purple-900 text-white-100 font-josefin px-5 py-2.5 text-sm rounded-[13px] shadow-lg active:scale-95 hover:bg-white hover:text-purple-900 transition-transform duration-300 transform hover:scale-110">
        {title}
      </button>
    </Link>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-main flex h-auto min-h-full flex-col items-center justify-between px-6 sm:px-10 md:px-20 py-8"
    >
      <div
        className="h-full w-full flex items-center justify-center rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero.png')",
          boxShadow: "7px 8px 17px 0px #00000040",
          minHeight: "650px",
        }}
      >
        <div className="flex flex-col justify-center text-left w-full pl-4 sm:pl-10 md:pl-20 pr-4 sm:pr-10 md:pr-5">
          <p className="text-white font-bold text-3xl sm:text-4xl md:text-6xl font-poppins leading-tight mt-8 drop-shadow-lg">
            JELAJAHI KEINDAHAN ALAM <br /> DESA BANJARSARI
          </p>
          <p className="text-white font-inter text-sm sm:text-base font-semibold mt-4 drop-shadow-lg">
            Temukan kedamaian dan keindahan alam di Desa Banjarsari
          </p>
          {/* <div className="mt-4">
            <Button title="Explore Now" href="#explore" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
