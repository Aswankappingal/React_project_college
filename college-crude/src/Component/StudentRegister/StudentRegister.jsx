import React from 'react'
import './StudentRegister.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const StudentRegister = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);






  let Photo = "";
  const [val, setVal] = useState({
    staff: "",
    admission_id: "",
    fullname: "",
    username: "",
    password: "",
    email: "",
    phonenumber: "",
    adress: "",
    attendance: "",
    batch: "",
    date: "",
    internal: {

      Internal_physics: "",
      Internal_maths: "",
      Internal_chemistry: ""

    },
    test: {

      Test_physics: "",
      Test_maths: "",
      Test_chemistry: ""


    },
    course: "",
    semester: "",
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
      const res = await axios.post("http://localhost:3002/api/addstudent", { ...val, photo: Photo, staff: username });

      if (res.status === 201) {
        alert("Successfully Registered");
        navigate("/Studentview")
      } else {
        alert("Data Not Added");
      }
    } catch (error) {
      alert("error", error);
    }
  };


  return (
    <div>
      <div className="whole-data-student-reg">
        <div className="Main-part-student-reg">
          <div className="signup-student">
            <form action="submit_registration.php" method="post" encType="multipart/form-data">
              <div className='head-student'><h5>Student Registartion </h5></div>


              <div className='inputs-whole'>
                <input type="text" id="admission_id" name="admission_id" onChange={Getdata} placeholder='Admission ID:' required></input>


                <input type="text" id="fullname" name="fullname" onChange={Getdata} placeholder='Full Name:' required />


                <input type="text" id="username" name="username" onChange={Getdata} placeholder='Username' required />


                <input type="password" id="password" name="password" onChange={Getdata} placeholder='Password' required />


                <input type="email" id="email" name="email" onChange={Getdata} placeholder='Email' required />


                <input type="tel" id="phonenumber" name="phonenumber" onChange={Getdata} placeholder='Phone-No' required />

                <input type="tel" id="phonenumber" name="adress" onChange={Getdata} placeholder='Aderss' required />

                <input type="text" id="attendance" name="attendance" onChange={Getdata} placeholder='Attendance' required />



                <input type="text" id="batch" name="batch" onChange={Getdata} placeholder='Batch' required />


                <input type="date" id="date" name="date" onChange={Getdata} placeholder=' Date of Admission:' required></input>

                <div>
                  <label htmlFor="exam_score_physics">Internal Score:</label>
                  <input type="text" id="exam_score_physics" name="Internal_physics" onChange={Getdata} placeholder='Physics' required />

                  <input type="text" id="exam_score_maths" name="Internal_maths" onChange={Getdata} placeholder='Maths' required />
                  <input type="text" id="exam_score_chemistry" name="Internal_chemistry" onChange={Getdata} placeholder='chemistry' required />
                </div>

                <div>
                  <label htmlFor="exam_score_physics">Test Scores:</label>
                  <input type="text" id="exam_score_physics" name="Test_physics" onChange={Getdata} placeholder='Physics' required />

                  <input type="text" id="exam_score_maths" name="Test_maths" onChange={Getdata} placeholder='Maths' required />
                  <input type="text" id="exam_score_chemistry" name="Test_chemistry" onChange={Getdata} placeholder='chemistry' required />
                </div>





                <label htmlFor="course" id='course'>Select a Course :</label>
                <select id="course" name="course" onChange={Getdata} required>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="BCOM">BCOM</option>
                  <option value="BA Engilsh">BA Engilsh</option>

                </select>

                <label htmlFor="semester" id='semster'>Select Semester :</label>
                <select id="semster" name="semester" onChange={Getdata} required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div className='ppphotos'>
                  <label htmlFor="file">Upload File:</label>
                  <input type="file" id="file" name="photo" onChange={Upload} required />

                </div>

                <button type="submit" onClick={RegisterData} >Register</button>
              </div>

            </form>







          </div>
        </div>
      </div>

    </div>
  )
}

export default StudentRegister
