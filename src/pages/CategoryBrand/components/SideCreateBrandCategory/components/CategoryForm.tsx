import React, { useState } from 'react'

// Components
import { toast } from '../../../../../App'
import { Button } from '../../../../../components/shared'
import { useCategoryBrandState } from '../../../context'
import { InputText } from 'primereact/inputtext'

export interface CategoryFormProps {
  close: () => void
}

const CategoryForm: React.FC<CategoryFormProps> = ({ close }) => {
  const { addCategory } = useCategoryBrandState()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [subcategories, setSubCategories] = useState<string[]>([])

  const handleCreateCategory = (e: any) => {
    e.preventDefault()
    if (!name) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo encabezado',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      addCategory({ name, subcategories })
      toast.current?.show({
        severity: 'success',
        summary: 'Categoria agregada',
        detail: `Has agregado la categoria ${name} exitosamente!`,
      })
      setName('')
      close()
    }
  }

  const handleAddCategory = () => {
    if (!category) {
      toast.current?.show({
        severity: 'error',
        summary: 'Llena el campo categoria',
        detail: `Debes de llenar el campo para agregar una categoria!`,
      })
    } else {
      setSubCategories((prev) => [...prev, category])
      setCategory('')
    }
  }

  return (
    <form
      className='mt-3 relative flex flex-col'
      onSubmit={(e) => handleCreateCategory(e)}
    >
      <div className='flex flex-col'>
        <label className='mb-2 text-xs'>Encabezado</label>
        <InputText
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='outline-none rounded-md p-2 border focus:border-purple-300'
        />
      </div>

      <div className='flex flex-col mt-4'>
        <label className='mb-2 text-xs'>Categoria</label>
        <div className='flex gap-2'>
          <InputText
            className='flex-1 outline-none rounded-md p-2 border focus:border-purple-300'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button
            buttonType='button'
            icon='fa fa-plus'
            onClick={handleAddCategory}
          />
        </div>

        {subcategories.length > 0 ? (
          <div className='bg-white mt-3 flex text-center text-sm p-4'>
            {subcategories.map((c) => (
              <div className='bg-purple-400 text-white text-bold mr-2 shadow-md rounded-md p-2'>
                <p>{c}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='bg-white mt-3 text-center text-sm p-4'>
            <p>Debes de agregar al menos una categoria</p>
          </div>
        )}
      </div>

      <div className='grid grid-cols-2 gap-1 mb-5 mt-8'>
        <Button text='Cancelar' color='danger' icon='fa fa-x' />
        <Button text='Guardar' icon='fa fa-floppy-disk' />
      </div>
    </form>
  )
}

export default CategoryForm
