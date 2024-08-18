export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export enum typeRegister {
  DOCTOR = "doctor",
  PATIENT = "patient",
}

export enum MedicalHistory {
  ALLERGIES = "allergies",
  RELEVANT_DISEASES = "relevant_diseases",
  CURRENT_MEDICATION = "current_medication",
  MEDICAL_INTERVENTION = "medical_intervention",
}

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
];

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
];
