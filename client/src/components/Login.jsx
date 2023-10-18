import React, {useState} from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // const[email, setEmail]=useState()
    // const[password, setPassword]=useState()
    // const navigate=useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/login', {email, password})
    //     .then(result => {
    //         console.log(result)
    //         if(result.data === "Success"){
    //             navigate('/home')
    //         }      
    //     })
    //     .then(err => console.log(err))
    // }

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  axios
    .post("http://localhost:3001/login", { email, password })
    .then((result) => {
      console.log(result);
      if (result.data === "Success") {
        navigate("/home");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

    return (
            
             <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary ">
                <div className='form-container p-5 rounded bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control mt-1' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type="checkbox" className='custom-control custom-checkbox' id='check' />
                        <label htmlFor="check" className='custom-input-label ms-1 '>Remember me</label>
                    </div>
                    <div className="d-grid mt-2">
                        <button className='btn btn-primary'>Sign in</button>
                    </div>
                    <p className='text-center mt-2 fs-6'>
                        Forgot <a href="">Password?</a> <Link to='/signup' className='ms-1'>Sign Up</Link>
                        </p>
                </form>
                </div>
                
            </div>
    
    );
}

export default Login;
