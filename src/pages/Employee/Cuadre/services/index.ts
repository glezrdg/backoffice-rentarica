import { DataService } from "../../../../config/api";
import { IOrder } from "../../../Orders/models/IOrder";

export const getTodayOrders = async (query: any = {}): Promise<{
  orders: IOrder[]
  cash: number
  card: number
  transfer: number
}> => {

  let keys = Object.keys(query)
  let queryString: string = ''

  if (keys.length) {
    queryString += '?'

    keys?.map((item, i) => queryString += `${item}=${query[keys[i]]}&`)
  }

  try {
    const { data } = await DataService.get('/orders/filter/today' + queryString)
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

