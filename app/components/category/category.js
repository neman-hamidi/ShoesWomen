import React from "react";
import Image from "next/image";
export default function category() {
  return (
    <>
      <div className="flex flex-row gap-2 items-center mx-8 mt-12 mb-8">
        <div className="w-full h-px bg-gray-400"></div>
        <h3 className="w-96 text-lg">دسته بندی محصولات</h3>
        <div className="w-full h-px bg-gray-400"></div>
      </div>
      <div className="flex items-end justify-center flex-row gap-16">
        <div className="border-l border-l-gray-400 pl-14">
          <Image
            src="/images/Bag.png"
            width={96}
            height={156}
            alt="img-category"
          />
        </div>
        <div className="border-l border-l-gray-400 pl-14">
          <Image
            src="/images/Accessories.png"
            width={93}
            height={164}
            alt="img-category"
          />
        </div>
        <div className="border-l border-l-gray-400 pl-14">
          <Image
            src="/images/Slipper.png"
            width={118}
            height={122}
            alt="img-category"
          />
        </div>
        <div className="border-l border-l-gray-400 pl-14">
          <Image
            src="/images/Court Shoe.png"
            width={92}
            height={146}
            alt="img-category"
          />
        </div>
        <div className="border-l border-l-gray-400 pl-14">
          <Image
            src="/images/College Shoe.png"
            width={105}
            height={126}
            alt="img-category"
          />
        </div>
        <div className="border-l border-l-gray-400 pl-14">
          <Image
            src="/images/Sneaker.png"
            width={99}
            height={126}
            alt="img-category"
          />
        </div>
        <div className="pl-14">
          <Image
            src="/images/Boot.png"
            width={78}
            height={163}
            alt="img-category"
          />
        </div>
      </div>
    </>
  );
}
