import React, { useEffect, useState } from 'react'
import './Staff_home.css'
// import { useLocation } from 'react-router-dom';


const Staff_home = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);
  return (
    <div>
         <div className='staff-home-user'> Staff Name :{username}</div>
        <h1 className='Staff_home'>Staff home</h1>
      
    </div>
  )
}

export default Staff_home
