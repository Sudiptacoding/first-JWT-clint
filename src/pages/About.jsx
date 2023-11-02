import React from 'react';
import CheckoutProduct from '../hooks/CheckoutProduct';
import Loader from '../common/Loader';
import CheckoutItem from '../components/CheckoutItem';
import ManajeProduct from '../common/ManajeProduct';
import Swal from 'sweetalert2';
import axios from 'axios';

const About = () => {
    const { isPending, error, data, refetch } = CheckoutProduct()
    const handelDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/allcheckout/${id}`, { withCredentials: true })
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch()
                    })
            }
        })
    }
    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div><ManajeProduct tag={'Home - Product Details'} text={'Cart Details'}></ManajeProduct></div>
            <div className='lg:py-[70px] py-10'>
                {
                    data.length === 0 ? <div className='text-center pt-10'><p className='text-2xl font-bold'>No Order Added</p></div> : <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                data?.map((item) => <CheckoutItem item={item} key={item._id} handelDelete={handelDelete}></CheckoutItem>)
                            }
                        </table>
                    </div>
                }
            </div>
        </div>
    )

};

export default About;