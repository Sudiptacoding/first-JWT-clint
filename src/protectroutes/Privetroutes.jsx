import React, { useContext, useEffect } from 'react';
import { UserProvider } from '../context/Authcontext';
import { Navigate } from 'react-router-dom';

const Privetroutes = ({ children }) => {
    const { user, loader } = useContext(UserProvider)

    if (loader) {
        return <div className='flex items-center justify-center w-full h-screen'><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default Privetroutes;