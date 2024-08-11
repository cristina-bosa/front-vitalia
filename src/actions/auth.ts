import { baseUrl } from "@/constants";

import { RegisterDoctorData, RegisterPatientData } from "@/types";

export async function fetchRegister(
  registerData: RegisterDoctorData | RegisterPatientData
) {
  try {
    const response = await fetch(`${baseUrl}/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error);
    }
    
    return  await response.json();
    
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");

  }
}

