import React from 'react'

function Header() {
  return (
    <div className='flex flex-row text-right text-white justify-end items-center bg-indigo-950 p-2 w-screen'>
            <input type='radio' checked />
            <input type='radio' checked />
            <h1 className='mr-4 text-4xl ml-2' style={{fontFamily:'Aviny'}}>فروشگاه اینترنتی <span className='bg-gradient-to-r from-rose-500 to-orange-500 text-transparent bg-clip-text'>بهزیکــــو </span></h1>
    </div>
  )
}

export default Header