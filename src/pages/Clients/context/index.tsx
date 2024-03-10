import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { IClients } from '../models/IClients'

// Services
import { getClientOrders, getClients, getProvincesReport } from '../services'
import { IOrder } from '../../../pages/Orders/models/IOrder'
import { IProvincesReport } from '@/models/ProvincesReport.model'

const initialState: InitialStateProps = {
  clients: [],
  client: null,
  provincesReport: null,
  clientOrders: [],
  addClient: () => {},
  fetchClientOrders: () => {},
  updateClient: () => {},
  removeClient: () => {},
  setSearch: () => {},
  setClient: () => {},
}

const ClientContext = createContext(initialState)

export interface InventoryProviderProps {
  children: ReactElement
}

export const ClientProvider: React.FC<InventoryProviderProps> = ({
  children,
}) => {
  const [clients, setClients] = useState<IClients[]>(initialState.clients)
  const [provincesReport, setProvincesReport] =
    useState<IProvincesReport | null>(null)
  const [searchClients, setSearchClient] = useState<IClients[]>([])
  const [search, setSearch] = useState<string>('')
  const [client, setClient] = useState<IClients | null>(initialState.client)
  const [clientOrders, setClientOrders] = useState<IOrder[]>(
    initialState.clientOrders
  )

  let activeClient = search ? searchClients : clients

  useEffect(() => {
    getInitialState()
  }, [])

  useEffect(() => {
    if (search) {
      handleSearchClient()
    }
  }, [search])

  const handleSearchClient = () => {
    let searched = clients.filter((p) =>
      p.fullname.toLowerCase().includes(search.toLowerCase())
    )

    setSearchClient(searched)
  }

  const getInitialState = async () => {
    try {
      const clientsData = await getClients()
      const provincesReportData = await getProvincesReport()

      setClients(clientsData)
      setProvincesReport(provincesReportData)
    } catch (error) {}
  }

  const fetchClientOrders = async () => {
    try {
      const clientsData = await getClientOrders(client?._id || '')
      setClientOrders(clientsData)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const addClient = (body: IClients) => {
    setClients((prev) => [...prev, { _id: `${prev.length + 1}`, ...body }])
  }

  const updateClient = (body: IClients) => {
    setClients((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeClient = (id: string) => {
    setClients((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <ClientContext.Provider
      value={{
        clients: activeClient,
        provincesReport,
        client,
        clientOrders,
        fetchClientOrders,
        addClient,
        updateClient,
        removeClient,
        setClient,
        setSearch,
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}

export const useClientstate = () => useContext(ClientContext)

export interface InitialStateProps {
  clients: IClients[]
  client: IClients | null
  provincesReport: IProvincesReport | null
  clientOrders: IOrder[]
  addClient: (product: IClients) => void
  updateClient: (product: IClients) => void
  removeClient: (id: string) => void
  setSearch: (string: string) => void
  setClient: (product: IClients) => void
  fetchClientOrders: () => void
}
