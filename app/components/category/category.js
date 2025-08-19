import React from "react";
import Image from "next/image";

export default function Category() {
  return (
    <>
      <div className="flex flex-row gap-2 items-center mx-2 md:mx-8 mt-12 mb-8">
        <div className="w-full h-px bg-gray-400"></div>
        <h3 className="w-96 text-xs md:text-lg text-center">دسته بندی محصولات</h3>
        <div className="w-full h-px bg-gray-400"></div>
      </div>
      <div className="flex overflow-x-auto gap-16 px-8 py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 w-full">
        <div className="flex flex-row gap-16 flex-nowrap">
          <div className="border-l border-l-gray-400 pl-14 min-w-[110px] py-4 md:py-0">
            <Image
              src="/images/Bag.png"
              width={96}
              height={156}
              alt="کیف"
              className="hover:scale-105 transition-transform duration-300 h-full"
            />
          </div>
          <div className="border-l border-l-gray-400 pl-14 min-w-[110px] py-4 md:py-0">
            <Image
              src="/images/Accessories.png"
              width={93}
              height={164}
              alt="اکسسوری"
              className="hover:scale-105 transition-transform duration-300 h-full"
            />
          </div>
          <div className="border-l border-l-gray-400 pl-14 min-w-[110px] py-4 md:py-0">
            <Image
              src="/images/Slipper.png"
              width={118}
              height={122}
              alt="دمپایی"
              className="hover:scale-105 transition-transform duration-300 h-full"
            />
          </div>
          <div className="border-l border-l-gray-400 pl-14 min-w-[110px] py-4 md:py-0">
            <Image
              src="/images/Court Shoe.png"
              width={92}
              height={146}
              alt="کفش رسمی"
              className="hover:scale-105 transition-transform duration-300 h-full"
            />
          </div>
          <div className="border-l border-l-gray-400 pl-14 min-w-[110px] py-4 md:py-0">
            <Image
              src="/images/College Shoe.png"
              width={105}
              height={126}
              alt="کفش کالج"
              className="hover:scale-105 transition-transform duration-300 h-full"
            />
          </div>
          <div className="border-l border-l-gray-400 pl-14 min-w-[110px] py-4 md:py-0">
            <Image
              src="/images/Sneaker.png"
              width={99}
              height={126}
              alt="کفش کتانی"
              className="hover:scale-105 transition-transform duration-300 h-full"
            />
          </div>
          <div className="pl-14 min-w-[110px] py-4 md:py-0">
            <Image
              src="/images/Boot.png"
              width={78}
              height={163}
              alt="بوت"
              className="hover:scale-105 transition-transform duration-300 h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
