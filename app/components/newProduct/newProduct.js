import React from "react";
import Image from "next/image";
import NewProductItem from "./newProductItem/newProductItem";
import { details, details2 } from "./Text";
export default function newProduct() {
  return (
    <div className="w-full mt-20">
      <div className="flex flex-row gap-1 items-center justify-between w-ful mx-8">
        <div>
          <p className="text-2xl font-bold">جدیدترین محصولات</p>
        </div>
        <div className="w-[1050px] h-px bg-gray-400"></div>
        <div className="flex items-center gap-2">
          <div>مشاهده همه</div>
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
      <div className="flex flex-row gap-6 items-center justify-between w-[95%] mx-auto mt-8">
        {details.map((item, index) => (
          <NewProductItem key={index} {...item} />
        ))}
      </div>
      <div className="w-[96%] mx-8 my-14">
        <Image
          src="/images/Banner 2.png"
          width={1376}
          height={395}
          alt="header-img"
          className="w-full"
        />
      </div>
      <div className="flex flex-row gap-4 items-center justify-between w-ful mx-8">
        <div>
          <h3 className="text-2xl font-bold">حراج ویژه</h3>
        </div>
        <div className="w-[1150px] h-px bg-gray-400"></div>
        <div className="flex items-center gap-2">
          <div>مشاهده همه</div>
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
      <div className="flex flex-row gap-6 items-center justify-between w-[95%] mx-auto mt-8">
        {details2.map((item, index) => (
          <NewProductItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
