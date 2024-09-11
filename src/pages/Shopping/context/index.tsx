import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { IShopping, ShoppingDTO } from '../models'
import { getShoppings, postShopping } from '../services'
import { toast } from '../../../App'

export interface InitialProps {
  shoppings: IShopping[]
  shopping: IShopping | null
  setShoppings: any
  setShopping: any
  createShopping: (body: Partial<IShopping>) => void
  fetchShoppings: (queries?: any) => void
}

let initialState: InitialProps = {
  shoppings: [],
  shopping: null,
  setShoppings: () => {},
  setShopping: () => {},
  createShopping: () => {},
  fetchShoppings: () => {},
}

const ShoppingContext = createContext<InitialProps>(initialState)

interface ShoppingProviderProps {
  children: ReactNode
}

export const ShoppingProvider: FC<ShoppingProviderProps> = ({ children }) => {
  const [shoppings, setShoppings] = useState<IShopping[]>([])
  const [shopping, setShopping] = useState<IShopping | null>(null)

  useEffect(() => {
    fetchShoppings()
  }, [])

  const fetchShoppings = async (queries?: any) => {
    try {
      const shoppings = await getShoppings(queries)
      console.log('SHOPPINGS,', shoppings)
      setShoppings(shoppings)
    } catch (error: any) {
      console.log('error getting shoppings', error.message)
    }
  }

  const createShopping = async (body: Partial<IShopping>) => {
    try {
      const createdShop = await postShopping(body)
      setShoppings((prev) => [...prev, createdShop])
      toast.current?.show({
        severity: 'success',
        summary: 'Compra registrada!',
        detail: 'Has registrado la compra exitosamente!',
      })
    } catch (error: any) {
      console.log('error posting shoppings', error.message)
      toast.current?.show({
        severity: 'error',
        summary: 'Ocurrio un error',
        detail: error.message,
      })
    }
  }

  return (
    <ShoppingContext.Provider
      value={{
        shoppings,
        shopping,
        setShopping,
        setShoppings,
        createShopping,
        fetchShoppings,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

export const useShoppingState = () => {
  return useContext(ShoppingContext)
}

export default ShoppingProvider
