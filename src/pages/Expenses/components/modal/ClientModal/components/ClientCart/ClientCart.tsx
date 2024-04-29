import React from 'react'
import './styles.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { products } from '../../../../../../../utility/data'

interface IClientCartProps {
  children?: React.ReactNode
}

const ClientCart: React.FC<IClientCartProps> = (props) => {
  return (
    <>
      <div className='rounded-xl overflow-hidden w-full'>
        <DataTable
          value={products}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableClassName='!min-w-min'
          className='!text-xs uppercase !font-normal w-full min-w-min'
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column
            style={{ width: '20%' }}
            body={(data) => (
              <img
                src={data.img}
                alt=''
                className=' w-20 h-20 object-cover rounded-lg'
              />
            )}
          ></Column>
          <Column
            field='name'
            header='Nombre'
            style={{ width: '25%' }}
          ></Column>
          <Column
            field='qty'
            header='Cantidad'
            style={{ width: '25%' }}
            headerClassName=''
            body={(data) => (
              <div className='p-3 px-4 bg-green-400 w-fit text-white rounded-full'>
                {data.qty}
              </div>
            )}
          ></Column>
          <Column
            field='price'
            header='Precio'
            style={{ width: '25%' }}
            body={(data) => <p>${data.price}</p>}
          ></Column>
        </DataTable>
      </div>
    </>
  )
}

export default ClientCart
