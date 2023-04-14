import React from 'react'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { products } from '../../../../utility/data'

const ProductTable = () => {
  return (
    <div>
      <DataTable
        value={products}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        className='text-sm'
      >
        <Column
          style={{ width: '10%' }}
          body={(data) => (
            <img
              src={data.img}
              alt=''
              className=' w-16 h-16 object-cover rounded-lg'
            />
          )}
        ></Column>
        <Column field='name' header='Nombre' style={{ width: '25%' }}></Column>
        <Column
          field='qty'
          header='Cantidad'
          style={{ width: '25%' }}
          headerClassName=''
          body={(data) => (
            <div className='p-2 px-3 bg-green-400 w-fit text-white rounded-full'>
              {data.qty}
            </div>
          )}
        ></Column>
        <Column field='price' header='Precio' style={{ width: '25%' }}></Column>
        <Column
          style={{ width: '15%' }}
          body={(data) => (
            <div className='flex'>
              <i className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              <i className='fa fa-regular fa-edit cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
              <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
            </div>
          )}
        ></Column>
      </DataTable>
    </div>
  )
}

export default ProductTable
