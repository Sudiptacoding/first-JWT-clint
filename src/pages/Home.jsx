import React from 'react';
import Services from '../hooks/Services';
import Loader from '../common/Loader';
import BannerSlider from '../components/BannerSlider';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';


const Home = () => {
    const { isLoading, error, data, refetch } = Services()

    if (isLoading) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='dark:bg-black'>
            <div><BannerSlider data={data}></BannerSlider></div>
            <div><AboutSection></AboutSection></div>
            <div><ServicesSection data={data} ></ServicesSection></div>
        </div>
    )

};

export default Home;