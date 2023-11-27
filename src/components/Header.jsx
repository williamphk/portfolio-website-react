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
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".intersecting-element",
      scrub: true,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to("nav", { width: "85px", duration: 0.5 });
        gsap.to(".link-name", {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.set(".link-name", { display: "none" });
          },
        });
      },
      onLeaveBack: () => {
        gsap.to("nav", { width: "165px", duration: 0.5 });
        gsap.set(".link-name", { display: "flex" });
        gsap.to(".link-name", { opacity: 1, duration: 0.3 });
      },
    });
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
