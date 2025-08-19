import React from "react";
import Image from "next/image";
import NewProductItem from "./newProductItem/newProductItem";
import { details, details2 } from "./Text";
export default function newProduct() {
  return (
    <div className="w-full mt-20">
      <div className="flex flex-row gap-1 items-center justify-between w-ful md:mx-8 mx-1">
        <div>
          <p className=" text-xs md:text-2xl font-bold">جدیدترین محصولات</p>
        </div>
        <div className="w-10 md:w-[1050px] h-px bg-gray-400"></div>
        <div className="flex items-center gap-2">
          <p className="text-xs md:text-base">مشاهده همه</p>
          <div className="flex flex-row gap-4 items-center ">
            <svg className="rotate-180 w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
            <svg className=" w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap flex-row gap-6 items-center justify-between w-[95%] mx-auto mt-8">
        {details.map((item, index) => (
          <NewProductItem key={index} {...item} />
        ))}
      </div>
      <div className="w-[96%] mr-2 md:mx-8 my-14">
        <Image
          src="/images/Banner 2.png"
          width={1376}
          height={395}
          alt="header-img"
          className="w-full"
        />
      </div>
      <div className="flex flex-row gap-4 items-center justify-between w-ful mx-1 md:mx-8">
        <div>
          <h3 className="text-xs md:text-2xl font-bold">حراج ویژه</h3>
        </div>
        <div className="w-20 md:w-[1150px] h-px bg-gray-400"></div>
        <div className="flex items-center gap-2">
          <p className="text-xs md:text-base">مشاهده همه</p>
          <div className="flex flex-row gap-4 items-center ">
            <svg className="rotate-180 w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
            <svg className=" w-4 h-4">
              <use href="#chevron-left"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap flex-row gap-6 items-center justify-between w-[95%] mx-auto mt-8">
        {details2.map((item, index) => (
          <NewProductItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
