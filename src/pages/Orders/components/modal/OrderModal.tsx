import React from 'react'

// Components
import commaNumber from 'comma-number'
import { Avatar } from 'primereact/avatar'
import { Dialog } from 'primereact/dialog'
import { useOrderState } from '../../context'
import { API_URL } from '../../../../utility/constants'

interface IOrderModalProps {
  children?: React.ReactNode
  open: boolean
  onClose: any
}

const OrderModal: React.FC<IOrderModalProps> = (props) => {
  const { order } = useOrderState()

  console.log('ORDEWRE IN MODAL', order)

  return (
    <Dialog
      visible={props.open}
      // style={{ width: '50vw' }}
      className='w-[90vw] lg:w-[60vw]'
      onHide={props.onClose}
      maximizable
      header={'Detalle de orden #000' + order?._id}
    >
      <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
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
                {/* <p className='text-xl mb-1'>{order?.client!}</p> */}
                <span className='text-sm text-slate-500'>
                  {/* {order?.shippingAddress?.province} */}
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
            {order?.orderItems.map((item: any) => (
              <li className='shadow-sm flex justify-between items-center mb-2'>
                <div className='flex items-center'>
                  <img
                    src={API_URL + 'files/' + item.product?.images[0]}
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
        </main>
        {/* Footer */}
      </div>
    </Dialog>
  )
}

export default OrderModal
