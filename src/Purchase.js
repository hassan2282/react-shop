import React, { useContext } from 'react';
import { AppContext } from './context';

function Purchase({ item }) {
    const { buy, setBuy } = useContext(AppContext);

    const filterData = (target) => {
        const updatedData = buy.filter((element) => element !== target);
        setBuy(updatedData);
    };

    const handleFilter = () => {
        filterData(item);
    };

    return (
        <div className='flex flex-row justify-between w-full p-2 gap-3 z-10 text-sm border-b border-b-gray-800' dir='rtl'>
            <div className='flex flex-row'>
                <img src={require('./images/' + item.url)} className='w-14 rounded-[4px] m-1 h-auto' alt={item.brand} />
                <h3 className='text-[10px] max-lg:hidden'>{item.brand}</h3>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex flex-row items-center justify-center'>
                    <span className='text-[8px]'>{item.price} تومان</span>
                    <span className='bg-indigo-50 text-[10px] rounded-full text-center flex p-1'>1 عدد</span>
                </div>
                <button
                    className='bg-rose-600 hover:scale-95 cursor-pointer duration-200 text-white p-[1px] rounded-md text-[10px]'
                    onClick={handleFilter}
                >حذف از سبد
                </button>
            </div>
        </div>
    );
}

export default Purchase;
