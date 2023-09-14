import React from 'react'
import earring from "../asset/earing.jpg"
const LoginPage = () => {
  return (
    <>
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl  p-5'>
      <div className='w-1/2 '>
          <img className='rounded-2xl' src={earring} alt="" />
        </div>
        <div className='w-1/2 flex flex-col gap-4 justify-center items-start pl-20'>
          <h2 className='font-bold text-4xl  '>Log In</h2>
          <input className='rounded-xl border' type="email" placeholder='Email' />
          <input className='rounded-xl border' type="password" placeholder='Password' />
          <button className='bg-black text-white rounded-xl'>Login</button>
        </div>
        
      </div>

    </section>
    </>
  )
}

export default LoginPage
