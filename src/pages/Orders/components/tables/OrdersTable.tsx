import React from 'react'
import { orders } from '../../../../utility/data'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

const OrdersTable = () => {
  return (
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
  )
}

export default OrdersTable
