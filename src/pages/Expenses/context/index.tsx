import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ExpensesDto, IExpenses } from '../models'
import {
  getExpenses,
  postExpenses,
  removeExpense,
  updateExpense,
} from '../services'
import { toast } from '../../../App'

interface InitialProps {
  expenses: IExpenses[]
  expense: IExpenses | null
  ctxPostExpenses: (body: ExpensesDto) => void
  handleGetExpenses: (queries: any) => void
  handleUpdateExpense: (id: string, body: Partial<IExpenses>) => void
  handleRemoveExpense: (id: string) => void
  setExpense: (expense: IExpenses) => void
}

let initialState: InitialProps = {
  expenses: [],
  expense: null,
  ctxPostExpenses: () => {},
  handleGetExpenses: () => {},
  handleUpdateExpense: () => {},
  handleRemoveExpense: () => {},
  setExpense: () => {},
}

const ExpensesContext = createContext<InitialProps>(initialState)

interface ExpensesProviderProps {
  children: ReactNode
}

export const ExpensesProvider: FC<ExpensesProviderProps> = ({ children }) => {
  const [expenses, setExpenses] = useState<IExpenses[]>([])
  const [expense, setExpense] = useState<IExpenses | null>(null)

  useEffect(() => {
    handleGetExpenses({})
  }, [])

  const handleGetExpenses = async (queries?: any) => {
    try {
      const data = await getExpenses(queries)
      setExpenses(data)
    } catch (error) {}
  }

  const handleUpdateExpense = async (id: string, body: Partial<IExpenses>) => {
    try {
      const data = await updateExpense(id, body)
      toast.current.show({
        severity: 'success',
        summary: 'Has modificado un gasto!',
      })
      setExpenses((prev) =>
        prev.map((i) => (i._id === id ? { ...data } : { ...i }))
      )
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Ha ocurrido un error!',
      })
    }
  }
  const handleRemoveExpense = async (id: string) => {
    try {
      await removeExpense(id)
      toast.current.show({
        severity: 'success',
        summary: 'Has eliminado un gasto!',
      })
      setExpenses((prev) => prev.filter((i) => i._id !== id))
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Ha ocurrido un error!',
      })
    }
  }

  const ctxPostExpenses = async (body: ExpensesDto) => {
    try {
      const data = await postExpenses(body)
      toast.current.show({
        severity: 'success',
        summary: 'Has registrado un gasto!',
      })
      setExpenses((prev) => [...prev, data])
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Ha ocurrido un error!',
      })
    }
  }

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        expense,
        setExpense,
        ctxPostExpenses,
        handleGetExpenses,
        handleRemoveExpense,
        handleUpdateExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpensesState = () => {
  return useContext(ExpensesContext)
}

export default ExpensesProvider
