import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { IProduct } from '../models/IProduct'
import { getproducts } from '../services'

// Services

const initialState: InitialStateProps = {
  products: [],
  searchProducts: [],
  product: null,
  addProduct: () => {},
  updateProduct: () => {},
  removeProduct: () => {},
  setSearch: () => {},
  setProduct: () => {},
}

const InventoryContext = createContext(initialState)

export interface InventoryProviderProps {
  children: ReactElement
}

export const InventoryProvider: React.FC<InventoryProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProduct[]>(initialState.products)
  const [searchProducts, setSearchProducts] = useState<IProduct[]>([])
  const [search, setSearch] = useState<string>('')
  const [product, setProduct] = useState<IProduct | null>(initialState.product)

  let activeProducts = search ? searchProducts : products

  useEffect(() => {
    getInitialState()
  }, [])

  useEffect(() => {
    if (search) {
      handleSearchProduct()
    }
  }, [search])

  const handleSearchProduct = () => {
    let searched = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )

    setSearchProducts(searched)
  }

  const getInitialState = async () => {
    try {
      const productsData = await getproducts()
      setProducts(productsData)
    } catch (error) {}
  }

  const addProduct = (body: IProduct) => {
    setProducts((prev) => [...prev, { _id: `${prev.length + 1}`, ...body }])
  }

  const updateProduct = (body: IProduct) => {
    setProducts((prev) => prev.map((p) => (p._id === body._id ? body : p)))
  }

  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((i) => i._id !== id))
  }

  return (
    <InventoryContext.Provider
      value={{
        product,
        products: activeProducts,
        addProduct,
        updateProduct,
        setProduct,
        removeProduct,
        searchProducts,
        setSearch,
      }}
    >
      {children}
    </InventoryContext.Provider>
  )
}

export const useInventoryState = () => useContext(InventoryContext)

interface InitialStateProps {
  products: IProduct[]
  searchProducts: IProduct[]
  product: IProduct | null
  addProduct: (product: IProduct) => void
  updateProduct: (product: IProduct) => void
  removeProduct: (id: string) => void
  setSearch: (string: string) => void
  setProduct: (product: IProduct) => void
}
