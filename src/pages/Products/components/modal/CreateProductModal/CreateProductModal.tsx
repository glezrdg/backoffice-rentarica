import React from 'react'
import { useInventoryState } from '../../../context'
import ProductForm from '../../SideCreateProduct/components/ProductForm'
import { IProduct } from '../../../models/IProduct'

interface ICreateProductModalProps {
  children?: React.ReactNode
}

const CreateProductModal: React.FC<ICreateProductModalProps> = (props) => {
  const { product, setProduct } = useInventoryState()

  return (
    <>
      <div
        data-te-modal-init
        className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
        id='createProductModal'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
        role='dialog'
        tabIndex={1}
      >
        <div
          data-te-modal-dialog-ref
          className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]'
        >
          <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
            {/* Header */}
            <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
              <h5
                className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                id='exampleModalScrollableLabel'
              >
                Crear producto
              </h5>

              <button
                type='button'
                className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                data-te-modal-dismiss
                aria-label='Close'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className='relative p-4'>
              {/* FORM */}
              <ProductForm
                close={() => {
                  setProduct({} as IProduct)
                  close()
                }}
              />
            </div>

            {/* Footer */}
            <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
              <button
                type='button'
                className='inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateProductModal
