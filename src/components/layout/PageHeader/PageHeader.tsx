import React from 'react'
import './styles.css'

// Components
import { Button } from '../../shared'
import { useNavigate } from 'react-router-dom'

interface IPageHeaderProps {
  children?: React.ReactNode
  right?: React.ReactNode
  title: string
  className?: string
  goBack?: boolean
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  right,
  className,
  goBack,
}) => {
  const navigate = useNavigate()

  return (
    <>
      <div className={`flex items-center justify-between mb-6 ${className}`}>
        <div
          className={`flex items-center text-slate-800 ${
            goBack ? 'cursor-pointer' : ''
          }`}
          onClick={() => goBack && navigate(-1)}
        >
          {goBack && <i className='fa fa-arrow-left mr-2' />}
          <h3 className='text-lg md:text-2xl  uppercase dark:text-slate-200'>
            {title}
          </h3>
        </div>
        {right ? right : <div></div>}
      </div>
    </>
  )
}

export default PageHeader
