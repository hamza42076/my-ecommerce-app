import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  const userLogin =()=>{
    console.log("userLogin");
    
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col bg-gray-200">
      <h1 className="text-3xl mb-4 font-bold">Login Page</h1>
      
      <div className="flex flex-col h-2/3 w-full max-w-md bg-gray-500 gap-4 px-6 py-6 border-2 rounded-lg">

        
        <input 
          className="border-2 px-4 py-2 rounded-lg mb-4 
                     placeholder-gray-200 focus:outline-none focus:ring-0" 
          type="email" 
          placeholder="Enter the Email" 
        />
        
        <input 
          className="border-2 px-4 py-2 rounded-lg mb-6 
                     placeholder-gray-200 focus:outline-none focus:ring-0" 
          type="password" 
          placeholder="Enter your password" 
        />
        
        <button 
          className="px-4 py-2 border-2 rounded-lg bg-blue-600 
                     text-white hover:bg-blue-700 transition hover:cursor-pointer" onClick={userLogin
                      
                     }>
          Login
        </button>
        <p className='text-sm text-white mt-4'>If you haven't Logged in yet <Link to="/register" className='text-blue-300 hover:underline ml-1'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
