import { fetchDataToken } from "../fetch";

export const fetchDoctors = async () => {
  return fetchDataToken(`doctors`);
}