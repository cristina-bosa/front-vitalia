/**
 * @file medical-appoinment.ts for doctors
 * @description Functions to fetch data about the medical appointments for doctors.
 * @author Cristina Bosa
 * @created 2024/09/17
 * @updated 2024/09/19
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
 * Function to fetch the medical appointment by id
 * @param id
 */
export const fetchMedicalAppointmentById = async (id:string) => {
	return fetchDataToken(`doctors/medical-appointment/${id}`);
}

/**
 * Function to fetch the medical appointments for the doctor with a param statusAppointment and date; start_date and
 * end_date
 * @param statusAppointment
 * @param data
 */
export const fetchMedicalAppointmentByDate = async (statusAppointment:string, data:any) => {
	return fetchDataTokenPost(`doctors/medical-appointment/filter/${statusAppointment}/`, data);
}

/**
 * Function to accept or reject a medical appointment
 * @param id
 * @param acceptOrReject
 */
export const fetchMedicalAppointmentAcceptOrReject = async (id: number, acceptOrReject:string) => {
	return fetchDataTokenPost(`doctors/medical-appointment/${id}/manage/${acceptOrReject}/`);
}

/**
 * Function to start a medical appointment
 * @param id
 */
export const fetchMedicalAppointmentStart = async (id: number) => {
	return fetchDataTokenPost(`doctors/medical-appointment/${id}/start/`);
}

/**
 * Function to end a medical appointment with data
 * @param id
 * @param data
 */
export const fetchMedicalAppointmentFinish = async (id: number, data:any) => {
	return fetchDataTokenPost(`doctors/medical-appointment/${id}/finish/`, data);
}
