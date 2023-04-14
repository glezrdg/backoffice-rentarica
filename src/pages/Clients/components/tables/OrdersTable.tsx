import { orders } from '../../../../utility/data'

// Components
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import ClientModal from '../modal/ClientModal/ClientModal'

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
        <Column
          field='number'
          header='#Numero'
          style={{ width: '15%' }}
          className='text-sm'
        ></Column>
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
          field='province'
          header='Provincia'
          className='text-sm'
          style={{ width: '15%' }}
        ></Column>
        <Column
          field='qty'
          header='Compras'
          className='text-sm m-auto'
          style={{ width: '10%' }}
        ></Column>
        <Column
          field='totalAmount'
          header='Monto'
          className='text-sm m-auto'
          body={(data) => <p>${data.totalAmount}</p>}
          style={{ width: '10%' }}
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
          field='createdAt'
          header='Fecha'
          className='text-sm'
          style={{ width: '23%' }}
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
                <ClientModal />
              </div>
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
