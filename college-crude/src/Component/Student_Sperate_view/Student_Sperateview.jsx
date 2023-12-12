import React,{ useEffect, useState } from 'react'
import './Student_Sperateview.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Student_Sperateview = () => {

    const { id } = useParams()
    console.log(id);
    const [getviews, setView] = useState([])
    const getstudent = async (id) => {
        try {
          const res = await axios.post(`http://localhost:3002/api/getstaff_student_one/${id}`);
          setView(res.data);
          console.log(res.data);
          getpercenatge();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      useEffect(() => {
        getstudent(id)
      }, [id]);

      const[attendance,sertAttandance]=useState();


      const getpercenatge=()=>{
        if(getstudent.attendance !== undefined){
            let pers=(getstudent.attendance/200)*100;
            sertAttandance(pers);
            console.log(pers);

        }
      }















    return (
        <div>

            <form action="" >



                <div className="registration-left-main-student row">
                    <h6>STUDENT FULL DETAILS</h6>



                    <div className="sign-in-form-input col-lg-4 col-md-4 col-sm-12">

                        <div className='name'> Admission No : {getviews.admission_id}</div>


                        <div><label ></label></div>
                        <div className='right-data'><span> Name : {getviews.fullname}</span></div>


                        <div><label ></label></div>
                        <div className='right-data'><span>Phone-No: {getviews.phonenumber}</span></div>
                        <div><label ></label></div>

                        <div className='email2'><span> Email : {getviews.email}</span></div>
                        <div><label ></label></div>
                        <div className='phone2'><span> Adress : {getviews.adress}</span></div>
                       
                        <div className='phone2'><span> Semster : {getviews.semester}</span></div>

                        <div className='internal'><label >Test Marks:</label></div>
                            <span id='intern'> Phy   :  {getviews?.test?.Test_physics}</span>
                            <div><span id='intern'> Maths   :  {getviews?.test?.Test_maths}</span></div>
                            <div><span id='intern'> Che   :  {getviews?.test?.Test_chemistry}</span></div>

                    </div>


                    <div className="registration-right col-lg-4 col-md-4 col-sm-12">
                        <div className="sign-in-form-right-input-student">

                            <div><label ></label></div>
                            <div className='right-data'><span>Batch : {getviews.batch}</span></div>

                            <div><label ></label></div>
                            <div className='right-data'><span> DOB  : {getviews.date}</span></div>

                            <div><label ></label></div>
                            <div className='right-data'><span> Course : {getviews.course}</span></div>

                            <div><label ></label></div>
                            <div className='right-data'><span>Added By  :  {getviews.staff}</span></div>

                            <div className='internal'><label >Internal Marks:</label></div>
                            <span id='intern'> Phy   :  {getviews?.internal?.Internal_physics}</span>
                            <div><span id='intern'> Maths   :  {getviews?.internal?.Internal_maths}</span></div>
                            <div><span id='intern'> Che   :  {getviews?.internal?.Internal_chemistry}</span></div>


                            <div className='right-data'><span>Attandence  :  {attendance !== undefined ? `${attendance}%` : 'loading...'}</span></div>
                            
                           

                        </div>
                    </div>



                    <div className="photo col-lg-4 col-md-4 col-sm-12">
                        <div className='imageview'>
                            <img src={getviews.photo} alt="" />
                        </div>

                    </div>




                    <div className='btn-staff-edit'><Link className='linkkks' to={`/Edit_student/${getviews._id}`} ><button>Edit Now</button></Link></div>


                </div>







            </form>








        </div>
    )
}

export default Student_Sperateview
