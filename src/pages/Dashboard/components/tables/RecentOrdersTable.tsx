import React from 'react'
import commaNumber from 'comma-number'

import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { orders } from '../../../../utility/data'

const RecentOrdersTable = () => {
  return (
    <>
      {/* TABLE */}
      <div className='py-4 md:p-4 bg-white rounded-lg shadow-sm w-full h-fit'>
        <div className='overflow-hidden rounded-xl'>
          <DataTable
            value={orders}
            paginator
            rows={5}
            // tableStyle={{ minWidth: '50rem' }}
            className='hover:bg-slate-200'
          >
            <Column
              field='province'
              header='Provincia'
              className='text-[10px] md:text-sm'
              style={{ width: '50%' }}
            ></Column>
            <Column
              field='products'
              header='Productos'
              className='text-[10px] md:text-sm'
              style={{ width: '30%' }}
            ></Column>
            <Column
              field='totalAmount'
              header='Monto'
              className='text-[10px] md:text-sm'
              style={{ width: '25%' }}
              body={(data) => <p>${commaNumber(data.totalAmount)}</p>}
            ></Column>
            <Column
              body={(data) => (
                <div className='flex'>
                  <i className='hidden sm:inline fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                  <i className='hidden sm:visible fa fa-regular fa-edit cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                  <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                </div>
              )}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  )
}

export default RecentOrdersTable
