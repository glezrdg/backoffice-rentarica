import React, { useState } from 'react'

import commaNumber from 'comma-number'
import { dateFormat } from '../../../../utility/dateFormat'
import { useShoppingState } from '../../context'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { IOrder } from '../../../Orders/models/IOrder'
import { IShopping } from '../../models'
// import { OrderModal } from '../modal'

const ShoppingTable = (props: any) => {
  const { shoppings, setShopping } = useShoppingState()
  const [selectedOrder, setSelectedOrder] = useState([])

  return (
    <div>
      <DataTable
        value={
          props?.shoppings?.length
            ? props?.shoppings
            : shoppings?.length
            ? shoppings
            : []
        }
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        selection={[]}
        onSelectionChange={(e: any) => setSelectedOrder(e.value)}
        className='hover:bg-slate-200'
      >
        {/* <Column
          selectionMode='multiple'
          headerStyle={{ width: '3rem' }}
        ></Column> */}

        {!props.showLess && (
          <Column
            field='products'
            header='productos'
            className='text-sm'
            bodyClassName='text-center w-fit'
            body={(data: IShopping) => (
              <p>
                {data?.shoppingList?.reduce((acc, curr) => curr.qty + acc, 0)}
              </p>
            )}
          ></Column>
        )}
        <Column
          field='total'
          header='Inversion'
          body={(data: IShopping) => <p>${commaNumber(data.total)}</p>}
          className='text-sm'
        ></Column>
        <Column
          field='totalPrice'
          header='Valor'
          className='text-sm'
          body={(data: IShopping) => (
            <p>
              $
              {commaNumber(
                data?.shoppingList?.reduce(
                  (acc: any, curr: any) => acc + curr.product.price * curr.qty,
                  0
                ) || 0
              )}
            </p>
          )}
        ></Column>
        <Column
          field='totalPrice'
          header='Ganancias'
          className='text-sm'
          body={(data: IShopping) => (
            <p className='bg-purple-900 text-slate-50 p-2 rounded-lg w-[50%] text-center'>
              $
              {commaNumber(
                data?.shoppingList?.reduce(
                  (acc: any, curr: any) =>
                    acc +
                    (curr.product.price - curr.price) *
                      (curr.qty - curr.available),
                  0
                ) || 0
              )}
            </p>
          )}
        ></Column>
        {!props.showLess && (
          <Column
            field='createdAt'
            header='Fecha'
            className='text-sm'
            body={(data: IOrder) => (
              <p>{dateFormat(new Date(data?.createdAt!), 'date')}</p>
            )}
          ></Column>
        )}
        <Column
          body={(data) => (
            <div className='flex'>
              <div onClick={() => setShopping(data)}>
                <i
                  data-te-toggle='modal'
                  data-te-target='#shoppingModal'
                  className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'
                ></i>
              </div>
              <i className='fa fa-regular fa-edit cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
            </div>
          )}
        ></Column>
      </DataTable>

      {/* <OrderModal /> */}
    </div>
  )
}

export default ShoppingTable
