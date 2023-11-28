import { Tooltip } from "react-tooltip";

import javascript from "../../assets/icons/javascript.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";

export default function ProjectSeven({ projectSeven }) {
  return (
    <article className="project">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">Health for All Partnership Service</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <img
            className="project-image-tablet"
            src={projectSeven}
            alt="A screenshot of my project 7"
          />
          <p className="project-description">
            Collaborated with UIUX designer to create a website for a non-profit
            organization.
          </p>
          <div className="intersecting-element" data-img="6"></div>
          <h4 className="project-description">Key Features:</h4>
          <div className="hover-wrapper">
            <button className="hover hover7">Fully Responsive</button>
          </div>
          <div className="project-description">
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
          </div>
          <div className="project-button-wrapper">
            <a
              href="https://github.com/williamphk/Health-for-All-Partnership-Service/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://williamphk.github.io/Health-for-All-Partnership-Service/"
              className="live-preview-button"
              id="live-preview"
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
