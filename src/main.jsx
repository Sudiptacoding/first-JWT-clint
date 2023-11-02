import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routers/Routes';
import Authcontext from './context/Authcontext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='lg:w-[1140px] lg:mx-auto'>
      <QueryClientProvider client={queryClient}>
        <Authcontext>
          <RouterProvider router={router} />
        </Authcontext>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
