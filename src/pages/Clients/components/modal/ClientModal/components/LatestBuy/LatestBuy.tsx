import React from 'react'
import './styles.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { orders } from '../../../../../../../utility/data'

interface ILatestBuyProps {
  children?: React.ReactNode
}

const LatestBuy: React.FC<ILatestBuyProps> = (props) => {
  return (
    <>
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
    </>
  )
}

export default LatestBuy
