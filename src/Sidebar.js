import React from 'react'
import lottieAnimation from "./lotties/shapes.json";
import Lottie from "lottie-react";

function Sidebar() {
  return (
    <div className='basis-0 md:max-2xl:basis-1/4 h-full bg-indigo-100 overflow-hidden justify-center items-center'>
        <Lottie animationData={lottieAnimation} className='hue-rotate-60 scale-150'/>
    </div>
  )
}

export default Sidebar