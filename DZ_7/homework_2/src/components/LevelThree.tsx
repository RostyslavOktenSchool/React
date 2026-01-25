import React from "react";
import { useTheme } from "../context/ThemeContext";
import type { ILevel3Props } from "../interface/ILevelThree";


const Level3: React.FC<ILevel3Props> = ({ onMessageChange }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`box ${theme}`}>
      <h4>Level 3</h4>
      <p>Поточна тема: {theme}</p>
      <button onClick={toggleTheme}>Змінити тему</button>
      <button onClick={() => onMessageChange("Повідомлення з Level 3!")}>
        Відправити повідомлення до батька
      </button>
    </div>
  );
};

export default Level3;
