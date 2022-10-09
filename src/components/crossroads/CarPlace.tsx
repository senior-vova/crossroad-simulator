import React, { useState } from "react";
import { Cars } from "../../data/cars";
import { ICar, Place } from "../../data/types";
import { useInterval } from "../../hooks/interval";
import AddCarModal from "./AddCarModal";

type PropsType = {
  addCarMode: boolean;
  addCarToPlace: (p: Place, car: ICar) => void;
  position: Place;
  car: ICar | null;
};
const CarPlace: React.FC<PropsType> = ({
  addCarMode,
  car,
  addCarToPlace,
  position,
}) => {
  const [show, setShow] = useState(false);
  const [isBlink, setIsBlink] = useState(false);
  useInterval(() => {
    setIsBlink(!isBlink);
  }, 500);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCar = (car: ICar) => {
    addCarToPlace(position, car);
  };

  return car ? (
    <div className={`car way-${car.way} pos-${position} ${isBlink && "blink"}`}>
      <img src={Cars[car.color]} alt="car" />
    </div>
  ) : addCarMode ? (
    <>
      <div className={`car-place`} onClick={handleShow} />
      <AddCarModal show={show} handleClose={handleClose} onAddCar={addCar} />
    </>
  ) : (
    <></>
  );
};

export default CarPlace;
