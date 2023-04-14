import React from 'react'
import './styles.css'

interface INoteItemProps {
  children?: React.ReactNode
  color?: string
  title: string
  description: string
}

const NoteItem: React.FC<INoteItemProps> = ({
  color = 'blue',
  title,
  description,
}) => {
  return (
    <>
      <div
        className={`bg-${color}-200 cursor-pointer text-slate-700 p-5 rounded-2xl transition hover:scale-[1.01]`}
      >
        <div className='flex items-center justify-between mb-3'>
          <h5 className='text-sm uppercase text-slate-800'>{title}</h5>
          <i className='fa fa-ellipsis-vertical' />
        </div>
        <p className='text-sm text-slate-500'>{description}</p>

        <div className='mt-3 flex items-center justify-between'>
          <div>
            <i className='fa fa-star mr-3' />
            <i className='fa fa-trash text-red-400' />
          </div>
          <p className='text-xs text-slate-400'>27/02/23 - 8:12 am</p>
        </div>
      </div>
    </>
  )
}

export default NoteItem
