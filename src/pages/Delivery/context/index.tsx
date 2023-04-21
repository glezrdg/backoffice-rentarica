import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { ICompany, IDelivery } from '../models'
import { getCompanies } from '../services/company'
import { getDeliveries } from '../services/delivery'

// Services

const initialState: InitialStateProps = {
  companies: [],
  searchCompany: [],
  company: null,
  addCompany: () => {},
  updateCompany: () => {},
  removeCompany: () => {},
  setSearchCompany: () => {},
  setCompany: () => {},
  deliveries: [],
  searchDelivery: [],
  delivery: null,
  addDelivery: () => {},
  updateDelivery: () => {},
  removeDelivery: () => {},
  setSearchDelivery: () => {},
  setDelivery: () => {},
}

const DeliveryContext = createContext(initialState)

export interface InventoryProviderProps {
  children: ReactElement
}

export const DeliveryProvider: React.FC<InventoryProviderProps> = ({
  children,
}) => {
  const [companies, setCompanies] = useState<ICompany[]>(initialState.companies)
  const [searchCompanies, setSearchCompanies] = useState<ICompany[]>([])
  const [searchCompany, setSearchCompany] = useState<string>('')
  const [company, setCompany] = useState<ICompany | null>(initialState.company)

  const [deliveries, setDeliveries] = useState<IDelivery[]>(
    initialState.deliveries
  )
  const [searchDeliveries, setSearchDeliveries] = useState<IDelivery[]>([])
  const [searchDelivery, setSearchDelivery] = useState<string>('')
  const [delivery, setDelivery] = useState<IDelivery | null>(
    initialState.delivery
  )

  let activeCompany = searchCompany ? searchCompanies : companies
  let activeDelivery = searchDelivery ? searchDeliveries : deliveries

  useEffect(() => {
    getInitialState()
  }, [])

  useEffect(() => {
    if (searchDelivery || searchCompany) {
      handleSearch()
    }
  }, [searchDelivery, searchCompany])

  const handleSearch = () => {
    let searched = companies.filter((p) =>
      p.name.toLowerCase().includes(searchCompany.toLowerCase())
    )

    setSearchCompanies(searched)
  }

  const getInitialState = async () => {
    try {
      const companyData = await getCompanies()
      const deliveryData = await getDeliveries()
      setCompanies(companyData)
      setDeliveries(deliveryData)
    } catch (error) {}
  }

  const addCompany = (body: ICompany) => {
    setCompanies((prev) => [...prev, { _id: `${prev.length + 1}`, ...body }])
  }

  const updateCompany = (body: ICompany) => {
    setCompanies((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeCompany = (id: string) => {
    setCompanies((prev) => prev.filter((i) => i._id !== id))
  }

  // DELIVERY

  const addDelivery = (body: IDelivery) => {
    setDeliveries((prev) => [...prev, { _id: `${prev.length + 1}`, ...body }])
  }

  const updateDelivery = (body: IDelivery) => {
    setDeliveries((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeDelivery = (id: string) => {
    setDeliveries((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <DeliveryContext.Provider
      value={{
        companies: activeCompany,
        company,
        addCompany,
        updateCompany,
        removeCompany,
        setCompany,
        setSearchCompany,
        deliveries: activeDelivery,
        delivery,
        setDelivery,
        addDelivery,
        removeDelivery,
        updateDelivery,
        setSearchDelivery,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}

export const useDeliveryState = () => useContext(DeliveryContext)

export interface InitialStateProps {
  companies: ICompany[]
  company: ICompany | null
  searchCompany?: ICompany[]
  setSearchCompany: (string: string) => void
  addCompany: (product: ICompany) => void
  updateCompany: (product: ICompany) => void
  removeCompany: (id: string) => void
  setCompany: (product: ICompany) => void

  deliveries: IDelivery[]
  delivery: IDelivery | null
  searchDelivery?: IDelivery[]
  setSearchDelivery: (string: string) => void
  addDelivery: (product: IDelivery) => void
  updateDelivery: (product: IDelivery) => void
  removeDelivery: (id: string) => void
  setDelivery: (product: IDelivery) => void
}
