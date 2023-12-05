import React, { useEffect, useState } from 'react';
import './Edit_staff.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit_staff = () => {
    const { id } = useParams()
    const navigate = useNavigate()
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
        const res = await axios.post(`http://localhost:3002/api/getstaff_detail_one/${id}`)
        setVal(res.data)

    }
    //////Display data//////
    const Getdata = (e) => {
        setVal((pre) => ({ ...pre, [e.target.name]: e.target.value }))

    }
    useEffect(() => {
        Getdatas()
    }, [])
    console.log("name", val);

    const edit_Staff = async (e) => {
        e.preventDefault()
        console.log(val);
        const res = await axios.patch(`http://localhost:3002/api/editstaff/${id}`, { ...val })
        if (res.status != 200) {
            console.log(res.status);
            alert("Data not Edited")
        }
        else {
            alert("Data Edited")
            navigate(`/Sperateview/${id}`)
        }
    }




    return (
        <div>
            <div className="whole-data">
                <div className="Main-edit">
                    <div className="signup-staff">
                        <form onSubmit={edit_Staff}>
                            <div className='head-staff'><h4>Staff Edit</h4></div>
                            <div className="form-group12-staffs">
                            

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="empi" name="empid" value={val.empid} placeholder='Emp-id' onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="name" name="name" value={val.name} placeholder='Name' onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="username" name="username" value={val.username} placeholder='User name' onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="email" name="email" value={val.email} placeholder='Email' onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="phone" placeholder='Phone' value={val.phone} onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="designation" value={val.designation} placeholder='Designation' onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="experience" placeholder='Experience' value={val.experience} onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="adress" placeholder='Adress' value={val.adress} onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs">
                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="salary" placeholder='Salary' value={val.salary} onChange={Getdata} required />

                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="phone" name="password" placeholder='Password' value={val.password} onChange={Getdata} required />
                            </div>

                            <div className="form-group12-staffs-last">


                                <label htmlFor="username" id='label-staff'></label>
                                <input type="text" id="designation" name="confirmpassword" value={val.confirmpassword} placeholder='confirmpassword' onChange={Getdata} required />


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

export default Edit_staff
