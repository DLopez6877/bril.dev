import React, {useState, useEffect} from "react";
import ThreeScene from "../ThreeScene/ThreeScene";
import mouse from "../../assets/mouse.svg";
import "./WorkEntry.scss";

const WorkEntry = ({date, label, title, description, description2, description3, cameraPosition, showIndicator, onClick, skills}) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();
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
        {isMobile ? (
          ""
        ) : (
          <div className="scene-container">
            <div className={showIndicator ? "corner hidden" : "corner"}>
              <img src={mouse} alt="Mouse icon" />
            </div>
            <ThreeScene cameraPositions={cameraPosition} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkEntry;
