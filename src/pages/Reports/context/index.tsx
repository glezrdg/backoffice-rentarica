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
}

const ReportContext = createContext(initialState)

export interface ReportProviderProps {
  children: ReactElement
}

export const ReportProvider: React.FC<ReportProviderProps> = ({ children }) => {
  const [reports, setReports] = useState<IReport[]>(initialState.reports)
  const [report, setReport] = useState<IReport | null>(initialState.report)

  useEffect(() => {
    getInitialState()
  }, [])

  const getInitialState = async () => {
    try {
      const reportsData = await service.getReports({})
      setReports(reportsData)
      setReport(reportsData[0])
    } catch (error: any) {
      console.log('ERROR', error)
    }
  }

  return (
    <ReportContext.Provider
      value={{
        report,
        reports,
        setReport,
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
}
