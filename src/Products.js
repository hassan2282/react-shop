import React from 'react'
import Product from './Product'
import data from './data.js'

function Products({FilteredArray}) {

  return (
    <div className='flex flex-wrap justify-center w-full relative'>
      {
          FilteredArray.map(item => {
            return (
              <Product key={item.key} item={item}/>
            )
          })
      }
    </div>
  )
}

export default Products