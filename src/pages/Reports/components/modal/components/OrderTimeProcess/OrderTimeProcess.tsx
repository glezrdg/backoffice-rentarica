import React, { useEffect, useState } from 'react'
import './styles.css'

import { useOrderState } from '../../../../context'

interface IOrderTimeProcessProps {
  children?: React.ReactNode
}

const OrderTimeProcess: React.FC<IOrderTimeProcessProps> = () => {
  const [index, setIndex] = useState(0)
  const { order } = useOrderState()

  useEffect(() => {
    orderIndex()
  }, [order])

  const orderIndex = () => {
    let state: number

    if (order?.isDelivered) state = 1
    else state = 0

    setIndex(state)
  }

  return (
    <>
      <ol className='flex items-center justify-center w-full mb-4 sm:mb-5'>
        <li
          className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800`}
        >
          <div className='flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0'>
            <svg
              aria-hidden='true'
              className={`w-5 h-5 text-blue-600lg:w-6 lg:h-6 dark:text-blue-300`}
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </li>
        <li
          className={`flex w-full ${
            index >= 1 ? 'text-blue-600' : 'text-gray-500'
          } items-center after:content-[''] after:w-full after:h-1 after:border-b ${
            index >= 1 ? 'after:border-blue-100' : 'after:border-gray-100'
          } after:border-4 after:inline-block dark:after:border-gray-700`}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0 ${
              index >= 1 ? 'bg-blue-100' : 'bg-gray-100'
            }`}
          >
            <svg
              aria-hidden='true'
              className={`w-5 h-5 ${
                index >= 1 ? 'text-blue-600' : 'text-gray-500'
              } lg:w-6 lg:h-6 dark:text-blue-300`}
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z'></path>
              <path
                fillRule='evenodd'
                d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </li>
        <li className='flex items-center'>
          <div
            className={`flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0 ${
              index >= 2 ? 'bg-blue-100' : 'bg-gray-100'
            }`}
          >
            <svg
              aria-hidden='true'
              className={`w-5 h-5 ${
                index >= 2 ? 'text-blue-600' : 'text-gray-500'
              } lg:w-6 lg:h-6 dark:text-blue-300`}
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z'></path>
              <path
                fillRule='evenodd'
                d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </li>
      </ol>
    </>
  )
}

export default OrderTimeProcess
