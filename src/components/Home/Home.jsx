import React from 'react';


const Home = () => {
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
            <div>
                <div>
                    <h2>Job Category List</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div>
                    <div>
                        <img src="" alt="" />
                        <h2>Accounts and Finance</h2>
                        <p>300 Job Available</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;