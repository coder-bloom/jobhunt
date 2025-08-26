 import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Slide5() {

  const el = useRef();
    const imgref = useRef();

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

 gsap.fromTo(imgref.current , {
         x:50,
        opacity:0
  },
  {x:0 , opacity:1 ,duration:1 , ease:"power2.Out" ,
    scrollTrigger :{
  trigger:imgref.current,
   start: "top 100%",
   end:"bottom -60%",
          toggleActions: "play none none reverse",
          
    },
  }
)

    } , {scope:el})

  return (
    <div  className='h-150 flex items-center'>
       <div className='flex mx-50 items-center'>
        <div ref={el} className='flex flex-col gap-3 p-5my-20'>
            <h1 className='text-5xl font-bold'>Intutive User Dashboard & Comprehensive Career Resources</h1>
        </div>
        <div>
            <img ref={imgref} className='h-140 w-160 rounded shadow-emerald-100 shadow-2xs' src=" carrer.jpg" />
        </div>
    </div>
    </div>
  )
}

export default Slide5
