import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

import github from "../../assets/icons/github.svg";

export default function ProjectTwo({ projectTwo }) {
  const [projectName, setProjectName] = useState("");
  const [blurb1, setBlurb1] = useState("");
  const [blurb2, setBlurb2] = useState("");
  const [liveURL, setLiveURL] = useState("");
  const [githubURL, setGithubURL] = useState("");

  useEffect(() => {
    const getProject = async () => {
      const response = await fetch("/project.json");
      const data = await response.json();

      setProjectName(data[1].projectName);
      setBlurb1(data[1].blurb[0]);
      setBlurb2(data[1].blurb[1]);
      setLiveURL(data[1].liveURL);
      setGithubURL(data[1].githubURL);
    };
    getProject();
  }, []);

  return (
    <article className="project-two">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">{projectName}</h3>
        </div>
        <div className="project-description-and-live-preview-button">
          <img
            className="project-image-tablet"
            src={projectTwo}
            alt="A screenshot of my project 2"
          />
          <video controls className="video-tablet">
            <source type="video/mp4" className="video-tablet-source" />
          </video>
          <p className="project-description">{blurb1}</p>
          <div className="intersecting-element" data-img="1"></div>
          <p className="project-description">{blurb2}</p>
          <p className="project-description">
            <img
              src={github}
              alt="github"
              data-tooltip-id="github-tooltip"
              data-tooltip-content="Github"
            />
            <Tooltip id="github-tooltip" />
          </p>

          <div className="project-button-wrapper">
            <a href={githubURL} className="live-preview-button" target="_blank">
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a href={liveURL} className="live-preview-button" target="_blank">
              Demonstration
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
