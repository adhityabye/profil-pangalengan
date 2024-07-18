"use client";

export default function Vision() {
  return (
    <section className="bg-main flex h-auto min-h-full flex-col items-center mx-auto py-20">
      <div className="w-full px-20">
        <h3 className="bg-secondary rounded-md items-start text-[24px] p-2 text-white-100 font-semibold font-josefin text-left mb-8 inline-block">
          Visi Misi Desa Banjarsari
        </h3>
        <div className="mb-8">
          <h4 className="text-xl font-josefin text-darkgray mb-2">Visi</h4>
          <p className="text-lg text-darkgray font-josefin leading-relaxed">
            Mewujudkan Masyarakat Desa Banjarsari yang Damai, Berbudaya,
            Sejahtera dan Berdaya Saing dengan berlandaskan Religius, kultural
            dan Budaya Daerah
          </p>
        </div>
        <div>
          <h4 className="text-xl font-josefin text-darkgray mb-2">Misi</h4>
          <ol className="list-decimal pl-5 text-lg font-josefin text-darkgray leading-relaxed space-y-2">
            <li>
              Meningkatkan kwalitas sumber daya manusia yang berbasis iman dan
              taqwa.
            </li>
            <li>
              Mewujudkan Pemerintah Desa yang Bersih, Amanah, dan Transparan
              yang berorientasi pada optimalisasi pelayanan kepada masyarakat.
            </li>
            <li>
              Meningkatkan perekonomian masyarakat dengan memanfaatkan potensi
              sumber daya alam.
            </li>
            <li>
              Terciptanya iklim usaha yang nyaman bagi seluruh warga masyarakat
              Desa Banjarsari.
            </li>
            <li>
              Meningkatkan sumber daya manusia melalui berbagai program
              pendidikan dan pelatihan.
            </li>
            <li>
              Meningkatkan kwalitas pelayanan publik bagi warga masyarakat Desa
              Banjarsari.
            </li>
            <li>Menumbuhkembangkan dan melestarikan seni dan Budaya Sunda</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
