import { useState, useEffect, useRef } from "react";

import "./Projects.css";
import projectOne from "../assets/project-one.webp";
import projectTwo from "../assets/project-two.webp";
import projectThree from "../assets/project-three.webp";

import register from "../assets/videos/Project_1/Register.mp4";
import oauth from "../assets/videos/Project_1/OAuth.mp4";
import post from "../assets/videos/Project_1/Post.mp4";
import friend from "../assets/videos/Project_1/Friend.mp4";
import profile from "../assets/videos/Project_1/Profile.mp4";
import drag from "../assets/videos/Project_3/Drag-n-drop.mp4";
import click from "../assets/videos/Project_3/Click.mp4";
import restart from "../assets/videos/Project_3/Restart.mp4";

import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import mongoDB from "../assets/icons/mongoDB.svg";
import express from "../assets/icons/express.svg";
import javascript from "../assets/icons/javascript.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import tailwind from "../assets/icons/tailwind.svg";
import passport from "../assets/icons/passport.svg";
import redux from "../assets/icons/redux.svg";
import axios from "../assets/icons/axios.svg";
import aspnet from "../assets/icons/aspnet.svg";
import csharp from "../assets/icons/csharp.svg";
import mssql from "../assets/icons/mssql.svg";
import webpack from "../assets/icons/webpack.svg";
import github from "../assets/icons/github.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import azureDataStudio from "../assets/icons/azure-data-studio.svg";
import azure from "../assets/icons/azure.svg";
import docker from "../assets/icons/docker.svg";

