import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useMessage } from "../context/MessageContext";


const Level3: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { setMessage } = useMessage();

  return (
    <div className={`box ${theme}`}>
      <h4>Level 3</h4>
      <p>Поточна тема: {theme}</p>
      <button onClick={toggleTheme}>Змінити тему</button>
      <button onClick={() => setMessage("Повідомлення з Level 3!")}>
        Відправити повідомлення до батька
      </button>
    </div>
  );
};

export default Level3;
