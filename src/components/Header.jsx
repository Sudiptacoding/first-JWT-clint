import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserProvider } from '../context/Authcontext';



const Header = () => {
    const { logOut, user, userPhoto } = useContext(UserProvider)
    const handelLogOut = () => {
        logOut()
            .then((user) => {
            }).catch((error) => {
                console.log(error.message)
            })
    }
    const navLink = <>
        <NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-semibold text-purple-600 ml-5 dark:text-orange-600" : "ml-5 dark:text-white text-[#444] text-lg font-semibold"
            }
        >Home</NavLink>
        <NavLink to='/order'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-semibold text-purple-600 ml-5 dark:text-orange-600" : "ml-5 dark:text-white text-[#444] text-lg font-semibold"
            }
        >Order</NavLink>
        <NavLink to='/orderreview'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-semibold text-purple-600 ml-5 dark:text-orange-600" : "ml-5 dark:text-white text-[#444] text-lg font-semibold"
            }
        >Order Review</NavLink>
        <NavLink to='/blog'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-semibold text-purple-600 ml-5 dark:text-orange-600" : "ml-5 dark:text-white text-[#444] text-lg font-semibold"
            }
        >Blog</NavLink>
        <NavLink to='/manageinventory'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg font-semibold text-purple-600 ml-5 dark:text-orange-600" : "ml-5 dark:text-white text-[#444] text-lg font-semibold"
            }
        >Manage Inventory</NavLink>
    </>
    return (
        <div className="navbar bg-white py-12 dark:bg-[#333333]">
            <div className="navbar-start">
                <div className="z-10 dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="text-center"><img src="https://i.postimg.cc/9QvH4qxR/Group-1-1.png" alt="" /><p className='text-xl text-[#444] dark:text-white font-bold'>Car Doctor</p></a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="z-10 dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.51029 2.99921 6.60256 3.78941 5.19599 5.19599C3.78941 6.60256 2.99921 8.51029 2.99921 10.4995C2.99921 12.4887 3.78941 14.3964 5.19599 15.803C6.60256 17.2096 8.51029 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803V15.803Z" stroke="#444444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {
                    user ? <div className="z-10 dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || userPhoto} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handelLogOut}><a>Logout</a></li>
                        </ul>
                    </div> : <Link to='/login'><button className="hover:bg-[#FF3811] bg-transparent border text-[#FF3811] font-semibold border-[#FF3811] delay-100 text-lg px-5 py-3 rounded hover:text-white">Appointment</button></Link>
                }
            </div>
        </div >
    );
};

export default Header;