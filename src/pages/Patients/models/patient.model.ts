export interface Patient {
  _id: string
  name: string
  dob: string
  email: string
  phone: string
  address: string
  medicalHistory: string
  allergies: string
  currentMedications: string
  observations: string
}

export interface CreatePatientDto {
  name: string
  dob: string
  email: string
  phone: string
  address?: string
  medicalHistory: string
  allergies: string
  currentMedications?: string
  observations?: string
}