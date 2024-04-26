import React from 'react'
import './styles.css'
import { useOrderState } from '../../../../context'

interface IOrderStateProps {
  children?: React.ReactNode
}

const OrderState: React.FC<IOrderStateProps> = (props) => {
  const { order } = useOrderState()

  return (
    <>
      <h2 className='text-center text-lg'>
        {order?.completed
          ? 'Completado'
          : order?.isDelivered
          ? 'Enviado'
          : 'En revision'}
      </h2>
    </>
  )
}

export default OrderState
