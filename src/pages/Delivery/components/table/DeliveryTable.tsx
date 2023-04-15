import React from 'react'

// Components
import { DataTable } from 'primereact/datatable'
import { orders } from '../../../../utility/data'
import { Column } from 'primereact/column'

const DeliveryTable = () => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <DataTable
        value={orders}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
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
  )
}

export default DeliveryTable