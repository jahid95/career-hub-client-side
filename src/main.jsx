import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import { dynamicLoadData } from './utilities/DynamicLoader'
import JobDetails from './components/JobDetails/JobDetails'
import AppliedCart from './components/AppliedCart/AppliedCart'
import Blogs from './components/Blogs/Blogs'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    loader: ()=> fetch('jobs.json'),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('category.json')
      },
    
      {
        path: "statistics",
        element:<Statistics></Statistics>
      },
      {
        path: "/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) =>dynamicLoadData(`${params.jobId}`)
      },
      {
        path: "applied",
        element: <AppliedCart></AppliedCart>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path:"*",
        element: <ErrorPage></ErrorPage>
      }
    ]    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
