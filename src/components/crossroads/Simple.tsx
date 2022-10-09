import React, { useState } from "react";
import { ICar, Place } from "../../data/types";
import CarPlace from "./CarPlace";
import "./Simple.css";

const SimpleCrossroad: React.FC = () => {
  const [addCarMode, setAddCarMode] = useState(false);
  const [simulateDisabled, setSimDisabled] = useState(false);
  const defaultCarsState = {
    left: null,
    up: null,
    right: null,
    down: null,
  };
  const [carsState, setCarsState] =
    useState<Record<Place, ICar | null>>(defaultCarsState);

  const addCar = () => {
    setAddCarMode(true);
  };
  const clear = () => {
    setAddCarMode(true);
    setCarsState(defaultCarsState);
  };
  const addCarToPlace = (place: Place, car: ICar) => {
    setCarsState({ ...carsState, [place]: car });
    setAddCarMode(false);
  };
  const allCarsExists = () => {
    let carsCount = 0;
    carsState.left && carsCount++;
    carsState.up && carsCount++;
    carsState.right && carsCount++;
    carsState.down && carsCount++;
    if (carsCount >= 3) return true;
    else return false;
  };
  const getQueue = (): Place[] => {
    const queue: Place[] = [];
    if (carsState.left) {
      if (carsState.down) {
        if (carsState.right) {
          queue.push("right");
          queue.push("down");
          queue.push("left");
        } else {
          queue.push("down");
          queue.push("left");
          if (carsState.up) {
            queue.push("up");
          }
        }
      } else {
        queue.push("left");
        if (carsState.right) {
          queue.push("right");
        }
        if (carsState.up) {
          queue.push("up");
        }
      }
    } else if (carsState.down) {
      if (carsState.right) {
        if (carsState.up) {
          queue.push("up");
          queue.push("right");
          queue.push("down");
        } else {
          queue.push("right");
          queue.push("down");
          if (carsState.left) {
            queue.push("left");
          }
        }
      } else {
        queue.push("down");
        if (carsState.up) {
          queue.push("up");
        }
        if (carsState.left) {
          queue.push("left");
        }
      }
    } else if (carsState.right) {
      if (carsState.up) {
        if (carsState.left) {
          queue.push("left");
          queue.push("up");
          queue.push("right");
        } else {
          queue.push("up");
          queue.push("right");
          if (carsState.down) {
            queue.push("down");
          }
        }
      } else {
        queue.push("right");
        if (carsState.left) {
          queue.push("left");
        }
        if (carsState.down) {
          queue.push("down");
        }
      }
    } else if (carsState.up) {
      if (carsState.left) {
        if (carsState.down) {
          queue.push("down");
          queue.push("left");
          queue.push("up");
        } else {
          queue.push("left");
          queue.push("up");
          if (carsState.right) {
            queue.push("right");
          }
        }
      } else {
        queue.push("up");
        if (carsState.down) {
          queue.push("down");
        }
        if (carsState.right) {
          queue.push("right");
        }
      }
    }
    return queue;
  };
  const simulate = async () => {
    setSimDisabled(true);
    const queue = getQueue();
    const move = (place: Place, index: number) => {
      return new Promise<void>((res) => {
        const car = document.querySelector(`.${place} .car`);
        car?.setAttribute("id", "simulate");
        setTimeout(() => {
          const clearCars = { ...carsState };
          for (let i = 0; i <= index; i++) {
            clearCars[queue[i]] = null;
          }
          setCarsState({ ...clearCars });
          res();
        }, 2000);
      });
    };

    if (queue[0]) await move(queue[0], 0);
    if (queue[1]) await move(queue[1], 1);
    if (queue[2]) await move(queue[2], 2);
    setSimDisabled(false);
  };

  return (
    <>
      {!allCarsExists() ? (
        <button className="btn btn-info mb-3" onClick={addCar}>
          Add car
        </button>
      ) : (
        <button className="btn btn-warning mb-3" onClick={clear}>
          Clear crossroad
        </button>
      )}
      <div className={`cross`}>
        <div className="left">
          <div className="line"></div>
          <div className="line">
            <CarPlace
              addCarMode={addCarMode}
              addCarToPlace={addCarToPlace}
              car={carsState.left}
              position={"left"}
            />
          </div>
        </div>
        <div className="up">
          <div className="line">
            <CarPlace
              addCarMode={addCarMode}
              addCarToPlace={addCarToPlace}
              car={carsState.up}
              position={"up"}
            />
          </div>
          <div className="line"></div>
        </div>
        <div className="right">
          <div className="line">
            <CarPlace
              addCarMode={addCarMode}
              addCarToPlace={addCarToPlace}
              car={carsState.right}
              position={"right"}
            />
          </div>
          <div className="line"></div>
        </div>
        <div className="down">
          <div className="line"></div>
          <div className="line">
            <CarPlace
              addCarMode={addCarMode}
              addCarToPlace={addCarToPlace}
              car={carsState.down}
              position={"down"}
            />
          </div>
        </div>
        <div className="center"></div>
      </div>
      <button
        className="btn btn-success mt-3"
        onClick={simulate}
        disabled={simulateDisabled}
      >
        Simulate
      </button>
    </>
  );
};

export default SimpleCrossroad;
