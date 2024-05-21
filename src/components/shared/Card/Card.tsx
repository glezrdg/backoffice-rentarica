import React from 'react'
import { LineChart } from '../../charts'
import { Toolbar } from './components/Toolbar'
import './styles.css'
import { Button } from '../Button'

interface ICardProps {
  children?: React.ReactNode
  footer?: React.ReactNode
  rightHeader?: React.ReactNode
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
  rightHeader,
}) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-slate-900 dark:border-gray-700 h-fit ${className}`}
    >
      {/* Header */}
      {title && (
        <div className='flex items-center justify-between py-6 px-3 sm:px-6 sm:py-0 h-10 md:h-12 lg:h-14 border-b'>
          <h4 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
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
          {rightHeader && rightHeader}
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
