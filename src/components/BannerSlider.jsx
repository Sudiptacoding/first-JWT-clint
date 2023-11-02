import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const BannerSlider = (props) => {
    const data = props.data
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px',
    };

    const properties = {
        prevArrow: <button className='bottom-5 lg:!left-[90%] !left-[40%] md:!left-[46%]' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>,
        nextArrow: <button className='bottom-5 lg:!right-[2%] !right-[40%] md:right-[46%]' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>
    }

    return (
        <div>
            <Fade {...properties}>
                {
                    data?.map((item, i) => {
                        return <div key={i}>
                            <div className=" min-h-[60vh]" style={{ backgroundImage: `url(${item?.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div className='bg-[#00000096] w-full min-h-[60vh] flex items-center justify-start '>
                                    <div className="text-white space-y-7 lg:p-[100px] p-10">
                                        <h1 className="text-6xl font-bold ">{item?.title}</h1>
                                        <p className="text-lg lg:pr-72">{item?.description?.slice(0, 200) + '...'}</p>
                                        <button className="bg-[#FF3811] hover:bg-transparent border border-[#FF3811] delay-100 text-lg px-5 py-3 rounded mr-5">Discover More</button>
                                        <button className="hover:bg-[#FF3811] bg-transparent border border-[#FF3811] delay-100 text-lg px-5 py-3 rounded">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Fade>
        </div>
    );
};

export default BannerSlider;