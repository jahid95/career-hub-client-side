import React from 'react';
import {
    MapPinIcon, CurrencyDollarIcon
      } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Cart = ({ ct }) => {
    return (
        <div className='flex items-center justify-between'>
            <div className='m-10 flex items-center'>
                <img className='w-[220px] h-[160px] bg-gray-200 p-8 rounded-md' src={ct.companyLogo} alt="" />
                <div className='text-left ml-6'>
                <p className='text-xl font-semibold'>{ct.jobCategory}</p>
                <p className='text-lg font-semibold text-gray-400'>{ct.companyName}</p>
                <div>
                <button className='border-2 border-blue-500 my-2 py-1 px-4 text-blue-600'>{ct.remote? <p>Remote</p> : <p>On Office</p>}</button>
                <button className='border-2 border-blue-500 my-2 py-1 px-4 text-blue-600 mx-8'>{ct.jobType}</button>
            </div>
            <div className='flex gap-8'>
                <p className='flex items-center gap-2 my-2 text-gray-500'><span><MapPinIcon className='w-6'></MapPinIcon></span> {ct.location}</p>
                <p className='flex items-center gap-2 my-2 text-gray-500'><span><CurrencyDollarIcon className='w-6'></CurrencyDollarIcon></span> Salary {ct.salaryRange}</p>
            </div>
                </div>
            </div>
            <div>
                <Link to={`/${ct.id}`}><button className='bg-blue-600 text-white hover:bg-orange-600 px-6 py-2 rounded-md'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Cart;