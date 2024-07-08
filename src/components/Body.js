import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Head from './Head';
const Body = () => {
 
  const [darkMode,setDarkMode]=useState(false);

  return (
      
       <div className={+darkMode ?"bg-neutral-900 text-neutral-400":"bg-neutral-300 text-black"}>
  
       <Head darkMode={darkMode} setDarkMode={setDarkMode}/>
       <div className='flex'>
        <Sidebar/>
       <Outlet/>
      </div>
       
    </div>
    

  )
}

export default Body