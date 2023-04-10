import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const dataJobs = useLoaderData();
    console.log(dataJobs);
    return (
        <div>
            <h2>{dataJobs.id}</h2>    
            <h2>Job details</h2>        
        </div>
    );
};

export default JobDetails;