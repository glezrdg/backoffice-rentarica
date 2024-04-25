import React, { useEffect } from 'react'
import { useOrderState } from '../../context'
import { products } from '../../../../utility/data'

// Components
import { Avatar } from 'primereact/avatar'
import commaNumber from 'comma-number'
import { Button, Card } from '../../../../components/shared'
import OrderState from './components/OrderState/OrderState'
import OrderTimeProcess from './components/OrderTimeProcess/OrderTimeProcess'
import { IOrderItem } from '../../models/IOrder'

interface IOrderModalProps {
  children?: React.ReactNode
}

const OrderModal: React.FC<IOrderModalProps> = (props) => {
  const { order, deliverOrder } = useOrderState()

  console.log(order)

  return (
    <div
      data-te-modal-init
      className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
      id='orderModal'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
      role='dialog'
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
              Detalle de orden #000{order?._id}
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

          {/* BODY */}

          <main className='px-6 mt-3'>
            <ul>
              {order?.orderItems.map((item: IOrderItem) => (
                <li className='shadow-sm flex justify-between items-center mb-2'>
                  <div className='flex items-center'>
                    <img
                      src={'http://localhost:3000/' + item.product?.images[0]}
                      alt={item.product?.name}
                      className='w-[5rem]'
                    />
                    <div className='ml-2'>
                      <h3 className='mb-2'>{item.product?.name}</h3>
                      <p>Qty: {item.qty}</p>
                    </div>
                  </div>
                  <h2 className='text-xl'>
                    ${commaNumber(item.product?.price * item.qty)}
                  </h2>
                </li>
              ))}
            </ul>

            <section className='mt-6'>
              <h2 className='text-lg text-center uppercase mb-4'>
                Informacion de factura
              </h2>

              <div className='relative p-4'>
                <div className='flex items-center justify-between border-b pb-3 mb-2'>
                  <h2 className='text-2xl text-green-500 font-medium'>
                    <span className='mr-2'>Cantidad:</span>
                    {commaNumber(
                      order?.orderItems?.reduce(
                        (acc, curr) => acc + curr.qty,
                        0
                      ) || 0
                    )}
                  </h2>
                  <h2 className='text-2xl text-green-500 font-medium'>
                    <span className='mr-2'>Total:</span>$
                    {commaNumber(order?.totalPrice!)}
                  </h2>
                </div>
              </div>
            </section>
          </main>
          {/* Footer */}
        </div>
      </div>
    </div>
  )
}

export default OrderModal
