import React, { useEffect, useState } from 'react'
import './Staff_home.css'
import { Link, useNavigate } from 'react-router-dom';



const Staff_home = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);
  
  const navigate = useNavigate()



  const Logout=()=>{
    localStorage.clear();
    navigate("/Staff_login")
  }
  return (
    <div>
      <div className='Staff-name-only-home'>
        <i className="fa fa-user" aria-hidden="true"></i><span>{username}</span>
        <button className='btn-log-staff' onClick={Logout}>Logout</button>

      </div>
       <div className='Iss'><h4>Staff Home</h4></div>
      <div className="staff-home-full-button-carder">

        <div><Link to='/Student_register' id='Linksss'><button className="button-83-staff-home" role="button">Student Register</button></Link></div>
        <div><Link to='/Studentview' id='Linksss'><button className="button-83-staff-home" role="button">Student View</button></Link></div>

      </div>

    </div>
  )
}

export default Staff_home
