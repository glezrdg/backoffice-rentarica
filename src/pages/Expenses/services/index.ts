import { DataService } from "../../../config/api";
import { ExpensesDto, IExpenses } from "../models";

export const getExpenses = async (queries: any): Promise<IExpenses[]> => {

  let keys = Object.keys(queries)
  let queryString: string = ''

  if (keys.length) {
    queryString += '?'

    keys?.map((item, i) => queryString += `${item}=${queries[keys[i]]}&`)
  }


  try {
    const { data } = await DataService.get(`/expenses${queryString}`)
    return data as IExpenses[]
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const postExpenses = async (body: ExpensesDto): Promise<IExpenses> => {
  try {
    const { data } = await DataService.post('/expenses', body)
    return data as IExpenses
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const updateExpense = async (id: string, body: Partial<ExpensesDto>): Promise<IExpenses> => {
  try {
    const { data } = await DataService.patch(`/expenses/${id}`, body)
    return data as IExpenses
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

export const removeExpense = async (id: string): Promise<IExpenses> => {
  try {
    const { data } = await DataService.delete(`/expenses/${id}`)
    return data as IExpenses
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}