export default function Projects() {
  const [intersectingImageArray, setIntersectingImageArray] = useState([]);
  const observeElementsRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const imageArray = [projectOne, projectTwo, projectThree];

  const [currentVideoSrc, setCurrentVideoSrc] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const videoSrcArray1 = [register, oauth, post, friend, profile];
  const videoSrcArray3 = [drag, click, restart];

  const videoWidth = window.innerWidth / 2 - 40;
  const videoHeight = ((window.innerWidth / 2 - 40) * 9) / 16;

  useEffect(() => {
    const mediaQueryTablet = window.matchMedia("(max-width: 1200px)");
    const rootMargin = mediaQueryTablet.matches ? "400px" : "0px";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageID = entry.target.getAttribute("data-img");

          if (entry.isIntersecting) {
            setIsPlaying(false);
            entry.target.parentElement.parentElement.classList.add("show");
            if (!intersectingImageArray.includes(imageID)) {
              setIntersectingImageArray([...intersectingImageArray, imageID]);
            }
          } else {
            const index = intersectingImageArray.indexOf(imageID);
            if (index > -1) {
              setIntersectingImageArray((prevArray) =>
                prevArray.filter((id) => id !== imageID)
              );
            }
            if (intersectingImageArray.length > 0) {
              setCurrentImageIndex(
                intersectingImageArray[intersectingImageArray.length - 1]
              );
            }
          }
        });
      },
      { rootMargin }
    );

    observeElementsRef.current
      .querySelectorAll(".intersecting-element")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup on unmount
  }, [intersectingImageArray]);

  const changeVideo = (e, index) => {
    const hoverClass = e.target.className;
    let src;

    if (
      hoverClass.includes("hover1") ||
      e.target.parentElement.className.includes("hover1")
    ) {
      src = videoSrcArray1[index];
    } else if (
      hoverClass.includes("hover3") ||
      e.target.parentElement.className.includes("hover3")
    ) {
      src = videoSrcArray3[index];
    }

    setCurrentVideoIndex(index);
    setCurrentVideoSrc(src);
    setIsPlaying(true);
  };

  return (
    <section className="work" id="work">
      <h2 className="section-title">Crafted with Heart</h2>
      <div className="project-wrapper">
        <div className="project" ref={observeElementsRef}>
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
                  (MongoDB, Express.js, React, Node.js) with features such as
                  user authentication, OAuth, server-side validation, responsive
                  design, client-side management, and user customization.
                </p>
                <div className="intersecting-element" data-img="0"></div>
                <h4 className="project-description">Features:</h4>
                <div className="hover-wrapper1">
                  {videoSrcArray1.map((_, index) => (
                    <button
                      className="hover1"
                      onClick={(e) => changeVideo(e, index)}
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
                  <img src={node} alt="node" />
                  <img src={react} alt="react" />
                  <img src={mongoDB} alt="mongoDB" />
                  <img src={express} alt="express" />
                  <img src={passport} alt="passport" />
                  <img src={tailwind} alt="tailwind" />
                  <img src={redux} alt="redux" />
                  <img src={axios} alt="axios" />
                  <img src={azure} alt="azure" />
                  <img src={github} alt="github" />
                </p>
                <div className="project-button-wrapper">
                  <a
                    href="https://github.com/williamphk/Odin-Book-frontend/"
                    className="live-preview-button"
                    target="_blank"
                  >
                    Source Code: Frontend
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="https://github.com/williamphk/Odin-Book-API/"
                    className="live-preview-button"
                    target="_blank"
                  >
                    Source Code: Backend
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="https://williamphk.github.io/Odin-Book-frontend/"
                    className="live-preview-button"
                    target="_blank"
                  >
                    Live Preview
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
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
                  A review platform for anime enthusiasts built with ASP.NET MVC
                  and Entity framework. This web application allows users to
                  browse animes, post their own reviews and read reviews posted
                  by others.
                </p>
                <div className="intersecting-element" data-img="1"></div>
                <p className="project-description">
                  The application supports comprehensive CRUD operations across
                  three interconnected tables, including 1-to-many and
                  many-to-many relationships. Implemented extra features such as
                  user-specific review editing and image uploading.
                </p>
                <p className="project-description">
                  <img src={aspnet} alt="aspnet" />
                  <img src={csharp} alt="csharp" />
                  <img src={mssql} alt="mssql" />
                  <img src={azureDataStudio} alt="Azure Data Studio" />
                  <img src={docker} alt="docker" />
                  <img src={bootstrap} alt="bootstrap" />
                  <img src={github} alt="github" />
                </p>

                <div className="project-button-wrapper">
                  <a
                    href="https://github.com/williamphk/Passion_Project/"
                    className="live-preview-button"
                    target="_blank"
                  >
                    Source Code
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=tX8cEEDMW7o"
                    className="live-preview-button"
                    target="_blank"
                  >
                    Demonstration
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article className="project-three">
            <div className="project-introduction hidden">
              <div>
                <h3 className="project-title">The Battleship</h3>
              </div>
              <div className="project-description-and-live-preview-button">
                <video controls className="video-tablet">
                  <source type="video/mp4" className="video-tablet-source" />
                </video>
                <img
                  className="project-image-tablet"
                  src={projectThree}
                  alt="A screenshot of my project 3"
                />
                <p className="project-description">
                  This project is a dynamic adaptation of the classic board game
                  Battleship using JavaScript and Webpack. It features a
                  challenging bot that built with an algorithm to recalculate
                  the probability density on each move.
                </p>
                <div className="intersecting-element" data-img="2"></div>
                <h4 className="project-description">Features:</h4>
                <div className="hover-wrapper3">
                  {videoSrcArray3.map((_, index) => (
                    <button
                      className="hover3"
                      onClick={(e) => changeVideo(e, index)}
                    >
                      {
                        ["Drag & drop", "Click to hit the ships", "Restart"][
                          index
                        ]
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
                  <img src={html} alt="html" />
                  <img src={css} alt="css" />
                  <img src={javascript} alt="js" />
                  <img src={webpack} alt="webpack" />
                  <img src={github} alt="github" />
                </p>
                <div className="project-button-wrapper">
                  <a
                    href="https://github.com/williamphk/odin_Battleship/"
                    className="live-preview-button"
                    target="_blank"
                  >
                    Source Code
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                  <a
                    href="https://williamphk.github.io/odin_Battleship/"
                    className="live-preview-button"
                    target="_blank"
                  >
                    Live Preview
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="image-wrapper">
          {isPlaying ? (
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
            <div>
              {imageArray.map((_, index) => (
                <img
                  className="project-image fade"
                  src={imageArray[index]}
                  alt={`A screenshot of my project ${index + 1}`}
                  style={{
                    display: currentImageIndex == index ? "block" : "none",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
