import React from 'react'
import './styles.css'
import commaNumber from 'comma-number'

interface ICardWidgetProps {
  children?: React.ReactNode
  color: string
  title: string
  value: number
  background?: string
  noCash?: boolean
}

const CardWidget: React.FC<ICardWidgetProps> = ({
  color,
  title,
  value = 0,
  background = 'white',
  noCash = false,
}) => {
  return (
    <>
      <div
        className={`flex-1 flex gap-5 items-center shadow-md ${
          !background ? ' bg-white' : ` bg-${color}-400 bg-opacity-10 `
        } text-xl px-10 h-24`}
      >
        <div
          className={`text-${color}-500 text-opacity-70 text-xl md:text-2xl lg:text-3xl font-medium`}
        >
          <p>
            {noCash ? '' : '$'}
            {commaNumber(value)}
          </p>
        </div>
        <label
          className={`uppercase block mt-1 text-sm font-medium text-${color}-700`}
        >
          {title}
        </label>
        {/* <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div
            className={`bg-${color}-400 h-2.5 rounded-full`}
            style={{ width: '45%' }}
          ></div>
        </div>
        <span className='text-xs text-slate-400'>Meta establecida</span> */}
      </div>
    </>
  )
}

export default CardWidget
