import { IExpenses } from "@/pages/Expenses/models"
import { IOrder } from "../../../pages/Orders/models/IOrder"
import { IProduct } from "src/pages/Products/models/IProduct"

export interface IExpensesReport {

  expensesQty: number

  fixedExpenses: IExpenses[]

  payrollExpenses: IExpenses[]

  expenses: IExpenses[]

  totalAmountExpense: number

  month: number

  year: number

  user: string
}