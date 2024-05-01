import React, { useState } from 'react'

import commaNumber from 'comma-number'
import { dateFormat } from '../../../../utility/dateFormat'
import { useOrderState } from '../../context'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { IOrder } from '../../models/IOrder'
import { OrderModal } from '../modal'

const OrdersTable = (props: any) => {
  const { orders, selectOrder } = useOrderState()
  const [selectedOrder, setSelectedOrder] = useState([])

  return (
    <div>
      <DataTable
        value={
          props?.orders?.length ? props.orders : orders?.length ? orders : []
        }
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        selection={selectedOrder}
        onSelectionChange={(e: any) => setSelectedOrder(e.value)}
        className='hover:bg-slate-200'
      >
        {/* <Column
          selectionMode='multiple'
          headerStyle={{ width: '3rem' }}
        ></Column> */}
        <Column
          field='_id'
          body={(data) => <p>1</p>}
          header='#Numero'
          className='text-sm'
        ></Column>
        <Column
          field='products'
          header='productos'
          className='text-sm'
          bodyClassName='text-center w-fit'
          body={(data: IOrder) => (
            <p>{data.orderItems?.reduce((acc, curr) => curr.qty + acc, 0)}</p>
          )}
        ></Column>
        <Column
          field='paymentMethod'
          header='Metodo de pago'
          className='text-sm'
        ></Column>
        <Column
          field='totalPrice'
          header='Monto'
          className='text-sm'
          body={(data: IOrder) => <p>${commaNumber(data.totalPrice)}</p>}
        ></Column>
        <Column
          field='createdAt'
          header='Fecha'
          className='text-sm'
          body={(data: IOrder) => (
            <p>{dateFormat(new Date(data.createdAt!), 'date')}</p>
          )}
        ></Column>
        <Column
          body={(data) => (
            <div className='flex'>
              <div onClick={() => selectOrder(data._id)}>
                <i
                  data-te-toggle='modal'
                  data-te-target='#orderModal'
                  className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'
                ></i>
              </div>
              <i className='fa fa-regular fa-edit cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
            </div>
          )}
        ></Column>
      </DataTable>

      <OrderModal />
    </div>
  )
}

export default OrdersTable
