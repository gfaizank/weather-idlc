import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const[name, setName]=useState()
    const[email, setEmail]=useState()
    const[password, setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .then(err => console.log(err))
    }

    return (
        <div className="signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary ">
                <div className='form-container p-5 rounded bg-white'>
                <form onSubmit={handleSubmit}>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor="fname">Your Name</label>
                        <input type="text" placeholder='Enter Your Name' className='form-control mt-1' onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control mt-1' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    
                    <div className="d-grid mt-2 ">
                        <button className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className='text-center mt-2 fs-6'>
                        Already Registered? <Link to='/login' className='ms-1'>Sign in</Link>
                        </p>
                </form>
                </div>
                
            </div>
    );
}

export default SignUp;
