import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Studentview = () => {

    const [count, setCount] = useState(0)
    const [getEmp, SetEmp] = useState([])
    const getEmployee = async () => {
        const res = await axios.get("http://localhost:3002/api/studentgetdata")
        SetEmp(res.data)
    }



      ///// Delete

      const deletestu = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this employee?");

        if (isConfirmed) {
            try {
                const res = await axios.delete(`http://localhost:3002/api/delstudent/${id}`);
                console.log('Employee deleted:', res.data);
            } catch (error) {
                console.error('Error deleting employee:', error);
            }
        } else {
            console.log('Deletion cancelled.');
        }
        setCount(count + 1)
    }








    useEffect(() => {
        getEmployee()
    }, [count])
    return (
        <div>

            <div className='admin-staff-view-color'>
                <h1 className='staff-view-head'>Student View</h1>
                <div className="row admin-staff-view-card">
                    {
                        getEmp.map((data, index) =>
                            <div key={index} className="col-lg-3 admin-staff-view-card-1">
                                <div className="admin-staff-view-img">
                                    <img src={data.photo} alt="" />
                                </div>
                                <h2>{data.fullname}</h2>
                                <h4>{data.admission_id}</h4>
                                <div className="admin-staff-view-delete-btn">
                                    <Link className='admin-staff-view-btn-link' to={`/Student_sperate/${data._id}`}><button className='admin-staff-view-btn'>View</button></Link>
                                    <Link to={`#${data._id}`} onClick={() => deletestu(data._id)} className='Links'><button className='admin-staff-delete-btn'>Delete</button></Link>

                                </div>
                            </div>
                        )
                    }
                </div>

            </div>




        </div>
    )
}

export default Studentview
