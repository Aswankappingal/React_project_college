import React from 'react'
import './StaffForgotPwd.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const StaffForgotPwd = () => {

  const [val, setVal] = useState({ phone: "", email: "", password: "" })
  const handlechange = (e) => {
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    console.log(val);
  }
  const editPwd = async (e) => {
    e.preventDefault()
    const res = await axios.get(`http://localhost:3002/api/forgotusername/${val.phone}`)
    let data = res.data;
    if (data.email === val.email) {
      const res = await axios.patch(`http://localhost:3002/api/forgotepwd/${val.phone}`, {
        password: val.password
       
      })
      alert("data changed")
      console.log(res.data);
    }
  }


  return (
    <div>
      <div className="fullerr-staff-login">
        <div className="main-staff-login">
          <div className="signup-staff-login">

            <form onSubmit={editPwd}>
              <label htmlFor="chk" id='labelll' aria-hidden="true">Forgot Password</label>

              <div className='usr-pwd'><input type="text" className='one-input-staff' name="phone" onChange={handlechange} placeholder="Reg-Phone-No" required="" /></div>
              <div className='usr-pwd'><input type="text" className='one-input-staff' name="email" onChange={handlechange} placeholder="Reg-Email" required="" /></div>
              <div className='usr-pwd'><input type="text" className='one-input-staff' name="password" onChange={handlechange} placeholder="NewPassword" required="" /></div>

              <button id='btn-staff-login' >Change Password</button>
              <div className='Btn-down-user'>


              </div>
              <Link className='linnkk' to='/Staff_login' ><button id='btn-staff-login'>Back</button></Link>




            </form>


          </div>

        </div>

      </div>


    </div>
  )
}

export default StaffForgotPwd
