export interface Car {
  id: number; 
  brand: string; 
  price: number; 
  year: number; 
}

export type CreateCarDTO = Omit<Car, "id">;