import React from "react";
import Image from "next/image";
export default function nav() {
  return (
    <nav className="mt-8 mx-8 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          className="p-2.5 pr-9 md:w-96 w-36 rounded-lg border border-gray-300 text-xs"
          placeholder="جستجوی محصول"
        />
        <svg className="absolute top-2 md:top-3 text-gray-400 w-5 h-5 right-2.5">
          <use href="#magnifying-glass"></use>
        </svg>
      </div>
      <div className="md:w-[352px]">
        <Image src="/images/Logo.png" width={138} height={25} alt="imgs" />
      </div>
      <div className="flex gap-2">
        <svg className="w-6 h-6 text-gray-500">
          <use href="#love"></use>
        </svg>
        <svg className="w-6 h-6 text-gray-500">
          <use href="#shopping-bag"></use>
        </svg>
        <svg className="w-6 h-6 text-gray-500">
          <use href="#user"></use>
        </svg>
      </div>
    </nav>
  );
}
