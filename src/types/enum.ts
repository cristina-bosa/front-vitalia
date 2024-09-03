/**
 * @file Enumerations
 * @description Enumerations used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/03
 * @version 1.0
 */

export enum Roles {
  ADMIN = 1,
  DOCTOR = 2,
  PATIENT = 3,
}

export enum typeRegister {
  DOCTOR = "doctor",
  PATIENT = "patient",
}

export enum MedicalHistory {
  ALLERGIES = "allergies",
  RELEVANT_DISEASES = "relevant_diseases",
  CURRENT_MEDICATION = "current_medication",
  MEDICAL_INTERVENTION = "medical_intervention",
}
