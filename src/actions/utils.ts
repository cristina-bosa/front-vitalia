import { baseUrl } from "@/constants";

export async function fetchGenre() {
  const response = await fetch(`${baseUrl}/auth/choices/genre`);
  const data = await response.json();
  return data;
}

export async function fetchCity() {
  const response = await fetch(`${baseUrl}/auth/city`);
  const data = await response.json();
  return data;
}

export async function fetchSpecialty() {
  const response = await fetch(`${baseUrl}/auth/specialty`);
  const data = await response.json();
  return data;
}
