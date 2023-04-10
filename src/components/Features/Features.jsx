import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'

const Features = ({feature}) => {
    return (
        <div className='bg-gray-100 m-4 p-8 rounded-lg'>
            <img className='w-[120px] h-[100px]' src={feature.companyLogo} alt="" />
            <h2 className='text-3xl'>{feature.jobCategory}</h2>
            <h2 className='text-gray-400'>{feature.companyName}</h2>
            <div>
                <button className='border-2 my-2 py-1 px-4 text-blue-600'>{feature.remote? <p>Remote</p> : <p>On Office</p>}</button>
            </div>
            <Link to={`/statistics/${feature.id}`}><button className='btn-view-details border-2'>View Details</button></Link>
            
        </div>
    );
};

export default Features;