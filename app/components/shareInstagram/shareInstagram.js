import React from 'react'
import Image from 'next/image'
export default function shareInstagram() {
  return (
    <div>
      <p className='text-2xl text-center mt-20 mb-6 font-bold'>
      با تگ کردن پیج ما در شبکه‌های اجتماعی، عکس‌های خود را با ما به اشتراک بگذارید. 
      </p>
      <div className='flex flex-row items-center justify-between w-[90%] mx-auto'>
        <Image src="/images/p9.png" width={226} height={383} alt='img-product-model' className='border-[8px] border-[#f8eee8] rounded-md'/>
        <Image src="/images/p8.png" width={226} height={383} alt='img-product-model' className='border-[8px] border-[#f8eee8] rounded-md'/>
        <Image src="/images/p7.png" width={226} height={383} alt='img-product-model' className='border-[8px] border-[#f8eee8] rounded-md'/>
        <Image src="/images/p6.png" width={226} height={383} alt='img-product-model' className='border-[8px] border-[#f8eee8] rounded-md'/>
        <Image src="/images/32.png" width={226} height={383} alt='img-product-model' className='w-[226px] h-[322px] border-[8px] border-[#f8eee8] rounded-md'/>
      </div>
    </div>
  )
}
