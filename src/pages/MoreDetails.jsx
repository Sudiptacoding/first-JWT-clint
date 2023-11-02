import React, { useContext, useEffect, useState } from 'react';
import { UserProvider } from '../context/Authcontext';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../common/Loader';
import HeaderBanner from '../common/HeaderBanner';
import ServiceDetailsFirst from '../components/ServiceDetailsFirst';
import ServiceDetailsSecond from '../components/ServiceDetailsSecond';
import useAxios from '../hooks/useAxios';


const MoreDetails = () => {
    const { user } = useContext(UserProvider)
    const [data, setdata] = useState({})
    const { id } = useParams()
    const location = useLocation()
    const axiosGate = useAxios()

    useEffect(() => {
        // axios.get(, { withCredentials: true })
        axiosGate.get(`http://localhost:3000/service?id=${id}&email=${user?.email}`)
            .then(res => {
                setdata(res.data)
            })


    }, [])

    if (!data) {
        return <Loader></Loader>
    }
    return (
        <div>
            <div><HeaderBanner text={'Service Details'}></HeaderBanner></div>
            <div className='flex flex-col gap-6 lg:flex-row lg:py-[130px] py-10'>
                <div className='w-full lg:w-9/12'><ServiceDetailsFirst data={data}></ServiceDetailsFirst></div>
                <div className='w-full lg:w-3/12'><ServiceDetailsSecond data={data} location={location.pathname}></ServiceDetailsSecond></div>
            </div>

        </div>
    );
};

export default MoreDetails;