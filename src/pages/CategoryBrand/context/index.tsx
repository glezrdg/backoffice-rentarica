import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { ICategory } from '../models/ICategory'
import { IBrand } from '../models/IBrand'

// Services
import { getCategories, addCategory as postCategory } from '../services'
import { getBrands, addBrand as postBrand } from '../services/brand'

const initialState: InitialStateProps = {
  categories: [],
  category: { name: '', subcategories: [''] },
  brands: [],
  brand: { name: '' },
  addBrand: () => {},
  addCategory: () => {},
}

const CategoryBrandContext = createContext(initialState)

export interface CategoryBrandProviderProps {
  children: ReactElement
}

export const CategoryBrandProvider: React.FC<CategoryBrandProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState<ICategory[]>(
    initialState.categories
  )
  const [category, setCategory] = useState<ICategory>(initialState.category)
  const [brands, setBrands] = useState<IBrand[]>(initialState.brands)
  const [brand, setBrand] = useState<IBrand>(initialState.brand)

  useEffect(() => {
    getInitialState()
  }, [])

  const getInitialState = async () => {
    try {
      const categoriesData = await getCategories()
      const brandsData = await getBrands()
      setCategories(categoriesData)
      setBrands(brandsData)
    } catch (error) {}
  }

  const addBrand = async (body: IBrand) => {
    try {
      let brand = await postBrand(body)
      setBrands((prev) => [brand, ...prev])
    } catch (error) {}
  }
  const addCategory = async (body: ICategory) => {
    try {
      let category = await postCategory(body)
      setCategories((prev) => [category, ...prev])
    } catch (error) {}
  }

  return (
    <CategoryBrandContext.Provider
      value={{ categories, category, brands, brand, addBrand, addCategory }}
    >
      {children}
    </CategoryBrandContext.Provider>
  )
}

export const useCategoryBrandState = () => useContext(CategoryBrandContext)

interface InitialStateProps {
  categories: ICategory[]
  category: ICategory
  brands: IBrand[]
  brand: IBrand
  addBrand: (brand: IBrand) => void
  addCategory: (category: ICategory) => void
}
