import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          style={{ width: "500px", height: "auto" }}
          alt="img"
        />
        <div
          style={{
            left: box.leftCol,
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
          }}
          className="bounding-box"
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
