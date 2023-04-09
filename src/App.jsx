import { createContext } from 'react';
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
export const JobsContext = createContext([]) 

function App() {
  const jobs = useLoaderData();
  
  return (
    <JobsContext.Provider value={jobs}>
      <div>
      <Header></Header>
      <Outlet></Outlet>      
    </div>
    </JobsContext.Provider>
  )
}

export default App
