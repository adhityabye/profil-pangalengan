"use client";

import Logo from "../../../public/assets/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary footer footer-center p-10 bg-primary text-primary-content flex flex-col items-center">
      <aside className="text-center">
        <div className="flex flex-col items-center">
          <Link className="flex items-center gap-4 mt-2 mb-4" href="/">
            <Image src={Logo} className="h-8 w-min" alt="TeknoVibe Logo" />
            <span className="text-3xl font-bold text-white-100">TeknoVibe</span>
          </Link>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            consectetur nisl, ac interdum odio. Nullam varius efficitur
            faucibus.
          </p>
          <p className="text-white">
            Mulai eksplorasi event menarik dengan lebih mudah!
          </p>
          <div className="flex items-center mt-5 space-x-3">
            <p className="text-white">
              <strong>Support Us:</strong>
            </p>
            <div className="flex items-center">
              <Link
                href="https://github.com/adhityabye/teknoVibe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {/* <FontAwesomeIcon
                  icon={faGithub}
                  className="scale-150 text-white"
                /> */}
                <span className="text-base font-semibold ml-3 text-white-100">
                  Desa Banjarsari
                </span>
              </Link>
            </div>
          </div>
        </div>
        <p className="text-white pt-10">KKN-PPM UGM Periode 2: Lokarayapangalengan</p>
      </aside>
    </footer>
  );
}
