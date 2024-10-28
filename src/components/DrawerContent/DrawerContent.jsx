import React from "react";
import {motion as m} from "framer-motion";
import "./DrawerContent.scss";
import {Link} from "react-router-dom";

export const NavContainerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

export const NavWordVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 50,
    },
  },
  exit: {
    opacity: 1,
    y: 0,
  },
};

const DrawerContent = ({drawerSide}) => {
  return (
    <m.div className="drawer-content-container" initial="hidden" animate="visible" exit="hidden" custom={drawerSide} variants={NavContainerVariants}>
      <div className="model-credit">
        This work is based on The Upper Vestibule{" "}
        <Link className="credit-link" to="https://sketchfab.com/3d-models/the-upper-vestibule-e74928dc62fe457892e52dd97b6aa6e0">
          "The Upper Vestibule"
        </Link>
        by The Hallwyl Museum{" "}
        <Link className="credit-link" to="https://sketchfab.com/TheHallwylMuseum">
          Hallwylska museet{" "}
        </Link>
        licensed under{" "}
        <Link className="credit-link" to="http://creativecommons.org/licenses/by/4.0/">
          CC-BY-4.0
        </Link>
      </div>
      <m.div key="about" className="drawer-row" variants={NavWordVariants}>
        <m.div className="word-text">
          <Link to="#about" className="nav-link">
            <span aria-hidden="true">About</span>
            About
            <span aria-hidden="true">About</span>
          </Link>
        </m.div>
      </m.div>

      <m.div key="work" className="drawer-row" variants={NavWordVariants}>
        <m.div className="word-text">
          <Link to="#work" className="nav-link">
            <span aria-hidden="true">Work</span>
            Work
            <span aria-hidden="true">Work</span>
          </Link>
        </m.div>
      </m.div>

      <m.div key="skills" className="drawer-row" variants={NavWordVariants}>
        <m.div className="word-text">
          <Link to="#skills" className="nav-link">
            <span aria-hidden="true">Skills</span>
            Skills
            <span aria-hidden="true">Skills</span>
          </Link>
        </m.div>
      </m.div>

      <m.div key="contact" className="drawer-row" variants={NavWordVariants}>
        <m.div className="word-text">
          <Link to="#contact" className="nav-link">
            <span aria-hidden="true">Contact</span>
            Contact
            <span aria-hidden="true">Contact</span>
          </Link>
        </m.div>
      </m.div>
    </m.div>
  );
};

export default DrawerContent;
