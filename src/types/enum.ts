/**
 * @file Enumerations
 * @description Enumerations used in the application
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/17
 * @version 1.0
 */

/**
 * Roles for the application
 */
export const enum Roles {
  ADMIN = 1,
  DOCTOR = 2,
  PATIENT = 3,
}

/**
 * Type register
 */
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

/**
 * Status for notifications
 */
export const enum NotificationStatus {
  CANCELLED = "cancelled",
  PENDING = "pending",
  ACCEPTED = "accepted",
}

/**
 * HTTP Status codes
 */
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

/**
 * Status for appointments
 */
export const enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in-progress',
  CANCELED = 'canceled',
  FINISHED = 'finished'
}