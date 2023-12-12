import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './Edit_Student.css'

const Edit_Student = () => {

    const { id } = useParams()
    const navigate = useNavigate()
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


    /////// For Photos ///////
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

    //////// Change in Photos//////
    const Upload = async (e) => {
        e.preventDefault()

        Photo = await convertToBase64(e.target.files[0])
        setVal((pre) => ({ ...pre, photo: Photo }))
        console.log(Photo);
    }


    const Getdatas = async () => {
        const res = await axios.post(`http://localhost:3002/api/getstaff_student_one/${id}`)
        setVal(res.data)

    }

    //////Display data//////
    const Getdata = (e) => {
        setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))

    }
    const GetTestmark=(e)=>{
        setVal((pre) => ({ ...pre,test:{...pre.test,[e.target.name]: e.target.value},}));
    
    
      }
    
       const GetInternalMark=(e)=>{
        setVal((pre) => ({ ...pre,internal:{...pre.internal,[e.target.name]: e.target.value},}));
    
    
      }


    useEffect(() => {
        Getdatas()
    }, [])
    console.log("name", val);

    const edit_student = async (e) => {
        e.preventDefault()
        console.log(val);
        const res = await axios.patch(`http://localhost:3002/api/editstudent/${id}`, { ...val })
        if (res.status != 200) {
            console.log(res.status);
            alert("Data not Edited")
        }
        else {
            alert("Data Edited")
            navigate(`/Student_sperate/${id}`)
        }
    }











    return (
        <div>
            <div className="whole-data">
                <div className="Main-edit-student">
                    <div className="signup-staff">
                        <form onSubmit={edit_student} >
                            <div className='head-staff'><h4>Student Edit</h4></div>
                            <div className="form-group12-staffs">


                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="empi" name="admission_id" value={val.admission_id} placeholder='Emp-id' onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="name" name="fullname" value={val.fullname} placeholder='Fullname' onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="username" name="phonenumber" value={val.phonenumber} placeholder='PH:NO' onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="email" name="email" value={val.email} placeholder='Email' onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="adress" placeholder='Adress' value={val.adress} onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="semester" value={val.semester} placeholder='Semster' onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'>  </label>
                                <input type="text" id="phone" name="batch" placeholder='Batch' value={val.batch} onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="date" placeholder='DOB' value={val.date} onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="course" placeholder='Course' value={val.course} onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="attendance" placeholder='attandance' value={val.attendance} onChange={Getdata} required />


                            </div>

                            <div className='internal_edit'>
                                <label htmlFor="username" id=''>Internal mark : </label>
                                <div className='input_edit_student'>
                                    <input type="text" id="phone" name="Internal_physics" placeholder='Internal Physics' value={val?.internal?.Internal_physics}  onChange={GetInternalMark}required />
                                    <input type="text" id="phone" name="Internal_maths" placeholder='Internal Physics' value={val?.internal?.Internal_maths}  onChange={GetInternalMark} required />
                                    <input type="text" id="phone" name="Internal_chemistry" placeholder='Internal Physics' value={val?.internal?.Internal_chemistry}  onChange={GetInternalMark}required />
                                </div>
                                <label htmlFor="username" id=''>Test mark : </label>

                                <div className='input_edit_student'>
                                    <input type="text" id="phone" name="Test_physics" placeholder='Internal Physics' value={val?.test?.Test_physics}  onChange={GetTestmark} required />
                                    <input type="text" id="phone" name="Test_maths" placeholder='Internal Physics' value={val?.test?.Test_maths}  onChange={GetTestmark} required />
                                    <input type="text" id="phone" name="Test_chemistry" placeholder='Internal Chemistry' value={val?.test?.Test_chemistry}  onChange={GetTestmark} required />
                                </div>


                            </div>

                            <div className="form-group12-staffs-last">


                             


                                <label htmlFor="username" id='label-staff'></label>
                                <div className='images-edit'>

                                    <img src={val.photo} alt="" />
                                    <input type="file" id="change-photo-edit" name="photo" placeholder='changephoto' onChange={Upload} required />
                                </div>




                            </div>

                            <button id='btn-staff' >Submit</button>
                        </form>
                    </div>
                </div>
            </div>












        </div>
    )
}

export default Edit_Student
