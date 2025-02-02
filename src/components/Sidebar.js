import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  //early return pattern
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-5 shadow-lg w-48 cursor-pointer'>
      
      <ul>

         <Link to="/" className='cursor-pointer'><li>Home</li></Link> 
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
      </ul>
      <hr/>
      <h1 className='font-bold text-xl'>Subscriptions</h1>
      <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
      </ul>
      <hr/>
      <h1 className='font-bold text-xl py-4'>Watch Later</h1>
      <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar