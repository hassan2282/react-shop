import React, { useState } from 'react'
import Products from './Products'
import data from './data'
import { target } from 'react-icons-kit/feather';

function Content() {
  const [radioCheck, setRadioCheck] = useState('Asc');

  const BrandsArray = []; 
  
  data.forEach((item) => {
    if (!BrandsArray.includes(item.brand.toLowerCase())){
      BrandsArray.push(item.brand.toLowerCase())
    }
  })
  
  const [BrandFilter, setBrandFilter] = useState('all');
  const FilteredArray = BrandFilter === 'all' ? data : data.filter(item => item.brand.toLowerCase() === BrandFilter.toLowerCase());
  radioCheck === 'Asc' ?  FilteredArray.sort((a,b) => b.id - a.id) : FilteredArray.sort((a,b) => a.id - b.id);
  
  return (
    <div className='flex flex-col text-sm w-full h-full bg-zinc-100'>
      <div className='flex flex-wrap space-y-3 sm:max-2xl:space-y-0 sm:max-2xl:mb-0 justify-between items-center p-3' dir='rtl'>
        <p>تعداد محصولات : <span>{data.length}</span></p>
        
        <div className='flex flex-wrap items-center space-x-3 *:cursor-pointer' dir='rtl'>
          <p className='ml-3'>مرتب سازی بر اساس :  </p>
          <label>جدید ترین</label>
          <input className='w-4 h-4' type='radio' id='new' value={'Asc'} name='sortBy' onChange={(e)=>setRadioCheck(e.target.value)}/>
          <label>قدیمی ترین</label>
          <input className='w-4 h-4' type='radio' id='old' value={'Desc'} name='sortBy' onChange={(e)=>setRadioCheck(e.target.value)}/>
        </div>

        <div className='flex flex-row ml-4 gap-2 items-center' dir='rtl'>
          <label for="selectBrands">برند ها</label>
          <select className='rounded-md w-32 bg-indigo-50 text-indigo-900 shadow-md p-2 cursor-pointer text-xl' name='brands' id='selectBrands' style={{fontFamily:'Aviny'}} onChange={(e)=>setBrandFilter(e.target.value)}>
          <option value={'all'}>All</option>
            {
              BrandsArray.map((brand, index) => {
                  return (
                    <option key={index} value={brand}>{brand}</option>
                  )
              })
            }
          </select>
        </div>
      </div>

      <Products FilteredArray={FilteredArray}/>

    </div>
  )
}

export default Content