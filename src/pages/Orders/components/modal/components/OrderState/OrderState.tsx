import React from 'react'
import './styles.css'
import { useOrderState } from '../../../../context'

interface IOrderStateProps {
  children?: React.ReactNode
}

const OrderState: React.FC<IOrderStateProps> = (props) => {
  const { order } = useOrderState()

  return <></>
}

export default OrderState
