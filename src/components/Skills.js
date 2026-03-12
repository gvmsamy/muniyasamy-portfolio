import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "React",
    "Vue",
    "JavaScript",
    "HTML",
    "CSS",
    "Redux",
    "Github",
    "GraphQL"
  ];

  return (
    <section id="skills"  className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
