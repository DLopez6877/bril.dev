import React, {useEffect} from "react";
import "./PlaygroundPage.scss";
import {Link} from "react-router-dom";
import PageTransition from "../../wrappers/PageTransition/PageTransition";
import SmoothScroll from "../../wrappers/SmoothScroll";
import ThreeScene from "../../components/ThreeScene/ThreeScene";
import {kapprum, photos, stairs, photos2, bottom} from "../../lib/Scenes";

const PlayPen = () => {
  return (
    <>
      <h2>SCENE</h2>
      <div className="three-container">
        <ThreeScene cameraPositions={kapprum} />
      </div>

      <h2>ORBIT CONTROLS</h2>
      <div className="three-container">
        <ThreeScene />
      </div>
    </>
  );
};

const PlaygroundPage = () => {
  useEffect(() => {
    console.log("PlaygroundPage mounted");
    return () => {
      console.log("PlaygroundPage unmounted");
    };
  }, []);

  return (
    <>
      {/* <PageTransition> */}
      <SmoothScroll>
        <Link className="playground-link" to="/">
          H
        </Link>
        <div className="playground-container" data-scroll-container>
          <PlayPen />
        </div>
      </SmoothScroll>
      {/* </PageTransition> */}
    </>
  );
};

export default PlaygroundPage;
