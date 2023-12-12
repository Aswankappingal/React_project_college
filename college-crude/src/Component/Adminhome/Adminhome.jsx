import React, { useEffect, useState } from 'react'
import './Adminhome.css'
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Adminhome = () => {
  // const location = useLocation();
  // const username = location.state && location.state.username;
  const navigatebtn = useNavigate()

  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);


  const Logout = () => {
    localStorage.clear();
    navigatebtn("/Adminlogin")
  }


  return (
    <div>


      <div className='admin-home-user-main'>
        
        <div className='admin-home-user'><i className="fa fa-user" aria-hidden="true"></i><span>{username} </span>
        <button className='btn-logout' onClick={Logout}>Logout</button>
        </div>
      </div>
      <div className='Iss'><h4>Admin Home</h4></div>
      <div className="full-button-carder-Admin-s">
        <div><Link to='/Staff_Registartion' id='Linksss'><button className="button-83-Admin" role="button">Staff Registartion</button></Link></div>
        <div><Link to='/staff_full_view' id='Linksss'><button className="button-83-Admin" role="button">Staff View</button></Link></div>
        
        <div><button className="button-83-Admin" role="button">Student View</button></div>
      </div>













    </div>
  )
}

export default Adminhome
