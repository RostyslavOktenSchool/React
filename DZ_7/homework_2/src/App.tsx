import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Parent from "./components/Parents";
import "./App.css";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("Привіт з App!");

  return (
    <ThemeProvider>
      <div className="app">
        <h1>React дерево компонентів (3 рівні)</h1>
        <p><strong>Повідомлення що надійшло з 3 рівня:</strong> {message}</p>
        <Parent onMessageChange={setMessage} />
      </div>
    </ThemeProvider>
  );
};

export default App;

