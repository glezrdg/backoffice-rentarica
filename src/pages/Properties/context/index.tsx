import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

// Services
import { CreatePropertyDto, Property } from '../models/property.model'
import {
  deleteProperty,
  getProperties,
  getProperty,
  postProperty,
  putProperty,
} from '../services'

const initialState: InitialStateProps = {
  properties: [],
  property: null,
  setProperty: () => {},
  handleGetProperties: () => {},
  handleGetProperty: () => {},
  handleRemoveProperty: () => {},
  handlePostProperty: () => {},
  handlePutProperty: () => {},
}

const PropertiesContext = createContext(initialState)

export interface PropertiesProviderProps {
  children: ReactElement
}

export const PropertiesProvider = ({ children }: any) => {
  const [properties, setProperties] = useState<Property[]>([])
  const [property, setProperty] = useState<Property | null>(null)

  useEffect(() => {
    handleGetProperties()
  }, [])

  const handleGetProperties = async () => {
    try {
      const data = await getProperties()
      setProperties(data)
    } catch (error: any) {
      console.log('Error get Properties:', error.message)
    }
  }

  const handleGetProperty = async (id: string) => {
    try {
      const data = await getProperty(id)
      setProperty(data)
    } catch (error: any) {
      console.log('Error get Properties:', error.message)
    }
  }

  const handleRemoveProperty = async (id: string) => {
    try {
      const data = await deleteProperty(id)
      setProperties((prev) => prev.filter((i) => i._id !== id))
    } catch (error: any) {
      console.log('Error get Properties:', error.message)
    }
  }

  const handlePostProperty = async (body: CreatePropertyDto) => {
    try {
      const data = await postProperty(body)
      setProperties((prev) => [...prev, data])
    } catch (error: any) {
      console.log('Error get properties:', error.message)
    }
  }

  const handlePutProperty = async (body: Partial<Property>) => {
    try {
      const data = await putProperty(body)
      await handleGetProperty(data._id)
    } catch (error: any) {
      console.log('Error get properties:', error.message)
    }
  }

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        handleRemoveProperty,
        handleGetProperties,
        handleGetProperty,
        handlePostProperty,
        handlePutProperty,
        property,
        setProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  )
}

export const usePropertyState = () => useContext(PropertiesContext)

export interface InitialStateProps {
  properties: Property[]
  property: Property | null
  setProperty: (body: any) => void
  handleGetProperties: () => void
  handleGetProperty: (id: string) => void
  handleRemoveProperty: (id: string) => void
  handlePostProperty: (body: CreatePropertyDto) => void
  handlePutProperty: (body: Partial<Property>) => void
}
