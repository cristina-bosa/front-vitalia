/**
 * @file Users
 * @description Functions to fetch data about users
 * @author Cristina Bosa
 * @created 2024/09/16
 * @updated 2024/09/16
 * @version 1.0
 */
import {fetchDataToken, fetchDataTokenPostWithOutBody} from "@/actions/fetch";

export const fetchUsers = async () => {
	return fetchDataToken(`admin/users`);
}

export const fetchDeactivateUser = async (id:number) => {
	return fetchDataTokenPostWithOutBody(`admin/users/${id}/deactivate/`);
}

export const fetchActivateUser= async (id:number) => {
	return fetchDataTokenPostWithOutBody(`admin/users/${id}/activate/`);
}

export const fetchLastPatientRegistration = async () => {
	return fetchDataToken(`admin/users/last-patients`);
}

export const fetchLastDoctorRegistration = async () => {
	return fetchDataToken(`admin/users/last-doctors`);
}