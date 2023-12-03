import React from 'react'
import './Staff_home.css'
import { useLocation } from 'react-router-dom';


const Staff_home = () => {
  const location = useLocation();
  const username = location.state && location.state.username;
  return (
    <div>
         <div className='staff-home-user'> Admin :{username}</div>
        <h1 className='Staff_home'>Staff home</h1>
      
    </div>
  )
}

export default Staff_home
