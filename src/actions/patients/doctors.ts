import { fetchDataToken } from "../fetch";

export const fetchDoctors = async () => {
  return fetchDataToken(`doctors`);
};

export const fetchFilterDoctors = async (city?: number, specialty?: number) => {
  return fetchDataToken(`doctors/?city=${city}&specialty=${specialty}`);
};

export const fetchTopFourDoctors = async () => {
  return fetchDataToken(`doctors/top`);
};

export const fetchOneDoctor = async (id: number) => {
  return fetchDataToken(`doctors/${id}`);
};
