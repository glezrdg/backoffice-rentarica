import React, { useState } from 'react'
import './styles.css'

import { BarChart } from '../../components/charts'
import { Avatar } from 'primereact/avatar'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { TabPanel, TabView } from 'primereact/tabview'
import PieChart from '../../components/charts/PieChart'
import { Button } from '../../components/shared'
import { orders, products } from '../../utility/data'
import { SideCreateDelivery } from './components'

interface IDeliveryProps {
  children?: React.ReactNode
}

const Delivery: React.FC<IDeliveryProps> = (props) => {
  const [selectedCities, setSelectedCities] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [createDelivery, setCreateDelivery] = useState(false)

  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ]
  return (
    <>
      <SideCreateDelivery
        active={createDelivery}
        close={() => setCreateDelivery(false)}
      />
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-slate-800 uppercase'>Delivery</h3>

        <div className='flex'>
          <Button
            icon='fa fa-plus'
            color='success'
            text='Compañia'
            className='!px-3 !hover:shadow-none mr-2'
            onClick={() => setCreateDelivery(true)}
          />
          <Button
            icon='fa fa-plus'
            color='warning'
            text='Integrante'
            className='!px-3 !hover:shadow-none'
            onClick={() => setCreateDelivery(true)}
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

      <div className='grid grid-cols-[2fr_1fr] gap-5'>
        {/* TABLE */}
        <div className='p-4 bg-white rounded-lg shadow-sm w-full h-fit'>
          <div className='overflow-hidden rounded-xl'>
            <DataTable
              value={orders}
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: '50rem' }}
              className='hover:bg-slate-200'
            >
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
              <Column
                field='status'
                header='Estado'
                className='text-sm'
                style={{ width: '30%' }}
                body={(data) => (
                  <div className='text-xs bg-red-400 w-[30%] text-white rounded-2xl p-[0.4rem] text-center'>
                    {data.status}
                  </div>
                )}
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
        </div>
        <div className='p-4 bg-white rounded-lg shadow-sm w-full'>
          <div className='flex items-center justify-between border-b px-2 py-3'>
            <h4 className='text-lg text-slate-700 uppercase'>Usos</h4>
            <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full text-purple-500 bg-purple-200 hover:text-purple-700 hover:bg-purple-300'></i>
          </div>
          <div className='bg-purple-100 w-full my-4 py-2 rounded-2xl text-center'>
            <p className='text-purple-600 text-xl'>2,756</p>
            <span className='text-slate-500 text-xs'>Envios</span>
          </div>
          <BarChart color='purple' />
        </div>
      </div>

      {/* TABLE */}
      <div className='p-4 bg-white rounded-lg shadow-sm w-full h-fit mt-6'>
        <DataTable
          value={orders}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: '50rem' }}
          className='hover:bg-slate-200'
        >
          <Column
            field='client'
            header='Nombre'
            style={{ width: '18%' }}
            className='text-sm'
          ></Column>
          <Column
            field='createdAt'
            header='Telefono'
            className='text-sm'
            body={(data) => <p>849-408-7034</p>}
            style={{ width: '18%' }}
          ></Column>
          <Column
            field='qty'
            header='Pedidos realizados'
            className='text-sm m-auto'
            style={{ width: '23%' }}
          ></Column>

          <Column
            field='totalAmount'
            header='Monto'
            className='text-sm m-auto'
            body={(data) => <p>${data.totalAmount}</p>}
            style={{ width: '15%' }}
          ></Column>
          <Column
            field='status'
            header='Estado'
            className='text-sm'
            style={{ width: '15%' }}
            body={(data) => (
              <div className='text-xs bg-green-400 text-white rounded-2xl p-[0.4rem] text-center'>
                active
              </div>
            )}
          ></Column>

          <Column
            body={(data) => (
              <div className='flex'>
                <div>
                  <button
                    type='button'
                    data-te-toggle='modal'
                    data-te-target='#exampleModalCenter'
                    data-te-ripple-init
                    data-te-ripple-color='light'
                  >
                    <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                  </button>
                  <div
                    data-te-modal-init
                    className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
                    id='exampleModalCenter'
                    aria-labelledby='exampleModalCenterTitle'
                    aria-hidden='true'
                    role='dialog'
                    tabIndex={1}
                  >
                    <div
                      data-te-modal-dialog-ref
                      className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]'
                    >
                      <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
                        <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                          <h5
                            className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                            id='exampleModalScrollableLabel'
                          >
                            Perfil de delivery
                          </h5>

                          <button
                            type='button'
                            className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                            data-te-modal-dismiss
                            aria-label='Close'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              className='h-6 w-6'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Body */}
                        <div className='relative p-4'>
                          <div className='flex items-center justify-between border-b pb-3 mb-2'>
                            <div className='flex items-center'>
                              <Avatar
                                label='U'
                                size='xlarge'
                                className='p-overlay-badge mr-3'
                                style={{
                                  backgroundColor: '#4caf4f',
                                  color: '#ffffff',
                                }}
                              />
                              <div>
                                <p className='text-xl mb-1'>
                                  Carlos Bueno Tavares
                                </p>
                                <span className='text-sm text-slate-500'>
                                  36 envios
                                </span>
                              </div>
                            </div>
                            <h2 className='text-3xl text-green-500 font-medium'>
                              $7.500
                            </h2>
                          </div>

                          {/* Sections */}
                          <TabView>
                            <TabPanel
                              headerClassName='text-sm'
                              header='Ultimos envios'
                            >
                              <div className='rounded-xl overflow-hidden w-full'>
                                <DataTable
                                  value={orders}
                                  paginator
                                  rows={5}
                                  rowsPerPageOptions={[5, 10, 25, 50]}
                                  tableClassName='w-full'
                                  className='!text-xs uppercase !font-normal w-full min-w-min'
                                  tableStyle={{ minWidth: '50rem' }}
                                >
                                  <Column
                                    field='number'
                                    header='#Number'
                                    style={{ width: '20%' }}
                                  ></Column>
                                  <Column
                                    field='paymentMethod'
                                    header='Tipo'
                                    style={{ width: '20%' }}
                                  ></Column>
                                  <Column
                                    field='qty'
                                    header='Cantidad'
                                    style={{ width: '25%' }}
                                    headerClassName=''
                                    body={(data) => <div>{data.qty}</div>}
                                  ></Column>
                                  <Column
                                    field='price'
                                    header='Monto'
                                    style={{ width: '18%' }}
                                    body={(data) => <p>${data.price}</p>}
                                  ></Column>
                                  <Column
                                    field='price'
                                    style={{ width: '15%' }}
                                    body={(data) => (
                                      <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                                    )}
                                  ></Column>
                                </DataTable>
                              </div>
                            </TabPanel>
                            <TabPanel
                              headerClassName='text-sm'
                              header='Historial'
                            >
                              <div className='rounded-xl overflow-hidden w-full'>
                                <DataTable
                                  value={products}
                                  paginator
                                  rows={5}
                                  rowsPerPageOptions={[5, 10, 25, 50]}
                                  tableClassName='!min-w-min'
                                  className='!text-xs uppercase !font-normal w-full min-w-min'
                                  tableStyle={{ minWidth: '50rem' }}
                                >
                                  <Column
                                    style={{ width: '20%' }}
                                    body={(data) => (
                                      <img
                                        src={data.img}
                                        alt=''
                                        className=' w-20 h-20 object-cover rounded-lg'
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
                                      <div className='p-3 px-4 bg-green-400 w-fit text-white rounded-full'>
                                        {data.qty}
                                      </div>
                                    )}
                                  ></Column>
                                  <Column
                                    field='price'
                                    header='Precio'
                                    style={{ width: '25%' }}
                                    body={(data) => <p>${data.price}</p>}
                                  ></Column>
                                </DataTable>
                              </div>
                            </TabPanel>
                            <TabPanel
                              headerClassName='text-sm'
                              header='Configuracion'
                            >
                              <form className='relative bg-slate-100 p-6 rounded-lg'>
                                <div className='grid grid-cols-2 gap-5 mb-5'>
                                  <div className='flex flex-col'>
                                    <label className='mb-2 text-xs'>
                                      Nombre
                                    </label>
                                    <InputText className='h-10' />
                                    {/* <input className='outline-none rounded-md p-2 border focus:border-purple-300' /> */}
                                  </div>
                                  <div className='flex flex-col'>
                                    <label className='mb-2 text-xs'>
                                      Telefono
                                    </label>
                                    <InputText className='h-10' />
                                  </div>
                                </div>

                                <div className='flex flex-col mb-5'>
                                  <label className='mb-2 text-xs'>
                                    Provincia
                                  </label>
                                  <select className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'>
                                    <option>Camisas</option>
                                    <option>Tenis</option>
                                    <option>Pantalones</option>
                                  </select>
                                </div>

                                <div className='flex flex-col'>
                                  <label className='mb-2 text-xs'>
                                    Instrucciones
                                  </label>
                                  <textarea className='outline-none border-none rounded-md h-40 p-2 border !focus:border-purple-300' />
                                </div>
                              </form>
                            </TabPanel>
                          </TabView>
                        </div>
                        <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                          <button
                            type='button'
                            className='inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                            data-te-modal-dismiss
                            data-te-ripple-init
                            data-te-ripple-color='light'
                          >
                            Close
                          </button>
                          <button
                            type='button'
                            className='ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                            data-te-ripple-init
                            data-te-ripple-color='light'
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              </div>
            )}
          ></Column>
        </DataTable>
      </div>
    </>
  )
}

export default Delivery
