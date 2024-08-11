import { baseUrl } from "@/constants";

import { RegisterDoctorData, RegisterPatientData } from "@/types";

export async function register(data: RegisterDoctorData | RegisterPatientData) {
  return await fetch(`${baseUrl}/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function fetchGenre() {
  const response = await fetch(`${baseUrl}/auth/choices/genre`);
  const data = await response.json();
  return data;
}
