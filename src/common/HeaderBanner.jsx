import React from 'react';

const HeaderBanner = (props) => {
    return (
        <div className="bg-[url('https://i.postimg.cc/tTdMHnHK/checkout.png')] w-full h-[300px]">
            <div className='h-[300px] bg-[#00000096]'>
                <div className='py-[91px] pl-10'>
                    <p className='text-[45px] font-bold text-white'>{props.text}</p>
                </div>
                <div className='bg-[#FF3811] custom-clip-path w-[326px] h-[49.3px] mx-auto flex items-center justify-center'>
                    <h1 className='text-xl text-white '>Home/{props.text}</h1>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;