import { fetchDataToken } from "../fetch";

export const fetchMedicalHistory = async () => {
  return fetchDataToken(`doctors/medical-appoinments`);
};