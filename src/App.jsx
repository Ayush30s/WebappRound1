import { useState } from 'react'
import image7 from "../images/image7.png"
import Rectangle1 from "../images/Rectangle1.png"
import Rectangle2 from "../images/Rectangle2.png"
import { Link } from 'react-router-dom';

import './App.css'

function App() {
  return (
    <div className='relative flex flex-col justify-center text-center items-center align-middle overflow-y-hidden'>
      <img src={image7} className='h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat'/>
      <div className='absolute bg-[#FE8C00] rounded-3xl top-30 flex flex-col justify-center align-middle items-center p-5'>
        <div className='text-white font-semibold text-5xl w-[70%] my-5'>We serve incomparable delicacies</div>
        <div className='text-white font-semibold text-xl w-[70%] mt-10 mb-5'>All the best restaurants with their top menu waiting for you, they can't wait for your order!!</div>
        <div className='flex flex-row justify-between w-[10%]'>
          <img src={Rectangle1}/>
          <img src={Rectangle2}/>
          <img src={Rectangle2}/>
        </div>
        <div className='flex justify-between w-[95%] mt-10'>
          <button className='text-white font-semibold'>Skip</button>
          <Link to={'/onboarding2'}><button className='text-white font-semibold'>Next</button></Link>
        </div>
      </div>
    </div>
  )
}

export default App;