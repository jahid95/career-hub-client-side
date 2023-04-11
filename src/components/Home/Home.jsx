import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagories from '../Catagories/Catagories';
import { JobsContext } from '../../App';
import Features from '../Features/Features';


const Home = () => {
    const catagories = useLoaderData();
    const jobsData = useContext(JobsContext);
    const sliceData =jobsData.slice(0,4);
    const [data, setdata] = useState(sliceData)
    console.log(catagories);
    return (
        <div>
            <div className='md:flex justify-between mt-10'>
                <div className='text-left'>
                    <h1 className='text-5xl text-left font-bold my-4 mt-8'>One Step <br /> Closer To Your <br /> <span className='text-blue-600'>Dream Job</span></h1>
                    <p className='w-96 my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-start-applying my-4'>
                        Get Started
                    </button>
                </div>
                <div>
                    <img src="https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-6/340894943_448922297431387_2878553565144460630_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHfT5mzrWXYzOIBv_RnOh7K6SFUWMMBLgLpIVRYwwEuAuEhaw6lXFT1s8ZDu2Vr1Xbc5rVYeVd8p7cXcvKTpPla&_nc_ohc=7v9QJMoeBcsAX-qrzwz&_nc_zt=23&_nc_ht=scontent.fdac1-1.fna&oh=00_AfCTcpjq8DvFxBzswnKq0TRwo3JUb5DBB5oET10SQutb5w&oe=6439CF10" alt="" />
                </div>
            </div>

            {/* job category list */}
            <div className='mt-20'>
                <div className='my-10'>
                    <h2 className='text-4xl font-bold'>Job Category List</h2>
                    <p className='text-gray-500 my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>

                <div className='md:grid md:grid-cols-4 gap-10'>
                   {
                    catagories.map((category, i) => <Catagories key={i} category={category}></Catagories>)
                   }
                </div>
                <div className='md:grid md:grid-cols-2 my-20 text-left'>
                    {
                        data.map(feature => <Features feature={feature} key={feature.id}></Features>)
                    }
                    
                </div>
                <div className={`text-center ${data.length > 4 ? 'hidden' : 'block'}`}>
                <button onClick={()=> setdata(jobsData)} className='btn-start-applying'>
                        Load More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Home;