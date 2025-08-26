 import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Slide2ab() {

    const el = useRef();
    const txtref = useRef();

    useGSAP(() => {
      gsap.fromTo(el.current , {
         x:-50,
        opacity:0
  },
  {x:0 , opacity:1 ,duration:1 , ease:"power2.Out" ,
    scrollTrigger :{
  trigger:el.current,
   start: "top 100%",
   end:"bottom -60%",
          toggleActions: "play none none reverse",
           
    },
  }
)

 gsap.fromTo(txtref.current , {
         x:50,
        opacity:0
  },
  {x:0 , opacity:1 ,duration:1 , ease:"power2.Out" ,
    scrollTrigger :{
  trigger:txtref.current,
   start: "top 100%",
   end:"bottom -60%",
          toggleActions: "play none none reverse",
          
    },
  }
)

    } , {scope:el})

  return (
    <div>
       <div className='flex mx-50 gap-40 items-center'>
         <div ref={el}>
            <img className='h-70 w-100 rounded' src="weare.jpg" alt="" />
        </div>
        <div ref={txtref} className='flex flex-col gap-3 mx-12 p-5 h-60 w-90 my-20'>
            <h1 className='text-2xl font-bold'>Who We Are</h1>
            <h2 className='text-xl'>We are a team of passionate innovators, technologists, and career advocates driven by a shared vision: to redefine the job search experience.</h2>
        </div>
         
    </div>
    </div>
  )
}

export default Slide2ab
