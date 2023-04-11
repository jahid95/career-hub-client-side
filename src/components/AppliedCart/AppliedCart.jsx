import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../../App';
import Cart from '../Cart/Cart';

const AppliedCart = () => {
    const jobItems = useContext(JobsContext);
    const [cart, setCart] = useState([])

    

    useEffect(()=>{
        const storedCart = localStorage.getItem('job-cart');        
        let cartArray =[];
        if(storedCart){
            const cartData =JSON.parse(storedCart)
            for(const id in cartData){
                console.log(id);
                const jobItem =jobItems.find(job => job.id == id);
                cartArray.push(jobItem);                                
            }       
        }
        setCart(cartArray)
        
    },[])

    const handleAllJob = () =>{
        location.reload()
    }

    

    
    

    const handleRemoteJob = () =>{   
        const storedCart = localStorage.getItem('job-cart');        
        let cartArray =[];
        if(storedCart){
            const cartData =JSON.parse(storedCart)
            for(const id in cartData){
                console.log(id);
                const jobItem =jobItems.find(job => job.id == id);
                cartArray.push(jobItem);                                
            }       
        }
            
        const remoteJob = cartArray.filter(ct=> ct.remote == true);           
        setCart(remoteJob)
        
    }
    

   
    
    const handleSiteJob =()=>{   
        const storedCart = localStorage.getItem('job-cart');        
        let cartArray =[];
        if(storedCart){
            const cartData =JSON.parse(storedCart)
            for(const id in cartData){
                console.log(id);
                const jobItem =jobItems.find(job => job.id == id);
                cartArray.push(jobItem);                                
            }       
        }           
        const siteJob = cartArray.filter(ct=> ct.remote == false);
        setCart(siteJob)
       
    }
        
    
    return (
        <div>
            <h2 className='text-xl font-bold bg-blue-50 h-36 pt-10'>Applied Jobs: {cart.length}</h2>
            <div className='flex justify-end gap-4 mt-6'>
                <button onClick={()=>handleRemoteJob()} className='bg-white border-2 border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 px-4 py-2 text-lg font-semibold rounded-lg'>Remote Job</button>
                <button onClick={()=>handleSiteJob()} className='bg-white hover:bg-blue-600 hover:text-white text-blue-700 px-4 py-2 text-lg font-semibold rounded-lg border-2 border-blue-700'>Onsite Job</button>
                <button onClick={()=>handleAllJob()} className='bg-white hover:bg-blue-600 hover:text-white text-blue-700 px-4 py-2 text-lg font-semibold rounded-lg border-2 border-blue-700'>All Job</button>
            </div>
            
            {
                cart.map(ct => <Cart ct={ct} key={ct.id}></Cart>)
            }
        </div>
    );
};

export default AppliedCart;