import React, { useEffect, useState } from 'react'

// Components
import { InputNumber } from 'primereact/inputnumber'
import {
  useAppDispatch,
  useAppSelector,
} from '../..../../../../../../../redux/store'
import { Button } from '../../../../../../components/shared'
import { useShoppingState } from '../../../../context'
import { ShoppingList } from '../../../../models'
import { ShoppingService } from '../../services/shopping'
import { ISizes } from '../../../../../../pages/Products/models/IProduct'
import { sizes as sizesData } from '../../../../../../pages/Products/utils/data'
import { toast } from '../../../../../../App'
import Sizes from '../../../../../../pages/Products/components/Sizes'

interface CompanyFormProps {
  onClose: () => void
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onClose }) => {
  const { products } = useAppSelector((state) => state.products)
  const { shopping, createShopping } = useShoppingState()

  console.log('PRODUCTS', shopping)

  const [shoppingList, setShoppingList] = useState<ShoppingList[]>([])
  const [sizes, setSize] = useState<ISizes[]>(sizesData)
  const [name, setName] = useState('')
  const [product, setProduct] = useState(products[0]?._id || '')
  const [price, setPrice] = useState<any>(0)
  const [productType, setProductType] = useState('product')
  const [qty, setQty] = useState<any>(1)
  const [disable, setDisable] = useState(false)

  const handleCreateCompany = (e: any) => {
    e.preventDefault()
    createShopping({
      shoppingList,
      total: shoppingList.reduce((acc, curr) => acc + curr.price * curr.qty, 0),
    })
    cleanInputs()
    onClose()
  }

  const handleUpdateCompany = (e: any) => {
    // shoppingService.handleUpdateCompany(e)
    cleanInputs()
    onClose()
  }

  const handleRemoveCompany = () => {
    // shoppingService.handleRemoveCompany()
    cleanInputs()
    onClose()
  }

  const cleanInputs = () => {
    setProduct(products[0]?._id || '')
    setPrice(0)
    setQty(1)
    setDisable(false)
    setSize([])
  }

  const handleAddShoppingList = () => {
    const selectedProduct = products.find((i) => i._id === product)!
    let qtyType: any = {}
    if (selectedProduct.productType === 'sizes') {
      qtyType.sizes = sizes.filter((i) => i.qty > 0)
      qtyType.qty = sizes.reduce((acc, cur) => acc + cur.qty, 0)
    } else qtyType.qty = qty

    setShoppingList((prev) => [
      ...prev,
      {
        price,
        product: selectedProduct._id || products[0]?._id,
        available: sizes.reduce((acc, cur) => acc + cur.qty, 0) || qty,
        ...qtyType,
      },
    ])

    cleanInputs()
  }

  const handleChangeSize = (item: ISizes, qty: number) => {
    if (!item) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo categoria',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      let newSizes = sizes?.map((s) =>
        s.name === item.name ? { ...s, qty } : s
      )
      setSize(newSizes)
    }
  }

  const DisplayQty = () => {
    const selectedProduct = products.find((i) => i._id === product)!

    if (selectedProduct?.productType === 'product') {
      return (
        <InputNumber
          className='w-full'
          min={1}
          value={qty}
          onChange={(e) => setQty(e.value)}
        />
      )
    } else
      return <Sizes sizes={sizes} handleChangeSize={handleChangeSize} my={2} />
  }

  return (
    <form className='mt-3 relative flex flex-col'>
      <div className='flex flex-col'>
        <label className='mb-2 text-xs'>Producto</label>
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'
        >
          {products?.map((product) => (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <div className='mt-6'>
        <label className='mb-4 text-xs'>Cantidad</label>
        <DisplayQty />
      </div>

      <div className='grid grid-cols-2 mb-5 mt-3'>
        <div className='flex flex-col'>
          <label className='mb-2 text-xs'>Precio</label>
          <InputNumber
            value={price}
            onChange={(e) => setPrice(e.value)}
            className='outline-none rounded-md'
          />
        </div>
      </div>

      {shoppingList.length ? (
        <div className='mt-6'>
          <div className='grid grid-cols-3 place-items-center gap-2 p-2 w-full bg-white'>
            <p>Producto</p>
            <p className='text-center'>Precio</p>
            <p className='text-center'>Cantidad</p>
            {/* {item.available && <p className='text-center'>{item.available}</p>} */}
          </div>
          {shoppingList?.map((item) => (
            <div className='grid grid-cols-3 gap-2 p-2 place-items-center w-full'>
              <p>{products.find((i) => i._id === item.product)?.name}</p>
              <p className='text-center'>{item.price}</p>
              <p className='text-center'>{item.qty}</p>
              {/* {item.available && <p className='text-center'>{item.available}</p>} */}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}

      {shopping?._id ? (
        <div className='grid grid-cols-2 gap-1 mb-5 mt-8'>
          <Button
            onClick={handleRemoveCompany}
            buttonType='button'
            text='Eliminar'
            color='danger'
            icon='fa fa-x'
          />
          <Button text='Guardar' icon='fa fa-floppy-disk' />
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-1 mb-5 mt-8'>
          <Button
            buttonType='button'
            text='Cancelar'
            color='danger'
            icon='fa fa-x'
            onClick={onClose}
          />
          <Button
            buttonType='button'
            text='Añadir'
            color='success'
            icon='fa fa-plus'
            onClick={handleAddShoppingList}
          />
          <Button
            text='Guardar'
            icon='fa fa-floppy-disk'
            onClick={(e) =>
              !shopping?._id ? handleCreateCompany(e) : handleUpdateCompany(e)
            }
          />
        </div>
      )}
    </form>
  )
}

export default CompanyForm
