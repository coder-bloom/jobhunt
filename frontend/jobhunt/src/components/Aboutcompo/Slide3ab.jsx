  import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


function Slide3ab() {

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
    <div>
 <div className='flex mx-50 gap-40 items-center'>
        <div ref={el} className='flex flex-col gap-3 mx-12 p-5 h-60 w-90 my-20'>
            <h1 className='text-2xl font-bold'> What We Offer</h1>
            <h2 className='text-xl'>At JobHunt, we've meticulously crafted a suite of features designed to make your job search efficient, personalized, and ultimately, successful:</h2>
        </div>
        <div ref={imgref}>
            <img className='h-70 w-100 rounded' src="offrr.png" alt="" />
        </div>
    </div>
    </div>
  )
}

export default Slide3ab
