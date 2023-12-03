import React from 'react'
import './Edit_staff.css'

const Edit_staff = () => {
    return (
        <div>
            <div className="whole-data">
                <div className="Main-part">
                    <div className="signup-staff">
                        <form>
                            <div className='head-staff'><h4>Staff Edit</h4></div>
                            <div className="form-group12-staffs">
                                <div className='Admin'>
                                     <label htmlFor="username" id='label-staff'></label>
                                    <input type="text" id="empi" name="Admin" placeholder='Admin' required /></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit_staff
