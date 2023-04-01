import React, { useState } from 'react'
import './styles.css'

// Components
import Button from '../../components/shared/Button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { orders } from '../../utility/data'
import { Dropdown } from 'primereact/dropdown'
import PieChart from '../../components/charts/PieChart'

interface IOrdersProps {
  children?: React.ReactNode
}

const Orders: React.FC<IOrdersProps> = (props) => {
  const [selectedCities, setSelectedCities] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]

  return (
    <>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-slate-800 uppercase'>Ordenes</h3>

        <div className='flex'>
          <Button
            icon='fa fa-calendar text-purple-500'
            color='white'
            text='Calendario'
            className='!px-3 !hover:shadow-none mr-3'
          />
          <Button
            icon='fa fa-file-export'
            color='warning'
            text='Exportar'
            className='!px-3 !hover:shadow-none'
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

      <div>
        <DataTable
          value={orders}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: '50rem' }}
          className='hover:bg-slate-200'
        >
          <Column field='number' header='#Numero' className='text-sm'></Column>
          <Column field='client' header='Cliente' className='text-sm'></Column>
          <Column
            field='province'
            header='Provincia'
            className='text-sm'
          ></Column>
          <Column
            field='products'
            header='productos'
            className='text-sm'
            bodyClassName='text-center w-fit'
          ></Column>
          <Column
            field='paymentMethod'
            header='Metodo de pago'
            className='text-sm'
          ></Column>
          <Column field='price' header='Monto' className='text-sm'></Column>
          <Column
            field='status'
            header='Estado'
            className='text-sm'
            body={(data) => (
              <div className='text-xs bg-red-400 text-white rounded-2xl p-[0.4rem] text-center'>
                {data.status}
              </div>
            )}
          ></Column>
          <Column field='createdAt' header='Fecha' className='text-sm'></Column>
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

      {/* GRAPHS */}
      <div className='grid grid-cols-2 h-fit gap-5'>
        <div className='mt-10 p-4 bg-white rounded-lg shadow-sm w-full h-fit'>
          <div className='flex items-center justify-between border-b px-6 py-3'>
            <h4 className='text-lg text-slate-700 uppercase'>Provincias</h4>
            <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full text-purple-400 bg-slate-100 hover:text-purple-700 hover:bg-purple-300'></i>
          </div>

          {/* Body */}
          <div className='p-5 h-full'>
            <PieChart />
          </div>
        </div>
        <div className='mt-10 p-4 bg-white rounded-lg shadow-sm w-full h-inherit'>
          <div className='flex items-center justify-between border-b px-6 py-3'>
            <h4 className='text-lg text-slate-700 uppercase'>
              Metodos de pago
            </h4>
            <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full text-purple-400 bg-slate-100 hover:text-purple-700 hover:bg-purple-300'></i>
          </div>

          {/* Body */}
          <div className='p-4 h-max'>
            {/* Table */}
            <div className='rounded-xl overflow-hidden'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-5'>
                      Tipo
                    </th>
                    <th scope='col' className='px-6 py-5'>
                      Cantidad
                    </th>
                    <th scope='col' className='px-6 py-5'>
                      Monto
                    </th>
                    <th scope='col' className='px-6 py-5'></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Efectivo
                    </th>
                    <td className='px-6 py-4'>540</td>
                    <td className='px-6 py-4'>$35,860</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Tarjeta
                    </th>
                    <td className='px-6 py-4'>300</td>
                    <td className='px-6 py-4'>$23,000</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Transferencia
                    </th>
                    <td className='px-6 py-4'>210</td>
                    <td className='px-6 py-4'>$18,580</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Paypal
                    </th>
                    <td className='px-6 py-4'>25</td>
                    <td className='px-6 py-4'>$4,000</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 bg-white rounded-lg shadow-sm w-full h-fit'>
        {/* Header */}
        <div className='flex items-center justify-between border-b px-6'>
          <h4 className='text-lg text-slate-700 uppercase'>Top vendidos</h4>
          {/* Toolbar */}
          <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400'>
            <li className='mr-2'>
              <a
                aria-current='page'
                className='inline-block  p-4 py-5 text-purple-600 bg-purple-50 rounded-t-lg active dark:bg-gray-800 dark:text-purple-500'
              >
                week
              </a>
            </li>
            <li className='mr-2'>
              <a className='inline-block  p-4 py-5 rounded-t-lg hover:text-purple-500 hover:border-b-2 border-b-purple-500 dark:hover:bg-gray-800 dark:hover:text-gray-300'>
                month
              </a>
            </li>
            <li className='mr-2'>
              <a className='inline-block  p-4 py-5 rounded-t-lg hover:text-purple-500 hover:border-b-2 border-b-purple-500 dark:hover:bg-gray-800 dark:hover:text-gray-300'>
                year
              </a>
            </li>
          </ul>
        </div>
        {/* Body */}

        <div className='px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center mb-4'>
              <img
                src='https://assets.adidas.com/images/w_450,f_auto,q_auto/1afa15b3c76f4b8a80e5ae7a00c4de04_9366/HL9407_01_laydown.jpg'
                alt='product'
                className=' w-20 h-20 object-cover mr-5 rounded-lg'
              />
              <div>
                <h4 className='mb-3 text-slate-600'>Camisa adidas</h4>
                <p className='text-sm text-slate-400'>357 ventas</p>
              </div>
            </div>

            <h4 className='text-green-500 text-3xl'>$16,560</h4>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center mb-4'>
              <img
                src='https://assets.adidas.com/images/w_450,f_auto,q_auto/1afa15b3c76f4b8a80e5ae7a00c4de04_9366/HL9407_01_laydown.jpg'
                alt='product'
                className=' w-20 h-20 object-cover mr-5 rounded-lg'
              />
              <div>
                <h4 className='mb-3 text-slate-600'>Pantalon nike</h4>
                <p className='text-sm text-slate-400'>302 ventas</p>
              </div>
            </div>

            <h4 className='text-green-500 text-3xl'>$21,560</h4>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center mb-4'>
              <img
                src='https://assets.adidas.com/images/w_450,f_auto,q_auto/1afa15b3c76f4b8a80e5ae7a00c4de04_9366/HL9407_01_laydown.jpg'
                alt='product'
                className=' w-20 h-20 object-cover mr-5 rounded-lg'
              />
              <div>
                <h4 className='mb-3 text-slate-600'>Camisa adidas</h4>
                <p className='text-sm text-slate-400'>357 ventas</p>
              </div>
            </div>

            <h4 className='text-green-500 text-3xl'>$16,560</h4>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center mb-4'>
              <img
                src='https://assets.adidas.com/images/w_450,f_auto,q_auto/1afa15b3c76f4b8a80e5ae7a00c4de04_9366/HL9407_01_laydown.jpg'
                alt='product'
                className=' w-20 h-20 object-cover mr-5 rounded-lg'
              />
              <div>
                <h4 className='mb-3 text-slate-600'>Camisa adidas</h4>
                <p className='text-sm text-slate-400'>357 ventas</p>
              </div>
            </div>

            <h4 className='text-green-500 text-3xl'>$16,560</h4>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img
                src='https://assets.adidas.com/images/w_450,f_auto,q_auto/1afa15b3c76f4b8a80e5ae7a00c4de04_9366/HL9407_01_laydown.jpg'
                alt='product'
                className=' w-20 h-20 object-cover mr-5 rounded-lg'
              />
              <div>
                <h4 className='mb-3 text-slate-600'>Camisa adidas</h4>
                <p className='text-sm text-slate-400'>357 ventas</p>
              </div>
            </div>

            <h4 className='text-green-500 text-3xl'>$16,560</h4>
          </div>
        </div>

        <button className='w-full bg-purple-100 h-14 hover:bg-slate-50 hover:text-purple-500 transition-all'>
          {' '}
          Ver todos
        </button>
      </div>
    </>
  )
}

export default Orders
