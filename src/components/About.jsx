import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <p className="self-introduction">Hi! My name is</p>
      <h1 className="my-name">William Poon</h1>
      <h2 className="job-title">Full Stack Developer</h2>
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
        Check out my work!
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