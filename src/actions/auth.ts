import axios from "axios";

import { baseUrl } from "@/constants";

export const LoginAuth = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login/`, {
      email,
      password,
    });
    localStorage.setItem("typeRole", "patient");
    return response;
  } catch (error) {
    console.error(error);
  }
};
