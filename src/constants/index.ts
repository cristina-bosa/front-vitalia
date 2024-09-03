/**
 * @file Constants
 * @description Constants used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/03
 * @version 1.0
 */

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const stepRegisterDoctor = [
  {
    id: 1,
    title: "Datos personales",
  },
  {
    id: 2,
    title: "Datos profesionales",
  },
  {
    id: 3,
    title: "Completado",
  },
] as const;

export const stepRegisterPatient = [
  {
    id: 1,
    title: "Datos personales",
  },
  {
    id: 2,
    title: "Datos médicos",
  },
  {
    id: 3,
    title: "Completado",
  },
] as const;
