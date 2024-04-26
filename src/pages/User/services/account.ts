import { DataService } from "../../../config/api";

// import { Companys } from "../utils/data";
// let Companys: ICompany[] = [{ code: '', description: '', product: '', provinces: [''], category: '', brand: '', discount: '' }]

export const getSubscription = async () => {
  try {
    const { data } = await DataService.get('/my_subscription')
    return data
  } catch (error: any) {
    throw new Error(error.data.response.error || error.message)
  }
}

