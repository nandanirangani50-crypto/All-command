import React from 'react'
import Home from './Components/Home'
import About from './Components/About'

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Home/>

      <Routes>

        <Route path='/' element={<Main />} />

        <Route path='/about' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
        {/* <Route path='/contact' element={<Contact />} /> */}

      </Routes>
      
      <Contact/>


    </div>
  )
}

export default App