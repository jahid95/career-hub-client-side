import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon
      } from '@heroicons/react/24/solid'

const JobDetails = () => {
    const dataJobs = useLoaderData();
    const {experienceNeeded,salaryRange,jobCategory,contactNumber,companyEmail,location,id} = dataJobs;
    console.log(dataJobs);
    
    const handleAddToCart = id =>{
        let jobCart = {}

        const storedCart = localStorage.getItem('job-cart');
        if(storedCart){
            jobCart = JSON.parse(storedCart);
        }
        const quantity = jobCart[id];
        if(quantity){
            const newQuantity = quantity + 1;
            jobCart[id] = newQuantity;
        }
        else{
            jobCart[id] = 1;
        }
        localStorage.setItem('job-cart', JSON.stringify(jobCart));
    }

    return (
        <div>

            <h2 className='text-3xl font-bold py-2 bg-blue-50 pt-6 h-32 mb-10'>Job Details</h2>
            <div className='md:flex justify-between'>
                <div className='text-left md:w-[70%]'>
                    <h2 className='p-2'><span className='text-lg font-semibold'>Job Description:</span> <span>{dataJobs.jobDescription}</span></h2>
                    <h2 className='p-2'><span className='text-lg font-semibold'>Job Responsibilities:</span> <span>{dataJobs.jobResponsibilities}</span></h2>
                    <p className='text-lg font-semibold p-2'>Educational Requirements:</p>
                    <p className='p-2'>{dataJobs.educationRequirements}</p>
                    <p className='text-lg font-semibold p-2'>Experiences:</p>
                    <p className='p-2'>{experienceNeeded}</p>
                </div>


                <div className='text-left mr-10 bg-blue-50 p-4 md:w-[30%] text-blue-900'>
                    <h2 className='text-left text-lg font-bold py-2 my-4'>Job Details</h2>
                    <p className='flex gap-2 items-center'><CurrencyDollarIcon className='w-6'></CurrencyDollarIcon><span className='font-bold py-2'>Salary:</span>  {salaryRange}</p>
                    <p className='flex gap-2 items-center'><BriefcaseIcon className='w-6'></BriefcaseIcon><span className='font-bold py-2'>Job Title:</span>  {jobCategory}</p>
                    <h2 className='text-left text-lg font-bold py-2 my-4'>Contact Information</h2>
                    <p className='flex gap-2 items-center'><PhoneIcon className='w-6'></PhoneIcon><span className='font-bold py-2'>Contact Number:</span> {contactNumber}</p>
                    <p className='flex gap-2 items-center'><EnvelopeIcon className='w-6'></EnvelopeIcon><span className='font-bold py-2'>Email:</span> {companyEmail}</p>
                    <p className='flex gap-2 items-center'><MapPinIcon className='w-6'></MapPinIcon><span className='font-bold py-2'>Location:</span> {location}</p>
                   <div className='text-center'>
                   <button onClick={()=> handleAddToCart(id)} className='btn-start-applying mt-6 text-center'>Apply Now</button>
                   </div>
                </div>
                
            </div>
        </div>
    );
};

export default JobDetails;