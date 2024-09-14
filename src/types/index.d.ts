import {DateTime} from "next-auth/providers/kakao";

/**
 * @file Index types
 * @description Types and interfaces used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/14
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
  city: string

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

export interface Profile {
  first_name: string;
  last_name: string;
  identification_number: string;
  phone: string;
  email: string;
  genre: string;
  birth_date: string;
  groups: number[];
}


export interface UpdateProfile {
  email?:string;
  password?:string;
  phone?:string;
  genre?:string;
  city?:string
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
  city: string
  stars: number;
  start_schedule: string;
    end_schedule: string;
}

export interface AllDoctors {
  city: string;
  end_schedule: string;
  first_name: string;
  id: number;
  last_name: string;
  price: string;
  professional_number: string;
  specialty: string;
  stars: string;
  start_schedule: string;
  user: string;
}

export interface FormCreateAppointmentPatient {
  patient_appointment: DateTime;
  day_appointment: DateTime;
  reason_consultation: string;
  date_appointment: DateTime;
  doctor_id: number;
}

export interface PostCreateAppointmentPatient {
  doctor_id: number;
  reason_consultation: string;
  patient_appointment: DateTime;
}