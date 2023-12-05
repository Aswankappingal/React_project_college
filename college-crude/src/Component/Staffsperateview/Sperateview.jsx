import React, { useEffect, useState } from 'react'
import './Sperateview.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Sperateview = () => {
  const { id } = useParams()
  console.log(id);
  const [getview, setView] = useState([])
  const getViewer = async (id) => {
    try {
      const res = await axios.post(`http://localhost:3002/api/getstaff_detail_one/${id}`);
      setView(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getViewer(id)
  }, [id]);



  return (


    <div>

      <form action="" >

        <div className="registration-left-main row">
          <h6>STAFF FULL DETAILS</h6>
          <div className="sign-in-form-input col-lg-4 col-md-4 col-sm-12">

            <div className='name'> NAME : {getview.name}</div>


            <div><label ></label></div>
            <div className='right-data'><span> Address : {getview.adress}</span></div>
   

            <div><label ></label></div>
            <div className='right-data'><span>Emp-Id : {getview.empid}</span></div>
            <div><label ></label></div>
            <div className='email2'><span> Email : {getview.email}</span></div>
            <div><label ></label></div>
            <div className='phone2'><span> Phone : {getview.phone}</span></div>



          </div>

          <div className="registration-right col-lg-4 col-md-4 col-sm-12">
            <div className="sign-in-form-right-input">


              <div><label ></label></div>
              <div className='right-data'><span>Designation : {getview.designation}</span></div>

              <div><label ></label></div>
              <div className='right-data'><span> Salary  : {getview.salary}</span></div>

              <div><label ></label></div>
              <div className='right-data'><span> Experience : {getview.experience}</span></div>

              <div><label ></label></div>
              <div className='right-data'><span>Added By  :  {getview.Admin}</span></div>





            </div>
          </div>





          <div className="photo col-lg-4 col-md-4 col-sm-12">
            <div className='imageview'>
              <img src={getview.photo} alt="" />
            </div>

          </div>







          <div className='btn-staff-edit'><Link className='linkkks' to={`/Edit_staff/${getview._id}`} ><button>Edit Now</button></Link></div>
        </div>






      </form>







    </div>
  )
}

export default Sperateview
