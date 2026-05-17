import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className='hero'>

      <div className='hero-text'>
        <h2>Hi, I'm</h2>

        <h1>Rohit Sharma</h1>

        <p>Frontend Developer</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button className='hero-btn'>
          View Projects ➡️
        </button>

        <button className='hero-btn'>
          Download CV ⬇️
        </button>
      </div>


      <div className='hero-img'>
        <img
          src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
          alt='profile'
        />
      </div>

    </div>
  )
}

export default Main