import { useState, useEffect, useRef } from "react";

import "./Projects.css";
import projectOne from "../assets/project-one.webp";
import projectTwo from "../assets/project-two.webp";
import projectThree from "../assets/project-three.webp";

export default function Projects() {
  const [intersectingImageArray, setIntersectingImageArray] = useState([]);
  const observeElementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const projectWrapper = entry.target.closest(".project-wrapper");
        const imageWrapper = projectWrapper.querySelector(".image-wrapper");
        const imageElements = imageWrapper.querySelectorAll("img");
        const imageID = entry.target.getAttribute("data-img");

        if (entry.isIntersecting) {
          console.log("intersecting");
          entry.target.parentElement.parentElement.classList.add("show");
          if (!intersectingImageArray.includes(imageID)) {
            setIntersectingImageArray((prevArray) => [...prevArray, imageID]);
          }
          imageElements.forEach((el, index) => {
            if (index == imageID) {
              el.style.display = "block";
            } else {
              el.style.display = "none";
            }
          });
        } else {
          const index = intersectingImageArray.indexOf(imageID);
          if (index > -1) {
            setIntersectingImageArray((prevArray) =>
              prevArray.filter((id) => id !== imageID)
            );
          }
          if (intersectingImageArray.length > 0) {
            imageElements.forEach((el, index) => {
              if (
                index ==
                intersectingImageArray[intersectingImageArray.length - 1]
              ) {
                el.style.display = "block";
              } else {
                el.style.display = "none";
              }
            });
          }
        }
      });
    });

    [
      ...observeElementsRef.current.querySelectorAll(".intersecting-element"),
    ].forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Cleanup on unmount
  }, [intersectingImageArray]);

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
                  <div className="hover1">
                    Register & Login
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                  <div className="hover1">
                    Facebook OAuth
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                  <div className="hover1">
                    Post & comment
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                  <div className="hover1">
                    Friend request & Friend
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                  <div className="hover1">
                    Profile
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                </div>
                <p className="project-description">
                  {/* node */}
                  {/* react */}
                  {/* mongoDB */}
                  {/* express */}
                  {/* Passport */}
                  {/* Tailwind */}
                  {/* redux */}
                  {/* axios */}
                  {/* azure */}
                  {/* github */}
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
                  {/* ASP.NET */}
                  {/* C# */}
                  {/* MSSQL */}
                  {/* azuredatastudio */}
                  {/* docker */}
                  {/* bootstrap */}
                  {/* github */}
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
                  <div className="hover3">
                    Drag & drop
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                  <div className="hover3">
                    Click to hit the ships
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                  <div className="hover3">
                    Restart
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                  </div>
                </div>
                <p className="project-description">
                  {/* html */}
                  {/* css */}
                  {/* JS */}
                  {/* webpack */}
                  {/* github */}
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
          <img
            className="project-image fade"
            src={projectOne}
            alt="A screenshot of my project 1"
          />
          <img
            className="project-image fade"
            src={projectTwo}
            alt="A screenshot of my project 2"
          />
          <img
            className="project-image fade"
            src={projectThree}
            alt="A screenshot of my project 3"
          />
        </div>
      </div>
    </section>
  );
}
