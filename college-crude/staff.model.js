import mongoose from "mongoose";


const Staff_schema=new mongoose.Schema({
    Admin:{type:String},
    empid:{type:String},
    name:{type:String },
    username:{type:String},
    email:{type:String},
    phone:{type:String},
    designation:{type:String},
    experience:{type:String},
    adress:{type:String},
    salary:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
    photo:{type:String}

})



export default mongoose.model.Staff||mongoose.model("Staff",Staff_schema);