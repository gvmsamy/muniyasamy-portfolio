import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section  id="hero" className="hero">
      <h1>Hello, I'm Muniyasamy</h1>
      <h2>Frontend Developer</h2>
      <p>React | Vue | JavaScript | UI Developer</p>

      <a href="/Resume_Muniyasamy.pdf" download>
        <button>Download Resume</button>
      </a>
    </section>
  );
};

export default Hero;
