import React, {useState, useEffect} from "react";
import ThreeScene from "../ThreeScene/ThreeScene";
import MobileScene from "../MobileScene/MobileScene";
import mouse from "../../assets/mouse.svg";
import {Link} from "react-router-dom";
import "./WorkEntry.scss";

const WorkEntry = ({date, label, title, description, description2, description3, link, cameraPosition, showIndicator, onClick, skills}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="entry" onClick={onClick}>
      <div className="tab">
        <p className="date">{date}</p>
        <p className="tab-label">{label}</p>
      </div>
      <div className="contents">
        <p className="job-title">{title}</p>
        <p>{description}</p>
        {description2 && <p>{description2}</p>}
        {description3 && <p>{description3}</p>}
        {link && (
          <Link to={link} className="work-link">
            Learn more
          </Link>
        )}
        <h3>Featured skills:</h3>
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="skill">{skill}</div>
            </div>
          ))}
        </div>
        <div className="scene-container">
          {isMobile ? (
            <MobileScene />
          ) : (
            <>
              <div className={showIndicator ? "corner hidden" : "corner"}>
                <img src={mouse} alt="Mouse icon" />
              </div>
              <ThreeScene cameraPositions={cameraPosition} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkEntry;
