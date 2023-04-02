import React from 'react'
import './styles.css'

interface IFloatToolbarProps {
  children?: React.ReactNode
}

const FloatToolbar: React.FC<IFloatToolbarProps> = (props) => {
  return (
    <div className='fixed right-0 top-[50%] z-[5000]'>
      <div className='bg-blue-500 cursor-pointer p-4 hover:scale-[1.05] transition text-white rounded-full grid place-items-center'>
        <i className='fa fa-note-sticky' />
      </div>
    </div>
  )
}

export default FloatToolbar
