import React from "react"
import image8 from "../images/image8.png"
import Progress from "../images/Progress.png"
import Rectangle1 from "../images/Rectangle1.png"
import Rectangle2 from "../images/Rectangle2.png"
import { Link } from "react-router-dom"

const Onboarding3part1 = () => {
    return (
        <div className='relative flex flex-col justify-center items-center text-center align-middle overflow-y-hidden'>
            <img src={image8} className='h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat'/>
            <div className='absolute bg-[#FE8C00] rounded-3xl top-30 flex flex-col justify-center align-middle items-center p-5'>
                <div className='text-white font-semibold text-5xl w-[70%] my-5'>We serve incomparable delicacies</div>
                <div className='text-white font-semibold text-xl w-[70%] mt-10 mb-5'>All the best restaurants with their top menu waiting for you, they can't wait for your order!!</div>
                <div className='flex flex-row justify-between w-[10%]'>
                <img src={Rectangle2}/>
                <img src={Rectangle2}/>
                <img src={Rectangle1}/>
                </div>
                
                <Link to='/onboarding3/Login'>
                    <div className='mt-10 mb-5'>
                        <img src={Progress} alt="Progress Image"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Onboarding3part1;