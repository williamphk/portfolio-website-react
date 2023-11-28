import { Tooltip } from "react-tooltip";

import javascript from "../../assets/icons/javascript.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";

export default function ProjectEight({ projectEight }) {
  return (
    <article className="project">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">PackPals</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <img
            className="project-image-tablet"
            src={projectEight}
            alt="A screenshot of my project 8"
          />
          <p className="project-description">
            A grocery matching app that allows users to find other users to buy
            groceries for them.
          </p>
          <div className="intersecting-element" data-img="7"></div>
          <h4 className="project-description">Key Features:</h4>
          <div className="hover-wrapper">
            <button className="hover hover8">Google Map API</button>
            <button className="hover hover8">
              Instant Notification with Socket.io
            </button>
            <button className="hover hover8">Dark mode</button>
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
              href="https://github.com/williamphk/PackPals-frontend/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code: Frontend
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://github.com/williamphk/PackPals-backend/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code: Backend
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://packpals.williamphk.com/"
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
