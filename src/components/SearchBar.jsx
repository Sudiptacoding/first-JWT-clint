// import React from 'react';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';
// import Services from '../hooks/Services';

// const SearchBar = () => {
//     const { isLoading, error, data, refetch } = Services()
//     console.log(data)
//     const items = [
//         {
//             id: 0,
//             name: 'Cobol'
//         },
//         {
//             id: 1,
//             name: 'JavaScript'
//         },
//         {
//             id: 2,
//             name: 'Basic'
//         },
//         {
//             id: 3,
//             name: 'PHP'
//         },
//         {
//             id: 4,
//             name: 'Java'
//         }
//     ]



//     const handleOnSearch = (string, results) => {
//         // onSearch will have as the first callback parameter
//         // the string searched and for the second the results.
//         console.log(string, results)
//     }

//     const handleOnHover = (result) => {
//         // the item hovered
//         console.log(result)
//     }

//     const handleOnSelect = (item) => {
//         // the item selected
//         console.log(item)
//     }

//     const handleOnFocus = () => {
//         console.log('Focused')
//     }

//     const formatResult = (item) => {
//         console.log(item)
//         return (
//             <>
//                 <span style={{ display: 'block', textAlign: 'left' }}>id: {item._id}</span>
//                 <span style={{ display: 'block', textAlign: 'left' }}>name: {item.title}</span>
//             </>
//         )
//     }



//     if (isLoading) return 'Loading...'

//     if (error) return 'An error has occurred: ' + error.message

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <div style={{ width: 400 }}>
//                     <ReactSearchAutocomplete
//                         items={items}
//                         onSearch={handleOnSearch}
//                         onHover={handleOnHover}
//                         onSelect={handleOnSelect}
//                         onFocus={handleOnFocus}
//                         autoFocus
//                         formatResult={formatResult}
//                     />
//                 </div>
//             </header>
//         </div>
//     )








//     const items = [
//         {
//             id: 0,
//             name: 'Cobol'
//         },
//         {
//             id: 1,
//             name: 'JavaScript'
//         },
//         {
//             id: 2,
//             name: 'Basic'
//         },
//         {
//             id: 3,
//             name: 'PHP'
//         },
//         {
//             id: 4,
//             name: 'Java'
//         }
//     ]

// };

// export default SearchBar;

import React, { useEffect, useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Tooltip } from 'react-tooltip'

function SearchBar() {
    // note: the id field is mandatory
    const [items, setItem] = useState([])
    const [change, setChange] = useState(false)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setItem(json)
            })
    }, [])




    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }
    // document.getElementById('my_modal_2').close()
    const handleOnHover = (result) => {



    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = (e) => {
        console.log('Focused', e)
    }





    const formatResult = (item) => {
        return (
            <div className='cursor-pointer !z-10'>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.completed}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.userId}</span>
            </div>
        )
    }

    return (
        <div className="App">
            <div class="hs-dropdown relative inline-flex [--trigger:hover]">
                <button id="hs-dropdown-hover-event" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                    Actions
                    <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full" aria-labelledby="hs-dropdown-hover-event">
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        Newsletter
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        Purchases
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        Downloads
                    </a>
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                        Team Account
                    </a>
                </div>
            </div>
            <div style={{ width: '100%' }}>
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                    resultStringKeyName={'title'}
                    fuseOptions={{ keys: ["title"] }}
                />
            </div>



            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>






            <Tooltip id="my-tooltip" />
        </div>
    )
}

export default SearchBar