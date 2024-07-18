"use client";

import Image from "next/image";

import { h1 } from "fontawesome";
import illust2 from "../../../public/assets/hero.png";

export default function Wisata() {
  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="bg-secondary rounded-md items-start text-[24px] p-2 text-white-100 font-semibold font-josefin text-left mb-8 inline-block">
          Rekomendasi Wisata
        </h3>

        <div className="mx-20 flex flex-row gap-4 justify-between">
          {/* Wisata 1*/}
          <div className="flex flex-col">
            <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              <div className="h-72 w-full rounded-xl overflow-hidden">
                <Image
                  src={illust2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-lg font-josefin text-black">
              Wisata 1
            </p>
          </div>

          {/* Wisata 2 */}
          <div className="flex flex-col">
            <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              <div className="h-72 w-full rounded-xl overflow-hidden">
                <Image
                  src={illust2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-lg font-josefin text-black">
              Wisata 2
            </p>
          </div>

          {/* Wisata 3 */}
          <div className="flex flex-col">
            <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              <div className="h-72 w-full rounded-xl overflow-hidden">
                <Image
                  src={illust2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-lg font-josefin text-black">
              Wisata 3
            </p>
          </div>

          {/* Wisata 4 */}
          <div className="flex flex-col">
            <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              <div className="h-72 w-full rounded-xl overflow-hidden">
                <Image
                  src={illust2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-lg font-josefin text-black">
              Wisata 4
            </p>
          </div>

          {/* Wisata 5 */}
          <div className="flex flex-col">
            <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
              <div className="h-72 w-full rounded-xl overflow-hidden">
                <Image
                  src={illust2}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-lg font-josefin text-black">
              Wisata 5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
