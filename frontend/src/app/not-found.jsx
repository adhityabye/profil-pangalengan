"use client";

import Link from "next/link";
import CircleBackground from "./components/CircleBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full relative mx-auto grid justify-items-center items-center px-6 overflow-hidden">
      <div className="z-30 space-y-2 text-center">
        <h1 className="font-josefin font-bold text-2xl sm:text-[28px]">
          404 - Halaman Akan Tersedia Segera
        </h1>
        <p className="font-normal font-josefin text-base sm:text-lg">
          Halaman yang Anda cari untuk saat ini masih dalam tahap pengembangan.
        </p>
        <Link href="./">
          <p className="font-josefin px-6 py-1.5 mt-4 bg-secondary text-white-100 text-sm rounded-2xl inline-block text-center">
            Beranda
          </p>
        </Link>
        <CircleBackground />
      </div>
    </div>
  );
}
