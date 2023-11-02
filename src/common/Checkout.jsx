import React, { useContext, useEffect, useState } from 'react';
import HeaderBanner from './HeaderBanner';
import { UserProvider } from '../context/Authcontext';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment/moment';



const Checkout = () => {
    const { user } = useContext(UserProvider)
    const { id } = useParams()
    const [data, setData] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/service?id=${id}&email=${user?.email}`, { withCredentials: true })
            .then(data => {
                setData(data.data)
            })
    }, [])

    if (!user && !data) {
        return <Loader></Loader>
    }

    const first = user?.displayName?.split(' ')[0]
    const last = user?.displayName?.split(' ')[1]

    const handelSubmit = (e) => {
        e.preventDefault();
        const fastName = e.target.fastName.value;
        const lastName = e.target.lastName.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const status = 'pending'
        const time = moment().format("DD-MM-YYYY");
        const { service_id, title, img, price, description, facility } = data
        const checkValue = { fastName, lastName, phone, email, message, service_id, title, img, price, description, facility, time, status }
        axios.post(`http://localhost:3000/check`, checkValue, { withCredentials: true })
            .then(data => {
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
                navigate(location.state ? location.state : "/")
            })
    }



    return (
        <div>
            <div><HeaderBanner text={'Check Out'}></HeaderBanner></div>

            <div className=' lg:py-[130px] py-10'>

                <form onSubmit={handelSubmit} className='bg-[#F3F3F3] p-24 rounded-lg'>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={first} type="text" name="fastName" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={last} type="text" name="lastName" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="phone" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Phone</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={user?.email} type="text" name="email" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <textarea name='message' className='w-full border-[#F3F3F3] p-10' id="" cols="10" rows="5" placeholder='Your Message'></textarea>
                    </div>

                    <button type="submit" className='bg-[#FF3811] w-full rounded text-white font-semibold text-lg py-3'>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Checkout;