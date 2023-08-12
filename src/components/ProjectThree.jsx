import { Tooltip } from "react-tooltip";

import javascript from "../assets/icons/javascript.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import webpack from "../assets/icons/webpack.svg";
import github from "../assets/icons/github.svg";

export default function ProjectThree({
  projectThree,
  videoSrcArray3,
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
    <article className="project-three">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">The Battleship</h3>
        </div>
        <div className="project-description-and-live-preview-button">
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
              src={projectThree}
              alt="A screenshot of my project 3"
            />
          )}

          <p className="project-description">
            This project is a dynamic adaptation of the classic board game
            Battleship using JavaScript and Webpack. It features a challenging
            bot that built with an algorithm to recalculate the probability
            density on each move.
          </p>
          <div className="intersecting-element" data-img="2"></div>
          <h4 className="project-description">Features:</h4>
          <div className="hover-wrapper">
            {videoSrcArray3.map((_, index) => (
              <button
                className="hover3 hover"
                onClick={(e) => changeVideo(e, index)}
                key={index}
              >
                {["Drag & drop", "Click to hit the ships", "Restart"][index]}
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
              src={html}
              alt="html"
              data-tooltip-id="html-tooltip"
              data-tooltip-content="HTML"
            />
            <Tooltip id="html-tooltip" />
            <img
              src={css}
              alt="css"
              data-tooltip-id="css-tooltip"
              data-tooltip-content="CSS"
            />
            <Tooltip id="css-tooltip" />
            <img
              src={javascript}
              alt="js"
              data-tooltip-id="js-tooltip"
              data-tooltip-content="JavaScript"
            />
            <Tooltip id="js-tooltip" />
            <img
              src={webpack}
              alt="webpack"
              data-tooltip-id="webpack-tooltip"
              data-tooltip-content="Webpack"
            />
            <Tooltip id="webpack-tooltip" />
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
              href="https://github.com/williamphk/odin_Battleship/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://williamphk.github.io/odin_Battleship/"
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
