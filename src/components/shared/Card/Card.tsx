import React from 'react'
import { Button } from '../Button'
import { Toolbar } from './components/Toolbar'
import './styles.css'

interface ICardProps {
  children?: React.ReactNode
  footer?: React.ReactNode
  rightHeader?: React.ReactNode
  title: string
  toolbar?: boolean
  eye?: boolean
  bodyClassName?: string
  className?: string
  pd?: number
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
  pd,
}) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg border shadow-md sm:${
        pd ? `p-${pd}` : 'p-8'
      } dark:bg-gray-800 dark:border-gray-700 h-fit ${className}`}
    >
      {/* Header */}
      {title && (
        <div className='flex items-center justify-between py-6 px-3 sm:py-0 h-10 border-b'>
          <h4 className='text-[1.1rem] leading-none text-gray-800 dark:text-white'>
            {title}
          </h4>
          {toolbar && <Toolbar />}
          {eye && (
            <Button
              className='!bg-blue-900 hover:!bg-blue-800 !text-white'
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
