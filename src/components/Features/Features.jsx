import React from 'react';

const Features = ({feature}) => {
    return (
        <div>
            <img className='w-[120px] h-[100px]' src={feature.companyLogo} alt="" />
            <h2>Feature:{feature.companyName}</h2>
            <button>View Details</button>
            
        </div>
    );
};

export default Features;