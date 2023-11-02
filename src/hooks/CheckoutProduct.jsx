import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { UserProvider } from '../context/Authcontext';

const CheckoutProduct = () => {
    const { user } = useContext(UserProvider)
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['checkout'],
        queryFn: () =>
            axios.get(`http://localhost:3000/checkoutData?email=${user?.email}`, { withCredentials: true })
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, data, refetch }
};

export default CheckoutProduct;