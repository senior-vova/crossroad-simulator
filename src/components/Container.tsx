import React from "react";
import { CrossRoadType } from "../data/types";
import SimpleCrossroad from "./crossroads/Simple";

type PropsType = { crossroadType: CrossRoadType };
const Container: React.FC<PropsType> = ({ crossroadType }) => {
  return (
    <section className="crossroad my-4">
      {crossroadType === "simple" && <SimpleCrossroad />}
    </section>
  );
};

export default Container;
