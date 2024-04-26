import React from 'react'
import { LineChart } from '../../charts'
import { Toolbar } from './components/Toolbar'
import './styles.css'
import { Button } from '../Button'

interface ICardProps {
  children?: React.ReactNode
  footer?: React.ReactNode
  title: string
  toolbar?: boolean
  eye?: boolean
  bodyClassName?: string
  className?: string
}

const Card: React.FC<ICardProps> = ({
  children,
  title,
  toolbar,
  bodyClassName,
  footer,
  eye,
  className,
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm w-full h-fit ${className}`}>
      {/* Header */}
      {title && (
        <div className='flex items-center justify-between py-6 px-3 sm:px-6 sm:py-0 h-10 md:h-12 lg:h-14 border-b'>
          <h4 className='text-sm md:text-lg text-slate-700 uppercase'>
            {title}
          </h4>
          {toolbar && <Toolbar />}
          {eye && (
            <Button
              className='!bg-purple-900 hover:!bg-purple-800 !text-white'
              iconButton
              icon='fa fa-eye mt-1 mr-2'
              text='Ver mas'
            ></Button>
          )}
        </div>
      )}

      {/* Body */}

      <div className={`px-3 md:px-6 ${bodyClassName}`}>{children}</div>

      {/* Footer */}
      <div>{footer}</div>
    </div>
  )
}

export default Card
