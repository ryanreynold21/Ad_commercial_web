import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';
import Footer from './Footer';

const Rootlayout = ({children}) => {
  const [sidebarOpen,setSidebarOpen] = useState(false)
    
  return (
    <>
    {sidebarOpen ? (
          <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} /> 
    ) : (
      <div className=" flex-col overflow-hidden">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />
        <div className="">
         {children} 
        </div>
        <Footer />
      </div>
    )}
       
    </>
  )
}

export default Rootlayout
