import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="container-fluid text-white py-5"
      style={{ backgroundColor: "rgb(44, 3, 3)", minHeight: "100vh" }}
    >
      <div className="text-center mb-5">
        <p className="text-uppercase fw-bold text-primary">About Me</p>

        <h1 className="fw-bold">About Me</h1>
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
      
          <div className="col-lg-5 text-center">
            <img src="/image-2.png" alt="about" className="img-fluid rounded-4 w-100 overflow-hidden"
/>
          </div>

          {/* Text */}
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4"> I'm a passionate <br />
              <span className="text-primary">Frontend Developer</span>
            </h2>

            <p className="text-secondary">
              I love building beautiful and functional web applications.
              <br />I enjoy turning ideas into real products that provide great
              user experiences.
            </p>

            <div className="mt-4">
              <p>
                <FaBriefcase className="me-2 text-primary" /> Experience: 2+ Years
              </p>

              <p>
                <FaLocationDot className="me-2 text-primary" />Location: India
              </p>

              <p>
                <MdEmail className="me-2 text-primary" />Email: rohitsharma@example.com
              </p>

              <p>
                <FaPhoneAlt className="me-2 text-primary" />Freelance:
                <span className="text-success fw-bold"> Available</span>
              </p>
            </div>

            <button className="btn btn-primary px-4 py-2 mt-3">
              Let's Talk →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
