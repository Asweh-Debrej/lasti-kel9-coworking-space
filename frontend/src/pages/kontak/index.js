import DefaultLayout from "@layouts/default";

export default function Kontak() {
  return (
     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
           <h1 className="text-4xl font-bold text-center text-gray-900">
             Smart Coworking Space 1.0
           </h1>
           <div className="mt-10">
             <h2 className="text-2xl font-bold text-center text-gray-900">
               Kontak
             </h2>
             <ul className="mt-6 text-center text-gray-800">
               <li>Alamat: Jl. Tamansari 64, Bandung, Jawa Barat, Indonesia</li>
               <li>Nomor Telepon: 0876 5432 1920</li>
               <li>Email: SCS10@gmail.com</li>
               <li>IG: @SCS1.0</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
  );
}

Kontak.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"kontak"}>
      {page}
    </DefaultLayout>
  );
}
