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
        
    
    return (
        <div>
            <h2 className='text-xl font-bold bg-blue-50 h-36 pt-10'>Applied Jobs: {cart.length}</h2>
            {
                cart.map(ct => <Cart ct={ct} key={ct.id}></Cart>)
            }
        </div>
    );
};

export default AppliedCart;