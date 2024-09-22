/**
 * @file Profile
 * @description Functions to fetch data about the patient's profile from the API
 * @author Cristina Bosa
 * @created 2024/09/08
 * @updated 2024/09/08
 * @version 1.0
 */

import {fetchDataToken, fetchDataTokenPost} from "../fetch";

/**
 * Function to update the patient's profile
 * @param data 
 * @returns 
 */
export const fetchUpdateProfile = async (data: any) => {
  return fetchDataTokenPost(`auth/user/update-profile/`, data);
}

/**
 * Function to fetch the patient's profile
 * @returns 
 */
export const fetchProfile = async () => {
  return fetchDataToken(`auth/user/profile/`);
}