import { useState, useEffect, useRef } from "react";

import "./Projects.css";

import ProjectOne from "./ProjectOne.jsx";
import ProjectTwo from "./ProjectTwo.jsx";
import ProjectThree from "./ProjectThree.jsx";

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
  const tableVideoWidth = window.innerWidth;
  const tableVideoHeight = (window.innerWidth * 9) / 16;

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
          <ProjectOne
            projectOne={projectOne}
            videoSrcArray1={videoSrcArray1}
            currentVideoIndex={currentVideoIndex}
            changeVideo={changeVideo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentVideoSrc={currentVideoSrc}
            videoWidth={tableVideoWidth}
            videoHeight={tableVideoHeight}
          />
          <ProjectTwo
            projectTwo={projectTwo}
            currentVideoIndex={currentVideoIndex}
            changeVideo={changeVideo}
            isPlaying={isPlaying}
          />
          <ProjectThree
            projectThree={projectThree}
            videoSrcArray3={videoSrcArray3}
            currentVideoIndex={currentVideoIndex}
            changeVideo={changeVideo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentVideoSrc={currentVideoSrc}
            videoWidth={tableVideoWidth}
            videoHeight={tableVideoHeight}
          />
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
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
