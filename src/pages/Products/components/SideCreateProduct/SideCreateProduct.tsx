import React from 'react'

import './styles.css'

// Components
import { FileUpload } from 'primereact/fileupload'
import { Button } from '../../../../components/shared'

interface ISideCreateProductProps {
  children?: React.ReactNode
  active: boolean
  close: () => void
}

const SideCreateProduct: React.FC<ISideCreateProductProps> = ({
  active,
  close,
}) => {
  return (
    <div
      className={`fixed  overflow-y-auto top-0 z-[2000] w-[40%] h-[100vh] bg-slate-100 shadow-md px-6 transition-all duration-300 ${
        active ? 'right-0' : '-right-full'
      }`}
    >
      {/* Header */}

      <div className='py-6 relative flex items-center justify-between text-slate-600'>
        <h3 className='text-xl'>Añadir producto</h3>
        <i
          className='fa fa-regular fa-rectangle-xmark cursor-pointer text-xl transition-all hover:text-purple-500 hover:scale-105'
          onClick={close}
        />
        {/*ADDED PRODUCTS*/}
      </div>

      {/* FORM */}
      <form className='mt-3 relative'>
        <div className='absolute top-0 -left-10 cursor-pointer flex flex-col '>
          <div className='bg-green-400 rounded-tl-lg text-white grid hover:left-[-50px] place-items-center  rounded-bl-lg z-[1] transition-all h-16 w-4 fixed hover:scale-110'>
            1
          </div>
        </div>
        <div className='grid grid-cols-2 gap-5 mb-5'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Nombre</label>
            <input className='outline-none rounded-md p-2 border focus:border-purple-300' />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Precio</label>
            <input className='outline-none rounded-md p-2 border focus:border-purple-300' />
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 text-xs'>Descripcion</label>
          <textarea className='outline-none border-none rounded-md h-40 p-2 border !focus:border-purple-300' />
        </div>

        <div className='my-10 flex'>
          <div className='bg-white uppercase p-5 px-7 mr-5'>
            <p>xs</p>
          </div>
          <div className='bg-white uppercase p-5 px-7 mr-5'>
            <p>sm</p>
          </div>
          <div className='bg-white uppercase p-5 px-7 mr-5'>
            <p>md</p>
          </div>
          <div className='bg-white uppercase p-5 px-7 mr-5'>
            <p>lg</p>
          </div>
          <div className='bg-white uppercase p-5 px-7 mr-5'>
            <i className='fa fa-plus' />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Categoria</label>
            <select className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'>
              <option>Camisas</option>
              <option>Tenis</option>
              <option>Pantalones</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label className='mb-2 text-xs'>Marcas</label>
            <select className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'>
              <option>Adidas</option>
              <option>Nike</option>
              <option>Forever 21</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col mt-5'>
          <label className='mb-2 text-xs'>Oferta</label>
          <select className='outline-none border-none rounded-md p-3 border !focus:border-purple-300 text-sm'>
            <option>ninguna</option>
            <option>10%</option>
            <option>12%</option>
            <option>15%</option>
            <option>24%</option>
            <option>50%</option>
          </select>
        </div>

        <div className='flex flex-col my-5'>
          <label className='mb-2 text-xs'>Imagenes</label>
          <FileUpload
            name='demo[]'
            url={'/api/upload'}
            multiple
            accept='image/*'
            maxFileSize={1000000}
            emptyTemplate={
              <p className='m-0'>Drag and drop files to here to upload.</p>
            }
          />
        </div>

        <div className='grid grid-cols-3 gap-1 mb-5'>
          <Button text='Cancelar' color='danger' icon='fa fa-x' />
          <Button text='Añadir' color='success' icon='fa fa-plus' />
          <Button text='Guardar' icon='fa fa-floppy-disk' />
        </div>
      </form>
    </div>
  )
}

export default SideCreateProduct
