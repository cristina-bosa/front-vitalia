/**
 * @file Medical Appointment
 * @description Functions to fetch data about the medical appointments for doctors.
 * @author Cristina Bosa
 * @created 2024/09/17
 * @updated 2024/09/17
 * @version 1.0
 */

import {fetchDataToken} from "@/actions/fetch";

/**
 * Function to fetch the medical appointments for the doctor with a param statusAppointment
 * @param statusAppointment
 * @returns
 */
export const fetchMedicalAppointments = async (statusAppointment:string) => {
	return fetchDataToken(`doctors/medical-appointment/${statusAppointment}`);
}