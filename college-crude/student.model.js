import mongoose from "mongoose";


const Student_schema=new mongoose.Schema({
    staff:{type:String},
    admission_id:{type:String},
    fullname:{type:String},
    username:{type:String },
    password:{type:String},
    email:{type:String},
    phonenumber:{type:String},
    adress:{type:String},
    attendance:{type:String},
    batch:{type:String},
    date:{type:String},

    
    internal:{
        Internal_physics:{type:String},
        Internal_maths:{type:String},
        Internal_chemistry:{type:String},

    },
    test:{

        Test_physics:{type:String},
        Test_maths:{type:String},
        Test_chemistry:{type:String},

    },
    course:{type:String},
    semester:{type:String},
    photo:{type:String}

})



export default mongoose.model.Student||mongoose.model("Student",Student_schema);