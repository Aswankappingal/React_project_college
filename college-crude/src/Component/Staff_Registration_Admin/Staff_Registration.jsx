import React, { useEffect } from 'react'
import './Staff_Registartion.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Staff_Registration = () => {
  const navigate = useNavigate()
  const navigatebtn = useNavigate()

  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);

  let Photo = "";
  const [val, setVal] = useState({
    Admin: "",
    empid: "",
    name: "",
    username: "",
    email: "",
    phone: "",
    designation: "",
    experience: "",
    adress: "",
    salary: "",
    password: "",
    confirmpassword: "",
    photo: ""



  }


  )

  const Getdata = (e) => {
    e.preventDefault();
    setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))

  }


  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const Upload = async (e) => {
    e.preventDefault()

    Photo = await convertToBase64(e.target.files[0])
    console.log(Photo);
  }



  const RegisterData = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/api/addstaff", { ...val, photo: Photo, Admin: username });

      if (res.status === 201) {
        //   alert("Successfully Registered");
        navigate("/staff_full_view")
      } else {
        alert("Data Not Added");
      }
    } catch (error) {
      alert("error", error);
    }
  };
  const Logout = async (e) => {
    e.preventDefault
    navigatebtn("/Adminlogin")
  }











  return (

    <div>


      <div className="whole-data">
        <div className="Main-part">

          <div className="signup-staff">
            <form>

              <div className='head-staff'><h4>Staff Registartion </h4></div>
              <div className="admin-main-name">
                <div className='Admin-name-only'>
                  <i className="fa fa-user" aria-hidden="true"></i><span>{username}</span>
                  <button className='btn-log' onClick={Logout}>Logout</button>

                </div>
              </div>



              <div className="form-group12-staffs">

                {/* <div className='Admin'> <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="empi" name="Admin" placeholder='Admin' onChange={Getdata} required /></div> */}




                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="empi" name="empid" placeholder='Emp-id' onChange={Getdata} required />

                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="name" name="name" placeholder='Name' onChange={Getdata} required />
              </div>


              <div className="form-group12-staffs">
                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="username" name="username" placeholder='User name' onChange={Getdata} required />

                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="email" name="email" placeholder='Email' onChange={Getdata} required />
              </div>

              <div className="form-group12-staffs">
                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="phone" name="phone" placeholder='Phone' onChange={Getdata} required />

                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="designation" name="designation" placeholder='Designation' onChange={Getdata} required />
              </div>

              <div className="form-group12-staffs">
                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="phone" name="experience" placeholder='Experience' onChange={Getdata} required />

                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="designation" name="adress" placeholder='Adress' onChange={Getdata} required />
              </div>


              <div className="form-group12-staffs">
                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="phone" name="salary" placeholder='Salary' onChange={Getdata} required />

                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="phone" name="password" placeholder='Password' onChange={Getdata} required />
              </div>

              <div className="form-group12-staffs-last">


                <label htmlFor="username" id='label-staff'></label>
                <input type="text" id="designation" name="confirmpassword" placeholder='confirmpassword' onChange={Getdata} required />


                <label htmlFor="username" id='label-staff'></label>
                <input type="file" id="change-photo" name="photo" placeholder='changephoto' onChange={Upload} required />



              </div>

              <button id='btn-staff' onClick={RegisterData} >Submit</button>










            </form>
          </div>
        </div>

      </div>







    </div>
  )
}

export default Staff_Registration
