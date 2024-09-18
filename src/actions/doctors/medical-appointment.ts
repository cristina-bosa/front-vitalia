/**
 * @file medical-appoinment.ts for doctors
 * @description Functions to fetch data about the medical appointments for doctors.
 * @author Cristina Bosa
 * @created 2024/09/17
 * @updated 2024/09/18
 * @version 1.0
 */

import {fetchDataToken, fetchDataTokenPost} from "@/actions/fetch";

/**
 * Function to fetch the medical appointments for the doctor with a param statusAppointment
 * @param statusAppointment
 * @returns
 */
export const fetchMedicalAppointmentsByStatus = async (statusAppointment:string) => {
	return fetchDataToken(`doctors/medical-appointment/${statusAppointment}`);
}

/**
 * Function to fetch all the medical appointments for the doctor and the patient
 * @returns
 */
export const fetchAllMedicalAppointments = async () => {
	return fetchDataToken(`doctors/medical-appointment`);
}

/**
 *
 * @param id
 */
export const fetchMedicalAppointmentById = async (id:string) => {
	return fetchDataToken(`doctors/medical-appointment/${id}`);
}

/**
 *
 * @param statusAppointment
 * @param data
 */
export const fetchMedicalAppointmentByDate = async (statusAppointment:string, data:any) => {
	return fetchDataTokenPost(`doctors/medical-appointment/filter/${statusAppointment}/`, data);
}