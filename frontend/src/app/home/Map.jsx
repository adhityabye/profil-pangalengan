"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import data from "../data/Batas_Wilayah_Desa_Banjarsari.geojson";

const MapComponent = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const GeoJSON = dynamic(
  () => import("react-leaflet").then((mod) => mod.GeoJSON),
  { ssr: false }
);

export default function Map() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png")
          .default,
        iconUrl: require("leaflet/dist/images/marker-icon.png").default,
        shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
      });
    }
  }, []);

  return (
    <section
      id="batas-wilayah"
      className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-10 sm:py-20"
    >
      <div className="w-full px-4 sm:px-10 md:px-20">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="w-full h-96 md:h-[500px]">
            <MapComponent
              center={[-7.3354, 108.1048]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <GeoJSON data={data} />
            </MapComponent>
          </div>
        </div>
      </div>
    </section>
  );
}