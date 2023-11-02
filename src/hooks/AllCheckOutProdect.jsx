import { useQuery } from '@tanstack/react-query';

const AllCheckOutProdect = () => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['allcheckout'],
        queryFn: () =>
            fetch('http://localhost:3000/allcheckout', { credentials: 'include' }).then(
                (res) => res.json(),
            ),
    })
    return { isLoading, error, data, refetch }
};

export default AllCheckOutProdect;