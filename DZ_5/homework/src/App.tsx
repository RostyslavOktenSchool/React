import { useState } from "react";
import CarsListPage from "./pages/CarsListPage";
import CreateCarPage from "./pages/CreateCarPage";
import "./App.css"

export default function App() {
  const [tab, setTab] = useState<"list" | "create">("list");

  return (
    <div>
      <h1>Cars</h1>
      <button onClick={() => setTab("list")}>Список</button>
      <button onClick={() => setTab("create")}>Створення</button>
      {tab === "list" ? <CarsListPage /> : <CreateCarPage />}
    </div>
  );
}
