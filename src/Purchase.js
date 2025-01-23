import React from 'react'

function purchase() {
  return (
        <div className='flex flex-row justify-between w-full p-2 gap-3 z-10 text-sm border-b border-b-gray-800' dir='rtl'>

            <div className='flex flex-row '>
            <img src={require('./images/15.jpg')} className='w-14 rounded-[4px] m-1 h-auto'/>
            <h3 className='text-[10px] max-lg:hidden'>Nokia v1</h3>
            </div>

            <div className='flex flex-col gap-1'>
            <div className='flex flex-row items-center justify-center'>
                <span className='text-[8px]'>9000000 تومان</span>
                <span className='bg-indigo-50 text-[10px] rounded-full text-center flex p-1'>3 عدد</span>
            </div>
            <button className='bg-rose-600 hover:scale-95 cursor-pointer duration-200 text-white p-[1px] rounded-md text-[10px]'>حذف از سبد</button>
            </div>
      </div>  
      )
}

export default purchase