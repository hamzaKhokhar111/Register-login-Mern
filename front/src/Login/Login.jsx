import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Login() {

  const [user,setuser]=useState({
    name:"",
    password:""
  })

  const handlechnage= (e)=>{
    const {name, value}= e.target
    setuser({
      ...user,
      [name]:value
    })

  }
  const login =async ()=>{
    await axios.post("http://localhost:3000/login",user).then((resp)=>{
      // alert(resp.data.message)
      alert("ok successful log")
    })
  }

  const goregister=()=>{
    alert("ok")

  }

  return (
    <div className='login'>
      {console.log(user)}
      <h1>Login</h1>
      <input type="text" name='name' value={user.name} onChange={handlechnage} placeholder='Enter Your email' />
      <input type="text" name='password' value={user.password} onChange={handlechnage} placeholder='Enter Your Password' />
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      <div style={{color:'white'}} className='button'><Link to='/register'>Register</Link></div>
    </div>
  )
}
