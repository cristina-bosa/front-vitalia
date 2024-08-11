

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const typeRegister = {
  DOCTOR: "doctor",
  PATIENT: "patient",
};

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
]
  
