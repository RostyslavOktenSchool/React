import { useState } from "react";
import type { Car } from "../models/ICar";
import { createCar } from "../services/carService";
import { getValidationErrors } from "../utils/validation";

export default function CarForm({ onCreated }: { onCreated: (car: Car) => void }) {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [year, setYear] = useState<number>(2025);
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = getValidationErrors(brand, price, year);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const created = await createCar({ brand, price, year });
      onCreated(created);
      setBrand("");
      setPrice(0);
      setYear(2025);
    } catch {
      setErrors(["Помилка створення автівки"]);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" />
      <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} placeholder="Year" />
      {errors.length > 0 && <ul>{errors.map((er) => <li key={er}>{er}</li>)}</ul>}
      <button type="submit">Створити</button>
    </form>
  );
}