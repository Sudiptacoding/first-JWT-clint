import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ServicesSection = (props) => {
    const data = props.data
    return (
        <div className='space-y-10'>
            <div className='space-y-2 text-center'>
                <h3 className='text-[#FF3811] text-xl font-bold'>Service</h3>
                <h2 className='text-[#151515] text-[45px] font-bold'>Our Service Area</h2>
                <p className='text-[#737373] text-base font-normal lg:px-52'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 gap-6 p-2 lg:grid-cols-3 md:grid-cols-2 lg:p-0'>
                {
                    data?.map((item, i) => {
                        return <Link to={`/moredetails/${item?._id}`} key={item._id} className='hover:shadow-lg delay-75 cursor-pointer p-6 space-y-5 lg:border lg:border-[#E8E8E8] rounded-md'>
                            <img className='w-full rounded-md h-52' src={item?.img} alt="" />
                            <h2 className='text-[#444] font-bold text-2xl'>{item?.title}</h2>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#FF3811] text-xl font-semibold'>Price : ${item?.price}</p>
                                <BsArrowRight className='text-[#FF3811]'></BsArrowRight>
                            </div>
                        </Link>
                    })
                }
            </div>

        </div>
    );
};

export default ServicesSection;