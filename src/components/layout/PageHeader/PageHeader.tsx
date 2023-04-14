import React from 'react'
import './styles.css'

// Components
import { Button } from '../../shared'

interface IPageHeaderProps {
  children?: React.ReactNode
  right?: React.ReactNode
  title: string
  className?: string
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  right,
  className,
}) => {
  return (
    <>
      <div className={`flex items-center justify-between mb-6 ${className}`}>
        <h3 className='text-lg md:text-2xl text-slate-800 uppercase'>
          {title}
        </h3>

        {right ? (
          right
        ) : (
          <div>
            <Button
              icon='fa fa-calendar text-purple-500'
              color='white'
              text='Calendario'
              className='!px-3 !hover:shadow-none'
            />
          </div>
        )}
      </div>
    </>
  )
}

export default PageHeader
