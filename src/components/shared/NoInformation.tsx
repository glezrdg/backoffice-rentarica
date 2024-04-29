import React from 'react'
import { Message } from 'primereact/message'

const NoInformation = ({ title = '' }: any) => {
  return (
    <Message
      className='w-full'
      severity='error'
      text={title || 'No tienes informacion'}
    />
  )
}

export default NoInformation
