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


<div className="main-section">
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <div className="nav-gifts">Home Page</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-main" id="navbarNav">

            <div>
              <Link className='nav-link active' id='' to={"/"}><span>HOME</span></Link>
            </div>
            <div>
              <Link className='nav-link active' to={"#"}><span>ABOUT</span></Link>
            </div>
            <div>
              <a className="nav-link active" href="#"><span>INFO</span></a>
            </div>
            <div>
              <a className="nav-link active" href="#"><span>SHOP</span></a>
            </div>
            <div>
              <Link className='nav-link active' to={"#"}><span>CONTACT US</span></Link>
            </div>


            <div>
              <a className="nav-link active" href="#"><span><i className="fa fa-user" aria-hidden="true"></i></span></a>
            </div>



            <Link className='nav-link active' to={"/Adminlogin"}><span>LOGIN</span></Link>

            <div><a className="nav-link active" href="#"><span><i className="fa fa-shopping-bag"
              aria-hidden="true"></i></span></a></div>


            <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
            </div>


          </div>
        </div>
      </nav>











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
