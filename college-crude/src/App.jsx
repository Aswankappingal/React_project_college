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

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/Adminlogin' Component={Adminlogin}/>
    <Route path='/Adminregistration' Component={Adminregistration}/>
    <Route path='/Adminhome' Component={Adminhome}/>
    <Route path='/Staff_Registartion' Component={Staff_Registration}/>
    <Route path='/Staff_login' Component={Staff_login}/>
    <Route path='/Staff_home' Component={Staff_home}/>
    <Route path='/staff_full_view' Component={Staffview}/>
    <Route path='/Sperateview/:id' Component={Sperateview}/>
    <Route path='/Edit_staff/:id' Component={Edit_staff}/>
    



    
   </Routes>


   </BrowserRouter>

    
    </>
  )
}

export default App
