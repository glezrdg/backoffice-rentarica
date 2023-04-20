import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { IOfert } from '../models/IOfert'
import { getOferts } from '../services'

// Services

const initialState: InitialStateProps = {
  oferts: [],
  searchOfert: [],
  ofert: null,
  addOfert: () => {},
  updateOfert: () => {},
  removeOfert: () => {},
  setSearch: () => {},
  setOfert: () => {},
}

const OfertContext = createContext(initialState)

export interface InventoryProviderProps {
  children: ReactElement
}

export const OfertProvider: React.FC<InventoryProviderProps> = ({
  children,
}) => {
  const [oferts, setOferts] = useState<IOfert[]>(initialState.oferts)
  const [searchOfert, setSearchOfert] = useState<IOfert[]>([])
  const [search, setSearch] = useState<string>('')
  const [ofert, setOfert] = useState<IOfert | null>(initialState.ofert)

  let activeOfert = search ? searchOfert : oferts

  useEffect(() => {
    getInitialState()
  }, [])

  useEffect(() => {
    if (search) {
      handleSearchOfert()
    }
  }, [search])

  const handleSearchOfert = () => {
    let searched = oferts.filter((p) =>
      p.code.toLowerCase().includes(search.toLowerCase())
    )

    setSearchOfert(searched)
  }

  const getInitialState = async () => {
    try {
      const ofertData = await getOferts()
      setOferts(ofertData)
    } catch (error) {}
  }

  const addOfert = (body: IOfert) => {
    setOferts((prev) => [...prev, { _id: `${prev.length + 1}`, ...body }])
  }

  const updateOfert = (body: IOfert) => {
    setOferts((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeOfert = (id: string) => {
    setOferts((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <OfertContext.Provider
      value={{
        oferts: activeOfert,
        ofert,
        addOfert,
        updateOfert,
        removeOfert,
        setOfert,
        setSearch,
        searchOfert,
      }}
    >
      {children}
    </OfertContext.Provider>
  )
}

export const useOfertState = () => useContext(OfertContext)

export interface InitialStateProps {
  oferts: IOfert[]
  searchOfert: IOfert[]
  ofert: IOfert | null
  addOfert: (product: IOfert) => void
  updateOfert: (product: IOfert) => void
  removeOfert: (id: string) => void
  setSearch: (string: string) => void
  setOfert: (product: IOfert) => void
}
