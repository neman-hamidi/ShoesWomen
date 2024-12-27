import React from "react";
import Image from "next/image";
import NewProductItem from "./newProductItem/newProductItem";
export default function newProduct() {
  return (
    <div className="w-full mt-20">
        <div className="flex flex-row gap-1 items-center justify-between w-ful mx-8">
            <div><p className="text-2xl font-bold">جدیدترین محصولات</p></div>
            <div className="w-[1230px] h-px bg-gray-400"></div>
            <div className="flex items-center gap-2">
                <div>مشاهده همه   | </div>
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
            <NewProductItem title="بوت میکاسا" price="900,000">
                <Image src="/images/Image (1).png" width={297} height={413} alt="img-product" className="rounded-lg" />
            </NewProductItem>
            <NewProductItem title="بوت سوییت لیندا" price="650,000" >
                <Image src="/images/Image (2).png" width={297} height={413} alt="img-product" className="rounded-lg" />
            </NewProductItem>
            <NewProductItem title="بوت ساقدار تیرانا" price="800,000" >
                <Image src="/images/Image (3).png" width={297} height={413} alt="img-product" className="rounded-lg" />
            </NewProductItem>
            <NewProductItem title="نیم بوت کیمیا" price="950,000" >
                <Image src="/images/Image (4).png" width={297} height={413} alt="img-product" className="rounded-lg h-[413px]" />
            </NewProductItem>
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
            <div><p className="text-2xl font-bold">حراج ویژه</p></div>
            <div className="w-[1350px] h-px bg-gray-400"></div>
            <div className="flex items-center gap-2">
                <div>مشاهده همه   | </div>
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
            <NewProductItem title="صندل کنفی مونیکا" price="350,000" discount="500,000">
                <Image src="/images/p1.png" width={297} height={413} alt="img-product" className="rounded-lg" />
            </NewProductItem>
            <NewProductItem title="صندل سارگل" price="200,000" discount="350,000" >
                <Image src="/images/p2.png" width={297} height={413} alt="img-product" className="rounded-lg" />
            </NewProductItem>
            <NewProductItem title="صندل ستینا" price="500,000" discount="650,000" >
                <Image src="/images/p3.png" width={297} height={413} alt="img-product" className="rounded-lg" />
            </NewProductItem>
            <NewProductItem title="صندل هایلا" price="400,000" discount="550,000" >
                <Image src="/images/p4.png" width={297} height={413} alt="img-product" className="rounded-lg h-[413px]" />
            </NewProductItem>
        </div>
    </div>
  );
}
