import { fetchDataToken } from "../fetch";

export const fetchDoctors = async () => {
  return fetchDataToken(`doctors`);
};

export const fetchFilterDoctors = async (city?: number, specialty?: number) => {
  return fetchDataToken(`doctors/?city=${city}&specialty=${specialty}`);
};

export const fetchOneDoctor = async (id: number) => {
  return fetchDataToken(`doctors/${id}`);
};
