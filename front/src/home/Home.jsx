import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
     <h1>Welcome to Home page</h1>
     <h2>if You are Not Register</h2>
     <h2>then First REgister </h2>
     <Link style={{background:'yellow', padding:'5px'}} to='/register'>Register</Link>
    </div>
  )
}

export default Home
