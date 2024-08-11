export interface RegisterData {
  first_name: string;
  last_name: string;
  identification_number: string;
  phone: string;
  email: string;
  password: string;
  genre: string;
  birthdate: string;
  register_data: string;
  city: string;
}

export interface RegisterDoctorData extends RegisterData {
  professional_number: string;
  specialty: number;
  start_schedule: string;
  end_schedule: string;
  price: number;
}
export interface MedialHistoryPatient {
  allergies: string[];
  relevant_diseases: string[];
  current_medication: string[];
  medical_intervention: string[];
}
export interface RegisterPatientData extends RegisterData {
  medical_history: MedialHistoryPatient;
}

export interface PatientProfile {
  first_name: string;
  last_name: string;
  identification_number: string;
  phone: string;
  email: string;
  genre: string;
  birthdate: string;
}

export interface User {
  first_name: string;
  last_name: string;
  identification_number: string;
  phone: string;
  email: string;
  genre: string;
  birthdate: string;
  type_user: string;
}
