import { useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Tooltip } from "react-tooltip";

import "./About.css";

import profilePic from "../assets/profile-pic.webp";

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

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(".animation-box", {
      duration: 2.2,
      y: "-100%",
      ease: "expo.inOut",
      delay: 3.75,
    });

    tl.fromTo(
      ".my-name .letter",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
        duration: 1.5,
        stagger: 0.05,
      },
      "-=1.5"
    );

    tl.fromTo(
      ".profile-pic",
      {
        y: 20,
        opacity: 0,
      },
      {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
      }
    );

    tl.fromTo(
      ".job-title",
      {
        y: 20,
        opacity: 0,
      },
      {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
      },
      "-=1.5"
    );

    tl.fromTo(
      ".self-introduction",
      {
        y: 20,
        opacity: 0,
      },
      {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
      },
      "-=1.5"
    );

    tl.fromTo(
      ".skills",
      {
        y: 20,
        opacity: 0,
      },
      {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
      },
      "-=1.5"
    );
    tl.fromTo(
      ".about-section-button",
      {
        y: 20,
        opacity: 0,
      },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "expo.inOut",
      },
      "-=1.5"
    );
  }, []);

  return (
    <section className="about" id="about">
      <div className="animation-box"></div>
      <p className="self-introduction">Hi! My name is</p>
      <img
        src={profilePic}
        alt="William's profile pic"
        className="profile-pic"
      />

      <h1 className="my-name">
        <span className="letter">W</span>
        <span className="letter">i</span>
        <span className="letter">l</span>
        <span className="letter">l</span>
        <span className="letter">i</span>
        <span className="letter">a</span>
        <span className="letter">m</span>
        <span className="letter"> </span>
        <span className="letter">P</span>
        <span className="letter">o</span>
        <span className="letter">o</span>
        <span className="letter">n</span>
      </h1>

      <h2 className="job-title">{jobTitle}</h2>
      <p className="self-introduction">
        I recently graduated from college in Toronto. This website showcases
        some of the projects I've worked on over the years, mostly from my time
        while studying{" "}
        <a href="https://mediaarts.humber.ca/programs/web-development.html">
          Web Development at Humber College
        </a>{" "}
        where I completed my Graduate Certificate and{" "}
        <a href="https://www.theodinproject.com/">The Odin Project</a>. <br />
        <br />I specialize in React.js, Node.js, and .NET. and fueled by a
        passion for turning imaginative ideas into user-friendly applications
        that bring joy to people.
      </p>
      <div className="skills">
        <img
          src="https://skillicons.dev/icons?i=js"
          data-tooltip-id="js-tooltip"
          data-tooltip-content="JavaScript"
          width="45"
          height="45"
          alt="JavaScript"
        />
        <Tooltip id="js-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=ts"
          data-tooltip-id="ts-tooltip"
          data-tooltip-content="TypeScript"
          width="45"
          height="45"
          alt="TypeScript"
        />
        <Tooltip id="ts-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=cs"
          data-tooltip-id="cs-tooltip"
          data-tooltip-content="C#"
          width="45"
          height="45"
          alt="C#"
        />
        <Tooltip id="cs-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=php"
          data-tooltip-id="php-tooltip"
          data-tooltip-content="PHP"
          width="45"
          height="45"
          alt="PHP"
        />
        <Tooltip id="php-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=html"
          data-tooltip-id="html-tooltip"
          data-tooltip-content="HTML"
          width="45"
          height="45"
          alt="HTML"
        />
        <Tooltip id="html-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=css"
          data-tooltip-id="css-tooltip"
          data-tooltip-content="CSS"
          width="45"
          height="45"
          alt="CSS"
        />
        <Tooltip id="css-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=sass"
          data-tooltip-id="sass-tooltip"
          data-tooltip-content="SASS"
          width="45"
          height="45"
          alt="SASS"
        />
        <Tooltip id="sass-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=react"
          data-tooltip-id="react-tooltip"
          data-tooltip-content="React.js"
          width="45"
          height="45"
          alt="React.js"
        />

        <Tooltip id="react-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=redux"
          data-tooltip-id="redux-tooltip"
          data-tooltip-content="Redux"
          width="45"
          height="45"
          alt="Redux"
        />
        <Tooltip id="redux-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=tailwind"
          data-tooltip-id="tailwind-tooltip"
          data-tooltip-content="Tailwind CSS"
          width="45"
          height="45"
          alt="Tailwind CSS"
        />
        <Tooltip id="tailwind-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=materialui"
          data-tooltip-id="materialui-tooltip"
          data-tooltip-content="Material UI"
          width="45"
          height="45"
          alt="Material UI"
        />
        <Tooltip id="materialui-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=webpack"
          data-tooltip-id="webpack-tooltip"
          data-tooltip-content="Webpack"
          width="45"
          height="45"
          alt="Webpack"
        />
        <Tooltip id="webpack-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=bootstrap"
          data-tooltip-id="bootstrap-tooltip"
          data-tooltip-content="Bootstrap"
          width="45"
          height="45"
          alt="Bootstrap"
        />
        <Tooltip id="bootstrap-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=jquery"
          data-tooltip-id="jquery-tooltip"
          data-tooltip-content="jQuery"
          width="45"
          height="45"
          alt="jQuery"
        />
        <Tooltip id="jquery-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=styledcomponents"
          data-tooltip-id="styledcomponents-tooltip"
          data-tooltip-content="styled-components"
          width="45"
          height="45"
          alt="styled-components"
        />
        <Tooltip id="styledcomponents-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=github"
          data-tooltip-id="github-tooltip"
          data-tooltip-content="Github"
          width="45"
          height="45"
          alt="Github"
        />
        <Tooltip id="github-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=vercel"
          data-tooltip-id="vercel-tooltip"
          data-tooltip-content="Vercel"
          width="45"
          height="45"
          alt="Vercel"
        />
        <Tooltip id="vercel-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=figma"
          data-tooltip-id="figma-tooltip"
          data-tooltip-content="Figma"
          width="45"
          height="45"
          alt="Figma"
        />
        <Tooltip id="figma-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=wordpress"
          data-tooltip-id="wordpress-tooltip"
          data-tooltip-content="Wordpress"
          width="45"
          height="45"
          alt="Wordpress"
        />
        <Tooltip id="wordpress-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=nodejs"
          data-tooltip-id="nodejs-tooltip"
          data-tooltip-content="Node.js"
          width="45"
          height="45"
          alt="Node.js"
        />

        <Tooltip id="nodejs-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=express"
          data-tooltip-id="express-tooltip"
          data-tooltip-content="Express.js"
          width="45"
          height="45"
          alt="Express.js"
        />
        <Tooltip id="express-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=mongodb"
          data-tooltip-id="mongodb-tooltip"
          data-tooltip-content="MongoDB"
          width="45"
          height="45"
          alt="MongoDB"
        />
        <Tooltip id="mongodb-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=dotnet"
          data-tooltip-id="dotnet-tooltip"
          data-tooltip-content=".NET"
          width="45"
          height="45"
          alt=".NET"
        />
        <Tooltip id="dotnet-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=laravel"
          data-tooltip-id="laravel-tooltip"
          data-tooltip-content="Laravel"
          width="45"
          height="45"
          alt="Laravel"
        />
        <Tooltip id="laravel-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=mysql"
          data-tooltip-id="mysql-tooltip"
          data-tooltip-content="MySQL"
          width="45"
          height="45"
          alt="MySQL"
        />
        <Tooltip id="mysql-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=firebase"
          data-tooltip-id="firebase-tooltip"
          data-tooltip-content="Firebase"
          width="45"
          height="45"
          alt="Firebase"
        />
        <Tooltip id="firebase-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=postman"
          data-tooltip-id="postman-tooltip"
          data-tooltip-content="Postman"
          width="45"
          height="45"
          alt="Postman"
        />
        <Tooltip id="postman-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=aws"
          data-tooltip-id="aws-tooltip"
          data-tooltip-content="Amazon Web Services"
          width="45"
          height="45"
          alt="Amazon Web Services"
        />
        <Tooltip id="aws-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=azure"
          data-tooltip-id="azure-tooltip"
          data-tooltip-content="Azure"
          width="45"
          height="45"
          alt="Azure"
        />
        <Tooltip id="azure-tooltip" />
        <img
          src="https://skillicons.dev/icons?i=docker"
          data-tooltip-id="docker-tooltip"
          data-tooltip-content="Docker"
          width="45"
          height="45"
          alt="Docker"
        />
        <Tooltip id="docker-tooltip" />
      </div>
      <a href="#work" className="about-section-button">
        Check out my works!
        <div className="button__shadow"></div>
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

// const FormattedName = ({ name }) => {
//   const [formattedName, setFormattedName] = useState([]);

//   useEffect(() => {
//     if (name) {
//       const letters = name.split("").map((char, index) => {
//         return char.trim().length > 0 ? (
//           <span key={index} className="letter">
//             {char}
//           </span>
//         ) : (
//           char
//         );
//       });
//       setFormattedName(letters);
//     }
//   }, [name]);

//   return <h1 className="my-name"> {formattedName}</h1>;
// };
