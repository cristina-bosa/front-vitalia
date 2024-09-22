/**
 * @file Utils
 * @description Functions to fetch data from the API 
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/03
 * @version 1.0
 */


import { fetchData } from "./fetch";

export async function fetchGenre() {
  return fetchData(`auth/choices/genre`);  
}

export async function fetchCity() {
  return fetchData(`auth/city`);
}

export async function fetchSpecialty() {
  return fetchData(`auth/specialty`); 
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