import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagories from '../Catagories/Catagories';


const Home = () => {
    const catagories = useLoaderData();
    console.log(catagories);
    return (
        <div>
            <div className='flex justify-between mt-10'>
                <div className='text-left'>
                    <h1 className='text-5xl text-left font-semibold'>One Step <br /> Closer To Your <br /> <span className='text-blue-600'>Dream Job</span></h1>
                    <p className='w-80 my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-start-applying'>
                        Get Started
                    </button>
                </div>
                <div>
                    <img src="../../../public/anwar_jahid__2_-removebg-preview.png" alt="" />
                </div>
            </div>

            {/* job category list */}
            <div className='mt-20'>
                <div className='my-10'>
                    <h2 className='text-4xl font-semibold'>Job Category List</h2>
                    <p className='text-gray-500 my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='grid grid-cols-4 gap-10'>
                   {
                    catagories.map((category, i) => <Catagories key={i} category={category}></Catagories>)
                   }
                </div>

            </div>
        </div>
    );
};

export default Home;