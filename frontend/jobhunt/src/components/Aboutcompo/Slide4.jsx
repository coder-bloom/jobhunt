import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Slide4() {

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
    <div className='h-150 flex items-center'>
        <div className='flex mx-50 items-center'>
         <div ref={el}>
            <img className='h-120 w-150 rounded' src="images.jpeg" alt="" />
        </div>
        <div ref={txtref} className='flex flex-col gap-3   p-5 my-20'>
            <h1 className='text-5xl font-bold'>Personalized Job Matching & Verified Employers</h1>
        </div>
         
    </div>
    </div>
  )
}

export default Slide4
