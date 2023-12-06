import React from 'react'
import './Adminregistration.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminregistration = () => {
  const navigate = useNavigate()
  


  const [val, setval] = useState({
    name: "",
    username: "",
    password: ""
  }
  )
  const getData = (e) => {
    e.preventDefault();
    setval((pre) => ({ ...pre, [e.target.name]: e.target.value }))

  }
  ///////Toast message //////
  const sucess=()=>
    toast.success("Registartion is sucessfull",{
      position:"top-right",
      autoClose:2500,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme:"dark"


    })
  

  const RegisterData = async (e) => {
    e.preventDefault();
    console.log({ ...val });


    const res = await axios.post("http://localhost:3002/api/adduser", { ...val })
    console.log(res);
    if (res.status !== 201) {
      alert("Data Note Added")
      console.log(res);
    }
    else {
      // alert("Data Added SuccessFully")
      sucess()
      setTimeout(()=>{
        navigate("/Adminlogin")
      },3000)
     
    }
  }



  return (
    <div>



      <div className="fullerrr">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>

          <div className="signup">
            <form>
              <label htmlFor="chk" id='labelll' aria-hidden="true">Sign up</label>
              <input type="text" name="name" className='low' placeholder="name" required="" id='inputt' onChange={getData}></input>
              <input type="email" name="username" placeholder="username" id='inputt' onChange={getData} required=""></input>
              <input type="password" name="password" placeholder="Password" id='inputt' onChange={getData} required=""></input>
              <button id='btn' onClick={RegisterData}>Sign up</button>

              <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'

                />
              <Link to='/Adminlogin' className='linker' ><span id='Sign'>Alredy You have Account?</span></Link>

            </form>
          </div>


        </div>
      </div>



    </div>
  )
}

export default Adminregistration
