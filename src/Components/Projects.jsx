import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Projects = () => {
  return (
    <div className="container-fluid custom-bg text-white py-5 min-vh-100">

      <div className="text-center mb-5">
        <p className="text-primary text-uppercase">
          My Work
        </p>

        <h1>
          Projects
        </h1>

        <p className="text-secondary mt-3">
          Here are some of the projects I've worked on.
          Each project is a unique piece of development
          that showcases my skills and passion.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">

          <div className="col-4">
            <div className="card bg-dark border-0 rounded-4 py-5 px-4 h-100">
              <div className="card-body">
                <h3 className="card-title text-white mb-3">
                  Weather App
                </h3>

                <p className="card-text text-secondary">
                  A weather application that shows current
                  weather and forecasts using API.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card bg-dark border-0 rounded-4 py-5 px-4 h-100">
              <div className="card-body">
                <h3 className="card-title text-white mb-3">
                  Portfolio Website
                </h3>

                <p className="card-text text-secondary">
                  A personal portfolio website built with React
                  to showcase projects and skills.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card bg-dark border-0 rounded-4 py-5 px-4 h-100">
              <div className="card-body">
                <h3 className="card-title text-white mb-3">
                  Task Manager
                </h3>

                <p className="card-text text-secondary">
                  A productivity app to manage tasks with
                  add, edit and delete functionality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Projects