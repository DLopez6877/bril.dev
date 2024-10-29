import React from "react";
import "./Contact.scss";
import GradientCanvas from "../GradientCanvas/GradientCanvas";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import useIsWideAspectRatio from "../../hooks/useIsWideAspectRatio";
import ReactGA from "react-ga";

const Contact = () => {
  const isWideAspectRatio = useIsWideAspectRatio();

  const handleEmailClick = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked Send Email Button",
      label: "Contact Send Email",
    });
    window.location.href = "mailto:bril.dev@outlook.com";
  };

  const handleGithubClick = () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked External Link",
      label: "GitHub Profile",
    });
  };

  const handleLinkedInClick = () => {
    ReactGA.event({
      category: "Outbound",
      action: "Clicked External Link",
      label: "LinkedIn Profile",
    });
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <div
      id="contact"
      className={
        isWideAspectRatio ? "contact-container wide" : "contact-container"
      }
    >
      <div className="visible-content-container">
        <div className="content">
          <GradientCanvas id="contact-gradient" />
          <h2>LET'S</h2>
          <h2>CONNECT</h2>
          <div className="pills-container">
            <p className="interests">CURRENTLY INTERESTED IN:</p>
            <div className="pills">
              <div className="pill">FRONTEND</div>
              <div className="pill">UX/UI DESIGN</div>
              <div className="pill">FULL-TIME</div>
              <div className="pill">PART-TIME</div>
              <div className="pill">CONTRACT</div>
              <div className="pill">STARTUPS</div>
              <div className="pill">CONSULTING</div>
              <div className="pill">FREELANCE</div>
            </div>
          </div>
        </div>

        <footer>
          <m.button
            onClick={handleEmailClick}
            aria-label="Send an email to bril.dev@outlook.com"
            whileHover="hover"
            initial="initial"
            animate="spring"
          >
            EMAIL ME{" "}
            <m.i
              className="fas fa-arrow-right"
              variants={arrowVariants}
              animate={{ x: [5, 0] }}
              transition={{
                type: "spring",
                duration: 3,
                bounce: 0.75,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            />
          </m.button>

          <Link
            to="https://www.linkedin.com/in/dlopez6877"
            onClick={handleLinkedInClick}
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </Link>

          <Link
            className="github"
            to="https://www.linkedin.com/in/dlopez6877"
            onClick={handleGithubClick}
          >
            <i className="fab fa-github" aria-hidden="true" />
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
