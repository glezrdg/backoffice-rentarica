import React, { useState, useEffect } from 'react'
import './styles.css'

// Components
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { paymentMethods, provinces } from '../../../../utility/data'
import { Calendar } from 'primereact/calendar'
import { useShoppingState } from '../../context'
// import { useOrderState } from '../../context'

interface IFiltersProps {
  children?: React.ReactNode
}

const Filters: React.FC<IFiltersProps> = (props) => {
  const { fetchShoppings } = useShoppingState()

  const [selectedState, setSelectedState] = useState('')
  const [selectInvestment, setSelectedInvestment] = useState('')
  const [date, setDate] = useState<any>('')
  const [dateType, setDateType] = useState<'single' | 'range' | 'multiple'>(
    'single'
  )

  const prices = [
    { name: 'Mayores', value: 'desc' },
    { name: 'Menores', value: 'asc' },
  ]

  const states = [
    { name: 'En proceso', value: 'in process' },
    { name: 'Terminados', value: 'completed' },
  ]

  useEffect(() => {
    let query: any = {}

    if (date) {
      if (!date.length) {
        query.date = new Date(date).toISOString()
      } else {
        query.startDate = new Date(date[0]).toISOString()
        query.endDate = new Date(date[1]).toISOString()
      }
    }

    if (selectInvestment) query.investment = selectInvestment
    if (selectedState) query.state = selectedState

    handleGetShoppings(query)
  }, [date, selectInvestment, selectedState])

  const handleGetShoppings = async (query: any) => {
    try {
      await fetchShoppings(query)
    } catch (error: any) {
      console.log('FETCH FROM FILTERS ORDERS:', error.message)
    }
  }

  return (
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
      <div className='items-center hidden lg:flex gap-4'>
        <div className='flex flex-col'>
          <label className='text-xs mb-1'>Inversion</label>
          <Dropdown
            value={selectInvestment}
            onChange={(e) => setSelectedInvestment(e.value)}
            options={prices}
            optionLabel='name'
            optionValue='value'
            placeholder='Inversion'
            className='w-full md:w-14rem text-xs'
          />
        </div>

        <div className='flex flex-col'>
          <label className='text-xs mb-1'>Estado</label>
          <Dropdown
            value={selectedState}
            onChange={(e) => setSelectedState(e.value)}
            options={states}
            optionLabel='name'
            optionValue='value'
            placeholder='Estado'
            className='w-full md:w-14rem text-xs'
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
