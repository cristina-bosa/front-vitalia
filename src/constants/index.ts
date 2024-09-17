/**
 * @file Constants
 * @description Constants used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/17
 * @version 1.0
 */

import { Roles } from "@/types/enum";

/**
 * Base URL for the API
 */
export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

/**
 * Steps for the registration progress for Doctors
 */
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

/**
 * Steps for the registration progress for Patients
 */
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
    label:"Solicitud de acceso",
    path:"/requests-access",
    icon:"/assets/svg/nav-requests.svg",
    roles:[Roles.ADMIN]
  },
  {
    label:"Usuarios",
    path:"/all-users",
    icon:"/assets/svg/nav-users.svg",
    roles:[Roles.ADMIN]
  },
  {
    label: "Solicitar cita médica",
    path: "/appointments",
    icon: "/assets/svg/nav-appointment.svg",
    roles: [Roles.PATIENT],
  },
  {
    label: "Mi historial",
    path: "/medical-history",
    icon: "/assets/svg/nav-historical.svg",
    roles: [Roles.PATIENT, Roles.DOCTOR],
  },
  {
    label: "Mi agenda",
    path: "/schedule",
    icon: "/assets/svg/nav-schedule.svg",
    roles: [Roles.DOCTOR],
  },
  {
    label: "Mi perfil",
    path: "/profile",
    icon: "/assets/svg/nav-profile.svg",
    roles: [Roles.PATIENT, Roles.DOCTOR],
  },
];

/**
 * Badges for the status of the medical appointments
 */
export const BadgeStatus = {
  "Pendiente": "badge--pending",
  "Aceptado": "badge--accepted",
}
