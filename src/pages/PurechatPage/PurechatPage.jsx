import React from "react";
import "./PurechatPage.scss";
import PurechatScene from "../../components/PurechatScene/PurechatScene";
import { keyboard_cats, mountain, raptor, faces } from "../../lib/Scenes";

const PurechatPage = () => {
  return (
    <div className="purechat-page-container">
      <div className="scene-container">
        <PurechatScene />
      </div>
    </div>
  );
};

export default PurechatPage;
