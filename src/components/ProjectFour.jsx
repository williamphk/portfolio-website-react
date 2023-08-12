import { Tooltip } from "react-tooltip";

import node from "../assets/icons/node.svg";
import express from "../assets/icons/express.svg";
import github from "../assets/icons/github.svg";
import pug from "../assets/icons/pug.svg";
import aws from "../assets/icons/aws.svg";

export default function ProjectFour({
  projectFour,
  videoSrcArray4,
  currentVideoIndex,
  changeVideo,
  isPlaying,
  setIsPlaying,
  isTabletPlaying,
  currentVideoSrc,
  videoWidth,
  videoHeight,
}) {
  return (
    <article className="project-four">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">Ingredient Mixer</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <div className="video-wrapper"></div>
          {/* {isPlaying ? (
            <video
              controls
              width={videoWidth}
              height={videoHeight}
              style={{ display: isPlaying ? "block" : "none" }}
              onEnded={() => setIsPlaying(false)}
              src={currentVideoSrc}
              autoPlay
            />
          ) : (
            <img
              className="project-image-tablet"
              src={projectFour}
              alt="A screenshot of my project 4"
            />
          )} */}
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
          <div className="hover-wrapper4">
            {videoSrcArray4.map((_, index) => (
              <button
                className="hover4"
                onClick={(e) => changeVideo(e, index)}
                key={index}
              >
                {["Autocomplete", "Recipe Generation By LLM"][index]}
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
              src={express}
              alt="express"
              data-tooltip-id="express-tooltip"
              data-tooltip-content="Express.js"
            />
            <Tooltip id="express-tooltip" />
            <img
              src={pug}
              alt="pug"
              data-tooltip-id="pug-tooltip"
              data-tooltip-content="Pug.js"
            />
            <Tooltip id="pug-tooltip" />
            <img
              src={aws}
              alt="Amazon Web Services"
              data-tooltip-id="aws-tooltip"
              data-tooltip-content="Amazon Web Services"
            />
            <Tooltip id="aws-tooltip" />
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
              href="https://github.com/williamphk/DiscountDish/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="http://recipe.williamphk.com/"
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
