import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'
import { Link } from 'react-router-dom'
import axios from 'axios'; 

function Regis() {

  const [data, setdata] = useState({
    name: '',
    email: '',
    password: '',
    work_status: '',
    number: ''
  });

  const handledata = (e) => {
    setdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handlesubmit =async (e) => {
    e.preventDefault();

    try {
      console.log(data)
      const user =await axios.post("http://localhost:8080/api/user/register",data) 
      
      console.log("data posted");
       
    } catch (error) {
      console.error("Error:" , error);

    }
  }

  const handlechoice = (status) => {
    setdata((prev) => ({
      ...prev, work_status: status
    }))
  }

  return (
    <div className=' bg-gray-100 flex items-center justify-around  mb-0 '>
      <div className='h-200 w-180 my-10 rounded-xl p-7 bg-white'>
        <h1 className='text-[22px]'>Create Your Job Hunt Profile</h1>

        <h3 className='text-gray-500'>Search and apply to jobs from India's No. 1 Job Site</h3>

        <form onSubmit={handlesubmit} className='flex flex-col gap-8 my-6 p-2 border-5px border-black'>

          <input className='h-10 p-3 border-1 border-black rounded-2xl ' name='name' type="text" value={data.name} placeholder='Enter your Name' onChange={handledata} />
          <input className='h-10 p-3 border-1 border-black rounded-2xl' name='email' type="email" value={data.email} placeholder='Tell us your Email Id' onChange={handledata} />
          <input className='h-10 p-3 border-1 border-black rounded-2xl' name='password' type="Password" value={data.password} placeholder='(Minimum 6 Character)' onChange={handledata} />
          <input className='h-10 p-3 border-1 border-black rounded-2xl' name='number' type="tel" value={data.number} placeholder=' Enter your Mobile No.' onChange={handledata} />

          <h2 className='text-xl'>Work Status</h2>
          <div className='flex gap-5 m-3 cursor-pointer '>
            <div onClick={ () => {handlechoice("experience")}} className={`border-b-black  border-1 p-2 flex justify-center items-center ${data.work_status === "experience" ? "bg-teal-100  border-teal-200" : "hover:bg-gray-50"}`}>
              <div> <h3>I'm experienced</h3>
                <h3 className='text-gray-600'>I have work experience (excluding internships)</h3></div>
              <div> <FaShoppingBag size={32} /></div>
            </div>

            <div onClick={() => {handlechoice("fresher")}} className={` border-b-black  border-1 p-2 flex justify-center items-center ${data.work_status === "fresher" ? "bg-teal-100  border-teal-200" : "hover:bg-gray-50" }`}>
              <div> <h3>I'm fresher</h3>
                <h3 className='text-gray-600'>I am a student/ Haven't worked after graduation</h3>
              </div>
              <div> <SiBookstack size={32} /></div>
            </div>

          </div>
          <button className='h-12 w-25 bg-[#1A936F] rounded-3xl  hover:bg-[#34A88A] '>Register</button>
        </form>
        <div className='flex gap-3 mx-12 items-center'>
          <h2 className='text-gray-500'>If already Registered then </h2>
          <button className='h-10 w-22 bg-[#1A936F] rounded-3xl hover:bg-[#34A88A] '><Link to="/login">Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Regis


