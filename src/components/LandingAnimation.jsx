import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import "./LandingAnimation.css";

const LandingAnimation = () => {
  const app = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(".logo", {
      backgroundPosition: "-400px 53%",
      duration: 6.5,
      ease: "none",
    });
    tl.to(
      ".logo",
      {
        fontSize: "12rem",
        top: "15%",
        left: "-70rem",
        duration: 2.5,
        ease: "power4.inOut",
      },
      "-=5"
    );
    tl.to(
      ".line",
      {
        duration: 1,
        height: "10rem",
        ease: "power4.inOut",
      },
      "-=4.25"
    );
    tl.to(
      ".wrapper",
      {
        duration: 2.5,
        left: "-100%",
        ease: "power4.inOut",
      },
      "-=3"
    );
  }, []);

  return (
    <div>
      <div className="logo">
        <h1>
          HELLO <br />
          WORLD
        </h1>
      </div>

      <div className="wrapper">
        <div className="line">Welcome to my porfolio</div>
      </div>
    </div>
  );
};

export default LandingAnimation;
