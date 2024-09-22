/**
 * @file Medical history
 * @description Functions to fetch data about medical history from the API
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/21
 * @version 1.0
 */

import {fetchDataTokenPost} from "../fetch";

/**
 * Fetch add medical history
 * @param {string} history
 * @param {any} data
 * @returns {Promise<any>}
 */
export const addMedicalHistory = async (history: string, data: any) => {
  console.log(data)
  return fetchDataTokenPost(`patients/medical-history/${history}/add/`, {
    history_id: data
  });
};

/**
 * Fetch remove medical history
 * @param history
 * @param data
 */

export const removeMedicalHistory = async (history: string, data: any) => {
  return fetchDataTokenPost(`patients/medical-history/${history}/remove/`, {
    history_id: data
  });
};
