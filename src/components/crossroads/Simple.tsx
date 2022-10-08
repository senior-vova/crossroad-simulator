import React, { useState } from "react";
import "./Simple.css";

const SimpleCrossroad: React.FC = () => {
  const [addCarMode, setAddCarMode] = useState(false);

  const simulate = () => {};
  const addCar = () => {
    setAddCarMode(true);
  };
  type Place = "up" | "left" | "right" | "down";
  const addCarToPlace = (place: Place) => {
    switch (place) {
      case "left":
        break;
      case "up":
        break;
      case "right":
        break;
      case "down":
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button className="btn btn-info mb-3" onClick={addCar}>
        Add car
      </button>
      <div className="cross">
        <div className="left">
          <div className="line"></div>
          <div className="line">
            <div
              className={`car-place ${addCarMode && "active"}`}
              onClick={() => addCarToPlace("left")}
            ></div>
          </div>
        </div>
        <div className="up">
          <div className="line">
            <div
              className={`car-place ${addCarMode && "active"}`}
              onClick={() => addCarToPlace("up")}
            ></div>
          </div>
          <div className="line"></div>
        </div>
        <div className="right">
          <div className="line">
            <div
              className={`car-place ${addCarMode && "active"}`}
              onClick={() => addCarToPlace("right")}
            ></div>
          </div>
          <div className="line"></div>
        </div>
        <div className="down">
          <div className="line"></div>
          <div className="line">
            <div
              className={`car-place ${addCarMode && "active"}`}
              onClick={() => addCarToPlace("down")}
            ></div>
          </div>
        </div>
        <div className="center"></div>
      </div>
      <button className="btn btn-success mt-3" onClick={simulate}>
        Simulate
      </button>
    </>
  );
};

export default SimpleCrossroad;
