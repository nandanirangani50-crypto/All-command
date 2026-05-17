import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <h2>
            Portfolio <span>.</span>
          </h2>
        </div>

        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/projects">
            <li>Projects</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>

        <button className="btn1">Let's Talk</button>
      </div>

      {/* Hero Section
      <main>
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

          <button className='hero-btn'>View Projects ➡️</button>

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
      </main>*/}
    </>
  );
}

export default Home;
