import { DataService } from "../../../config/api";
import { IReport } from "../models/report.model";

export const getReports = async (query?: any): Promise<IReport[]> => {

  let keys = Object.keys(query)
  let queryString: string = ''

  if (keys.length) {
    queryString += '?'

    keys?.map((item, i) => queryString += `${item}=${query[keys[i]]}&`)
  }
  console.log('report 2')
  try {
    const { data } = await DataService.get('/reports' + queryString)
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const getReport = async (query?: any): Promise<IReport> => {
  console.log('report 2')
  try {
    const { data } = await DataService.get('/reports/1')
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}