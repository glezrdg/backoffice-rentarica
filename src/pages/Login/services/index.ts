import { Auth, CreateAuthDtop, LoginDto } from "@/models/Auth";
import { DataService } from "../../../config/api";

export const loginUser = async (body: LoginDto): Promise<Auth> => {
  try {
    const { data } = await DataService.post('/auth/login', body)
    localStorage.setItem('auth', JSON.stringify(data))
    return data as Auth
  } catch (error: any) {
    console.log('error', error)
    throw new Error(error.response.data.message || error.message)
  }
}


export const signup = async (body: CreateAuthDtop): Promise<Auth> => {
  try {
    const { data } = await DataService.post('/auth/register', body)
    localStorage.setItem('auth', JSON.stringify(data))

    return data as Auth
  } catch (error: any) {
    throw new Error(error.response.data.message || error.message)
  }
}