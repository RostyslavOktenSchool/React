import React from "react";
import Level3 from "./LevelThree";
import type { ILevel2Props } from "../interface/ILevelTwo";



const Level2: React.FC<ILevel2Props> = ({ onMessageChange }) => {
  return (
    <div className="box">
      <h3>Level 2</h3>
      <Level3 onMessageChange={onMessageChange} />
    </div>
  );
};

export default Level2;
