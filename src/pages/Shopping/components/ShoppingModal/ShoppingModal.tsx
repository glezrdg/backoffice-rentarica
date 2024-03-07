import {
  ClientAddress,
  ClientCart,
  ClientWishList,
  LatestBuy,
} from '../../../../pages/Products/components/modal/ClientModal'
import commaNumber from 'comma-number'
import { Avatar } from 'flowbite-react'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import { useShoppingState } from '../../context'
import { useAppSelector } from '../../../../redux/store'

interface IShoppingModalProps {
  children?: React.ReactNode
}

const ShoppingModal: React.FC<IShoppingModalProps> = (props) => {
  const { products } = useAppSelector((state) => state.products)
  const { shopping } = useShoppingState()

  console.log(shopping)

  return (
    <>
      <div
        data-te-modal-init
        className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
        id='shoppingModal'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
        role='dialog'
        tabIndex={1}
      >
        <div
          data-te-modal-dialog-ref
          className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]'
        >
          {true ? (
            <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
              {/* Header */}
              <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                <h5
                  className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                  id='exampleModalScrollableLabel'
                >
                  Informacion de compra
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
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className='relative p-4'>
                <div className='flex items-center justify-between border-b pb-3 mb-2'>
                  <div className='flex items-center'>
                    <div>
                      {/* <p className='text-xl mb-1'>{product?.name}</p> */}
                      <span className='text-slate-500 mr-2'>
                        {shopping?.shoppingList?.reduce(
                          (acc, cur) => acc + cur.qty,
                          0
                        )}
                      </span>
                      Articulos comprados
                    </div>
                  </div>
                  <div className='flex flex-col items-center'>
                    <h2 className='text-3xl text-red-500 font-medium'>
                      ${commaNumber(shopping?.total || 0)}
                    </h2>
                    <p>Inversion</p>
                  </div>
                  <div>
                    <h2 className='text-3xl text-green-500 font-medium'>
                      $
                      {commaNumber(
                        shopping?.shoppingList?.reduce(
                          (acc: any, curr: any) =>
                            acc +
                            (curr.product.price - curr.price) *
                              (curr.qty - curr.available),
                          0
                        ) || 0
                      )}
                    </h2>
                    <p>Recuperado</p>
                  </div>
                </div>

                {/* Sections */}
                <TabView>
                  <TabPanel headerClassName='text-sm' header='Compra'>
                    <div className='grid grid-cols-4 gap-2 p-2 w-full bg-white'>
                      <p>Producto</p>
                      <p className='text-center'>Precio</p>
                      <p className='text-center'>Cantidad</p>
                      <p className='text-center'>Disponible</p>
                    </div>
                    {shopping?.shoppingList?.map((item) => (
                      <div className='grid grid-cols-4 gap-2 p-2 w-full'>
                        <p>{item.product.name}</p>
                        <p className='text-center'>
                          ${commaNumber(item.price)}
                        </p>
                        <p className='text-center'>{item.qty}</p>
                        <p className='text-center'>{item.available}</p>
                      </div>
                    ))}
                  </TabPanel>
                  {/* <TabPanel headerClassName='text-sm' header='Carrito'>
                    <ClientCart />
                  </TabPanel>
                  <TabPanel headerClassName='text-sm' header='Wishlist'>
                    <ClientWishList />
                  </TabPanel>
                  <TabPanel headerClassName='text-sm' header='Direccion'>
                    <ClientAddress />
                  </TabPanel> */}
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
                  Close
                </button>
                <button
                  type='button'
                  className='ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Save changes
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default ShoppingModal
