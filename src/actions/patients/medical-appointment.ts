/**
 * @file Medical appointment
 * @description Functions to fetch data about medical appointments from the API
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/03
 * @version 1.0
 */


import { fetchDataToken } from "../fetch";

export const fetchMedicalHistory = async () => {
  return fetchDataToken(`doctors/medical-appoinments`);
};