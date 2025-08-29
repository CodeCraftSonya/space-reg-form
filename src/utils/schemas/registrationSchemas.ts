import z from 'zod';
import { checkAge } from "../date/dateUtils";

export const registrationSchema = z.object({
  name: z.string().min(2, "Имя должно быть длиннее"),
  surname: z.string().min(2, "Фамилия должна быть длиннее"),
  email: z.string().email("Введите корректный email"),
  password: z.string().min(8, "Минимум 8 символов"),
  confirmPassword: z.string(),
  birthDate: z
      .string()
      .refine((date) => checkAge(date), {
        message: "Вам должно быть 18 лет или больше",
      }),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
    });

export type RegistrationFormType = z.infer<typeof registrationSchema>;