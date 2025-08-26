  import { gsap } from "gsap";
  import {useGSAP} from "@gsap/react";
import { useRef } from "react";

function Frontpgab() {

  const h1 = useRef()
  const offrref = useRef()
    const offrimg = useRef()
  
  useGSAP(() => {
    gsap.from(h1.current , {
      y:40,
      duration:1, 
      delay:0.1,
      opacity:0 
    })
    gsap.fromTo(offrref.current ,  
      { x : -50, opacity:0},
      {x:0 , opacity:1 , duration : 1 , ease:"power2.out"}
    )
    gsap.fromTo(offrimg.current , 
       { x : -50, opacity:0},
      {x:0 , opacity:1 , duration : 1 , ease:"power2.out"}
    )
  })
     
  return (
     <div>
        <div  ref={h1}  className=' flex flex-col items-center justify-center max-w-screen-lg mx-auto  my-20 text-4xl font-bold'>
     <div className='flex gap-3 '  >
          <h1>Welcome to </h1>
      <h1 className='text-[#213b73]'> JobHunt</h1>
      <h1>, your dedicated partner</h1>
     </div>
      <h1> in navigating the exciting world</h1>
      <h1>  of career opportunities!</h1>
    </div>

    <div  className='flex mx-50 gap-40 items-center'>
        <div ref={offrref} className='flex flex-col gap-3 mx-12 p-5 h-60 w-90 my-20'>
            <h1 className='text-2xl font-bold'>Our Mission</h1>
            <h2 className='text-xl'>We're committed to building a bridge between talented individuals and verified employers, fostering growth, and making every job search a confident step forward.</h2>
        </div>
        <div ref={offrimg}>
            <img className='h-70 w-100 rounded' src="confident.png" alt="" />
        </div>
    </div>
     </div>
  )
}

export default Frontpgab
