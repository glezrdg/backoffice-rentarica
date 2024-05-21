import commaNumber from 'comma-number'
import { Avatar } from 'primereact/avatar'
import { InputNumber } from 'primereact/inputnumber'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import { useReportState } from '../../../../../pages/Reports/context'
import { useInventoryState } from '../../../context'
import Sizes from '../../Sizes'
import './styles.css'

interface IProductModalProps {
  children?: React.ReactNode
}

const ProductModal: React.FC<IProductModalProps> = (props) => {
  const { report } = useReportState()
  const { product } = useInventoryState()

  let productReport = report?.sellsReport?.productsQty?.find(
    (i) => i.product._id === product?._id
  )

  return (
    <div
      data-te-modal-init
      className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
      id='productModal'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
      role='dialog'
      tabIndex={1}
    >
      <div
        data-te-modal-dialog-ref
        className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]'
      >
        {product?._id ? (
          <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
            {/* Header */}
            <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
              <h5
                className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                id='exampleModalScrollableLabel'
              >
                Informacion de producto
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
              <div className='flex items-center justify-between border-b pb-3 mb-2'>
                <div className='flex items-center'>
                  <Avatar
                    label='U'
                    image={'http://localhost:3000/' + product?.images[0]}
                    size='xlarge'
                    className='p-overlay-badge mr-3'
                    style={{
                      backgroundColor: '#4caf4f',
                      color: '#ffffff',
                    }}
                  />
                  <div>
                    <p className='text-xl mb-1'>{product?.name}</p>
                    <span className='text-sm text-slate-500'>
                      {productReport?.qty || 0} compras en este mes
                    </span>
                  </div>
                </div>
                <h2 className='text-3xl text-green-500 font-medium'>
                  ${commaNumber(product?.price!)}
                </h2>
              </div>

              {/* Sections */}
              <TabView className='bg-slate-50'>
                <TabPanel
                  headerClassName='text-sm bg-slate-100'
                  header='Informacion'
                  className=''
                >
                  <div className='mb-4'>
                    <label className='font-bold block mb-4'>Descripcion</label>
                    <p>{product.description}</p>
                  </div>
                  {product.productType === 'product' ? (
                    <div>
                      <label className='font-bold mr-4'>Cantidad:</label>
                      <InputNumber value={product.qty} />
                    </div>
                  ) : (
                    <div>
                      <label className='font-bold'>Sizes</label>
                      <Sizes sizes={product.sizes} my={6} />
                    </div>
                  )}
                </TabPanel>
              </TabView>
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
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default ProductModal
