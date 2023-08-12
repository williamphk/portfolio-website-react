import { Tooltip } from "react-tooltip";

import aspnet from "../assets/icons/aspnet.svg";
import csharp from "../assets/icons/csharp.svg";
import mssql from "../assets/icons/mssql.svg";
import github from "../assets/icons/github.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import azureDataStudio from "../assets/icons/azure-data-studio.svg";
import docker from "../assets/icons/docker.svg";

export default function ProjectTwo({ projectTwo }) {
  return (
    <article className="project-two">
      <div className="project-introduction hidden">
        <div>
          <h3 className="project-title">Hikouki Anime</h3>
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
          <p className="project-description">
            A review platform for anime enthusiasts built with ASP.NET MVC and
            Entity framework. This web application allows users to browse
            animes, post their own reviews and read reviews posted by others.
          </p>
          <div className="intersecting-element" data-img="1"></div>
          <p className="project-description">
            The application supports comprehensive CRUD operations across three
            interconnected tables, including 1-to-many and many-to-many
            relationships. Implemented extra features such as user-specific
            review editing and image uploading.
          </p>
          <p className="project-description">
            <img
              src={aspnet}
              alt="aspnet"
              data-tooltip-id="aspnet-tooltip"
              data-tooltip-content="ASP.NET MVC"
            />
            <Tooltip id="aspnet-tooltip" />
            <img
              src={csharp}
              alt="csharp"
              data-tooltip-id="csharp-tooltip"
              data-tooltip-content="C#"
            />
            <Tooltip id="csharp-tooltip" />
            <img
              src={mssql}
              alt="mssql"
              data-tooltip-id="mssql-tooltip"
              data-tooltip-content="Microsoft SQL Server"
            />
            <Tooltip id="mssql-tooltip" />
            <img
              src={azureDataStudio}
              alt="Azure Data Studio"
              data-tooltip-id="azureDataStudio-tooltip"
              data-tooltip-content="Azure Data Studio"
            />
            <Tooltip id="azureDataStudio-tooltip" />
            <img
              src={docker}
              alt="docker"
              data-tooltip-id="docker-tooltip"
              data-tooltip-content="Docker"
            />
            <Tooltip id="docker-tooltip" />
            <img
              src={bootstrap}
              alt="bootstrap"
              data-tooltip-id="bootstrap-tooltip"
              data-tooltip-content="Bootstrap"
            />
            <Tooltip id="bootstrap-tooltip" />
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
              href="https://github.com/williamphk/Passion_Project/"
              className="live-preview-button"
              target="_blank"
            >
              Source Code
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=tX8cEEDMW7o"
              className="live-preview-button"
              target="_blank"
            >
              Demonstration
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
