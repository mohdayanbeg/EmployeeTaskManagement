import React, { useState } from 'react'



const Login = ({handleLogin}) => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');


    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600 p-30 rounded-2xl w-xl">
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center '>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}  
                className='text-white border-2 border-emerald-400 outline-none py-3 px-4 rounded-full bg-transparent w-full' required type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}  
                className='text-white border-2 border-emerald-400 outline-none py-3 px-4 rounded-full bg-transparent mt-7 w-full' required type="password" placeholder='Enter your password' />
                <button className='text-white outline-none py-3 px-4 rounded-full font-medium bg-emerald-400 mt-15 w-full hover:bg-emerald-600'>Log in</button>
            </form>
        </div>
    </div>

  )
}
 
export default Login