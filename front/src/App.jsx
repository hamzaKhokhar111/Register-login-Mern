import { useState } from 'react'
import './App.css'
import Home from './home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
  <Navbar/>
  
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
