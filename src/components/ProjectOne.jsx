import { Tooltip } from "react-tooltip";

import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import mongoDB from "../assets/icons/mongoDB.svg";
import express from "../assets/icons/express.svg";
import tailwind from "../assets/icons/tailwind.svg";
import passport from "../assets/icons/passport.svg";
import redux from "../assets/icons/redux.svg";
import axios from "../assets/icons/axios.svg";
import azure from "../assets/icons/azure.svg";
import github from "../assets/icons/github.svg";

export default function ProjectOne({
  projectOne,
  videoSrcArray1,
  currentVideoIndex,
  changeVideo,
  isPlaying,
}) {
  return (
    <article className="project-one">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">Odin-book</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <div className="video-wrapper"></div>
          <img
            className="project-image-tablet"
            src={projectOne}
            alt="A screenshot of my project 1"
          />
          <video controls className="video-tablet">
            <source type="video/mp4" className="video-tablet-source" />
          </video>
          <p className="project-description">
            This is a full-stack social media web application using MERN
            (MongoDB, Express.js, React, Node.js) with features such as user
            authentication, OAuth, server-side validation, responsive design,
            client-side management, and user customization.
          </p>
          <div className="intersecting-element" data-img="0"></div>
          <h4 className="project-description">Features:</h4>
          <div className="hover-wrapper1">
            {videoSrcArray1.map((_, index) => (
              <button
                className="hover1"
                onClick={(e) => changeVideo(e, index)}
                key={index}
              >
                {
                  [
                    "Register & Login",
                    "Facebook OAuth",
                    "Post & comment",
                    "Friend request & Friend",
                    "Profile",
                  ][index]
                }
                <span className="material-symbols-outlined">
                  {currentVideoIndex === index && isPlaying
                    ? "stop_circle"
                    : "play_circle"}
                </span>
              </button>
            ))}
          </div>
          <p className="project-description">
            <img
              src={node}
              alt="node"
              data-tooltip-id="node-tooltip"
              data-tooltip-content="Node.js"
            />
            <Tooltip id="node-tooltip" />
            <img
              src={react}
              alt="react"
              data-tooltip-id="react-tooltip"
              data-tooltip-content="React.js"
            />
            <Tooltip id="react-tooltip" />
            <img
              src={mongoDB}
              alt="mongoDB"
              data-tooltip-id="mongoDB-tooltip"
              data-tooltip-content="MongoDB"
            />
            <Tooltip id="mongoDB-tooltip" />
            <img
              src={express}
              alt="express"
              data-tooltip-id="express-tooltip"
              data-tooltip-content="Express.js"
            />
            <Tooltip id="express-tooltip" />
            <img
              src={passport}
              alt="passport"
              data-tooltip-id="passport-tooltip"
              data-tooltip-content="Passport.js"
            />
            <Tooltip id="passport-tooltip" />
            <img
              src={tailwind}
              alt="tailwind"
              data-tooltip-id="tailwind-tooltip"
              data-tooltip-content="Tailwind CSS"
            />
            <Tooltip id="tailwind-tooltip" />
            <img
              src={redux}
              alt="redux"
              data-tooltip-id="redux-tooltip"
              data-tooltip-content="Redux"
            />
            <Tooltip id="redux-tooltip" />
            <img
              src={axios}
              alt="axios"
              data-tooltip-id="axios-tooltip"
              data-tooltip-content="Axios"
            />
            <Tooltip id="axios-tooltip" />
            <img
              src={azure}
              alt="azure"
              data-tooltip-id="azure-tooltip"
              data-tooltip-content="Azure"
            />
            <Tooltip id="azure-tooltip" />
            <img
              src={github}
              alt="github"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
            />
            <Tooltip id="github-tooltip" />
          </p>
          <div className="project-button-wrapper">
            <a
              href="https://github.com/williamphk/Odin-Book-frontend/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code: Frontend
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://github.com/williamphk/Odin-Book-API/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code: Backend
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://williamphk.github.io/Odin-Book-frontend/"
              className="live-preview-button"
              target="_blank"
            >
              Live Preview
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
