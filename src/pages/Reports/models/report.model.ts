import { ISellsReport } from "./sellsReport.model"

export interface IReport {
  _id: string
  sellsReport: ISellsReport
  month: number
  year: number
  createdAt: string
}
