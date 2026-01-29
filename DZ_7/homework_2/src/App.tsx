import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { MessageProvider } from "./context/MessageContext";
import Parent from "./components/Parents";
import "./App.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MessageProvider>
        <div className="app">
          <h1>React дерево компонентів (3 рівні)</h1>
          <Parent />
        </div>
      </MessageProvider>
    </ThemeProvider>
  );
};

export default App;

