import React from "react";
import Icon from "../images/Icon.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginChild1= () => {

    const [signed, setSigned] = useState(false);

    return (
        <div className='p-5 border border-gray flex flex-col justify-center align-middle items-center'>
            <h1 className='font-semibold text-4xl my-2'>Login to your account</h1>
            <h1 className='text-gray-500 font-medium mb-5 mt-2'>Please sign in to your account </h1>
            
            <div className='flex flex-col items-start my-2'>
                <h1 className=''>Email Address</h1>
                <input className='border rounded-xl border-gray-500 p-2' placeholder='Enter Email' type='email'></input>
            </div>

            <div className='relative flex flex-col items-start my-2'>
                <h1>Password</h1>
                <img className='absolute left-[165px] top-9 bg-white' src={Icon}/>
                <input className='border rounded-xl border-gray-500 p-2' placeholder='Enter Password' type='password'></input>
            </div> 

            <h1 className='mt-2 text-[#FE8C00] cursor-pointer'>Forget password?</h1>
            <button className='rounded-3xl my-3 bg-[#FE8C00] font-semibold text-white py-2 px-4 w-[15%]'><Link to= "/valid" onClick={() => {
                setSigned(true);
            }}>SignIn</Link></button>
            
            <div className='my-3 flex flex-row'>
                <hr></hr>
                    <h1 className='font-semibold'>Or signin with</h1>
                <hr></hr>
            </div>
            
            <div className='flex flex-row'>
                <h1 className='font-semibold'>Don't have an account? </h1>
                <Link to ={"/onboarding3/Login/Register"}><h1 className='font-semibold pl-1 text-[#FE8C00]'> Register</h1></Link>
            </div>
        </div>
    )
}
 
export default LoginChild1;