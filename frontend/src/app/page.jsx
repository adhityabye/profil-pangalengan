import Navbar from "./components/Navbar";
import Hero from "./home/Hero";
import Letak from "./home/Letak";
import Wilayah from "./home/Wilayah";
import Wisata from "./home/Wisata";
import Footer from "./components/Footer";
import Vision from "./home/Vision";
import Map from "./home/Map";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col overflow-hidden">
        <Navbar />
        <div className="pt-14 md:pt-16">
          <Hero />
          <Letak />
          <Vision />
          <Wilayah />
          <Wisata />
          <Map />
          <Footer />
        </div>
      </div>
    </main>
  );
}
