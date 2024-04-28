import React, { useEffect, useState } from 'react'

// Componentes
import { InputNumber } from 'primereact/inputnumber'
import { toast } from '../../../../../App'
import { Button } from '../../../../../components/shared'
import { useCategoryBrandState } from '../../../../CategoryBrand/context'
import { useInventoryState } from '../../../context'
import { ISizes } from '../../../models/IProduct'
import { sizes as sizesData } from '../../../utils/data'
import Sizes from '../../Sizes'
import { Checkbox } from 'primereact/checkbox'

interface ProductFormProps {
  close: () => void
}

const ProductForm: React.FC<ProductFormProps> = ({ close }) => {
  const { product, addProduct, updateProduct, removeProduct } =
    useInventoryState()
  const { brands, categories } = useCategoryBrandState()

  const [name, setName] = useState('')
  const [productType, setProductType] = useState(
    product?.productType || 'product'
  )
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState(brands[0]?._id!)
  const [ofert, setOfert] = useState(categories[0]?._id!)
  const [sizes, setSize] = useState<ISizes[]>(sizesData)
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([
    'https://phantom-marca.unidadeditorial.es/8c9bc73dd0d66d63d97f5eca8b5753c3/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/23/16744636883962.jpg',
  ])
  const [file, setFile] = useState<any>()

  useEffect(() => {
    if (product?._id) {
      setName(product.name)
      setPrice(product.price)
      setCategory(product.category)
      setBrand(product.brand)
      setDescription(product.description)
      setSize(product.sizes)
      setOfert(product.ofert)
      setProductType(product.productType)
    } else {
      cleanInputs()
    }
  }, [product])

  useEffect(() => {
    setCategory(categories[0]?._id!)
  }, [categories])

  const handleCreateProduct = async (e: any) => {
    e.preventDefault()

    let qtyType: any = {}

    if (productType === 'sizes') {
      qtyType.sizes = sizes.filter((i) => i.qty > 0)
      qtyType.qty = sizes.reduce((acc, cur) => acc + cur.qty, 0)
    } else qtyType.qty = qty

    if (!name) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      await addProduct({
        name,
        price,
        description,
        category,
        brand,
        images: file!,
        ofert,
        ...qtyType,
        productType,
      })
      cleanInputs()
      close()
    }
  }

  const handleUpdateProduct = async (e: any) => {
    e.preventDefault()
    if (!name) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      await updateProduct({
        _id: product?._id,
        name,
        price,
        description,
        category,
        brand,
        images: product?.images!,
        ofert,
        sizes: sizes.filter((i) => i.qty > 0),
        qty: sizes.reduce((acc, cur) => acc + cur.qty, 0),
        productType,
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
      let newSizes = sizes?.map((s) =>
        s.name === item.name ? { ...s, qty } : s
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
    setSize(sizesData)
    setOfert('')
    setImages([''])
    setProductType(product?.productType || 'product')
  }

  // IMAGE JS

  const addImgHandler = () => {
    const imgInputHelper: any = document.getElementById('add-single-img')!
    const imgInputHelperLabel = document.getElementById('add-img-label')!
    const imgContainer = document.querySelector('.custom__image-container')!
    const imgFiles: File[] = []

    const fileInput = imgInputHelper.files[0]
    if (!fileInput) return
    // Generate img preview
    const reader = new FileReader()
    reader.readAsDataURL(fileInput)
    reader.onload = () => {
      const newImg = document.createElement('img')
      newImg.src = String(reader.result)
      imgContainer.insertBefore(newImg, imgInputHelperLabel)
    }
    // Store img file
    imgFiles.push(fileInput)
    setFile(imgFiles[0])
    // Reset image input
    imgInputHelper.value = ''
    return
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

        <div className='mt-5'>
          <label className='mb-3 text-xs block'>
            Administrar cantidad por:
          </label>
          <div className='flex'>
            <div className='flex items-center mr-4'>
              <Checkbox
                inputId='producto'
                name='producto'
                value='producto'
                onChange={() => setProductType('product')}
                checked={productType === 'product'}
              />
              <label htmlFor='producto' className='ml-2'>
                Producto
              </label>
            </div>
            <div className='flex items-center'>
              <Checkbox
                inputId='sizes'
                name='sizes'
                value='sizes'
                onChange={() => setProductType('sizes')}
                checked={productType === 'sizes'}
              />
              <label htmlFor='sizes' className='ml-2'>
                Sizes
              </label>
            </div>
          </div>
        </div>

        <div className='min-h-28'>
          {productType === 'sizes' ? (
            <div className='my-4'>
              <Sizes sizes={sizes} handleChangeSize={handleChangeSize} />
            </div>
          ) : (
            <InputNumber
              className='w-full my-8'
              value={qty}
              min={1}
              onChange={(e) => setQty(e.value!)}
            />
          )}
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'
            >
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Marcas</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'
            >
              {brands?.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
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
          <div className='custom__form'>
            <label className='mb-2 text-xs'>Imagenes</label>
            <div className='custom__image-container'>
              <label id='add-img-label' htmlFor='add-single-img'>
                +
              </label>
              <input
                type='file'
                id='add-single-img'
                accept='image/jpeg'
                onChange={addImgHandler}
              />
            </div>
            <input
              type='file'
              id='image-input'
              name='photos'
              accept='image/jpeg'
              multiple
            />
            <br />
            <div className='form__controls'>
              <button type='submit'>Submit</button>
            </div>
          </div>

          {/* <FileUpload
            name='demo[]'
            url={'/api/upload'}
            multiple
            accept='image/*'
            maxFileSize={1000000}
            emptyTemplate={
              <p className='m-0'>Drag and drop files to here to upload.</p>
            }
          /> */}
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
