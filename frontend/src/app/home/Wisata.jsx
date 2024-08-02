"use client";

import Image from "next/image";
import illust1 from "../../../public/assets/rumah-boscha.png";
import illust2 from "../../../public/assets/teh-jangkung.png";

export default function Wisata() {
  const cards = [
    { id: 1, title: "Rumah Bosscha", image: illust1 },
    { id: 2, title: "Teh Jangkung Malabar", image: illust2 },
  ];

  return (
    <section
      id="wisata"
      className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-10 sm:py-20"
    >
      <div className="w-full px-4 sm:px-10 md:px-20">
        <h3 className="bg-secondary rounded-md items-start text-lg sm:text-xl md:text-2xl p-2 text-white-100 font-semibold font-josefin text-left mb-4 sm:mb-8 inline-block">
          Rekomendasi Wisata
        </h3>
        <div className="flex overflow-x-auto gap-4 px-4 scrollbar-hide">
          {/* Container for Cards */}
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col min-w-[15rem] flex-shrink-0 snap-center"
            >
              <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                <div className="h-72 w-full rounded-xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-lg font-josefin text-black">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
