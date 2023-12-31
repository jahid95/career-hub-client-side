import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'
import {
    MapPinIcon, CurrencyDollarIcon
      } from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='bg-gray-100 m-4 p-8 rounded-lg'>
            <img className='w-[120px] h-[100px]' src={feature.companyLogo} alt="" />
            <h2 className='text-3xl font-medium my-2'>{feature.jobCategory}</h2>
            <h2 className='text-gray-400 mb-4'>{feature.companyName}</h2>
            <div>
                <button className='border-2 border-blue-500 my-2 py-1 px-4 text-blue-600'>{feature.remote? <p>Remote</p> : <p>On Office</p>}</button>
                <button className='border-2 border-blue-500 my-2 py-1 px-4 text-blue-600 mx-8'>{feature.jobType}</button>
            </div>
            <div className='flex gap-8'>
                <p className='flex items-center gap-2 my-2 text-gray-500'><span><MapPinIcon className='w-6'></MapPinIcon></span> {feature.location}</p>
                <p className='flex items-center gap-2 my-2 text-gray-500'><span><CurrencyDollarIcon className='w-6'></CurrencyDollarIcon></span> Salary {feature.salaryRange}</p>
            </div>
            <Link to={`/${feature.id}`}><button className='btn-view-details border-2 mt-4'>View Details</button></Link>
            
        </div>
    );
};

export default Features;