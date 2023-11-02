import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import About from "../pages/About";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import MoreDetails from "../pages/MoreDetails";
import axios from "axios";
import Privetroutes from '../protectroutes/Privetroutes'
import Checkout from "../common/Checkout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/order",
                element: <Privetroutes><About></About></Privetroutes>,
            },
            {
                path: "/orderreview",
                element: <Services></Services>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/manageinventory",
                element: <Privetroutes><Contact></Contact></Privetroutes>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },

            {
                path: "/moredetails/:id",
                element: <Privetroutes><MoreDetails></MoreDetails></Privetroutes>,
            },
            {
                path: "/checkout/:id",
                element: <Privetroutes><Checkout></Checkout></Privetroutes>,
            },

        ],
    },
]);
export default router;