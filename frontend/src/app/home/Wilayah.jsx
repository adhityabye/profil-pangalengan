"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link component
import illust2 from "../../../public/assets/hero.png";

export default function Wilayah() {
  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="bg-secondary rounded-md items-start text-[24px] p-2 text-white-100 font-semibold font-josefin text-left mb-8 inline-block">
          Wilayah Administratif Desa Banjarsari
        </h3>

        {/* Container for Cards */}
        <div className="mx-20 flex flex-row gap-4 justify-between">
          {/* Cibolang */}
          <Link href="/cibolang" passHref>
            <div className="flex flex-col cursor-pointer">
              <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                <div className="h-36 w-full rounded-xl overflow-hidden">
                  <Image
                    src={illust2}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-lg font-josefin text-black">
                Dusun Cibolang
              </p>
            </div>
          </Link>

          {/* Babakan */}
          <Link href="/babakan" passHref>
            <div className="flex flex-col cursor-pointer">
              <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                <div className="h-36 w-full rounded-xl overflow-hidden">
                  <Image
                    src={illust2}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-lg font-josefin text-black">
                Dusun Babakan
              </p>
            </div>
          </Link>

          {/* Malabar */}
          <Link href="/malabar" passHref>
            <div className="flex flex-col cursor-pointer">
              <div className="flex flex-col w-60 border-2 bg-white outline-2 outline-black rounded-xl items-center justify-center m-3 transition-transform transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                <div className="h-36 w-full rounded-xl overflow-hidden">
                  <Image
                    src={illust2}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-2 text-center text-lg font-josefin text-black">
                Dusun Malabar
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
