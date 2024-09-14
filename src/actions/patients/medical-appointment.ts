/**
 * @file Medical appointment
 * @description Functions to fetch data about medical appointments from the API
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/14
 * @version 1.0
 */


import {fetchDataToken, fetchDataTokenPost} from "../fetch";
import { PostCreateAppointmentPatient} from "@/types";

export const fetchMedicalHistory = async () => {
  return fetchDataToken(`doctors/medical-appointment`);
};

export const fetchCreateAppointment = async (data: PostCreateAppointmentPatient) => {
  return fetchDataTokenPost(`doctors/medical-appointment/book/`, data)
}