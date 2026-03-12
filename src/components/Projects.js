import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      tech: "React JS",
      link: "https://react-tic-tac-toe.vercel.app/"
    },
    {
      title: "Investment Calculator",
      tech: "React JS",
      link: "https://react-investment-calculator-sandy-eight.vercel.app/"
    },
    {
      title: "React Portfolio",
      tech: "React JS",
      link: "https://your-portfolio-link.com"
    }
  ];

  return (
    <section  id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;