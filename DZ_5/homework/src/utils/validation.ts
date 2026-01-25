import Joi from "joi";

export const carSchema = Joi.object({
  brand: Joi.string()
    .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/)
    .required()
    .messages({
      "string.empty": "Brand: поле не може бути порожнім.",
      "string.pattern.base": "Brand: тільки літери, довжина 1–20.",
    }),

  price: Joi.number()
    .integer()
    .min(0)
    .max(1_000_000)
    .required()
    .messages({
      "number.base": "Price: має бути числом.",
      "number.min": "Price: мінімум 0.",
      "number.max": "Price: максимум 1,000,000.",
    }),

  year: Joi.number()
    .integer()
    .min(1990)
    .max(2025)
    .required()
    .messages({
      "number.base": "Year: має бути числом.",
      "number.min": "Year: мінімум 1990.",
      "number.max": "Year: максимум 2025.",
    }),
});

