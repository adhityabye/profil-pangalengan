import Link from "next/link";

const Button = ({ title, href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-purple-900 text-white-100 font-josefin px-5 py-2.5 text-sm rounded-[13px] shadow-lg active:scale-95 hover:bg-white hover:text-purple-900 transition-transform duration-300 transform hover:scale-110">
        {title}
      </button>
    </Link>
  );
};

export default function Hero() {
  return (
    <main className="bg-main flex h-auto min-h-full flex-col items-center justify-between px-20 py-8">
      <div
        className="h-full w-full flex items-center justify-center rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero.png')",
          boxShadow: "7px 8px 17px 0px #00000040",
          minHeight: "650px", // Adjust the min-height as needed
        }}
      >
        <div className="flex flex-col justify-center text-left w-full pl-20 pr-5">
          <p className="text-white font-bold text-6xl font-poppins leading-tight mt-8 drop-shadow-lg">
            JELAJAHI KEINDAHAN ALAM <br /> DESA BANJARSARI
          </p>
          <p className="text-white font-inter text-base font-semibold mt-4 drop-shadow-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
      </div>
    </main>
  );
}