const mongoose=require("mongoose")

const EmployeeSchema=new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
    password: String
})

const EmployeeModel= mongoose.model("employees", EmployeeSchema)
module.exports=EmployeeModel