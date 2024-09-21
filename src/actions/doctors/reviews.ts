/**
 * @file reviews
 * @description Functions to fetch data about the reviews for doctors
 * @author Cristina Bosa
 * @created 2024/09/21
 * @updated 2024/09/21
 * @version 1.0
 */

import {fetchDataToken} from "@/actions/fetch";

/**
 * Function to fetch my reviews
 * @returns
 */
export const fetchAllReviews = async () => {
	return fetchDataToken(`doctors/my-reviews`);
}
