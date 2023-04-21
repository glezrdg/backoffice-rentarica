import { DataService } from "../../../config/api";
import { ICompany } from "../models";
import { companies } from "../utils/data";
// import { Companys } from "../utils/data";
// let Companys: ICompany[] = [{ code: '', description: '', product: '', provinces: [''], category: '', brand: '', discount: '' }]

export const getCompanies = async (): Promise<ICompany[]> => {
  try {
    // const { data } = await DataService.get('/Companys')
    // return data as ICompany[] || Companys
    return companies
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const addCompany = async (body: ICompany): Promise<ICompany> => {
  try {
    // const { data } = await DataService.post('/companies', body)
    // return data as ICompany
    return companies[0]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateCompany = async (id: string, body: ICompany): Promise<ICompany> => {
  try {
    const { data } = await DataService.put(`/companies/:${id}`, body)
    return data as ICompany
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeCompany = async (id: string): Promise<ICompany> => {
  try {
    const { data } = await DataService.delete(`/companies/:${id}`)
    return data as ICompany
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}