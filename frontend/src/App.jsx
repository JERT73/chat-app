import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import {Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <div className='
      p-4 h-screen flex justify-center items-center
    '>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
