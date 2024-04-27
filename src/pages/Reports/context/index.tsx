import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

// Services
import * as service from '../services'
import { IReport } from '../models/report.model'

const initialState: InitialStateProps = {
  reports: [],
  report: null,
  setReport: () => {},
  getReports: () => {},
  setDate: () => {},
  date: '',
}

const ReportContext = createContext(initialState)

export interface ReportProviderProps {
  children: ReactElement
}

export const ReportProvider: React.FC<ReportProviderProps> = ({ children }) => {
  const [reports, setReports] = useState<IReport[]>(initialState.reports)
  const [report, setReport] = useState<IReport | null>(initialState.report)
  const [date, setDate] = useState<any>(initialState.date)

  useEffect(() => {
    const queries: any = {}

    if (date) {
      console.log('DATE TYPEOF', typeof date)
      console.log('DATE', date.length)
      if (!date.length) {
        queries.date = new Date(date).toISOString()
      } else {
        queries.startDate = new Date(date[0]).toISOString()
        queries.endDate = new Date(date[1]).toISOString()
      }
    }

    getReports(queries)
  }, [date])

  useEffect(() => {}, [])

  const getReports = async (queries: any) => {
    try {
      const reportsData = await service.getReports(queries)
      setReports(reportsData)
      setReport(reportsData[reportsData.length - 1])
    } catch (error: any) {
      console.log('ERROR', error)
    }
  }

  return (
    <ReportContext.Provider
      value={{
        report,
        reports,
        date,
        setDate,
        setReport,
        getReports,
      }}
    >
      {children}
    </ReportContext.Provider>
  )
}

export const useReportState = () => useContext(ReportContext)

export interface InitialStateProps {
  reports: IReport[]
  report: IReport | null
  setReport: (report: IReport) => void
  getReports: (queries?: any) => void
  setDate: (value: any) => void
  date: any
}
