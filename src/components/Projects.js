import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      tech: "React JS",
      demo: "https://react-tic-tac-toe.vercel.app/",
      code: "https://github.com/gvmsamy/react-tic-tac-toe"
    },
    {
      title: "Investment Calculator",
      tech: "React JS",
      demo: "https://react-investment-calculator-sandy-eight.vercel.app/",
      code: "https://github.com/gvmsamy/react-investment-calculator"
    },
    {
      title: "My Portfolio",
      tech: "React JS",
      demo: "https://muniyasamy-portfolio.vercel.app/",
      code: "https://github.com/gvmsamy/muniyasamy-portfolio"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.tech}</p>

            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>

              <a href={project.code} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

