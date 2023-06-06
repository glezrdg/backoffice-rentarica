import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { IProduct } from '../models/IProduct'
import {
  getproducts as fetchProducts,
  postProduct,
  deleteProduct,
  updateProduct as putProduct,
} from '../services'
import { ProductQueries } from '../models/ProductQueries'
import { toast } from '../../../App'

// Services

const initialState: InitialStateProps = {
  products: [],
  searchProducts: [],
  product: null,
  getProducts: async () => {},
  addProduct: async () => {},
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
  const [products, setProducts] = useState<IProduct[]>([])
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

  const getProducts = async (queries?: any) => {
    try {
      const productsData = await fetchProducts(queries)
      setProducts(productsData)
    } catch (error) {}
  }
  const getInitialState = async () => {
    try {
      const productsData = await fetchProducts()
      setProducts(productsData)
    } catch (error) {}
  }

  const addProduct = async (body: IProduct) => {
    try {
      const product = await postProduct(body)
      if (product) setProducts((prev) => [product, ...prev])
      toast.current?.show({
        severity: 'success',
        summary: 'Producto agregado',
        detail: `Has agregado el producto ${name} exitosamente!`,
      })
    } catch (error: any) {
      console.log('CONTEXT ADD PRODUCT', error.message)
    }
  }

  const updateProduct = async (body: IProduct) => {
    try {
      const updatedProduct = await putProduct(body)
      setProducts((prev) =>
        prev.map((i) => (i._id === body._id ? { ...updatedProduct } : i))
      )
      toast.current?.show({
        severity: 'success',
        summary: 'Producto actualizado',
        detail: `Has actualizado el producto ${updatedProduct.name} exitosamente!`,
      })
    } catch (error) {}
  }

  const removeProduct = async (id: string) => {
    try {
      const deletedProduct = await deleteProduct(id)
      setProducts((prev) => prev.filter((i) => i._id !== deletedProduct._id))
      toast.current?.show({
        severity: 'success',
        summary: 'Producto borrado',
        detail: `Has borrado el producto ${deletedProduct.name} exitosamente!`,
      })
    } catch (error) {}
  }

  return (
    <InventoryContext.Provider
      value={{
        product,
        products: activeProducts,
        getProducts,
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
  getProducts: (queries: ProductQueries) => Promise<void>
  addProduct: (product: IProduct) => Promise<void>
  updateProduct: (product: IProduct) => void
  removeProduct: (id: string) => void
  setSearch: (string: string) => void
  setProduct: (product: IProduct) => void
}
