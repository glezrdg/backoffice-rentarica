import React, { useEffect, useState } from 'react'

// Componentes
import { toast } from '../../../../../App'
import { FileUpload } from 'primereact/fileupload'
import { Button } from '../../../../../components/shared'
import { ISizes } from '../../../models/IProduct'
import { InputNumber } from 'primereact/inputnumber'
import { useInventoryState } from '../../../context'
import { sizes } from '../../../utils/data'

interface ProductFormProps {
  close: () => void
}

const ProductForm: React.FC<ProductFormProps> = ({ close }) => {
  const { product, addProduct, updateProduct, removeProduct } =
    useInventoryState()

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [ofert, setOfert] = useState('')
  const [size, setSize] = useState<ISizes[]>(sizes)
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([
    'https://phantom-marca.unidadeditorial.es/8c9bc73dd0d66d63d97f5eca8b5753c3/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/23/16744636883962.jpg',
  ])

  useEffect(() => {
    if (product?._id) {
      setName(product.name)
      setPrice(product.price)
      setCategory(product.category)
      setBrand(product.brand)
      setDescription(product.description)
      setSize(product.size)
      setOfert(product.ofert)
      setImages(product.images)
    } else {
      cleanInputs()
    }
  }, [product])

  const handleCreateProduct = (e: any) => {
    e.preventDefault()
    if (!name) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      addProduct({
        name,
        price,
        description,
        category,
        brand,
        images,
        ofert,
        size,
        qty: size.reduce((acc, cur) => acc + cur.qty, 0),
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Producto agregado',
        detail: `Has agregado el producto ${name} exitosamente!`,
      })
      cleanInputs()
      close()
    }
  }

  const handleUpdateProduct = (e: any) => {
    e.preventDefault()
    if (!name) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      updateProduct({
        _id: product?._id,
        name,
        price,
        description,
        category,
        brand,
        images,
        ofert,
        size,
        qty: size.reduce((acc, cur) => acc + cur.qty, 0),
      })
      toast.current?.show({
        severity: 'success',
        summary: 'Producto agregado',
        detail: `Has agregado el producto ${name} exitosamente!`,
      })
      cleanInputs()
      close()
    }
  }

  const handleChangeSize = (item: ISizes, qty: number) => {
    if (!item) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo categoria',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      let newSizes = size.map((s) =>
        s.name === item.name ? { ...s, qty: qty } : s
      )

      setSize(newSizes)
    }
  }

  const handleRemoveProduct = () => {
    removeProduct(product?._id as string)
    cleanInputs()
    close()
  }

  const cleanInputs = () => {
    setName('')
    setPrice(0)
    setCategory('')
    setBrand('')
    setDescription('')
    setSize(sizes)
    setOfert('')
    setImages([''])
  }

  return (
    <>
      <form
        className='mt-3 relative'
        onSubmit={(e) =>
          !product?._id ? handleCreateProduct(e) : handleUpdateProduct(e)
        }
      >
        <div className='absolute top-0 -left-10 cursor-pointer flex flex-col '>
          <div className='bg-green-400 rounded-tl-lg text-white grid hover:left-[-50px] place-items-center  rounded-bl-lg z-[1] transition-all h-16 w-4 fixed hover:scale-110'>
            1
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 mb-5'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='outline-none rounded-md p-2 border focus:border-purple-300'
            />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Precio</label>
            <input
              value={price}
              min={1}
              type='number'
              onChange={(e) => setPrice(Number(e.target.value))}
              className='outline-none rounded-md p-2 border focus:border-purple-300'
            />
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 text-xs'>Descripcion</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='outline-none border-none rounded-md h-40 p-2 border !focus:border-purple-300'
          />
        </div>

        <div className='my-10 flex'>
          {size?.map((s) => (
            <div
              key={s.name}
              className='bg-white uppercase p-3 px-6 mr-5 text-center'
            >
              <p>{s.name}</p>
              <InputNumber
                value={s.qty}
                mode='decimal'
                min={1}
                size={14}
                inputClassName='p-4 h-8 w-12 text-center'
                incrementButtonClassName='h-4'
                onChange={(e) => handleChangeSize(s, e.value as number)}
              />
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'
            >
              <option>Camisas</option>
              <option>Tenis</option>
              <option>Pantalones</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Marcas</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'
            >
              <option>Adidas</option>
              <option>Nike</option>
              <option>Forever 21</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col mt-5'>
          <label className='mb-2 text-xs'>Oferta</label>
          <select
            value={ofert}
            onChange={(e) => setOfert(e.target.value)}
            className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'
          >
            <option>ninguna</option>
            <option>10%</option>
            <option>12%</option>
            <option>15%</option>
            <option>24%</option>
            <option>50%</option>
          </select>
        </div>

        <div className='flex flex-col my-5'>
          <label className='mb-2 text-xs'>Imagenes</label>
          <FileUpload
            name='demo[]'
            url={'/api/upload'}
            multiple
            accept='image/*'
            maxFileSize={1000000}
            emptyTemplate={
              <p className='m-0'>Drag and drop files to here to upload.</p>
            }
          />
        </div>

        {product ? (
          <div className='grid grid-cols-2 gap-1 mb-5'>
            <Button
              buttonType='button'
              onClick={handleRemoveProduct}
              text='Eliminar'
              color='danger'
              icon='fa fa-trash'
            />
            <Button text='Guardar' icon='fa fa-floppy-disk' />
          </div>
        ) : (
          <div className='grid grid-cols-3 gap-1 mb-5'>
            <Button text='Cancelar' color='danger' icon='fa fa-x' />
            <Button text='Añadir' color='success' icon='fa fa-plus' />
            <Button text='Guardar' icon='fa fa-floppy-disk' />
          </div>
        )}
      </form>
    </>
  )
}

export default ProductForm