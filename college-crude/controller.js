import Staff_schema from './staff.model.js'
import Admin_schema from "./user.model.js"
import Student_schema from "./student.model.js"
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const {sign}=pkg;

export function addStaff(req,res)
{
    
   try {
    const {Admin,empid,name,username,email,phone,designation,experience,adress,salary,password,confirmpassword,photo}=req.body;
    console.log(Admin,empid,name,username,email,phone,designation,experience,adress,salary,password,confirmpassword,photo);
    if(!(Admin&&empid&&name&&username&&email&&phone&&designation&&experience&&adress&&salary&&password&&confirmpassword&&photo))
    return res.status(404).send("fields are empty")
    if(password!=confirmpassword)
    return res.status(404).send("password and confirm password are not same")
    console.log(req.body);
    bcrypt.hash(password,10)
    .then((hashedPwd)=>{
        Staff_schema.create({Admin,empid,name,username,email,phone,designation,experience,adress,salary,password:hashedPwd,confirmpassword,photo});
    })
    .then(()=>{
        res.status(201).send("sucessfully registered")
    })
  .catch((error)=>{
    res.status(500).send(error)
   })
    
   } catch (error) {
    console.log(error);
    
   }
    
}



export function addStudent(req,res)
{
    
   try {
    const {staff,admission_id,fullname,username,password,email,phonenumber,adress,attendance,batch,date,Internal_physics,Internal_maths,Internal_chemistry,Test_physics,Test_maths,Test_chemistry,course,semester,photo}=req.body;
    console.log(staff,admission_id,fullname,username,password,email,phonenumber,adress,attendance,batch,date,Internal_physics,Internal_maths,Internal_chemistry,Test_physics,Test_maths,Test_chemistry,course,semester,photo);
    if(!(staff&&admission_id&&fullname&&username&&password&&email&&phonenumber&&adress&&attendance&&batch&&date&&Internal_physics&&Internal_maths&&Internal_chemistry&&Test_physics&&Test_maths&&Test_chemistry&&course&&semester,photo))
    return res.status(404).send("fields are empty")
    console.log(req.body);
    bcrypt.hash(password,10)
    .then((hashedPwd)=>{
        Student_schema.create({staff,admission_id,fullname,username,password:hashedPwd,email,phonenumber,adress,attendance,batch,date,Internal_physics,Internal_maths,Internal_chemistry,Test_physics,Test_maths,Test_chemistry,course,semester,photo});
    })
    .then(()=>{
        res.status(201).send("sucessfully registered")
    })
  .catch((error)=>{
    res.status(500).send(error)
   })
    
   } catch (error) {
    console.log(error);
    
   }
    
}




export function addUser(req,res)
{
    
   try {
    const {name,username,password}=req.body;
    console.log(name,username,password);
    if(!(name&&username&&password))
    return res.status(404).send("fields are empty")

    bcrypt.hash(password,10)
    .then((hashedPwd)=>{
        Admin_schema.create({name,username,password:hashedPwd});
    })
    .then(()=>{
        res.status(201).send("sucessfully registered")
    })
  .catch((error)=>{
    res.status(500).send(error)
   })
    
   } catch (error) {
    console.log(error);
    
   }
    
}
/////// forgot username////
export async function forgotUsername(req,res){
    const phone=req.params;
    console.log(phone);
    let task=await Staff_schema.findOne(phone)
    console.log(task);
    res.status(200).send(task)
}
////// forgot password ////
export async function staffFrgtPwd(req, res) {
    const phone = req.params.phone;
    const updatedPassword = req.body.password;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(updatedPassword, saltRounds);
    let task = await Staff_schema.updateOne({ phone }, { $set: { password: hashedPassword } });
    
    res.status(200).send(task);
}



export async function login(req, res) {
    try {
     console.log(req.body);
     const { username, password } = req.body;
     const usr = await Admin_schema.findOne({ username })
     console.log(usr);
     if (usr === null) return res.status(404).send("username or password doesnot exist");
     const success =await bcrypt.compare(password, usr.password)
     console.log(success);
     if (success !== true) return res.status(404).send("username or password doesnot exist");
     const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
     console.log(token);
     res.status(200).send({ msg: "successfullly login", token })
     res.end();
     
    } catch (error) {
     console.log(error);
     
    }
   }

      ////// stafff login    ///
      export async function Staff_login(req, res) {
        try {
         console.log(req.body);
         const { username, password } = req.body;
         const usr = await Staff_schema.findOne({ username })
         console.log(usr);
         if (usr === null) return res.status(404).send("username or password doesnot exist");
         const success =await bcrypt.compare(password, usr.password)
         console.log(success);
         if (success !== true) return res.status(404).send("username or password doesnot exist");
         const token = await sign({ username }, process.env.JWT_KEY, { expiresIn: "24h" })
         console.log(token);
         res.status(200).send({ msg: "successfullly login", token })
         res.end();
         
        } catch (error) {
         console.log(error);
         
        }
       }
       


   export async function home(req,res){
    try {
      console.log(req.user);
      const username=req.user.user
      console.log(username);
      res.status(200).send({msg:`hello ${username}`})
      
    } catch (error) {
      res.status(404).send(error)
      
    }
  
   }



export async function Staff_getdata(req,res){
    let task=await Staff_schema.find()
        res.status(200).send(task)
    

}

export async function Student_getdata(req,res){
    let task=await Student_schema.find()
        res.status(200).send(task)
    

}









export async function getStaff_Details(req,res){
    const{id}=req.params;
    console.log(id);
    let staff= await Staff_schema.findOne({_id:id});
    console.log(staff);
    res.status(200).send(staff)
}


export function del_staff(req,res)
{
    const{id}=req.params;
    const data=Staff_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export function del_student(req,res)
{
    const{id}=req.params;
    const data=Student_schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}




   export async function edit_staff(req,res){
    const{id}=req.params;
    const{...movie}=req.body;
     await Staff_schema.updateOne({_id:id},{$set:{...movie}});
    console.log(movie);
    res.status(200).send("updated")
}