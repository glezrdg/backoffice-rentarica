import React, { useState, useEffect } from 'react'
import './styles.css'

// Components
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { paymentMethods, provinces } from '../../../../utility/data'
import { Calendar } from 'primereact/calendar'
// import { useOrderState } from '../../context'

interface IFiltersProps {
  children?: React.ReactNode
}

const Filters: React.FC<IFiltersProps> = (props) => {
  // const { getOrders } = useOrderState()

  const [selectedProvinces, setSelectedProvinces] = useState([])
  const [selectedState, setSelectedState] = useState('')
  const [selectedAmount, setSelectedAmount] = useState('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState([])

  const prices = [
    { name: 'Mayores', value: 'desc' },
    { name: 'Menores', value: 'asc' },
  ]

  const states = [
    { name: 'Enviados', value: 't' },
    { name: 'Pendientes', value: 'f' },
  ]

  useEffect(() => {
    let query: any = {}

    if (selectedProvinces.length) query.provinces = selectedProvinces.join(',')
    if (selectedPaymentMethod.length)
      query.method = selectedPaymentMethod.join(',')
    if (selectedAmount) query.amount = selectedAmount
    if (selectedState) query.state = selectedState

    handleGetOrders(query)
  }, [selectedAmount, selectedPaymentMethod, selectedProvinces, selectedState])

  const handleGetOrders = async (query: any) => {
    try {
      // await getOrders(query)
    } catch (error: any) {
      console.log('FETCH FROM FILTERS ORDERS:', error.message)
    }
  }

  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col flex-1'>
        <label className='text-xs mb-1'>Plazos de tiempo</label>
        <Calendar className='h-10 w-[40%]' placeholder='Inicio - fin' />
      </div>
      <div className='items-center hidden lg:flex gap-4'>
        <div className='flex flex-col'>
          <label className='text-xs mb-1'>Monto</label>
          <Dropdown
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.value)}
            options={prices}
            optionLabel='name'
            optionValue='value'
            placeholder='Monto'
            className='w-full md:w-14rem text-xs'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-xs mb-1'>Estado</label>
          <Dropdown
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.value)}
            options={prices}
            optionLabel='name'
            optionValue='value'
            placeholder='Estado'
            className='w-full md:w-14rem text-xs'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-xs mb-1'>Metodo de pago</label>
          <MultiSelect
            value={selectedPaymentMethod}
            onChange={(e) => setSelectedPaymentMethod(e.value)}
            options={paymentMethods}
            display='chip'
            placeholder='Metodo de pago'
            maxSelectedLabels={3}
            className='w-full max-w-[150px] text-xs md:w-20rem'
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
