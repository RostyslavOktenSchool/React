import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import type { Car } from "../models/ICar";
import { createCar } from "../services/carService";
import { carSchema } from "../utils/validation";

type CarFormData = {
  brand: string;
  price: number;
  year: number;
};

export default function CarForm({ onCreated }: { onCreated: (car: Car) => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CarFormData>({
    resolver: joiResolver(carSchema), // ✅ Joi інтеграція
    defaultValues: {
      brand: "",
      price: 0,
      year: 2025,
    },
  });

  async function onSubmit(data: CarFormData) {
    try {
      const created = await createCar(data);
      onCreated(created);
      reset(); // очищаємо форму після успішного сабміту
    } catch {
      alert("Помилка створення автівки");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("brand")} placeholder="Brand" />
        {errors.brand && <p>{errors.brand.message}</p>}
      </div>

      <div>
        <input type="number" {...register("price")} placeholder="Price" />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <div>
        <input type="number" {...register("year")} placeholder="Year" />
        {errors.year && <p>{errors.year.message}</p>}
      </div>

      <button type="submit">Створити</button>
    </form>
  );
}
