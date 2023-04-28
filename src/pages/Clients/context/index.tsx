import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { IClients } from '../models/IClients'

// Services
import { getClients } from '../services'

const initialState: InitialStateProps = {
  clients: [],
  client: null,
  addClient: () => {},
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
  const [searchClients, setSearchClient] = useState<IClients[]>([])
  const [search, setSearch] = useState<string>('')
  const [client, setClient] = useState<IClients | null>(initialState.client)

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
      p.name.toLowerCase().includes(search.toLowerCase())
    )

    setSearchClient(searched)
  }

  const getInitialState = async () => {
    try {
      const clientsData = await getClients()
      setClients(clientsData)
    } catch (error) {}
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
        client,
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
  addClient: (product: IClients) => void
  updateClient: (product: IClients) => void
  removeClient: (id: string) => void
  setSearch: (string: string) => void
  setClient: (product: IClients) => void
}
