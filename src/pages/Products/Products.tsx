import React, { useState } from 'react'
import './styles.css'

// Utility
import { products } from '../../utility/data'

// Components
import { Button } from '../../components/shared'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SideCreateProduct } from './components'
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'

interface IProductsProps {
  children?: React.ReactNode
}

const Products: React.FC<IProductsProps> = (props) => {
  const [selectedCities, setSelectedCities] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [createProduct, setCreateProduct] = useState(false)

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]

  return (
    <>
      <SideCreateProduct
        active={createProduct}
        close={() => setCreateProduct(false)}
      />
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-slate-800 uppercase'>Productos</h3>

        <div>
          <Button
            icon='fa fa-plus'
            color='success'
            text='Producto'
            className='!px-3 !hover:shadow-none'
            onClick={() => setCreateProduct(true)}
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
            <label className='text-xs mb-1'>Monto</label>
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel='name'
              placeholder='Monto'
              className='w-full md:w-14rem'
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
            <label className='text-xs mb-1'>Compras</label>
            <MultiSelect
              value={selectedCities}
              onChange={(e) => setSelectedCities(e.value)}
              options={cities}
              optionLabel='name'
              display='chip'
              placeholder='Compras'
              maxSelectedLabels={3}
              className='w-full max-w-[150px] md:w-20rem'
            />
          </div>
        </div>
      </div>

      {/* TABLE */}

      <div>
        <DataTable
          value={products}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column
            style={{ width: '10%' }}
            body={(data) => (
              <img
                src={data.img}
                alt=''
                className=' w-16 h-16 object-cover rounded-lg'
              />
            )}
          ></Column>
          <Column
            field='name'
            header='Nombre'
            style={{ width: '25%' }}
          ></Column>
          <Column
            field='qty'
            header='Cantidad'
            style={{ width: '25%' }}
            headerClassName=''
            body={(data) => (
              <div className='p-2 px-3 bg-green-400 w-fit text-white rounded-full'>
                {data.qty}
              </div>
            )}
          ></Column>
          <Column
            field='price'
            header='Precio'
            style={{ width: '25%' }}
          ></Column>
          <Column
            style={{ width: '15%' }}
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

export default Products
