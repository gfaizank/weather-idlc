const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const EmployeeModel=require("./models/Employee")

const app=express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/employee", {useNewUrlParser:true, useUnifiedTopology:true})

mongoose.connect("mongodb+srv://faizan2017fk:786786Fk@cluster0.ohuylq7.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true})

.then(()=>{ 
    console.log("Connection to Database Successfull")})
.catch((err)=>{ 
    console.log(`Error due to ${err}`)})

// app.post('/login', (req, res)=>{
//     const {email, password}=req.body;
//     EmployeeModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             if(user.password === password){
//                 res.json("Success")
//             } else{
//                 res.json("Password is incorrect")
//             }
//         } else{
//             res.json("User not found, Sign up first!!")
//         }
//     })
// })

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)

    try {
        const user = await EmployeeModel.findOne({ email: email });
        console.log(user)

        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("Password is incorrect");
            }
        } else {
            res.json("User not found, Sign up first!!");
        }
    } catch (error) {
        res.status(500).json({ error: "An error occurred while processing your request" });
    }
});


app.post('/register', (req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
app.listen(3001, ()=>{
    console.log("server is running")
})