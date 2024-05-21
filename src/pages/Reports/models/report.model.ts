import { IExpensesReport } from "./expensesReport.model"
import { ISellsReport } from "./sellsReport.model"
import { IShoppingReport } from "./shoppingReport"

export interface IReport {
  _id: string
  sellsReport: ISellsReport
  shoppingReport: IShoppingReport
  expensesReport: IExpensesReport
  clientsQty: number
  month: number
  year: number
  createdAt: string
}
