import { http } from "./http";
import type { Car, CreateCarDTO } from "../models/ICar";

const CARS_ENDPOINT = "/cars";

export async function getCars(): Promise<Car[]> {
  const { data } = await http.get<Car[]>(CARS_ENDPOINT);
  return data;
}

export async function createCar(payload: CreateCarDTO): Promise<Car> {
  const { data } = await http.post<Car>(CARS_ENDPOINT, payload);
  return data;
}