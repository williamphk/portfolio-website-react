import { Tooltip } from "react-tooltip";

import react from "../../assets/icons/react.svg";
import node from "../../assets/icons/node.svg";
import mongoDB from "../../assets/icons/mongoDB.svg";
import express from "../../assets/icons/express.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import passport from "../../assets/icons/passport.svg";

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
            <button className="hover hover8">
              Custom authentication with refresh token
            </button>
            <button className="hover hover8">
              Instant Notification with Socket.io
            </button>
            <button className="hover hover8">
              Match with other users based on interested items
            </button>
            <button className="hover hover8">
              Google Map API for finding route
            </button>
            <button className="hover hover8">Dark mode</button>
          </div>
          <div className="project-description">
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
