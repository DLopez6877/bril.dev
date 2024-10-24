import React, {useEffect} from "react";
import "./PlaygroundPage.scss";
import {Link} from "react-router-dom";
import PageTransition from "../../wrappers/PageTransition/PageTransition";
import SmoothScroll from "../../wrappers/SmoothScroll";
import MinecraftWorld from "../../components/MinecraftWorld/MinecraftWorld";

const PlayPen = () => {
  return (
    <>
      {/* <h2>FOREST</h2>
      <div className="three-container">
        <MinecraftWorld cameraPositions={villageToTree} />
      </div> */}

      {/* <h2>LODGE</h2>
      <div className="three-container">
        <MinecraftWorld cameraPositions={bookshelf} />
      </div> */}

      <h2>FULL</h2>
      <div className="three-container">
        <MinecraftWorld cameraPositions={fullview} />
      </div>

      <h2>ORBIT CONTROLS</h2>
      <div className="three-container">
        <MinecraftWorld />
      </div>

      {/* <h2>TRAIN</h2>
      <div className="three-container">
        <MinecraftWorld cameraPositions={train} />
      </div> */}

      {/* <h2>BRIDGE</h2>
      <div className="three-container">
        <MinecraftWorld cameraPositions={bridge} />
      </div> */}
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
