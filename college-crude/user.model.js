import mongoose from "mongoose";


const Admin_schema=new mongoose.Schema({
    name:{type:String
        // required:[true,"Username is required"],
        // unique:[true,"username already exist"]
        },
    username:{type:String
    // required:[true,"Username is required"],
    // unique:[true,"username already exist"]
    },
    password:{type:String
        // required:[true,"Password is required"],
        // unique:[true,"Password already exist"]
    }

})



export default mongoose.model.Admin||mongoose.model("Admin",Admin_schema);