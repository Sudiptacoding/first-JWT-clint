import React from 'react';

const ManajeProduct = (props) => {
    return (
        <div className="bg-[url('https://i.postimg.cc/tTdMHnHK/checkout.png')] w-full h-[300px]">
            <div className='h-[300px] bg-[#00000096] rounded-md'>
                <div className='py-[91px] pl-10'>
                    <p className='text-[45px] font-bold text-white'>{props.text}</p>
                    <p className='text-[#FF3811] font-medium text-base'>{props.tag}</p>
                </div>
            </div>
        </div>
    );
};

export default ManajeProduct;