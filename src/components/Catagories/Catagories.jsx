import React from 'react';

const Catagories = ({category}) => {
    return (
        <div className='flex justify-start items-center bg-blue-50 py-5 rounded-md flex-col'>
           <img className='w-[160px] h-[120px] mb-4' src={category.icon} alt="" />
           <h2 className='text-2xl text-lime-950 my-2 font-semibold'>{category.category}</h2>
           <p className='text-gray-400'>{category.number} + Job Available</p>
        </div>
    );
};

export default Catagories;