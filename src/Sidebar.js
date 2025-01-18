import React from 'react'
import lottieAnimation from "./lotties/shapes.json";
import Lottie from "lottie-react";
import purch from './purch.js'

function Sidebar() {
  return (
    <div className='flex flex-col relative basis-0 md:max-2xl:basis-1/4 h-full bg-indigo-100 overflow-hidden justify-start items-center'>
      <div className='flex flex-col items-end w-full'>
      <h3 className='text-[12px] m-2 mb-5 z-10'>شما <span >3</span> محصول در سبد خرید خود دارید</h3>
      </div>

      <div className='flex flex-row justify-between w-full p-2 z-10 text-sm border-b border-b-gray-800' dir='rtl'>

        <div className='flex flex-row'>
          <img src={require('./images/15.jpg')} className='w-14 rounded-[4px] m-1 h-auto'/>
          <h3 className='text-[10px]'>Nokia v1</h3>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-row items-center justify-center gap-1'>
              <span className='text-[8px]'>9000000 تومان</span>
              <span className='bg-indigo-50 text-[10px] rounded-full text-center flex p-1'>3 عدد</span>
          </div>
          <button className='bg-rose-600 hover:scale-95 cursor-pointer duration-200 text-white p-[1px] rounded-md text-[10px]'>حذف از سبد</button>
        </div>
      </div>
        <Lottie animationData={lottieAnimation} className='absolute hue-rotate-60 scale-150 z-0'/>

    </div>
  )
}

export default Sidebar