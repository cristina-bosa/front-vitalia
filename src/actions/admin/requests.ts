/**
 * @file Request
 * @description Functions to fetch data about requests
 * @author Cristina Bosa
 * @created 2024/09/16
 * @updated 2024/09/16
 * @version 1.0
 */

import {fetchDataToken, fetchDataTokenPostWithOutBody} from "@/actions/fetch";

export const fetchRequests = async () => {
	return fetchDataToken(`admin/request-access`);
}

export const fetchRejectRequests = async (id:number) => {
	return fetchDataTokenPostWithOutBody(`admin/request-access/${id}/reject/`);
}

export const fetchAcceptRequests = async (id:number) => {
	return fetchDataTokenPostWithOutBody(`admin/request-access/${id}/accept/`);
}