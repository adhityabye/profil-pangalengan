import Navbar from "./components/Navbar";
import Hero from "./home/Hero";
import Wilayah from "./home/Wilayah";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col overflow-hidden">
        <Navbar />
        {/* Add padding to the top to account for the fixed navbar */}
        <div className="pt-14 md:pt-16">
          <Hero />
          <Wilayah />
        </div>
      </div>
    </main>
  );
}
