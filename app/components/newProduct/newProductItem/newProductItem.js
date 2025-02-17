import Image from "next/image";
import React from "react";

export default function newProductItem({ title, price, src, discount }) {
  return (
    <div className="p-6 border border-gray-400 rounded-lg">
      <Image
        src={src}
        width={297}
        height={413}
        alt="img-product"
        className="rounded-lg h-[350px]"
      />
      <div className="flex justify-between items-center mt-6">
        <h3 className="font-bold">{title}</h3>
        <svg className="w-6 h-6">
          <use href="#love"></use>
        </svg>
      </div>
      {discount && <del className="text-gray-400 mt-4">{discount} تومان</del>}
      <p className="mt-2">{price} تومان</p>
      <div className="flex justify-end">
        <button
          type="submit"
          className="py-3.5 px-2.5 text-xs bg-[#91705d] text-white rounded-full"
        >
          مشاهده صفحه محصول
        </button>
      </div>
    </div>
  );
}
