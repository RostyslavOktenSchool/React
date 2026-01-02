import { useEffect, useState } from "react";
import type { Car } from "../models/ICar";
import { getCars } from "../services/carService";

export default function CarsListPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getCars().then(setCars).catch(() => alert("Помилка завантаження"));
  }, []);

  return (
    <div>
      <h2>Список автівок</h2>
      <ul>
        {cars.map((c) => (
          <li key={c.id}>{c.brand} — {c.price}$ — {c.year}</li>
        ))}
      </ul>
    </div>
  );
}