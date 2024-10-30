export interface Doctor {
  _id?: string
  fullname: string
  specialty: string
  email: string
  phone: string
}

export interface CreateDoctorDto {
  fullname: string
  specialty: string
  email: string
  phone: string
}