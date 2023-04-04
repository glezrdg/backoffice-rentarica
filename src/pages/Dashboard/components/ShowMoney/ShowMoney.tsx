import React from 'react'

import commaNumber from 'comma-number'

import './styles.css'

interface IShowMoneyProps {
  children?: React.ReactNode
  money: number
  title: string
  titleClassName?: string
  badgeClassName?: string
}

const ShowMoney: React.FC<IShowMoneyProps> = ({
  money,
  title,
  titleClassName,
  badgeClassName,
}) => {
  return (
    <>
      <div className='sm:mr-12 text-center'>
        <h5 className={` text-2xl sm:text-3xl ${titleClassName}`}>
          ${commaNumber(money)}
        </h5>
        <div className='flex items-center mt-2'>
          <div
            className={`h-2 w-2 rounded-full mr-2 ${
              badgeClassName ? badgeClassName : 'bg-slate-300'
            }`}
          ></div>
          <span className='text-[10px] sm:text-xs'>{title}</span>
        </div>
      </div>
    </>
  )
}

export default ShowMoney
