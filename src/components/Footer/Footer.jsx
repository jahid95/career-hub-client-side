import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer bg-black text-white p-4 mt-8 h-[590px] text-left bg-opacity-90 rounded-lg'>
            <div className='md:flex justify-between p-10 mt-8 space-y-2'>
                <div>
                    <p className='text-2xl font-bold py-4 text-white'>JobHunt</p>
                    <p className='w-64'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio minus laborum, ratione pariatur.</p>
                    <div className='flex gap-4 my-4'>
                        <img className='w-[42px] h-[42px]' src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" />
                        <img className='w-[42px] h-[42px]' src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png" alt="" />
                        <img className='w-[42px] h-[42px]' src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="" />

                    </div>
                </div>
                <div>
                    <p className='text-xl font-bold py-2 text-white'>Company</p>
                    <p>About Us</p>
                    <p>Latest News</p>
                    <p>Career</p>
                    <p>Work</p>
                </div>
                <div>
                    <p className='text-xl font-bold py-2 text-white'>Product</p>
                    <p>About Us</p>
                    <p>Latest News</p>
                    <p>Career</p>
                    <p>Work</p>
                </div>
                <div>
                    <p className='text-xl font-bold py-2 text-white'>Support</p>
                    <p>About Us</p>
                    <p>Latest News</p>
                    <p>Career</p>
                    <p>Work</p>
                </div>
                <div>
                    <p className='text-xl font-bold py-2 text-white'>Contact</p>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr />
            <div className='my-6 md:flex justify-between p-10'>
                <p className='text-gray-300'>@2023 JobHunt. All Rights Reserved</p>
                <p className='text-gray-400'>powered by <span className='text-gray-200 text-lg font-semibold'>JobHunt</span></p>
            </div>
        </div>
    );
};

export default Footer;