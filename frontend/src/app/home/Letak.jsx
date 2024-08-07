"use client";

export default function Letak() {
  return (
    <section
      id="letak"
      className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-10 sm:py-20"
    >
      <div className="w-full px-4 sm:px-10 md:px-20">
        <h3 className="bg-secondary rounded-md items-start text-lg sm:text-xl md:text-2xl p-2 text-white-100 font-semibold font-josefin text-left mb-4 sm:mb-8 inline-block">
          Desa Banjarsari Kecamatan Pangalengan
        </h3>
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="w-full lg:w-1/2 mb-4 sm:mb-8 lg:mb-0">
            <iframe
              className="rounded-lg shadow-lg w-full max-w-full h-64 sm:h-96 lg:h-[450px] lg:w-[650px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127587.52263215115!2d107.48018017869095!3d-7.2126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d129b1a16e77%3A0x736d57b7f29974b6!2sDesa%20Banjarsari%2C%20Kecamatan%20Pangalengan%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1626948990387!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
            <p className="text-darkgray text-sm sm:text-base md:text-lg font-josefin leading-relaxed text-justify">
              Banjarsari merupakan sebuah desa yang terletak dalam (daerah)
              kecamatan Pangalengan, Kabupaten Bandung, Provinsi Jawa Barat,
              Indonesia. Desa Banjarsari memiliki perkebunan Teh Malabar yang
              berfungsi sebagai lokasi perkebunan teh sekaligus objek wisata
              alam. Di kebun teh hijau ini juga terdapat objek wisata sejarah,
              yaitu Makam Bosscha yang dapat dikembangkan menjadi wisata
              edukasi.
            </p>
            <p className="text-blue-600 text-xs sm:text-sm mt-2 sm:mt-4">
              <a
                href="https://www.google.com/maps?q=7%C2%B012%2745.4%22S+107%C2%B035%2744.6%22E"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Lihat lokasi di Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
