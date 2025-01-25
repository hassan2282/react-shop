import React, { useContext, useEffect } from 'react'
import lottieAnimation from "./lotties/shapes.json";
import Lottie from "lottie-react";
import Purchase from './Purchase.js';
import { AppContext } from './context.js';

function Sidebar() {

  const {buy, setBuy} = useContext(AppContext);

  useEffect(()=> {
    localStorage.setItem('data', JSON.stringify(buy))
  },[buy])

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data'));
    localData && setBuy(localData)
  }, [setBuy])

  return (
    <div className='flex flex-col max-md:basis-0 basis-1/4 h-auto bg-indigo-100 overflow-hidden justify-start items-center'>
      <div className='flex flex-col items-end w-full'>
        {
          buy.length > 0 ?
          <h3 className='text-[12px] m-2 mb-5 z-10'>شما <span >{buy.length}</span> محصول در سبد خرید خود دارید</h3>
          :
          <h3 className='text-[12px] m-2 mb-5 z-10'> سبد خرید شما سرشار از پوچ هست</h3>
        }
      </div>
      {
        buy.length > 0 &&
        buy.map((item) => {
          return (
            <Purchase key={item.id} item={item}/>
          )
        }) 
      }
        <Lottie animationData={lottieAnimation} className='absolute hue-rotate-60 scale-150 z-0 h-full'/>
    </div>
  )
}

export default Sidebar