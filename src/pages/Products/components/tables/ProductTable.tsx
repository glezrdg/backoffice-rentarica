import React from 'react'
import commaNumber from 'comma-number'

// Components
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useInventoryState } from '../../context'
import { ProductModal } from '../modal/ClientModal'

interface ProductTableProps {
  openCreate: () => void
}

const ProductTable: React.FC<ProductTableProps> = ({ openCreate }) => {
  const { products, setProduct } = useInventoryState()

  console.log(products)

  return (
    <div>
      <DataTable
        value={products || []}
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
              src={'http://localhost:3000/' + data.images[0]}
              alt=''
              className=' w-16 h-16 object-contain rounded-lg'
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
            <div className='p-2 px-3 bg-purple-400 w-8 h-8 text-white rounded-md'>
              {data.sizes.reduce((acc: any, cur: any) => acc + cur.qty, 0)}
            </div>
          )}
        ></Column>
        <Column
          field='price'
          header='Precio'
          style={{ width: '25%' }}
          body={(data) => `$${commaNumber(data.price)}`}
        ></Column>
        <Column
          style={{ width: '15%' }}
          body={(data) => (
            <div className='flex'>
              <div onClick={() => setProduct(data)}>
                <i
                  className='fa fa-regular fa-eye cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'
                  data-te-toggle='modal'
                  data-te-target='#productModal'
                ></i>
                <ProductModal />
              </div>
              <i
                onClick={() => {
                  setProduct(data)
                  openCreate()
                }}
                className='fa fa-regular fa-edit cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'
              ></i>
              <i className='fa fa-ellipsis-vertical cursor-pointer p-2 transition rounded-full hover:text-purple-500 hover:bg-purple-50'></i>
            </div>
          )}
        ></Column>
      </DataTable>
    </div>
  )
}

export default ProductTable
