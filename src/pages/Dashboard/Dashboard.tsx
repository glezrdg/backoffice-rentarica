import React, { useState } from 'react'
import { BarChart, LineChart } from '../../components/charts'

// Components
import Button from '../../components/shared/Button'

interface IDashboardProps {
  children?: React.ReactNode
}

const Dashboard: React.FC<IDashboardProps> = (props) => {
  const [sidenav, setSidenav] = useState(false)

  return (
    <>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-slate-800 uppercase'>Dashboard</h3>

        <div>
          <Button
            icon='fa fa-calendar text-purple-500'
            color='white'
            text='Calendario'
            className='!px-3 !hover:shadow-none'
          />
        </div>
      </div>

      {/* Cards */}
      <div className={`w-full grid grid-cols-2 gap-6`}>
        <div className='bg-white rounded-lg shadow-sm w-full h-52 flex justify-between p-[25PX]'>
          <div className=' self-end w-1/2'>
            <h5 className='text-slate-800 text-4xl mb-2'>7,461</h5>
            <p className='text-slate-400 mb-5'>Ordenes</p>

            <p>
              <span className='text-green-600'>25%</span> Since last week
            </p>
          </div>
          <div className='w-1/2 self-center'>
            <BarChart color='purple' />
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-sm w-full h-52 flex justify-between p-[25PX]'>
          <div className=' self-end w-1/2'>
            <h5 className='text-slate-800 text-4xl mb-2'>7,461</h5>
            <p className='text-slate-400 mb-5'>Ordenes</p>

            <p>
              <span className='text-green-600'>25%</span> Since last week
            </p>
          </div>
          <div className='w-1/2 self-center'>
            <BarChart color='red' />
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-sm w-full h-52 flex justify-between p-[25PX]'>
          <div className=' self-end w-1/2'>
            <h5 className='text-slate-800 text-4xl mb-2'>7,461</h5>
            <p className='text-slate-400 mb-5'>Ordenes</p>

            <p>
              <span className='text-green-600'>25%</span> Since last week
            </p>
          </div>
          <div className='w-1/2 self-center'>
            <BarChart color='green' />
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-sm w-full h-52 flex justify-between p-[25PX]'>
          <div className=' self-end w-1/2'>
            <h5 className='text-slate-800 text-4xl mb-2'>7,461</h5>
            <p className='text-slate-400 mb-5'>Ordenes</p>

            <p>
              <span className='text-green-600'>25%</span> Since last week
            </p>
          </div>
          <div className='w-1/2 self-center'>
            <BarChart color='blue' />
          </div>
        </div>
      </div>

      {/* PROFIT */}
      <div className='mt-10 bg-white rounded-lg shadow-sm w-full h-fit'>
        {/* Header */}
        <div className='flex items-center justify-between border-b px-6'>
          <h4 className='text-lg text-slate-700 uppercase'>Total ganancias</h4>
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
          <div className='my-8 flex justify-center'>
            <div className='mr-12'>
              <h5 className='text-3xl text-purple-600'>$35,596</h5>
              <div className='flex items-center mt-2'>
                <div className='h-2 w-2 bg-purple-500 rounded-full mr-2'></div>
                <span className='text-xs'>Periodo actual</span>
              </div>
            </div>

            <div>
              <h5 className='text-3xl text-slate-700'>$24,596</h5>
              <div className='flex items-center mt-2'>
                <div className='h-2 w-2 bg-slate-300 rounded-full mr-2'></div>
                <span className='text-xs'>Periodo pasado</span>
              </div>
            </div>
          </div>
          <LineChart />
        </div>
      </div>

      {/* TOP SELLER */}
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
      <div className='grid grid-cols-2 gap-10'>
        <div className='mt-10 p-4 bg-white rounded-lg shadow-sm w-full h-fit'>
          <div className='flex items-center justify-between border-b px-6 py-3'>
            <h4 className='text-lg text-slate-700 uppercase'>
              Ordenes recientes
            </h4>
            <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full text-purple-500 bg-purple-200 hover:text-purple-700 hover:bg-purple-300'></i>
          </div>

          {/* Body */}
          <div className='p-4'>
            {/* Table */}
            <div className='rounded-xl overflow-hidden'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-5'>
                      Product name
                    </th>
                    <th scope='col' className='px-6 py-5'>
                      Qty
                    </th>
                    <th scope='col' className='px-6 py-5'>
                      Price
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
                      Apple MacBook Pro 17"
                    </th>
                    <td className='px-6 py-4'>Silver</td>
                    <td className='px-6 py-4'>$750</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className='px-6 py-4'>White</td>
                    <td className='px-6 py-4'>$2,500</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Magic Mouse 2
                    </th>
                    <td className='px-6 py-4'>Black</td>
                    <td className='px-6 py-4'>$3,660</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Apple Watch
                    </th>
                    <td className='px-6 py-4'>Silver</td>
                    <td className='px-6 py-4'>$4,000</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      iPad
                    </th>
                    <td className='px-6 py-4'>Gold</td>
                    <td className='px-6 py-4'>$6,500</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 rounded-full transition hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Apple iMac 27"
                    </th>
                    <td className='px-6 py-4'>Silver</td>
                    <td className='px-6 py-4'>$10,000</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='mt-10 p-4 bg-white rounded-lg shadow-sm w-full h-fit'>
          <div className='flex items-center justify-between border-b px-6 py-3'>
            <h4 className='text-lg text-slate-700 uppercase'>
              Usuarios Registrados
            </h4>
            <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full text-purple-500 bg-purple-200 hover:text-purple-700 hover:bg-purple-300'></i>
          </div>

          {/* Body */}
          <div className='p-4'>
            {/* Table */}
            <div className='rounded-xl overflow-hidden'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-5'>
                      Provincia
                    </th>
                    <th scope='col' className='px-6 py-5'>
                      Clientes
                    </th>
                    <th scope='col' className='px-6 py-5'>
                      Generado
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
                      Santiago
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
                      Santo Domingo
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
                      San francisco
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
                      Apple Watch
                    </th>
                    <td className='px-6 py-4'>Silver</td>
                    <td className='px-6 py-4'>$4,000</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      iPad
                    </th>
                    <td className='px-6 py-4'>Gold</td>
                    <td className='px-6 py-4'>$6,500</td>
                    <td scope='col' className='px-6 py-3'>
                      <i className='fa fa-regular fa-eye cursor-pointer p-2 rounded-full transition hover:text-purple-500 hover:bg-purple-50'></i>
                    </td>
                  </tr>
                  <tr className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      Apple iMac 27"
                    </th>
                    <td className='px-6 py-4'>Silver</td>
                    <td className='px-6 py-4'>$10,000</td>
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
    </>
  )
}

export default Dashboard
