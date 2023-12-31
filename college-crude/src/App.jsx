import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import Adminlogin from './Component/Adminlogin/Adminlogin'
import Navbar from './Component/Navbar/Navbar'
import Adminregistration from './Component/Adminregistration/Adminregistration'
import Adminhome from './Component/Adminhome/Adminhome'
import Staff_Registration from './Component/Staff_Registration_Admin/Staff_Registration'
import Staff_login from './Component/Staff_login/Staff_login'
import Staff_home from './Component/Staff_home/Staff_home'
import Sperateview from './Component/Staffsperateview/Sperateview'
import Staffview from './Component/Staff_View/Staffview'
import Edit_staff from './Component/Edit_Staff/Edit_staff'
import Staffforgotusername from './Component/StaffForgot_username/Staffforgotusername'
import StaffForgotPwd from './Component/Staff_Forgot_Pwd/StaffForgotPwd'
import StudentRegister from './Component/StudentRegister/StudentRegister'
import Studentview from './Component/Studentview/Studentview'
import Student_Sperateview from './Component/Student_Sperate_view/Student_Sperateview'
import Edit_Student from './Component/Edit_Student/Edit_Student'
import Mainpage from './Component/Admin/Mainpage'
import Student_login from './Component/Student_login/Student_login'
import Student_Home from './Component/Student_Home/Student_Home'

function App() {
 

  return (
    <>
   <BrowserRouter>
   {/* <Navbar/> */}
   <Routes>
   <Route path='/' Component={Mainpage}/>
    <Route path='/admin' Component={Home}/>
    <Route path='/Adminlogin' Component={Adminlogin}/>
    <Route path='/Adminregistration' Component={Adminregistration}/>
    <Route path='/Adminhome' Component={Adminhome}/>
    <Route path='/Staff_Registartion' Component={Staff_Registration}/>
    <Route path='/Staff_login' Component={Staff_login}/>
    <Route path='/Staff_home' Component={Staff_home}/>
    <Route path='/staff_full_view' Component={Staffview}/>
    <Route path='/Sperateview/:id' Component={Sperateview}/>
    <Route path='/Edit_staff/:id' Component={Edit_staff}/>
    <Route path='/Edit_student/:id' Component={Edit_Student}/>
    <Route path='/Forgotusername' Component={Staffforgotusername}/>
    <Route path='/Forgotpassword' Component={StaffForgotPwd}/>
    <Route path='/Student_register' Component={StudentRegister}/>
    <Route path='/Studentview' Component={Studentview}/>
    <Route path='/Student_sperate/:id' Component={Student_Sperateview}/>
    <Route path='/Student_login' Component={Student_login}/>
    <Route path='/Student_home' Component={Student_Home}/>
    



    
   </Routes>


   </BrowserRouter>

    
    </>
  )
}

export default App
