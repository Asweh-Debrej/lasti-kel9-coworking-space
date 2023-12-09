'use client'
import DefaultLayout from "@layouts/default";
import UserContext from "@/context/user-context";
import { useContext } from "react";

export default function Tentang() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Profil Saya
          </h1>
          <ul className="mt-10">
            <li className="mb-5">
                <h2 className="inline-flex font-bold text-left text-gray-900 pl-1 pr-1">
                Nama
                </h2>
                <p className="inline-flex text-justify pl-3">
                {user ? user.name : ''}
                </p>
            </li>
            <li className="mb-5">
                <h2 className="inline-flex font-bold text-left text-gray-900 pl-1 pr-1">
                Email
                </h2>
                <p className="inline-flex text-justify pl-3">
                {user ? user.email : ''}
                </p>
            </li>
            <li className="mb-5">
                <h2 className="inline-flex font-bold text-left text-gray-900 pl-1 pr-1">
                No. telepon
                </h2>
                <p className="inline-flex text-justify pl-3">
                {user ? user.phone : ''}
                </p>
            </li>
          </ul>
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
