import React from 'react'
import { Icon } from 'react-icons-kit'
import { shoppingCart } from 'react-icons-kit/feather'

function Product({item}) {
  function separate(Number) 
{
  Number+= '';
  Number= Number.replace(',', '');
  let x = Number.split('.');
  let y = x[0];
  let z= x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y))
  y= y.replace(rgx, '$1' + ',' + '$2');
  return y+ z;
}

  // const [id,url,name,price,brand] = item;
  return (
    <div className='flex flex-col items-center w-[85%] sm:w-[45%] md:max-2xl:w-[30%] hover:scale-105 cursor-pointer hover:shadow-xl hover:-translate-y-2 duration-300 p-2 space-y-4 m-[3px] lg:max-2xl:m-3 bg-white rounded-sm shadow' dir='rtl'>
        <div className='w-full h-[60%]'>
            <img className='w-full h-full rounded-md' src={require(`./images/${item.url}`)} />
        </div>

        <div className='flex text-right w-full'>
            <h2>{item.name}</h2>
        </div>
        <hr className='h-1 bg-zinc-600 w-full rounded-md'/>

        <div className='flex flex-wrap justify-between w-full items-center '>
            <button className='p-2 text-sm bg-indigo-800 text-white rounded-md cursor-pointer hover:scale-95 duration-300'><Icon icon={shoppingCart} /></button>
            <p className='text-[70%]'>ریال <span>{separate(item.price)}</span></p>
        </div>
    </div>
  )
}

export default Product