/**
 * @file Doctors
 * @description Functions to fetch data about doctors from the API
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/21
 * @version 1.0
 */

import {fetchDataToken, fetchDataTokenPost} from "../fetch";

/**
 *
 */
export const fetchDoctors = async () => {
  return fetchDataToken(`doctors/confirmed`);
};

/**
 *
 */
export const fetchFilterDoctors = async (city?: number, specialty?: number) => {
  return fetchDataToken(`doctors/?city=${city}&specialty=${specialty}`);
};

/**
 *
 */
export const fetchTopFourDoctors = async () => {
  return fetchDataToken(`doctors/top`);
};

/**
 *
 */
export const fetchOneDoctor = async (id: number) => {
  return fetchDataToken(`doctors/${id}`);
};

/**
 *
 */
export const fetchAvailableHours = async (id:number, date:string) =>{
  return fetchDataTokenPost(`doctors/${id}/available-hours/`, {patient_appointment: date});
}

/**
 *
 */
export const fetchAddReview = async (id:number, review:string, rating:number) =>{
  return fetchDataTokenPost(`doctors/${id}/review/add/`, {review: review, rating: rating});
}