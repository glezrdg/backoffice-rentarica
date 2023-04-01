import React, { useState } from 'react'
import './styles.css'

// Utility
import { products } from '../../utility/data'

// Components
import Button from '../../components/shared/Button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { SideCreateProduct } from './components'

interface IProductsProps {
  children?: React.ReactNode
}

const Products: React.FC<IProductsProps> = (props) => {
  const [createProduct, setCreateProduct] = useState(false)

  return (
    <>
      <SideCreateProduct
        active={createProduct}
        close={() => setCreateProduct(false)}
      />
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-slate-800 uppercase'>Productos</h3>

        <div>
          <Button
            icon='fa fa-plus'
            color='success'
            text='Producto'
            className='!px-3 !hover:shadow-none'
            onClick={() => setCreateProduct(true)}
          />
        </div>
      </div>

      <div className='flex items-center p-2 mb-6'>
        <div className='flex items-center bg-white px-2 rounded-2xl w-fit mr-20 flex-1'>
          <i className=' fa fa-search' />
          <input
            placeholder='Buscar por nombre...'
            className='rounded-lg placeholder:text-xs outline-none p-2 w-full'
          />
        </div>

        <div className='flex items-center'>
          <div className='flex flex-col mr-3'>
            <label className='text-xs mb-1'>Categorias</label>
            <select className='rounded-lg text-sm p-1'>
              <option>Camisas</option>
              <option>Pantalones</option>
              <option>Camisas</option>
            </select>
          </div>
          <div className='flex flex-col mr-3'>
            <label className='text-xs mb-1'>Precio</label>
            <select className='rounded-lg text-sm p-1'>
              <option>Camisas</option>
              <option>Pantalones</option>
              <option>Camisas</option>
            </select>
          </div>
          <div className='flex flex-col mr-3'>
            <label className='text-xs mb-1'>Size</label>
            <select className='rounded-lg p-1 text-sm'>
              <option className='text-sm'>Camisas</option>
              <option className='text-sm'>Pantalones</option>
              <option className='text-sm'>Camisas</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='text-xs mb-1'>Cantidad</label>
            <select className='rounded-lg text-sm p-1'>
              <option>Camisas</option>
              <option>Pantalones</option>
              <option>Camisas</option>
            </select>
          </div>
        </div>
      </div>

      {/* TABLE */}

      <div>
        <DataTable
          value={products}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column
            style={{ width: '10%' }}
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
              <div className='p-4 px-5 bg-green-400 w-fit text-white rounded-full'>
                {data.qty}
              </div>
            )}
          ></Column>
          <Column
            field='price'
            header='Precio'
            style={{ width: '25%' }}
          ></Column>
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
    </>
  )
}

export default Products
