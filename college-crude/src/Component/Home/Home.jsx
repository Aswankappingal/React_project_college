import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="fullerr-data">
       <div className='Iss'><h4>ISS ARTS AND SCIENCE COLLEGE</h4></div> 
        <div className="full-button-carder">
         <div><Link to='/Adminlogin' id='Linksss'><button className="button-83" role="button">Admin</button></Link></div>
         <div><Link to='/Staff_login' id='Linksss'><button className="button-83" role="button">Staff</button></Link></div>
         <div><button className="button-83" role="button">Student</button></div>
        </div>
        </div>
      
      


      
    </div>
  )
}

export default Home
