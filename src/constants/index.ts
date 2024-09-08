/**
 * @file Constants
 * @description Constants used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/08
 * @version 1.0
 */

import { Roles } from "@/types/enum";

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

/**
 * Routes for the application based on the user role
 */
export const routes = [
  {
    label: "Inicio",
    path: "/dashboard",
    icon: "/assets/svg/nav-dashboard.svg",
    roles: [Roles.PATIENT, Roles.DOCTOR, Roles.ADMIN],
  },
  {
    label: "Solicitar cita médica",
    path: "/appointments",
    icon: "/assets/svg/nav-appointment.svg",
    roles: [Roles.PATIENT],
  },
  {
    label: "Mi historial médico",
    path: "/medical-history",
    icon: "/assets/svg/nav-historical.svg",
    roles: [Roles.PATIENT],
  },
  {
    label: "Mi perfil",
    path: "/profile",
    icon: "/assets/svg/nav-profile.svg",
    roles: [Roles.PATIENT, Roles.DOCTOR, Roles.ADMIN],
  },
];
