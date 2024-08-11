import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const RegisterSchema = z.object({
  first_name: z.string().min(1, { message: "El nombre es obligatorio" }),
  last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
  identification_number: z
    .string()
    .min(1, { message: "El número de identificación es obligatorio" }),
  phone: z.string().min(1, { message: "El número de teléfono es obligatorio" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
  email: z
    .string()
    .email({ message: "Formato de email no válido" })
    .min(1, { message: "El email es obligatorio" }),
  genre: z.string().min(1, { message: "El género es obligatorio" }),
  birthdate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Formato de fecha no válido (YYYY-MM-DD)",
    })
    .min(1, { message: "La fecha de nacimiento es obligatoria" }),
  register_data: z
    .string()
    .min(1, { message: "Los datos de registro son obligatorios" }),
  city: z.string().min(1, { message: "La ciudad es obligatoria" }),
});

export const RegisterPatientSchema = z.object({
  medical_history: z.object({
    allergies: z.array(z.string()),
    relevant_diseases: z.array(z.string()),
    current_medication: z.array(z.string()),
    medical_intervention: z.array(z.string()),
  }),
});

export const RegisterDoctorSchema = z.object({
  professional_number: z
    .string()
    .min(1, { message: "El número de colegiado es obligatorio" }),
  specialty: z
    .number()
    .min(1, { message: "Debe seleccionar una especialidad válida" })
    .int({ message: "La especialidad debe ser un número entero" }),
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
    .min(1, { message: "La hora de finalización es obligatoria" }),
  price: z
    .number()
    .min(0, { message: "El precio debe ser un número positivo" }),
});
