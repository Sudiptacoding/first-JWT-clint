import React from 'react';
import AllCheckOutProdect from '../hooks/AllCheckOutProdect';
import Loader from '../common/Loader';
import AllProductManage from '../common/AllProductManage';
import ManajeProduct from '../common/ManajeProduct';
import axios from 'axios';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Contact = () => {
    const { isLoading, error, data, refetch } = AllCheckOutProdect();

    const handelStatusChange = (statas, id) => {
        axios.patch(`http://localhost:3000/allcheckout/${id}`, { statas }, { withCredentials: true })
            .then(res => {
                toast.success('Successfully toasted!')
                refetch()
            })
    }

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

    if (isLoading) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            <div>
                <div><ManajeProduct tag={'Home - Manage All Orders'} text={'Manage All Orders'}></ManajeProduct></div>
                <div className='lg:py-[70px] py-10'>
                    {
                        data.length === 0 ? <div className='text-center pt-10'><p className='text-2xl font-bold'>No data Here</p></div> : <div className="overflow-x-auto">
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
                                    data?.map((item) => <AllProductManage item={item} key={item._id} handelStatusChange={handelStatusChange} handelDelete={handelDelete}></AllProductManage>)
                                }
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default Contact;