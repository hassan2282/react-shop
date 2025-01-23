import React from 'react'
import lottieAnimation from "./lotties/shapes.json";
import Lottie from "lottie-react";
import Purchase from './Purchase.js';

function Sidebar() {
  return (
    <div className='flex flex-col max-md:basis-0 basis-1/4 h-full bg-indigo-100 overflow-hidden justify-start items-center'>
      <div className='flex flex-col items-end w-full'>
        <h3 className='text-[12px] m-2 mb-5 z-10'>شما <span >3</span> محصول در سبد خرید خود دارید</h3>
      </div>
      <Purchase />
      <Purchase />
      <Purchase />
      <Purchase />
        <Lottie animationData={lottieAnimation} className='absolute hue-rotate-60 scale-150 z-0'/>
    </div>
  )
}

export default Sidebar