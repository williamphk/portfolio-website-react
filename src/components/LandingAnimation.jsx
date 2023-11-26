import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import "./LandingAnimation.css";

const LandingAnimation = () => {
  const app = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".landing-animation__loader", {
        duration: 1.6,
        y: 80,
        scaleY: 0,
        ease: "expo.inOut",
        delay: 1,
        transformOrigin: "50% 100%",
      }).to(".landing-animation__loader", {
        duration: 1.6,
        scaleY: 0,
        height: "20vh",
        ease: "expo.inOut",
        transformOrigin: "0% -100%",
      });

      tl.to(
        app.current,
        {
          duration: 2,
          top: "-100%",
          ease: "expo.inOut",
          delay: 1.2, // This delay is relative to the start of the timeline
        },
        "-=1.6"
      ); // Overlap this animation with the previous by 1.6 seconds
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className="landing-animation__wrapper" ref={app}>
      <div className="landing-animation__loader"></div>
    </div>
  );
};

export default LandingAnimation;
