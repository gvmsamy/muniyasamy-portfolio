import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <p>
          Email:
          <a href="mailto:muniyasamy.workmail@gmail.com">
            muniyasamy.workmail@gmail.com
          </a>
        </p>

        <p>
          Phone:
          <a href="tel:+916380730544">
            +91 6380730544
          </a>
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/gvmsamy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/muniyasamy0544"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
