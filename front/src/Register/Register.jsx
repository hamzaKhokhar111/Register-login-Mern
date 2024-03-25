import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Register() {
  const [user,setuser]= useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })

  const handlechange= (e)=>{
    const {name , value}= e.target
    setuser({
      ...user,
      [name]:value
    })
   

  }

  const apicall = ()=>{
    const {name,email,password,reEnterPassword}=user
    if(name,email,password && (password===reEnterPassword)){
      alert("Posted Successfully")
      axios.post("http://localhost:3000/register",user).then((resp)=>{
        console.log(resp)
      })

    }else{
      alert("in Valid Value")
    }

  }

  return (
<div className='login'>
      <h1>Register</h1>
      <input type="text" name='name' value={user.name} onChange={handlechange} placeholder='Enter Your Name' />
      <input type="text" name='email' value={user.email} onChange={handlechange} placeholder='Enter Your email' />
      <input type="text" name='password' value={user.password} onChange={handlechange} placeholder='Enter Your Password' />
      <input type="text" name='reEnterPassword' onChange={handlechange} value={user.reEnterPassword} placeholder='Re-Enter Your Password' />
      <div className='button' onClick={apicall}>Register</div>
      <div>or</div>
      <div className='button'><Link to='/login'>Login</Link></div>
    </div>
  )
}
