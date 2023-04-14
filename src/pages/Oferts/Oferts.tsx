import React, { useState } from 'react'
import './styles.css'

// Components
import { Button } from '../../components/shared'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { orders } from '../../utility/data'
import { SideCreateOfert } from './components'

interface IOfertsProps {
  children?: React.ReactNode
}

const Oferts: React.FC<IOfertsProps> = (props) => {
  const [selectedCities, setSelectedCities] = useState(null)
  const [createOfert, setCreateOfert] = useState(false)

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]
  return (
    <>
      <SideCreateOfert
        active={createOfert}
        close={() => setCreateOfert(false)}
      />
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-slate-800 uppercase'>Ofertas</h3>

        <div>
          <Button
            icon='fa fa-plus'
            color='success'
            text='Oferta'
            className='!px-3 !hover:shadow-none'
            onClick={() => setCreateOfert(true)}
          />
        </div>
      </div>

      <div className='flex items-center p-2 mb-6'>
        <div className='flex items-center self-end px-2 rounded-2xl h-fit w-fit mr-20 flex-1'>
          <span className='p-input-icon-left w-full'>
            <i className=' fa fa-search' />

            <InputText
              placeholder='Buscar por nombre...'
              className='rounded-lg placeholder:text-xs outline-none p-2 w-full'
            />
          </span>
        </div>

        <div className='flex items-center'>
          <div className='flex flex-col mr-3'>
            <label className='text-xs mb-1'>Provincias</label>
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={cities}
              optionLabel='name'
              display='chip'
              placeholder='Provincias'
              maxSelectedLabels={3}
              className='w-full max-w-[150px] md:w-20rem'
            />
          </div>
          <div className='flex flex-col mr-3'>
            <label className='text-xs mb-1'>Estado</label>
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={cities}
              optionLabel='name'
              display='chip'
              placeholder='Estado'
              maxSelectedLabels={3}
              className='w-full max-w-[150px] md:w-20rem'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-xs mb-1'>Metodo de pago</label>
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={cities}
              optionLabel='name'
              display='chip'
              placeholder='Metodo de pago'
              maxSelectedLabels={3}
              className='w-full max-w-[150px] md:w-20rem'
            />
          </div>
        </div>
      </div>

      {/* TABLE */}

      <div className='overflow-hidden rounded-xl'>
        <DataTable
          value={orders}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: '50rem' }}
          className='hover:bg-slate-200'
        >
          <Column field='number' header='#Codigo' className='text-sm'></Column>
          <Column field='price' header='Descuento' className='text-sm'></Column>
          <Column
            field='paymentMethod'
            header='Metodo de pago'
            className='text-sm'
          ></Column>
          <Column
            field='province'
            header='Provincia'
            className='text-sm'
          ></Column>
          <Column field='qty' header='Uso' className='text-sm'></Column>
          <Column
            field='status'
            header='Estado'
            className='text-sm'
            style={{ width: '20%' }}
            body={(data) => (
              <div className='text-xs bg-red-400 w-[60%] text-white rounded-2xl p-[0.4rem] text-center'>
                {data.status}
              </div>
            )}
          ></Column>
          <Column
            field='createdAt'
            header='Expira'
            className='text-sm'
          ></Column>
          <Column
            body={(data) => (
              <div className='flex'>
                <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                <i className='fa fa-regular fa-edit cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              </div>
            )}
          ></Column>
        </DataTable>
      </div>
    </>
  )
}

export default Oferts
