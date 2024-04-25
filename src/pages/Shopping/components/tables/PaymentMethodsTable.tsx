import React from 'react'
import commaNumber from 'comma-number'

import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { useOrderState } from '../../context'

const data = [
  {
    name: 'Tarjeta',
    cantidad: 0,
    monto: 65895,
  },
  {
    name: 'Transferencia',
    cantidad: 0,
    monto: 52158,
  },
  {
    name: 'Efectivo',
    cantidad: 0,
    monto: 36500,
  },
  {
    name: 'Paypal',
    cantidad: 0,
    monto: 26450,
  },
]

const PaymentMethosTable = () => {
  const { orders } = useOrderState()

  return (
    <>
      {/* TABLE */}
      <div className='py-4 md:p-4 bg-white rounded-lg shadow-sm w-full h-fit'>
        <div className='overflow-hidden rounded-xl'>
          <DataTable
            value={data.map((i) => {
              let info = orders.filter(
                (order) => order.paymentMethod === i.name
              )

              return {
                ...i,
                cantidad: info.length,
                monto: info.reduce((acc, curr) => acc + curr.totalPrice, 0),
              }
            })}
            paginator
            rows={5}
            // tableStyle={{ minWidth: '50rem' }}
            className='hover:bg-slate-200'
          >
            <Column
              field='name'
              header='Tipo'
              className='text-[10px] md:text-sm'
              style={{ width: '50%' }}
            ></Column>
            <Column
              field='cantidad'
              header='Cantidad'
              className='text-[10px] md:text-sm'
              style={{ width: '30%' }}
            ></Column>
            <Column
              field='monto'
              header='Monto'
              className='text-[10px] md:text-sm'
              style={{ width: '25%' }}
              body={(data) => <p>${commaNumber(data.monto)}</p>}
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

export default PaymentMethosTable
