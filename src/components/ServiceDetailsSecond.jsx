import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetailsSecond = (props) => {
    const { price, _id } = props.data || {};

    return (
        <div>
            <div><h1 className='text-[#151515] font-bold text-[35px]'>Price ${price}</h1></div>
            <Link state={props.location} to={`/checkout/${_id}`}><button className='bg-[#FF3811] w-full rounded text-white font-semibold text-lg py-3'>Proceed Checkout</button></Link>
        </div>
    );
};

export default ServiceDetailsSecond;