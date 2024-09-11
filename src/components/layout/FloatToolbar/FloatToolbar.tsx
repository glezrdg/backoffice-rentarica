import React from 'react'
import './styles.css'

interface IFloatToolbarProps {
  children?: React.ReactNode
}

const FloatToolbar: React.FC<IFloatToolbarProps> = (props) => {
  return (
    <div className='fixed flex gap-8 left-1/2 bottom-8 z-[1000] bg-purple-900 p-3 rounded-3xl hover:scale-125 transition-all shadow-lg'>
      <div
        data-te-toggle='modal'
        data-te-target='#createNoteModal'
        className='bg-white cursor-pointer p-4 hover:scale-[1.05] transition text-purple-900 rounded-full grid place-items-center'
      >
        <i className='fa fa-tag' />
      </div>
      <div
        data-te-toggle='modal'
        data-te-target='#createNoteModal'
        className='bg-white cursor-pointer p-4 hover:scale-[1.05] transition text-purple-900 rounded-full grid place-items-center'
      >
        <i className='fa fa-box' />
      </div>
      <div
        data-te-toggle='modal'
        data-te-target='#createProductModal'
        className='bg-white cursor-pointer p-4 hover:scale-[1.05] transition text-purple-900 rounded-full grid place-items-center'
      >
        <i className='fa fa-bag-shopping' />
      </div>
    </div>
  )
}

export default FloatToolbar
