/**
 * @file Index types
 * @description Types and interfaces used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/03
 * @version 1.0
 */
export interface RegisterData {
  register_type: string;
  username: string;
  password: string;

  first_name: string;
  last_name: string;
  email: string;

  identification_number: string;
  birth_date: string;
  genre: string;
  phone: string;
  city: number;

  repeat_email: string;
  repeat_password: string;
}

export interface RegisterDoctorData extends RegisterData {
  professional_number: string;
  specialty: number;
  start_schedule: string;
  end_schedule: string;
  price: number;
  specialty: number;
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
  birth_date: string;
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


export interface Doctor {  
  id: number;
  first_name: string;
  last_name: string;
  specialty: string;
  price: number;
  city: string;
  stars: number;
}