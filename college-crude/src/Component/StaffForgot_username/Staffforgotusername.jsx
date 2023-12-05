import React from 'react'
import './Staffforgot_username.css'
import { Link,} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

const Staffforgotusername = () => {
    const [phone, setPhone] = useState("");
    const [emp, setEmp] = useState(""); 
    const [usernameMessage, setUsernameMessage] = useState(""); 

    const handleChange = (e) => {
        setPhone(e.target.value);
      };

      const getUsername = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.get(`http://localhost:3002/api/forgotusername/${phone}`);
          setEmp(res.data.username);
          setUsernameMessage(`Username is: ${res.data.username}`);
        } catch (error) {
          setUsernameMessage("Username not found"); 
        }
      };




  return (
    <div>
              <div className="fullerr-staff-login">
        <div className="main-staff-login">
          <div className="signup-staff-login">

            <form>
              <label htmlFor="chk" id='labelll' aria-hidden="true">Forgot Username</label>
              <div className='usr'><input type="email" className='one-input-staff' onChange={handleChange} name="username" placeholder="Enter Mob-No" required="" />

              </div>
              <button id='btn-staff-login' onClick={getUsername}>Find Username</button>
              <div className='Btn-down-user'>
             <p>{usernameMessage} </p> 

              </div>
             <Link className='linnkk' to='/Staff_login' ><button id='btn-staff-login'>Back</button></Link>




            </form>


          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Staffforgotusername
