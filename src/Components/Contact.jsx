import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contact = () => {
  return (
    <div className="container-fluid bg-dark text-white py-5">

      <div className="container">
        <div className="row g-4">

          <div className="col-md-3">
            <h3>Portfolio.</h3>

            <p className="text-secondary mt-3">Building beautiful responsive and user-friendly web applications.</p>

            <div className="d-flex gap-3 mt-3">

              <FaGithub />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />

            </div>

          </div>

          <div className="col-3">
            <h5>Quick Links</h5>

            <p className="text-secondary mt-3">Home</p>
            <p className="text-secondary">About</p>
            <p className="text-secondary">Projects</p>
            <p className="text-secondary">Contact</p>
          </div>

          <div className="col-3">
            <h5>Services</h5>

            <p className="text-secondary mt-3"> Web Developmen </p>

            <p className="text-secondary"> UI/UX Design</p>

            <p className="text-secondary">Frontend Developmen</p>

            <p className="text-secondary">Responsive Desig</p>
          </div>

          <div className="col-md-3">
            <h5>Contact Me</h5>

            <p className="text-secondary mt-3">
              <MdEmail className="me-2" />rohitsharma@example.com
            </p>

            <p className="text-secondary">
              <FaPhoneAlt className="me-2" />+91 98765 43210
            </p>

            <p className="text-secondary">
              <FaLocationDot className="me-2" />India
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default contact