import React, { useContext, useState } from 'react'
import { Icon } from 'react-icons-kit'
import { shoppingCart, plus } from 'react-icons-kit/feather'
import { AppContext } from './context';

function Product({item}) {

  const {buy, setBuy} = useContext(AppContext);

  const [changeIcon, setChangeIcon] = useState(shoppingCart);

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
  return (
    <div className='flex relative flex-col items-center sm:w-[45%] md:max-2xl:w-[30%] hover:scale-105 cursor-pointer hover:shadow-xl hover:-translate-y-2 duration-300 p-2 space-y-4 m-[3px] lg:max-2xl:m-3 bg-white rounded-sm shadow overflow-hidden' dir='rtl'>
        <img className='absolute w-full h-full rounded-md filter blur-2xl opacity-40 z-0' src={require(`./images/${item.url}`)} />
        <div className='w-full h-[60%] z-10'>
            <img className='w-full h-full rounded-md' src={require(`./images/${item.url}`)} />
        </div>

        <div className='flex text-right w-full z-10'>
            <h2>{item.name}</h2>
        </div>
        <hr className='h-1 bg-zinc-600 w-full rounded-md z-10'/>

        <div className='flex flex-wrap justify-between w-full items-center z-10'>
            <button className='p-2 text-sm bg-indigo-800 text-white rounded-md cursor-pointer hover:bg-red-600 hover:scale-95 duration-300'
             onMouseEnter={()=>setChangeIcon(plus)}
             onMouseOut={()=>setChangeIcon(shoppingCart)} onClick={()=>setBuy([...buy, item])}>
                <Icon icon={changeIcon} onMouseEnter={()=>setChangeIcon(plus)}/>
              </button>
            <p className='text-[70%]'>ریال <span>{separate(item.price)}</span></p>
        </div>
    </div>
  )
}

export default Product