import React from 'react'
import './styles.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { orders } from '../../../../../../../utility/data'
import { IOrder } from '../../../../../../../pages/Orders/models/IOrder'
import commaNumber from 'comma-number'
import { dateFormat } from '../../../../../../../utility/dateFormat'

interface ILatestBuyProps {
  children?: React.ReactNode
  orders: IOrder[]
}

const LatestBuy: React.FC<ILatestBuyProps> = ({ orders }) => {
  return (
    <>
      <div className='rounded-xl overflow-hidden w-full'>
        <DataTable
          value={orders || 0}
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
            body={() => <p>192</p>}
            style={{ width: '15%' }}
          ></Column>
          <Column
            field='paymentMethod'
            header='Tipo'
            style={{ width: '18%' }}
          ></Column>
          <Column
            field='qty'
            header='Cantidad'
            style={{ width: '18%' }}
            headerClassName=''
            body={(data) => (
              <div>
                {data.orderItems.reduce(
                  (acc: any, curr: any) => acc + curr.qty,
                  0
                )}
              </div>
            )}
          ></Column>
          <Column
            field='totalPrice'
            header='Monto'
            style={{ width: '18%' }}
            body={(data) => <p>${commaNumber(data.totalPrice)}</p>}
          ></Column>
          <Column
            field='totalPrice'
            header='Fecha'
            body={(data) => (
              <p>${dateFormat(new Date(data.createdAt), 'date')}</p>
            )}
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
    </>
  )
}

export default LatestBuy
