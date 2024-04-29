import React from 'react'
import './styles.css'
import { DataTable } from 'primereact/datatable'
import { products } from '../../../../../../../utility/data'
import { Column } from 'primereact/column'

interface IClientWishListProps {
  children?: React.ReactNode
}

const ClientWishList: React.FC<IClientWishListProps> = (props) => {
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

export default ClientWishList
