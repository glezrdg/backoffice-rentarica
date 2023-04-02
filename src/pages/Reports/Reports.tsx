import React, { useState } from 'react'
import './styles.css'

// Components
import Button from '../../components/shared/Button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Avatar } from 'primereact/avatar'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { TabView, TabPanel } from 'primereact/tabview'
import { orders, products } from '../../utility/data'
import { Dropdown } from 'primereact/dropdown'
import PieChart from '../../components/charts/PieChart'

interface IReportsProps {
  children?: React.ReactNode
}

const Reports: React.FC<IReportsProps> = (props) => {
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
        <h3 className='text-2xl text-slate-800 uppercase'>Reportes </h3>

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

      <div className='my-6'>
        <div className='grid grid-cols-3 gap-5 w-full'>
          <div className='flex-1 bg-white text-xl pt-8 px-10 pb-4 rounded-2xl'>
            <div className='text-green-400 text-3xl font-medium'>
              <p>$78,250</p>
            </div>
            <label className='uppercase block mt-1 mb-4 text-sm font-medium text-slate-400'>
              {' '}
              Neto
            </label>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
              <div
                className='bg-green-600 h-2.5 rounded-full'
                style={{ width: '45%' }}
              ></div>
            </div>
            <span className='text-xs text-slate-400'>Meta establecida</span>
          </div>
          <div className='flex-1 bg-white text-xl pt-8 px-10 pb-4 rounded-2xl'>
            <div className='text-indigo-400 text-3xl font-medium'>
              <p>$78,250</p>
            </div>
            <label className='uppercase block mt-1 mb-4 text-sm font-medium text-slate-400'>
              {' '}
              Venta
            </label>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
              <div
                className='bg-indigo-600 h-2.5 rounded-full'
                style={{ width: '85%' }}
              ></div>
            </div>
            <span className='text-xs text-slate-400'>Meta establecida</span>
          </div>
          <div className='flex-1 bg-white text-xl pt-8 px-10 pb-4 rounded-2xl'>
            <div className='text-blue-400 text-3xl font-medium'>
              <p>$78,250</p>
            </div>
            <label className='uppercase block mt-1 mb-4 text-sm font-medium text-slate-400'>
              {' '}
              Compra
            </label>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
              <div
                className='bg-blue-600 h-2.5 rounded-full'
                style={{ width: '65%' }}
              ></div>
            </div>
            <span className='text-xs text-slate-400'>Meta establecida</span>
          </div>
        </div>
      </div>

      {/* TABLE */}

      <div className='mt-10 bg-white rounded-lg shadow-sm w-full'>
        {/* Header */}
        <div className='flex items-center justify-between border-b px-6'>
          <h4 className='text-lg text-slate-700 uppercase'>Historial</h4>
          {/* Toolbar */}
          <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400'>
            <li className='mr-2'>
              <a
                aria-current='page'
                className='inline-block p-4 py-5 text-purple-600 bg-purple-50 rounded-t-lg active dark:bg-gray-800 dark:text-purple-500'
              >
                week
              </a>
            </li>
            <li className='mr-2'>
              <a className='inline-block p-4 py-5 rounded-t-lg hover:text-purple-500 hover:border-b-2 border-b-purple-500 dark:hover:bg-gray-800 dark:hover:text-gray-300'>
                month
              </a>
            </li>
            <li className='mr-2'>
              <a className='inline-block p-4 py-5 rounded-t-lg hover:text-purple-500 hover:border-b-2 border-b-purple-500 dark:hover:bg-gray-800 dark:hover:text-gray-300'>
                year
              </a>
            </li>
          </ul>
        </div>
        {/* Body */}

        <div className='px-6'>
          <div className='py-8'>
            <div className='bg-slate-100 text-slate-700 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center'>
              <p>Fecha</p>
              <p>Monto</p>
              <p>Ganancias</p>
              <p>Clientes</p>
              <p> </p>
            </div>
            <div className='bg-purple-50 cursor-pointer transition text-slate-600 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center hover:scale-[1.02] hover:shadow-md hover:font-medium hover:text-purple-700'>
              <p>27/01/2023</p>
              <p>$64,000</p>
              <p>$55,000</p>
              <p>240</p>
              <p>
                <i className='fa fa-eye transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full mr-2' />
                <i className='fa fa-file-export transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full' />
              </p>
            </div>
            <div className='bg-purple-50 cursor-pointer transition text-slate-600 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center hover:scale-[1.02] hover:shadow-md hover:font-medium hover:text-purple-700'>
              <p>27/01/2023</p>
              <p>$64,000</p>
              <p>$55,000</p>
              <p>240</p>
              <p>
                <i className='fa fa-eye transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full mr-2' />
                <i className='fa fa-file-export transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full' />
              </p>
            </div>
            <div className='bg-purple-50 cursor-pointer transition text-slate-600 rounded-lg h-14 mb-3 grid grid-cols-5 place-items-center hover:scale-[1.02] hover:shadow-md hover:font-medium hover:text-purple-700'>
              <p>27/01/2023</p>
              <p>$64,000</p>
              <p>$55,000</p>
              <p>240</p>
              <p>
                <i className='fa fa-eye transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full mr-2' />
                <i className='fa fa-file-export transition cursor-pointer text-slate-600 hover:bg-purple-300 p-2 rounded-full' />
              </p>
            </div>
          </div>
        </div>
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

export default Reports
