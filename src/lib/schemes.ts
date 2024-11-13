import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Введите корректный email" }).trim(),
  password: z
    .string()
    .min(6, { message: "Длина пароля должна быть не менее 6 символов" })
    .max(40, { message: "Длина пароля не должна превышать 40 символов" })
    .trim(),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Длина имени должна быть не менее 3 символов" })
      .trim(),
    email: z.string().email({ message: "Введите корректный email" }).trim(),
    password: z
      .string()
      .min(6, { message: "Длина пароля должна быть не менее 6 символов" })
      .max(40, { message: "Длина пароля не должна превышать 40 символов" })
      .trim(),
    confirmPassword: z
      .string()
      .min(6, { message: "Длина пароля должна быть не менее 6 символов" })
      .max(40, { message: "Длина пароля не должна превышать 40 символов" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });