/**@file index
 * @desription Schemas for validation forms
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/17
 * @version 1.0
 */

import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Formato de email no válido" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
});

export const RegisterSchema = z
  .object({
    first_name: z.string().min(1, { message: "El nombre es obligatorio" }),
    last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
    identification_number: z
      .string()
      .min(1, { message: "El número de identificación es obligatorio" }),
    phone: z
      .string()
      .min(1, { message: "El número de teléfono es obligatorio" }),
    birth_date: z
      .string()
      .min(1, { message: "La fecha de nacimiento es obligatoria" }),
    genre: z.string().min(1, { message: "El género es obligatorio" }),
    city: z.number().min(1, { message: "La ciudad es obligatoria" }),
    email: z
      .string()
      .email({ message: "Formato de email no válido" })
      .min(1, { message: "El email es obligatorio" }),
    repeat_email: z
      .string()
      .email({ message: "Formato de email no válido" })
      .min(1, { message: "El email es obligatorio" }),
    password: z.string().min(1, { message: "La contraseña es obligatoria" }),
    repeat_password: z
      .string()
      .min(1, { message: "La contraseña es obligatoria" }),
  })
  .refine((data) => data.email === data.repeat_email, {
    message: "Los correos electrónicos no coinciden",
    path: ["repeat_email"],
  })
  .refine((data) => data.password === data.repeat_password, {
    message: "Las contraseñas no coinciden",
    path: ["repeat_password"],
  })
  .refine(
    (data) => {
      const today = new Date();
      const birthDate = new Date(data.birth_date);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        return age > 18;
      }
      return age >= 18;
    },
    {
      message: "Debes tener al menos 18 años",
      path: ["birth_date"],
    }
  );

export const RegisterPatientSchema = z.object({
  medical_history: z.object({
    allergies: z.array(z.string()),
    relevant_diseases: z.array(z.string()),
    current_medication: z.array(z.string()),
    medical_intervention: z.array(z.string()),
  }),
});

export const DoctorRegisterSchema = z.object({
  professional_number: z
    .string()
    .min(1, { message: "El número de colegiado es obligatorio" }),
  specialty: z
    .number()
    .min(1, { message: "Debe seleccionar una especialidad válida" }),
  start_schedule: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Formato de hora no válido (HH:MM)",
    })
    .min(1, { message: "La hora de inicio es obligatoria" }),
  end_schedule: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "Formato de hora no válido (HH:MM)",
    })
    .min(1, { message: "La hora de fin es obligatoria" }),
  price: z.number().min(1, { message: "El precio es obligatorio" }),
});

export const CreateAppointmentSchema = z.object({
  date: z.string().min(1, { message: "La fecha es obligatoria" }),
  reason_consultation: z.string().min(1, { message: "El motivo es obligatorio" }),
  doctor: z.number().min(1, { message: "El doctor es obligatorio" }),
  patient: z.number().min(1, { message: "El paciente es obligatorio" }),
});
