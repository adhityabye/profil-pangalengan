"use client";

import Logo from "../../../public/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary p-6 sm:p-10 text-primary-content flex flex-col items-center">
      <aside className="text-center w-full max-w-screen-lg">
        <div className="flex flex-col items-center">
          <Link className="flex items-center gap-4 mt-2 mb-4" href="./">
            <Image src={Logo} className="h-8 w-min" alt="TeknoVibe Logo" />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white-100">
              Lokarayapangalengan
            </span>
          </Link>
          <p className="text-white text-sm sm:text-base md:text-lg px-4">
            Selamat datang di website Desa Banjarsari. Kami berdedikasi untuk
            menyediakan informasi terkini dan relevan mengenai kegiatan dan
            program terkait desa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-5 space-y-3 sm:space-y-0 sm:space-x-3">
            <p className="text-white text-sm sm:text-base">
              <strong>Dukung Kami</strong>
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="https://github.com/adhityabye/teknoVibe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <span className="text-base font-semibold ml-3 text-white-100">
                  Desa Banjarsari
                </span>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-white pt-10 text-xs sm:text-sm md:text-base">
          KKN-PPM Universitas Gadjah Mada Periode 2 tahun 2024 Tim
          Lokarayapangalengan
        </p>
      </aside>
    </footer>
  );
}
