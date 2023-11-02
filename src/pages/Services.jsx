import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Services = () => {
    const [item, setItem] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)
    console.log(currentPage, pageCount)
    axios.get('http://localhost:3000/products')
        .then(data => {
            const totalPages = Math.ceil(data.data.totalCount / 5)
            setPageCount(totalPages)
        })

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`http://localhost:3000/product?page=${currentPage}&size=5`);
            const data = await res.json();
            setItem(data)
        }
        getComments();

    }, [currentPage, pageCount]);

    // const featchComments = async (currentPage) => {
    //     const res = await fetch(`http://localhost:3000/product?_page=${currentPage}&_limit=6`
    //     );
    //     const data = await res.json();
    //     return data;
    // };

    const handlePageClick = async (data) => {
        let currentPage = data.selected
        console.log(currentPage)
        setCurrentPage(currentPage)
    };



    return (
        <div>
            <div className='flex'>
                {
                    item?.map((item, i) => {
                        return <div>
                            <div><img className='w-[200px]' src={item?.strMealThumb} alt="" /></div>
                        </div>
                    })
                }
            </div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"❤❤"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={"flex items-center space-x-2"}
                pageClassName={"w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"}
                pageLinkClassName={""}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={" !bg-red-900 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"}
            />
        </div>
    );
};

export default Services;