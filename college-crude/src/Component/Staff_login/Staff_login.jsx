import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Staff_login.css'
import { Link, useNavigate } from 'react-router-dom'

const Staff_login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  const handleLogin_staff = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:3002/api/loginstaff`, {

        username: username,
        password: password
      });

      const data = response.data;
      console.log(data);

      if (response.status !== 404) {
        const token = data.token;
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/Staff_home", { state: { username } });
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("Server not connected");
    }
  };















  return (
    <div>
      <div className="fullerr-staff-login">
        <div className="main-staff-login">
          <div className="signup-staff-login">

            <form>
              <label htmlFor="chk" id='labelll' aria-hidden="true">Staff Login</label>
              <div className='usr'><input type="email" className='one-input-staff' name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required="" />

              </div>

              <div className='pwd'><input type="password" className='one-input-staff' name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required="" /></div>
              <div className='Links-login-only'><Link className='Fort' to='/Forgotusername'>Forgot Username</Link>
                <Link className='Fort' to='/Forgotpassword'>Forgot Password</Link></div>
              <button id='btn-staff-login' onClick={handleLogin_staff}>Login</button>




            </form>


          </div>

        </div>

      </div>





    </div>
  )
}

export default Staff_login
