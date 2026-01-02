export function validateBrand(brand: string): boolean {
  const regex = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/;
  return regex.test(brand);
}

export function validatePrice(price: number): boolean {
  return Number.isInteger(price) && price >= 0 && price <= 1_000_000;
}

export function validateYear(year: number): boolean {
  return Number.isInteger(year) && year >= 1990 && year <= 2025;
}

export function getValidationErrors(brand: string, price: number, year: number): string[] {
  const errors: string[] = [];
  if (!validateBrand(brand)) errors.push("Brand: тільки літери, довжина 1–20.");
  if (!validatePrice(price)) errors.push("Price: число від 0–1,000,000.");
  if (!validateYear(year)) errors.push("Year: рік від 1990–2025.");
  return errors;
}