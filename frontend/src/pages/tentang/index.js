import DefaultLayout from "@layouts/default";

export default function Tentang() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Tentang Coworking Space Kami
          </h1>
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Visi
            </h2>
            <p className="text-justify mb-5 border-l-4 border-blue-500 pl-4">
              Menjadi smart coworking space yang dapat mendukung produktivitas dan inovasi para pekerja di era digital ini.
            </p>

            <h2 className="text-2xl font-bold text-center text-gray-900">
              Misi
            </h2>
            <ul className="list-disc list-inside mb-5">
              <li className="text-justify mb-5 border-l-4 border-blue-500 pl-4">
                Menyediakan layanan coworking yang lengkap dan berkualitas untuk memaksimalkan produktivitas dan inovasi.
              </li>
              <li className="text-justify mb-5 border-l-4 border-blue-500 pl-4">
                Mengedepankan kesehatan, kebahagiaan, dan keselamatan para pekerja kami.
              </li>
              <li className="text-justify mb-5 border-l-4 border-blue-500 pl-4">
                Menjadi partner utama dalam menciptakan ekosistem bisnis yang inovatif dan berjasa.
              </li>
            </ul>

            {/* Aturan dan Kebijakan */}
            <h2 className="text-2xl font-bold text-center text-gray-900">
              Aturan dan Kebijakan
            </h2>
            <ul className="list-disc list-inside mb-5">
              <li className="text-justify mb-5 border-l-4 border-blue-500 pl-4">
                Setiap anggota diharapkan untuk menghormati privasi dan ruang kerja orang lain.
              </li>
              <li className="text-justify mb-5 border-l-4 border-blue-500 pl-4">
                Penggunaan fasilitas bersama harus sesuai dengan aturan yang berlaku.
              </li>
              <li className="text-justify mb-5 border-l-4 border-blue-500 pl-4">
                Dilarang merokok di dalam ruangan coworking space.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Tentang.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"tentang"}>
      {page}
    </DefaultLayout>
  );
}
