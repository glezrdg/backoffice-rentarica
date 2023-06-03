import React, { useState, useEffect } from 'react'
import { provinces as provincesData } from '../../../../../../utility/data'

// Components
import { Button } from '../../../../../../components/shared'
import { Checkbox } from 'primereact/checkbox'
import { MultiSelect } from 'primereact/multiselect'
import { Calendar } from 'primereact/calendar'
import { useDeliveryState } from '../../../../context'

interface DeliveryFormProps {
  onClose: () => void
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ onClose }) => {
  // const { ofert, removeOfert, setOfert } = useOfertState()
  const { addDelivery } = useDeliveryState()

  const [name, setName] = useState('')
  const [cedula, setCedula] = useState('')
  const [phone, setPhone] = useState('')
  const [placa, setPlaca] = useState('')
  const [disable, setDisable] = useState(false)

  // const ofertService = new Service(
  //   {
  //     code,
  //     description,
  //     brand,
  //     category,
  //     provinces,
  //     discount,
  //     expireDate,
  //     disable,
  //   },
  //   useOfertState()
  // )

  // useEffect(() => {
  //   if (ofert?._id) {
  //     setCode(ofert.code)
  //     setDescription(ofert.description)
  //     setCategory(ofert.category)
  //     setBrand(ofert.brand)
  //     setProvinces(ofert.provinces)
  //     setDiscount(ofert.discount)
  //   } else {
  //     cleanInputs()
  //   }
  // }, [ofert])

  const handleCreateOfert = (e: any) => {
    e.preventDefault()
    addDelivery({
      name,
      cedula,
      phone,
      placa,
    })
    cleanInputs()
    onClose()
  }

  // const handleUpdateOfert = (e: any) => {
  //   ofertService.handleUpdateOfert(e)
  //   cleanInputs()
  //   onClose()
  // }

  // const handleRemoveOfert = () => {
  //   ofertService.handleRemoveOfert()
  //   cleanInputs()
  //   onClose()
  // }

  const cleanInputs = () => {
    setName('')
    setCedula('')
    setPhone('')
    setPlaca('')
    setDisable(false)
  }

  return (
    <form
      className='mt-3 relative flex flex-col'
      onSubmit={(e) => handleCreateOfert(e)}
    >
      <div className='flex flex-col'>
        <label className='mb-2 text-xs'>Nombre</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='outline-none rounded-md p-2 border focus:border-purple-300'
        />
      </div>
      <div className='grid grid-cols-2 gap-5 my-5'>
        <div className='flex flex-col'>
          <label className='mb-2 text-xs'>Cedula</label>
          <input
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            className='outline-none rounded-md p-2 border focus:border-purple-300'
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 text-xs'>Celular</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='outline-none rounded-md p-2 border focus:border-purple-300'
          />
        </div>
      </div>

      <div className='flex flex-col'>
        <label className='mb-2 text-xs'>Placa</label>
        <input
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          className='outline-none rounded-md p-2 border focus:border-purple-300'
        />
      </div>

      <label className='text-base flex items-center mt-5'>
        <Checkbox
          onChange={(e) => setDisable(e.target.checked!)}
          checked={disable}
        ></Checkbox>
        <span className='ml-2'>no habilitar</span>
      </label>

      {true ? (
        <div className='grid grid-cols-2 gap-1 mb-5 mt-8'>
          <Button
            // onClick={handleRemoveOfert}
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

export default DeliveryForm
