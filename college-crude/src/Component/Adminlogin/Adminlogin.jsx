import React, { useState } from 'react'
import './Adminlogin.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



const Adminlogin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`http://localhost:3002/api/login`, {

        username: username,
        password: password
      });

      const data = response.data;
      console.log(data);

      if (response.status !== 404) {
        const token = data.token;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("username", JSON.stringify(username));
        navigate("/Adminhome", { state: { username } });
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("Server not connected");
    }
  };









  return (
    <div>
      <div className="fullerr">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>
          <div className="login">
            <form>
              <label htmlFor="chk" id='labelll' aria-hidden="true">Login</label>
              <input type="email" className='one-input' name="username" placeholder="username" id='inputt' value={username} onChange={(e) => setUsername(e.target.value)} required="" />
              <input type="password" name="password" placeholder="Password " id='inputt' value={password} onChange={(e) => setPassword(e.target.value)} required="" />
              <button id='btn' onClick={handleLogin}>Login</button>
              <Link to='/Adminregistration' className='linkerr' ><span id='Sign'>Create Account Now?</span></Link>


            </form>


          </div>
        </div>
      </div>





    </div>
  )
}

export default Adminlogin
