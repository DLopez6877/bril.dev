import React, {useState} from "react";
import ThreeScene from "../ThreeScene/ThreeScene";
import mouse from "../../assets/mouse.svg";
import "./WorkEntry.scss";
import {Link} from "react-router-dom";
import {motion as m} from "framer-motion";

const WorkEntry = ({date, label, title, description, description2, description3, cameraPosition, showIndicator, onClick, skills}) => {
  const [creditBarShown, setCreditBarShown] = useState(false);

  return (
    <div className="entry" onClick={onClick}>
      <div className="tab">
        <p className="date">{date}</p>
        <p className="tab-label">{label}</p>
      </div>
      <div className="contents">
        <p className="job-title">{title}</p>
        <div className="descriptions">
          <p>{description}</p>
          {description2 && <p>{description2}</p>}
          {description3 && <p>{description3}</p>}
        </div>
        {skills && skills.length > 0 ? (
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="skill">{skill}</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {!cameraPosition || !cameraPosition.length > 0 ? (
          ""
        ) : (
          <div className="scene-credit-wrapper">
            <m.div
              className={`model-credit-container ${showIndicator ? "" : "hidden"} ${creditBarShown ? "visible" : ""}`}
              drag="y"
              dragConstraints={{
                top: -200,
                bottom: -20,
              }}
              dragElastic={0.1}
              dragTransition={{
                power: 0,
                bounceStiffness: 350,
                bounceDamping: 50,
              }}
              onDragStart={() => setCreditBarShown(true)}
            >
              <div className="drag-bar">
                <div className="grip-line"></div>
                <div className="grip-line"></div>
              </div>
              <div className="model-credit">
                This work is based on The Upper Vestibule{" "}
                <Link className="credit-link" to="https://sketchfab.com/3d-models/the-upper-vestibule-e74928dc62fe457892e52dd97b6aa6e0">
                  "The Upper Vestibule"
                </Link>{" "}
                by The Hallwyl Museum{" "}
                <Link className="credit-link" to="https://sketchfab.com/TheHallwylMuseum">
                  Hallwylska museet{" "}
                </Link>
                licensed under{" "}
                <Link className="credit-link" to="http://creativecommons.org/licenses/by/4.0/">
                  CC-BY-4.0
                </Link>
              </div>
            </m.div>

            <div className="scene-container">
              <div className={showIndicator ? "corner hidden" : "corner"}>
                <img src={mouse} alt="Mouse icon" />
              </div>
              <ThreeScene cameraPositions={cameraPosition} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkEntry;
