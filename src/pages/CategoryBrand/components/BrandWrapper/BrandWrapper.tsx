import React from 'react'
import './styles.css'

interface IBrandWrapperProps {
  children?: React.ReactNode
}

const BrandWrapper: React.FC<IBrandWrapperProps> = (props) => {
  return (
    <>
      <div className='overflow-y-auto max-h-[350px]'>
        <div className='bg-purple-100 w-full mt-4 mb-1 p-3 rounded-2xl text-center flex items-center justify-between'>
          <p className='text-purple-600 text-xl'>Adidas</p>
          <span className='text-slate-500 text-xs flex flex-col'>2,145</span>
        </div>
        <div className='bg-purple-100 w-full mt-2 mb-1 p-3 rounded-2xl text-center flex items-center justify-between'>
          <p className='text-purple-600 text-xl'>Nike</p>
          <span className='text-slate-500 text-xs flex flex-col'>1,645</span>
        </div>
        <div className='bg-purple-100 w-full mt-2 mb-1 p-3 rounded-2xl text-center flex items-center justify-between'>
          <p className='text-purple-600 text-xl'>Sara</p>
          <span className='text-slate-500 text-xs flex flex-col'>1,145</span>
        </div>
      </div>
    </>
  )
}

export default BrandWrapper
