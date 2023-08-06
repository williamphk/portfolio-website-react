import { useState } from "react";

import "./Header.css";
import Menu from "../assets/menu.svg";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <div className={`nav-link ${showMenu ? "show-menu" : ""}`}>
          <a className="link" href="#about">
            <i className="fa-solid fa-house"></i>HOME
          </a>
          <a className="link" href="#work">
            <i className="fa-solid fa-folder"></i>PROJECTS
          </a>
          <a className="link" href="#contact">
            <i className="fa-solid fa-address-card"></i>CONTACT
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
