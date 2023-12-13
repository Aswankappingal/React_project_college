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
       <div className="main-section">
      </div>
      <nav className="navbar-main navbar-expand-lg navbar-light ">
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



            <Link className='nav-link active' to={"/Student_login"}><span>LOGIN</span></Link>

            <div><a className="nav-link active" href="#"><span><i className="fa fa-shopping-bag"
              aria-hidden="true"></i></span></a></div>


            <div> <a className="nav-link active" href="#"><span><i className="fa fa-search" aria-hidden="true"></i></span></a>
            </div>


          </div>
        </div>
      </nav>



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
