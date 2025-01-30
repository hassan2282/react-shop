import React, { useContext, useEffect, useState } from 'react'
import { Icon } from 'react-icons-kit'
import { shoppingCart, plus } from 'react-icons-kit/feather'
import { AppContext } from './context';
import { ToastContainer, toast } from 'react-toastify';
import formatCurrency from './formatCurrency';

function Product({item}) {

  const {buy, setBuy} = useContext(AppContext);

  const [changeIcon, setChangeIcon] = useState(shoppingCart);

  const [animate, setAnimate] = useState(false)

  useEffect(()=>{
    setInterval(()=>setAnimate(true), 200)
  })

  return (
    <div className={` flex relative flex-col ${animate === true ? 'opacity-100 translate-y-0 duration-500' : 'opacity-0 translate-y-20 duration-500'} items-center sm:w-[45%] md:max-2xl:w-[30%] hover:scale-105 cursor-pointer hover:shadow-xl hover:-translate-y-2 duration-300 p-2 space-y-4 m-[3px] lg:max-2xl:m-3 bg-white rounded-sm shadow overflow-hidden`} dir='rtl'>
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
             onMouseOut={()=>setChangeIcon(shoppingCart)} 
             onClick={()=>{
              setBuy([...buy, item]);
               toast('🦄 محصول به سبد خرید اضافه شد!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });}}>
                <Icon icon={changeIcon} onMouseEnter={()=>setChangeIcon(plus)}/>
              </button>
            <p className='text-[70%]'><span>{formatCurrency(item.price)}</span></p>
        </div>
    </div>
  )
}

export default Product