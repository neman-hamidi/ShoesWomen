import React from 'react'

export default function newProductItem({ title, price, children, discount }) {
  return (
    <div className='p-6 border border-gray-400 rounded-lg'>
        <div>
            {children}
        </div>
        <div className='flex justify-between items-center mt-6'>
            <p className='font-bold'>{title}</p>
            <svg className='w-6 h-6'>
                <use href='#love'></use>
            </svg>
        </div>
        {discount && (
            <del className='text-gray-400 mt-4'>{discount} تومان</del>
        )}
        <p className='mt-2'>{price} تومان</p>
        <div className='flex justify-end'>
            <button type="submit" className='py-3.5 px-2.5 text-xs bg-[#91705d] text-white rounded-full'>مشاهده صفحه محصول</button>
        </div>
    </div>
  )
}
