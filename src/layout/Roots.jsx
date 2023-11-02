import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../common/Loader';
import { Toaster } from 'react-hot-toast';

const Roots = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>
            }
            <Toaster />
        </div>
    );
};

export default Roots;