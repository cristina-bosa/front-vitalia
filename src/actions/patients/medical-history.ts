/**
 * @file Medical history
 * @description Functions to fetch data about medical history from the API
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/03
 * @version 1.0
 */

import { fetchDataTokenPost } from "../fetch";

export const addMedicalHistoryAllergies = async (allergies: number) => {
  return fetchDataTokenPost(`patients/medical-history/allergies/add/`, {
    allergy_id: allergies,
  });
};

export const addMedicalHistoryDiseases = async (diseases: number) => {
  return fetchDataTokenPost(
    `patients/medical-history/relevant-diseases/add/`,
    diseases
  );
};

export const addMedicalHistoryCurrentMedication = async (
  medication: number
) => {
  return fetchDataTokenPost(
    `patients/medical-history/current-medication/add/`,
    medication
  );
};

export const addMedicalHistoryMedicalIntervention = async (
  intervention: number
) => {
  return fetchDataTokenPost(
    `patients/medical-history/medical-intervention/add/`,
    intervention
  );
};
