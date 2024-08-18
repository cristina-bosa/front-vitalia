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
