import { useEffect, useState } from "react";
import "./About.css";

import profilePic from "../assets/profile-pic.jpg";

export default function About() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  useEffect(() => {
    const getAbout = async () => {
      const response = await fetch("/about.json");
      const data = await response.json();
      setName(data.name);
      setJobTitle(data.jobTitle);
    };
    getAbout();
  }, []);

  return (
    <section className="about" id="about">
      <p className="self-introduction">Hi! My name is</p>
      <img
        src={profilePic}
        alt="William's profile pic"
        className="profile-pic"
      />
      <h1 className="my-name">{name}</h1>
      <h2 className="job-title">{jobTitle}</h2>
      <p className="self-introduction">
        I'm specializing in React, Node, and ASP.NET, and fueled by a passion
        for turning imaginative ideas into user-friendly applications. My aim is
        to create engaging web experiences that are not only functional but also
        bring joy to users. I love working in collaborative environments, as it
        allows me to learn and grow in ideas. Welcome to my portfolio!
      </p>
      <div className="icon-wrapper">
        <a href="https://www.linkedin.com/in/williamphk/" target="_blank">
          LinkedIn
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/williamphk" target="_blank">
          Github
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="mailto:willphk@outlook.com" target="_blank">
          Email
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <a href="#work" className="about-section-button">
        Check out my works!
      </a>
      <a
        id="scroll-btn"
        href="#work"
        aria-hidden="true"
        aria-label="View my projects"
      ></a>
    </section>
  );
}
