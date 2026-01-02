import { useState } from "react";
import type { Car } from "../models/ICar";
import CarForm from "../components/CarForm";

export default function CreateCarPage() {
  const [created, setCreated] = useState<Car | null>(null);

  return (
    <div>
      <h2>Створити автівку</h2>
      <CarForm onCreated={setCreated} />
      {created && (
        <div>
          <h3>Створено:</h3>
          <p>{created.brand} — {created.price}$ — {created.year}</p>
        </div>
      )}
    </div>
  );
}