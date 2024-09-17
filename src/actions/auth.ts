import { baseUrl } from "@/constants";
import { authOptions } from "@/lib/utils";

import { RegisterDoctorData, RegisterPatientData } from "@/types";
import { getServerSession } from "next-auth";

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
      const error = response.statusText;
      return{
        status: response.status,
        data: error
      }
    }

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");
  }
}

export async function logOut() {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;
  
  try {
    const response = await fetch(`${baseUrl}/auth/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!response.ok) {
      const error = response.statusText;
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");
  }
}
