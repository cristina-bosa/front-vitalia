/**
 * @file Enumerations
 * @description Enumerations used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/14
 * @version 1.0
 */

export const enum Roles {
  ADMIN = 1,
  DOCTOR = 2,
  PATIENT = 3,
}

export const enum typeRegister {
  DOCTOR = "doctor",
  PATIENT = "patient",
}

export const enum MedicalHistory {
  ALLERGIES = "allergies",
  RELEVANT_DISEASES = "relevant_diseases",
  CURRENT_MEDICATION = "current_medication",
  MEDICAL_INTERVENTION = "medical_intervention",
}

export const enum NotificationStatus {
  CANCELLED = "cancelled",
  PENDING = "pending",
  ACCEPTED = "accepted",
}

export const enum HTTPStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ACCEPTABLE = 406,
  INTERNAL_SERVER_ERROR = 500,
}