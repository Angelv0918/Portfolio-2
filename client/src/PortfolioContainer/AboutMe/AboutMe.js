import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Hi, my name is Angel Vasquez and I am a software engineer with a passion for improving user experience and tackling complex problems. I am a self-motivated individual who is able to work independently, but I also enjoy being part of a team and collaborating with others. I am always looking for ways to learn and grow as a software engineer, and I am constantly seeking out new challenges and opportunities to improve my skills and knowledge. Whether working on my own or with a team, I am dedicated to delivering high-quality, reliable software that provides a seamless and enjoyable user experience.",
    highlight: {
      bullets: [
        "Full Stack web development",
        "Interactive Front End",
        "React and React Native",
        "Building REST API",
        "Managing Databases",
      ],
      heading: "Here are a few Highlights",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlight.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob">
          <span>{[i+1]}. {value}</span>
        </div>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile">
            <div className="about-me-description">
              <span>{SCREEN_CONSTANTS.description}</span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTANTS.highlight.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
          <a href="Angel-resume.pdf" download="Angel-resume.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
