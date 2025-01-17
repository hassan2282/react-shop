import React from 'react'
import Products from './Products'

function Content() {
  return (
    <div className='flex flex-col text-sm w-full md:max-2xl:basis-3/4 h-full bg-zinc-100'>
      <div className='flex flex-wrap space-y-3 sm:max-2xl:space-y-0 sm:max-2xl:mb-0 justify-between items-center p-3' dir='rtl'>
        <p>تعداد محصولات : <span>6</span></p>
        
        <div className='flex flex-wrap items-center space-x-3 *:cursor-pointer' dir='rtl'>
          <p className='ml-3'>مرتب سازی بر اساس :  </p>
          <label>جدید ترین</label>
          <input className='w-4 h-4' type='radio' id='new' name='sortBy'/>
          <label>قدیمی ترین</label>
          <input className='w-4 h-4' type='radio' id='old' name='sortBy'/>
        </div>

        <div className='flex flex-row ml-4 gap-2 items-center' dir='rtl'>
          <label for="selectBrands">برند ها</label>
          <select className='rounded-md w-32 bg-indigo-50 text-indigo-900 shadow-md p-2 cursor-pointer text-xl' name='brands' id='selectBrands' style={{fontFamily:'Aviny'}}>
            <option value={'nokia'}>نوکیا</option>
            <option value={'apple'}>اپل</option>
            <option value={'xiaomi'}>شیائومی</option>
            <option value={'samsung'}>سامسونگ</option>
          </select>
        </div>
      </div>

      <Products />

    </div>
  )
}

export default Content