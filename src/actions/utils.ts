import { baseUrl } from "@/constants";
import { fetchData } from "./fetch";

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

export const fetchAllergies = async () => {
  return fetchData(`patients/allergies`);
};

export const fetchMedicalInterventions = async () => {
  return fetchData(`patients/medical-intervention`);
}

export const fetchRelevantDiseases = async () => {
  return fetchData(`patients/relevant-diseases`);
}

export const fetchMedications = async () => {
  return fetchData(`patients/current-medication`);
}