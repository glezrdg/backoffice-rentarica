import { Avatar } from 'primereact/avatar'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import { useDeliveryState } from '../../context'
import { OrdersTable } from '../../../../pages/Orders/components'
import commaNumber from 'comma-number'

const EmployeeModal = (props: any) => {
  const { delivery, userOrders } = useDeliveryState()

  return (
    <Dialog
      visible={props.open}
      onHide={props.onClose}
      header='Perfil de usuario'
      className='w-[90vw] lg:w-[60vw]'
      maximizable
    >
      <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
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
                <p className='text-xl mb-1'>{delivery?.fullname}</p>
                <span className='text-sm text-slate-500'>36 envios</span>
              </div>
            </div>
            <h2 className='text-3xl text-green-500 font-medium'>
              $
              {Number(
                commaNumber(
                  userOrders.reduce(
                    (acc: any, curr) => acc + curr.totalPrice,
                    0
                  )
                )
              ).toFixed(2)}
            </h2>
          </div>

          {/* Sections */}
          <TabView>
            <TabPanel headerClassName='text-sm' header='Ultimos envios'>
              <div className='rounded-xl overflow-hidden w-full'>
                <OrdersTable orders={userOrders} local />
              </div>
            </TabPanel>
            <TabPanel headerClassName='text-sm' header='Historial'>
              <div className='rounded-xl overflow-hidden w-full'>
                <DataTable
                  value={[]}
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
            <TabPanel headerClassName='text-sm' header='Configuracion'>
              <form className='relative bg-slate-100 p-6 rounded-lg'>
                <div className='grid grid-cols-2 gap-5 mb-5'>
                  <div className='flex flex-col'>
                    <label className='mb-2 text-xs'>Nombre</label>
                    <InputText className='h-10' />
                    {/* <input className='outline-none rounded-md p-2 border focus:border-purple-300' /> */}
                  </div>
                  <div className='flex flex-col'>
                    <label className='mb-2 text-xs'>Telefono</label>
                    <InputText className='h-10' />
                  </div>
                </div>

                <div className='flex flex-col mb-5'>
                  <label className='mb-2 text-xs'>Provincia</label>
                  <select className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'>
                    <option>Camisas</option>
                    <option>Tenis</option>
                    <option>Pantalones</option>
                  </select>
                </div>

                <div className='flex flex-col'>
                  <label className='mb-2 text-xs'>Instrucciones</label>
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
    </Dialog>
  )
}

export default EmployeeModal
