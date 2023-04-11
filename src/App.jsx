import { createContext } from 'react';
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './components/Footer/Footer';
export const JobsContext = createContext([]) 

function App() {
  const jobs = useLoaderData();
  
  return (
    <JobsContext.Provider value={jobs}>
      <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>      
    </div>
    </JobsContext.Provider>
  )
}

export default App
