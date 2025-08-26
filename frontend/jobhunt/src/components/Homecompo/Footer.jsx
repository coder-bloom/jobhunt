import React from 'react'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='h-70 flex items-center gap-9 text-white bg-[#1d2e54]'>
       <div className='flex items-center gap-5 px-32 py-20 '>
        <img src="logoim2.png"  className='h-20 w-30 rounded-2xl' />
       <div className='flex flex-col gap-5'>
        <h1>FOllow Us On Social Media</h1>
      <div className='flex gap-3 underline '>
        <FaFacebook size={22} />
<FaSquareInstagram size={22} />
<FaYoutube size={22} />
<BiLogoLinkedinSquare size={22} />
      </div>
       </div>
       </div>

       <div className='flex gap-6'>
        <h1>2025 | All Rights Served</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms & Conditions</h1>
       </div>
     
    </div>
  )
}

 export default Footer ;
