import React from "react";
import { CrossRoadType } from "../data/types";

type PropsType = {
  options: string[];
  value: string;
  setValue: (v: CrossRoadType) => void;
};
const CrossroadSelect: React.FC<PropsType> = ({ value, setValue, options }) => {
  return (
    <div className="select-crossroad">
      <span className="me-2 p-1">Crossroad type</span>
      <select
        className="p-1"
        value={value}
        onChange={(e) => setValue(e.target.value as CrossRoadType)}
      >
        {options.map((op, i) => (
          <option key={i} value={op.toLowerCase()}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CrossroadSelect;
