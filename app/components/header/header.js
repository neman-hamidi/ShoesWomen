import React from "react";
import Image from "next/image";
export default function header() {
  return (
    <header>
      <div className="border border-gray-400 rounded-full mx-8 mt-10 ">
        <ul className="flex flex-row justify-center items-center gap-40 py-6 px-[102px] ">
          <li className="flex">
            دسته‌بندی محصولات
            <svg className="w-5 h-5 mr-2 pt-1">
              <use href="#chevron-down"></use>
            </svg>
          </li>
          <li>جدیدترین‌ها</li>
          <li>حراجی‌ها</li>
          <li>آدرس شعب</li>
          <li>ارتباط با ما</li>
        </ul>
      </div>
      <div className="w-[96%] mx-8 mt-12">
        <Image
          src="/images/Banner-1.png"
          width={1376}
          height={395}
          alt="header-img"
          className="w-full"
        />
      </div>
    </header>
  );
}
