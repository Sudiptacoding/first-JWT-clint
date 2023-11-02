import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';


const Services = () => {
    const axiosGate = useAxios()
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            // fetch('http://localhost:3000/services', { credentials: 'include' }).then(
            //     (res) => res.json(),
            // ),
            axiosGate.get('/services')
                .then(res => {
                    return res.data
                })
    })
    return { isLoading, error, data, refetch }
};

export default Services;