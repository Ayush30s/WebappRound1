import React from "react";
import image7 from "../images/image7.png"
import succes from "../images/succes.png"
import { Link } from "react-router-dom";

const LoginCompleted = () => {
    return (
        <div className="relative">
            <img className="h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat" src={image7}/>
            <div className="absolute w-full p-5 rounded-t-3xl bg-white bottom-0 left-0 flex flex-col justify-center items-center">
                <button className="w-[5%] mt-2 mb-10 font-extrabold bg-gray-400 text-[1px] text-gray-400 rounded-full h-[3px]">-----</button>
                <img src={succes}/>
                <h1 className="text-black text-4xl font-medium my-3">Login SuccessFully</h1>
                <Link to={"/tracking"}><button className="bg-[#FE8C00] text-white py-2 px-10 rounded-3xl my-4">Go to Tracking Screen</button></Link>
                <h1 className="font-semibold text-gray-400">Logout</h1>
            </div>
        </div>
    );
}

export default LoginCompleted;