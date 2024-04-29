import React, { useState, useEffect } from 'react'
import './styles.css'

// Components
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { paymentMethods, provinces } from '../../../../../utility/data'
import { Calendar } from 'primereact/calendar'

interface IFiltersProps {
  children?: React.ReactNode
}

const Filters: React.FC<IFiltersProps> = (props) => {
  const getOrders = (i: any) => {}

  const [selectedProvinces, setSelectedProvinces] = useState([])
  const [selectedState, setSelectedState] = useState('')
  const [selectedAmount, setSelectedAmount] = useState('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState([])
  const [date, setDate] = useState<any>('')
  const [dateType, setDateType] = useState<'single' | 'range' | 'multiple'>(
    'single'
  )

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
      await getOrders(query)
    } catch (error: any) {
      console.log('FETCH FROM FILTERS ORDERS:', error.message)
    }
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex flex-1'>
          <Dropdown
            className='h-[40px] mr-3'
            options={[
              { title: 'Fecha unica', value: 'single' },
              { title: 'Fecha por rango', value: 'range' },
            ]}
            optionValue='value'
            optionLabel='title'
            value={dateType}
            onChange={(e) => setDateType(e.target.value)}
          />
          <Calendar
            className='h-[40px] mr-3'
            inputClassName='!border-purple-700 hover:outline-none '
            showIcon
            iconPos='left'
            icon={<i className='fa fa-calendar '></i>}
            value={date}
            onChange={(e) => setDate(e.value)}
            selectionMode={dateType}
          />
        </div>
        <div className='items-center hidden lg:flex'>
          <div className='flex flex-col mr-3'>
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
    </>
  )
}

export default Filters
