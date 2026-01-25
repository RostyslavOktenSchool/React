import React from "react";
import Level2 from "./LevelTwo";
import type { IParentProps } from "../interface/IParents";



const Parent: React.FC<IParentProps> = ({ onMessageChange }) => {
  return (
    <div className="box">
      <h2>Parent</h2>
      <Level2 onMessageChange={onMessageChange} />
    </div>
  );
};

export default Parent;
