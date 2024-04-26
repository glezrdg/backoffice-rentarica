import React from 'react'
import './styles.css'
import commaNumber from 'comma-number'

interface ICardWidgetProps {
  children?: React.ReactNode
  color: string
  title: string
  value: number
  background?: string
}

const CardWidget: React.FC<ICardWidgetProps> = ({
  color,
  title,
  value = 0,
  background = 'white',
}) => {
  return (
    <>
      <div
        className={`flex-1 ${
          !background ? ' bg-white' : ` bg-${color}-400 bg-opacity-10 `
        } text-xl pt-8 px-10 pb-4 rounded-2xl`}
      >
        <div
          className={`text-${color}-500 text-opacity-70 text-xl md:text-2xl lg:text-3xl font-medium`}
        >
          <p>${commaNumber(value)}</p>
        </div>
        <label
          className={`uppercase block mt-1 mb-4 text-sm font-medium text-${color}-700`}
        >
          {title}
        </label>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div
            className={`bg-${color}-400 h-2.5 rounded-full`}
            style={{ width: '45%' }}
          ></div>
        </div>
        <span className='text-xs text-slate-400'>Meta establecida</span>
      </div>
    </>
  )
}

export default CardWidget
