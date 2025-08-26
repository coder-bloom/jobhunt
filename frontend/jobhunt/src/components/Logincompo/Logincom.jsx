import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Logincom() {

  const navigate = useNavigate();

const [formdata , setformdata]  = useState({
  email:'',
  password:''
})

const handleChange = (e) =>{


  setformdata((prev) =>{
   return  {...prev , [e.target.name]:e.target.value};
  })
}

const handlesubmit = async (e) => {
  e.preventDefault();

   console.log("Submitted", formdata); 

  try {
    const res = await axios.post("http://localhost:3000/api/user/login" , formdata);
    
      alert(res.data.message);

     localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));
     if(res.data.user.role === "user"){
        navigate("/");
     }else{
        navigate("/admindashboard");
     }
    
  } catch (error) {
    alert("error:" + error.response.data.message);
    navigate("/login");
  }
}

return (
    <div className=' w-full max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg'>
      <h1 className='text-4xl text-center font-bold mb-6'>Login</h1>

      <form onSubmit={handlesubmit}>
        <div className='flex flex-col gap-4 bg-white p-6 rounded-lg shadow'>
          <input
            className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
            type='email' 
            name='email'
        value={formdata.email}
        onChange={handleChange}
            placeholder='Email'
            autoComplete='email'
          />
          <input
            className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
            type='password'
            name='password'
            value={formdata.password}
        onChange={handleChange}
            placeholder='Password'
            autoComplete='current-password'
          />
          <button
            type='submit'
            className='bg-teal-700 hover:bg-cyan-600 text-white py-2 rounded-md font-semibold'
          >
            Login
          </button>

          <p className='text-sm text-center'>
            Don&apos;t have an account? <a href='/register' className='text-blue-600 underline'>Register</a>
          </p>
          <p className='text-sm text-center'>
            Forgot your password? <a href='/forgot-password' className='text-blue-600 underline'>Reset Password</a>
          </p>

          <p className='text-center mt-4 text-gray-600'>Or login with:</p>

          <div className='flex justify-center gap-4'>
            <button type='button' className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'>Google</button>
            <button type='button' className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md'>Facebook</button>
            <button type='button' className='bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md'>Twitter</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Logincom
