import React,{ useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import './Student_login.css'
import axios from 'axios'

const Student_login = () => {

    const [admission_id, setAdmission_id] = useState('')
    const [date, setDOB] = useState('')
    const navigate = useNavigate()


    const handleLogin_student = async (e) => {
        e.preventDefault()
        try {
          const response = await axios.post(`http://localhost:3002/api/loginstudent`, {
    
          admission_id: admission_id,
          date: date
          });
    
          const data = response.data;
          console.log(data);
    
          if (response.status !== 404) {
            const token = data.token;
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("username", JSON.stringify(admission_id));
            navigate("/Student_home", { state: { admission_id } });
            alert(data.msg)
          } else {
            alert(data.msg);

          }
        } catch (error) {
          alert("Server not connected");
        }
      };



    return (
        <div>

            <div className="fullerr-staff-login">
                <div className="main-staff-login">
                    <div className="signup-staff-login">

                        <form>
                            <label htmlFor="chk" id='labelll' aria-hidden="true">Student Login</label>
                            <div className='usr'><input type="email" className='one-input-staff' name="admission_id"  value={admission_id} onChange={(e) => setAdmission_id(e.target.value)} placeholder="admission_id" required="" />

                            </div>

                            <div className='pwd'><input type="password" className='one-input-staff' name="date" placeholder="date" value={date} onChange={(e) =>setDOB(e.target.value)}  required="" /></div>
                            {/* <div className='Links-login-only'><Link className='Fort' to='/Forgotusername'>Forgot Username</Link>
                                <Link className='Fort' to='/Forgotpassword'>Forgot Password</Link></div> */}
                            <button id='btn-staff-login' onClick={handleLogin_student} >Login</button>




                        </form>


                    </div>

                </div>

            </div>









        </div>
    )
}

export default Student_login
