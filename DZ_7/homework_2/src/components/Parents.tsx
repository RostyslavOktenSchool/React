import React from "react";
import Level2 from "./LevelTwo";
import { useMessage } from "../context/MessageContext";

const Parent: React.FC = () => {
  const { message } = useMessage();

  return (
    <div className="box">
      <h2>Parent</h2>
      {message && <p>Повідомлення: {message}</p>}
      <Level2 />
    </div>
  );
};

export default Parent;
