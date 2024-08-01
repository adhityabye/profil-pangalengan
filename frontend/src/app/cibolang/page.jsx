"use client";

import Image from "next/image";
import Link from "next/link";
import SecNavbar from "../components/SecNavbarCibolang";
import illust1 from "../../../public/assets/tirta-camelia.png";
import illust2 from "../../../public/assets/lapangan-ciseup.png";
import illust3 from "../../../public/assets/situ-cileunca.png";
import ChartsKelinci from "../components/ChartKelinciCibolang";
import ChartsSapi from "../components/ChartSapiCibolang";
import Footer from "../components/Footer";

const Button = ({ title, href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-purple-900 text-white-100 font-josefin px-5 py-2.5 text-sm rounded-[13px] shadow-lg active:scale-95 hover:bg-white hover:text-purple-900 transition-transform duration-300 transform hover:scale-110">
        {title}
      </button>
    </Link>
  );
};

export default function Cibolang() {
  const cards = [
    { id: 1, title: "Kolam Renang Air Panas Tirta Camelia", image: illust1 },
    { id: 2, title: "Lapangan Bola Ciseup", image: illust2 },
    { id: 3, title: "Situ Cileunca", image: illust3 },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <SecNavbar />
      <div className="pt-14 md:pt-16">
        {/* Section Hero */}
        <section className="bg-main flex h-auto min-h-full flex-col items-center justify-between px-6 sm:px-10 md:px-20 py-8">
          <div
            className="h-full w-full flex items-center justify-center rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/cibolang.jpeg')",
              boxShadow: "7px 8px 17px 0px #00000040",
              minHeight: "650px",
            }}
          >
            <div className="flex flex-col justify-center text-left w-full pl-4 pr-2 sm:pl-8 sm:pr-5 md:pl-20 md:pr-5">
              <p className="text-white font-bold text-4xl sm:text-5xl md:text-6xl font-poppins leading-tight mt-8 drop-shadow-lg">
                Dusun Cibolang
              </p>
              <p className="text-white font-inter text-sm sm:text-base md:text-lg font-semibold mt-4 drop-shadow-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </section>

        {/* Section Wisata */}
        <section
          id="wisata-cibolang"
          className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20"
        >
          <div className="w-full px-6 sm:px-10 md:px-20">
            <h3 className="bg-secondary rounded-md items-start text-[24px] p-2 text-white-100 font-semibold font-josefin text-left mb-8 inline-block">
              Rekomendasi Wisata
            </h3>
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 justify-between">
              {/* Container for Cards */}
              <div className="flex flex-row gap-4">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col min-w-[15rem] snap-center items-center justify-center"
                  >
                    <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                      <div className="h-48 w-full rounded-xl overflow-hidden flex items-center justify-center">
                        <Image
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="h-16 flex items-center justify-center px-2">
                      <p className="text-center text-lg font-josefin text-black break-words line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Visualisasi Data Ternak */}
        <section
          id="ternak-cibolang"
          className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20"
        >
          <div className="w-full px-6 sm:px-10 md:px-20">
            <h3 className="bg-secondary rounded-md items-start text-[24px] p-2 text-white-100 font-semibold font-josefin text-left mb-8 inline-block">
              Data Ternak
            </h3>
            <ChartsKelinci />
            <ChartsSapi />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
