import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Student_Home = () => {
    

  const navigate = useNavigate()

  const Logout=()=>{
    localStorage.clear();
    navigate("/Student_login")
  }

  const [admission_id, setadmission_id] = useState("");
  useEffect(() => {
    const storedadmission_id = localStorage.getItem("admission_id");
    if (storedadmission_id) {
      setadmission_id(JSON.parse(storedadmission_id));
    }
  }, []);







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
              <Link className='nav-link active' id='' to={"#"}><span>HOME</span></Link>
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
        <i className="fa fa-user" aria-hidden="true"></i><span>{admission_id}</span>
        <button className='btn-log-student' onClick={Logout}>Logout</button>

      </div>



      
      
    </div>
  )
}

export default Student_Home
