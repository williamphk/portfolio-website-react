import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import "./LandingAnimation.css";

const LandingAnimation = () => {
  const app = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".landing-animation__loader", {
        duration: 1.5,
        y: 80,
        scaleY: 0,
        ease: "expo.inOut",
        delay: 1,
        transformOrigin: "50% 100%",
      }).to(".landing-animation__loader", {
        duration: 1.5,
        scaleY: 0,
        backgroundColor: "#000",
        // height: "20vh",
        ease: "expo.inOut",
        transformOrigin: "0% -100%",
      });

      tl.to(
        app.current,
        {
          duration: 2,
          top: "-200%",
          ease: "expo.inOut",
        },
        "-=0.25"
      );
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className="landing-animation__wrapper" ref={app}>
      <div className="landing-animation__loader"></div>
      <div className="landing-animation__name">WP</div>
    </div>
  );
};

export default LandingAnimation;
