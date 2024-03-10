import React from 'react'
import { useClientstate } from '../../context'

// Components
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import ClientModal from '../modal/ClientModal/ClientModal'
import { dateFormat } from '../../../../utility/dateFormat'

const ClientsTable = () => {
  const { clients, setClient } = useClientstate()

  return (
    <div>
      <DataTable
        value={clients}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        className='hover:bg-slate-200'
      >
        <Column
          field='fullname'
          header='Nombre'
          style={{ width: '50%' }}
          className='text-sm'
        ></Column>
        <Column
          field='shippingAddress.province'
          body={(data) => (
            <p>
              {data?.shippingAddress?.province
                ? data?.shippingAddress?.province
                : 'Sin registrar'}
            </p>
          )}
          header='Provincia'
          className='text-sm'
        ></Column>
        <Column
          field='createdAt'
          header='Fecha de registro'
          className='text-sm '
          body={(data) => (
            <div>{dateFormat(new Date(data.createdAt), 'date')}</div>
          )}
        ></Column>

        <Column
          body={(data) => (
            <div className='flex'>
              <div onClick={() => setClient(data)}>
                <button
                  type='button'
                  data-te-toggle='modal'
                  data-te-target='#clientModal'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
                </button>
              </div>
              <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
            </div>
          )}
        ></Column>
      </DataTable>
      <ClientModal />
    </div>
  )
}

export default ClientsTable
