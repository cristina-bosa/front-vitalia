/**
 * @file History for doctors
 * @description Functions to fetch data about the medical history for doctors.
 * @author Cristina Bosa
 * @created 2024/09/19
 * @updated 2024/09/19
 * @version 1.0
 */
import {fetchDataToken} from "@/actions/fetch";

export const fetchMedicalHistoryDoctors = async () => {
	return fetchDataToken(`doctors/history`);
}