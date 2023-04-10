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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        path: "statistics/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) =>dynamicLoadData(`${params.jobId}`)
      }
    ]    
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
