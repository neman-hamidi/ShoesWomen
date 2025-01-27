import React from "react";
import Image from "next/image";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { PiInstagramLogoThin } from "react-icons/pi";
import { AiOutlineTeam } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaReadme } from "react-icons/fa6";

export default function footer() {
  return (
    <footer>
      <div>
        <div className="flex flex-col items-center justify-center w-full mx-auto mt-14 mb-20">
          <svg className="w-6 h-6">
            <use href="#chevron-double-up"></use>
          </svg>
          <p className="text-lg font-bold mt-2">بازگشت به بالا</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-28">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/1.png"
              width={62}
              height={140}
              alt="product-support"
              className=""
            />
            <p className="mt-5">پشتیبانی همه روزه</p>
          </div>
          <div className="w-px h-32 bg-gray-500"></div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/2.png"
              width={78}
              height={140}
              alt="product-support"
              className=""
            />
            <p className="mt-5">تعویض کالا</p>
          </div>
          <div className="w-px h-32 bg-gray-500"></div>
          <div className=" flex flex-col items-center justify-center">
            <Image
              src="/images/3.png"
              width={62}
              height={140}
              alt="product-support"
              className=""
            />
            <p className="mt-5">ارسال به سراسر کشور</p>
          </div>
        </div>
        <div className="bg-[#E9DCD3]/70 px-8 pt-8 mt-20 ">
          <div className="flex flex-row justify-around items-center">
            <div>
              <h3 className="text-2xl font-bold">خدمات مشتریان</h3>
              <ul>
                <li className="flex flex-row gap-2 my-6">
                  <svg className="w-6 h-6">
                    <use href="#question-mark-circle"></use>
                  </svg>
                  سوالات متداول
                </li>
                <li className="flex flex-row gap-2 my-6">
                  <svg className="w-6 h-6">
                    <use href="#paper-airplane"></use>
                  </svg>
                  پیگیری سفارش
                </li>
                <li className="flex flex-row gap-2 my-6">
                  <svg className="w-6 h-6">
                    <use href="#exclamation-circle"></use>
                  </svg>
                  قوانین و مقررات
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">تماس با ما</h3>
              <ul>
                <li className="flex flex-row gap-2 my-6">
                  <RiTelegramLine className="w-6 h-6" /> ارتباط از طریق واتساپ
                </li>
                <li className="flex flex-row gap-2 my-6">
                  <FaWhatsapp className="w-6 h-6" /> ارتباط از طریق تلگرام
                </li>
                <li className="flex flex-row gap-2 my-6">
                  <PiInstagramLogoThin className="w-6 h-6" /> ارتباط از طریق
                  اینستاگرام
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">درباره ما</h3>
              <ul>
                <li className="flex flex-row gap-2 my-6">
                  <AiOutlineTeam className="w-6 h-6" />
                  تیم شهر کفش
                </li>
                <li className="flex flex-row gap-2 my-6">
                  <CiLocationOn className="w-6 h-6" />
                  آدرس شعب
                </li>
                <li className="flex flex-row gap-2 my-6">
                  <FaReadme className="w-6 h-6" />
                  اطلاعات بیشتر
                </li>
              </ul>
            </div>
          </div>
            <div className="w-11/12 h-px mx-auto bg-gray-500 my-10"></div>
            <div className="flex flex-row justify-between items-center pb-4">
                <div>
                    <p className="font-bold text-sm">برای اطلاع از جدیدترین محصولات و حراجی‌ها، ایمیل خود را وارد کنید.</p>
                    <div className="flex flex-row items-center  gap-4 mt-4">
                        <input type="email" name="email" className="p-2.5 border border-gray-200 rounded-md w-96" placeholder=".لطفا ایمیل خود را وارد کنید." />
                        <button type="submit" className="py-2.5 px-10 border border-gray-400 rounded-md">ثبت ایمیل</button>
                    </div>
                </div>
                <div>
                    <Image src="/images/Enamaad Icon.png" width={200} height={200} alt="" />
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
