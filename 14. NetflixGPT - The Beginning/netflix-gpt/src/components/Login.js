import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg" alt="banner" />
        </div>
        <form className='absolute p-12 left-0 w-4/12 bg-black my-36 mx-auto mt-40 right-0 text-white bg-opacity-80 rounded-lg'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input type="text" placeholder='Full Name' className='p-3 my-2 w-full bg-gray-700 rounded-md border-2 border-gray-500 focus:outline-2 focus:outline-white' />}
            <input type="text" placeholder='Email Address' className='p-3 my-2 w-full bg-gray-700 rounded-md border-2 border-gray-500 focus:outline-2 focus:outline-white'/>
            <input type="password" placeholder='Password' className='p-3 my-2 w-full bg-gray-700 rounded-md border-2 border-gray-500 focus:border-2 focus:border-gray-500 focus:outline-1 focus:outline-white'/>
            <button className='p-2 my-2 w-full bg-red-600 rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 text-sm cursor-pointer' onClick={()=> toggleSignInForm()}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In now."}</p>
        </form>

    </div>
  )
}

export default Login