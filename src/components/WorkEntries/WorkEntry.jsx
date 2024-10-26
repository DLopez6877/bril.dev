import ThreeScene from "../ThreeScene/ThreeScene";
import mouse from "../../assets/mouse.svg";
import {Link} from "react-router-dom";
import "./WorkEntry.scss";

const WorkEntry = ({date, label, title, description, link, cameraPosition, showIndicator, onClick}) => (
  <div className="entry" onClick={onClick}>
    <div className="tab">
      <p className="date">{date}</p>
      <p className="tab-label">{label}</p>
    </div>
    <div className="contents">
      <p className="job-title">{title}</p>
      <p>{description}</p>
      {link && (
        <Link to={link} className="work-link">
          Learn more
        </Link>
      )}
      <div className="scene-container">
        <div className={showIndicator ? "corner hidden" : "corner"}>
          <img src={mouse} alt="Mouse icon" />
        </div>
        <ThreeScene cameraPositions={cameraPosition} />
      </div>
    </div>
  </div>
);

export default WorkEntry;
