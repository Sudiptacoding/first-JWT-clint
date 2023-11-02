import React from 'react';

const ServiceDetailsFirst = (props) => {
    const { title, img, description, facility } = props.data || {};
    return (
        <div className='space-y-7'>
            <div><img src={img} className='w-full max-h-[400px] rounded-lg' alt="" /></div>
            <div><h1 className='text-[#151515] font-bold text-[35px]'>{title}</h1></div>
            <div><p>{description}</p></div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {
                    facility?.map((item, i) => {
                        return <div key={i} className='border border-t-2 rounded-lg border-t-[#FF3811] bg-[#F3F3F3] p-10'>
                            <div className='text-[#444] font-bold text-xl pb-[10px]'>{item?.name}</div>
                            <div className='text-[#737373] font-normal text-base'>{item?.details}</div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ServiceDetailsFirst;