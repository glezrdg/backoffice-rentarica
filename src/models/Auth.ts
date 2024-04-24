export interface Auth {
  _id: string
  fullname: string
  email: string
}

export interface LoginDto {
  email: string
  password: string
}

export interface CreateAuthDtop {
  fullname: string
  email: string
  password: string
  role: string
}