import React from "react";
import Icon from "../images/Icon.png"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='p-5 border border-gray flex flex-col justify-center align-middle items-center'>
            <h1 className='font-semibold text-4xl my-2'>Create your own account</h1>
            <h1 className='text-gray-500 font-medium mb-5 mt-2'>Create an account to start looking for the food you like </h1>
            
            <div className='flex flex-col items-start my-2'>
                <h1 className=''>Email Address</h1>
                <input className='border rounded-xl border-gray-500 p-2' placeholder='Enter Email' type='email'></input>
            </div>

            <div className='flex flex-col items-start my-2'>
                <h1 className=''>User Name</h1>
                <input className='border rounded-xl border-gray-500 p-2' placeholder='Enter username' type='email'></input>
            </div>

            <div className='relative flex flex-col items-start my-2'>
                <h1>Password</h1>
                <img className='absolute left-[165px] top-9 bg-white' src={Icon}/>
                <input className='border rounded-xl border-gray-500 p-2' placeholder='Enter Password' type='password'></input>
            </div> 

            <h1 className='mt-2'>I agree with<span className="px-1 text-[#FE8C00] cursor-pointer">Terms of services</span> and <span className="px-1 text-[#FE8C00] cursor-pointer">Privacy Policy</span></h1>
            <button className='rounded-3xl my-3 bg-[#FE8C00] font-semibold text-white py-2 px-4 w-[15%]'>Register</button>
            
            <div className='my-3 flex flex-row'>
                <hr></hr>
                    <h1 className='font-semibold'>Or signin with</h1>
                <hr></hr>
            </div>
            
            <div className='flex flex-row'>
                <h1 className='font-semibold'>Have an account? </h1>
                <Link to={'/Login'}><h1 className='font-semibold pl-1 text-[#FE8C00]'> Sign In</h1></Link>
            </div>
        </div>
    )
}

export default Register;