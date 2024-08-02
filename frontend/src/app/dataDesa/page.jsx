"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Pendidikan from "./components/dataPendidikan";
import Occupation from "./components/dataPekerjaan";
import Religion from "./components/dataAgama";
import Footer from "../components/Footer";

export default function DataDesa() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      <div className="pt14 md:pt-16">
        {/* Data Pendidikan */}
        <Pendidikan />
        {/* Data Pekerjaan*/}
        <Occupation />

        {/* Data Agama */}
        <Religion />
      </div>
      <Footer />
    </div>
  );
}
