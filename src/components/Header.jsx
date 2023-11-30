import { useState, useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

import "./Header.css";
import Menu from "../assets/menu.svg";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useLayoutEffect(() => {
    const mobileBreakpoint = 415;

    if (window.innerWidth > mobileBreakpoint) {
      gsap.fromTo(
        "header",
        { left: "-100%", position: "relative" },
        {
          left: "0%",
          duration: 0.75,
          ease: "expo.inOut",
          delay: 4.25,
        }
      );

      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".intersecting-element",
        scrub: true,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to("nav", { width: "85px", duration: 0.3 });
          gsap.to("nav", { minWidth: "auto", duration: 0.3 });
          gsap.to(".link-name", {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.to(".nav-link", { gap: "0em", duration: 0.3 });
              gsap.to(".link-name", { lineHeight: "10px", duration: 0.3 });
            },
          });
        },
        onLeaveBack: () => {
          gsap.to("nav", { minWidth: "165px", duration: 0.5 });
          gsap.to("nav", { width: "auto", duration: 0.5 });
          gsap.to(".nav-link", { gap: "2em", duration: 0.3 });
          gsap.to(".link-name", { opacity: 1, duration: 0.3 });
          gsap.to(".link-name", { lineHeight: "29px", duration: 0.3 });
        },
      });
    }
  }, []);

  return (
    <header>
      <nav>
        <div className={`nav-link ${showMenu ? "show-menu" : ""}`}>
          <a className="link" href="#about" onClick={toggleMenu}>
            <i className="fa-solid fa-house"></i>
            <span className="link-name">HOME</span>
          </a>
          <a className="link" href="#work" onClick={toggleMenu}>
            <i className="fa-solid fa-folder"></i>
            <span className="link-name">PROJECTS</span>
          </a>
          <a className="link" href="#contact" onClick={toggleMenu}>
            <i className="fa-solid fa-address-card"></i>
            <span className="link-name">CONTACT</span>
          </a>
        </div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Main Menu"
        >
          <img src={Menu} alt="Menu" />
        </button>
      </nav>
    </header>
  );
}
