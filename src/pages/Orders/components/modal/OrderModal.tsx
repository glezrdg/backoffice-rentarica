import React, { useEffect } from 'react'
import { useOrderState } from '../../context'
import { products } from '../../../../utility/data'

// Components
import { Avatar } from 'primereact/avatar'
import commaNumber from 'comma-number'
import { Button, Card } from '../../../../components/shared'
import OrderState from './components/OrderState/OrderState'
import OrderTimeProcess from './components/OrderTimeProcess/OrderTimeProcess'

interface IOrderModalProps {
  children?: React.ReactNode
}

const OrderModal: React.FC<IOrderModalProps> = (props) => {
  const { order, deliverOrder } = useOrderState()

  return (
    <div
      data-te-modal-init
      className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
      id='orderModal'
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
                <Avatar
                  label='U'
                  size='xlarge'
                  className='p-overlay-badge mr-3'
                  style={{
                    backgroundColor: '#4caf4f',
                    color: '#ffffff',
                  }}
                />
                <div>
                  <p className='text-xl mb-1'>{order?.client!}</p>
                  <span className='text-sm text-slate-500'>
                    {order?.shippingAddress.province}
                  </span>
                </div>
              </div>
              <h2 className='text-3xl text-green-500 font-medium'>
                ${commaNumber(order?.totalPrice!)}
              </h2>
            </div>
          </div>

          {/* BODY */}

          <main className='px-6'>
            <ul>
              {order?.orderItems.map((item) => (
                <li className='shadow-sm flex justify-between items-center mb-2'>
                  <div className='flex items-center'>
                    <img
                      src={products[0].img}
                      alt={products[0].name}
                      className='w-[5rem]'
                    />
                    <div className='ml-2'>
                      <h3 className='mb-2'>{products[0].name}</h3>
                      <p>Qty: {item.qty}</p>
                    </div>
                  </div>
                  <h2 className='text-xl'>
                    ${commaNumber(products[0].price * item.qty)}
                  </h2>
                </li>
              ))}
            </ul>

            <section className='mt-6'>
              <h2 className='text-lg text-center uppercase mb-4'>
                Informacion de Delivery
              </h2>

              <div className='grid w-[60%] m-auto gap-6'>
                <Card
                  title=''
                  className='w-full  p-4 !px-0'
                  bodyClassName='!px-0'
                >
                  <ul>
                    <li className='grid grid-cols-2 pl-12  mb-2 border-b pb-2'>
                      <p className='text-left'>Provincia</p>
                      <p className='text-left'>
                        {order?.shippingAddress.province}
                      </p>
                    </li>
                    <li className='grid grid-cols-2 pl-12 mb-2 border-b pb-2'>
                      <p className='text-left'>Calle</p>
                      <p className='text-left'>
                        {order?.shippingAddress.street1 || 'Ninguna'}
                      </p>
                    </li>
                    <li className='grid grid-cols-2 pl-12 mb-2 border-b pb-2'>
                      <p className='text-left'>Delivery</p>
                      <p className='text-left'>
                        {order?.shippingAddress.delivery || 'Ninguna'}
                      </p>
                    </li>
                    <li className='grid grid-cols-2 pl-12 mb-2 border-b pb-2'>
                      <p className='text-left'>Celular</p>
                      <p className='text-left'>
                        {order?.shippingAddress.phone || 'Ninguna'}
                      </p>
                    </li>
                  </ul>
                </Card>
                <Card title='' className='w-full h-full p-4 !px-2'>
                  <OrderTimeProcess />
                  <OrderState />
                </Card>
              </div>
            </section>
          </main>
          {/* Footer */}
          <div className='flex justify-center flex-shrink-0 flex-wrap items-center rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
            <Button
              iconButton
              icon='fa fa-save text-base !h-initial !w-initial'
              className='h-10 w-10 '
            ></Button>
            <Button
              iconButton
              icon='fa fa-truck text-base !h-initial !w-initial'
              className='h-10 w-10 mx-4'
              color='warning'
              onClick={() => deliverOrder(order?._id!)}
            ></Button>
            <Button
              iconButton
              icon='fa fa-ban text-base !h-initial !w-initial'
              color='danger'
              className='h-10 w-10 !mr-4'
            ></Button>
            <Button
              iconButton
              icon='fa fa-circle-check text-base !h-initial !w-initial'
              color='success'
              className='h-10 w-10'
            ></Button>
            {/* <button
              type='button'
              className='inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
              data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              Close
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderModal
