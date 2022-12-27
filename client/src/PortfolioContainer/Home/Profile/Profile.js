import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://github.com/Angelv0918">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/angel-vasquez0918/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://twitter.com/AngelVa18312065">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Angel</span>
            </span>
          </div>
          <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Dev 🔴",
                  1500,
                  "Full Stack Developer 💻",
                  1500,
                  "MERN Dev 😎",
                  1500,
                  "Python Dev 🐍",
                  1500,
                  "React/React Native Dev📱",
                  1500,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Self starter with a knack for building applications with front and
              back end operations.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn"> Hire Me </button>
          <a href="Angel-resume.pdf" download="Angel-resume.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background">
            
        </div>
      </div>
    </div>
    </div>
  );
}
