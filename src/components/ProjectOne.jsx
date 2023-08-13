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
  isTabletPlaying,
  setIsTabletPlaying,
  currentVideoSrc,
  tabletVideoWidth,
  tabletVideoHeight,
}) {
  return (
    <article className="project-one">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">Odin-book</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <div className="video-wrapper"></div>
          {isTabletPlaying ? (
            <video
              controls
              className="video-tablet"
              width={tabletVideoWidth}
              height={tabletVideoHeight}
              style={{ display: isTabletPlaying ? "block" : "none" }}
              onEnded={() => setIsTabletPlaying(false)}
              src={currentVideoSrc}
              autoPlay
            />
          ) : (
            <img
              className="project-image-tablet"
              src={projectOne}
              alt="A screenshot of my project 1"
            />
          )}
          <p className="project-description">
            Odin-book is more than just a social media platform; it's a seamless
            journey crafted with the MERN stack (MongoDB, Express.js, React,
            Node.js). With responsive design and personalized user customization
            features, Odin-book sets the stage for a new era of online
            interaction. Dive in, and let Odin-book redefine your social media
            experience.
          </p>
          <div className="intersecting-element" data-img="0"></div>
          <h4 className="project-description">Features:</h4>
          <div className="hover-wrapper">
            {videoSrcArray1.map((_, index) => (
              <button
                className="hover1 hover"
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
