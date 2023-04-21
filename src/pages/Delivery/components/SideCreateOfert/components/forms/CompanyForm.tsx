import React, { useEffect, useState } from 'react'

// Components
import { Checkbox } from 'primereact/checkbox'
import { Button } from '../../../../../../components/shared'
import { useDeliveryState } from '../../../../context'
import { CompanyService } from '../../services/company'

interface CompanyFormProps {
  onClose: () => void
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onClose }) => {
  const { company } = useDeliveryState()

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [disable, setDisable] = useState(false)

  const companyService = new CompanyService(
    {
      name,
      price,
      disable,
    },
    useDeliveryState()
  )

  useEffect(() => {
    if (company?._id) {
      setName(company.name)
      setPrice(company.price)
      setDisable(company.disable!)
    } else {
      cleanInputs()
    }
  }, [company])

  const handleCreateCompany = (e: any) => {
    companyService.handleCreateCompany(e)
    cleanInputs()
    onClose()
  }

  const handleUpdateCompany = (e: any) => {
    companyService.handleUpdateCompany(e)
    cleanInputs()
    onClose()
  }

  const handleRemoveCompany = () => {
    companyService.handleRemoveCompany()
    cleanInputs()
    onClose()
  }

  const cleanInputs = () => {
    setName('')
    setPrice(0)
    setDisable(false)
  }

  return (
    <form
      className='mt-3 relative flex flex-col'
      onSubmit={(e) =>
        !company?._id ? handleCreateCompany(e) : handleUpdateCompany(e)
      }
    >
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
            onChange={(e) => setPrice(+e.target.value)}
            className='outline-none rounded-md p-2 border focus:border-purple-300'
          />
        </div>
      </div>

      <label className='text-base flex items-center mt-5'>
        <Checkbox
          onChange={(e) => setDisable(e.target.checked!)}
          checked={disable}
        ></Checkbox>
        <span className='ml-2'>no habilitar</span>
      </label>

      {company ? (
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
          />
          <Button
            buttonType='button'
            text='Añadir'
            color='success'
            icon='fa fa-plus'
          />
          <Button text='Guardar' icon='fa fa-floppy-disk' />
        </div>
      )}
    </form>
  )
}

export default CompanyForm
