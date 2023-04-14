import React from 'react'
import './styles.css'

interface ICardWidgetProps {
  children?: React.ReactNode
  color: string
  title: string
}

const CardWidget: React.FC<ICardWidgetProps> = ({ color, title }) => {
  return (
    <>
      <div className='flex-1 bg-white text-xl pt-8 px-10 pb-4 rounded-2xl'>
        <div
          className={`text-${color}-400 text-xl md:text-2xl lg:text-3xl font-medium`}
        >
          <p>$78,250</p>
        </div>
        <label className='uppercase block mt-1 mb-4 text-sm font-medium text-slate-400'>
          {title}
        </label>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div
            className={`bg-${color}-600 h-2.5 rounded-full`}
            style={{ width: '45%' }}
          ></div>
        </div>
        <span className='text-xs text-slate-400'>Meta establecida</span>
      </div>
    </>
  )
}

export default CardWidget
