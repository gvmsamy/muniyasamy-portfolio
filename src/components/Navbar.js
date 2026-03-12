import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Muniyasamy</h2>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
