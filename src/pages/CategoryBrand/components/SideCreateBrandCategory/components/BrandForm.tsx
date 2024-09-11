import React, { useState } from 'react'

// Components
import { Button } from '../../../../../components/shared'
import { useCategoryBrandState } from '../../../context'
import { toast } from '../../../../../App'
import { InputText } from 'primereact/inputtext'

export interface BrandFormProps {
  close: () => void
}

const BrandForm: React.FC<BrandFormProps> = ({ close }) => {
  const { addBrand } = useCategoryBrandState()
  const [name, setName] = useState('')

  const handleCreateBrand = (e: any) => {
    e.preventDefault()
    addBrand({ name })
    toast.current?.show({
      severity: 'success',
      summary: 'Marca agregada',
      detail: `Has agregado la marca ${name} exitosamente!`,
    })
    setName('')
    close()
  }

  return (
    <form
      className='mt-3 relative flex flex-col'
      onSubmit={(e) => handleCreateBrand(e)}
    >
      <div className='flex flex-col'>
        <label className='mb-2 text-xs'>Nombre</label>
        <InputText
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='outline-none rounded-md p-2 border focus:border-purple-300'
        />
      </div>

      <div className='grid grid-cols-2 gap-1 mb-5 mt-8'>
        <Button
          buttonType='button'
          text='Cancelar'
          color='danger'
          icon='fa fa-x'
          onClick={() => setName('')}
        />
        <Button text='Añadir' color='success' icon='fa fa-plus' />
      </div>
    </form>
  )
}

export default BrandForm
