import React from 'react'
import { useCategoryBrandState } from '../../context'
import './styles.css'

interface IBrandWrapperProps {
  children?: React.ReactNode
}

const BrandWrapper: React.FC<IBrandWrapperProps> = (props) => {
  const { brands } = useCategoryBrandState()

  return (
    <>
      <div className='overflow-y-auto max-h-[350px] pt-2'>
        {brands?.map((brand) => (
          <div
            key={brand._id}
            className='bg-purple-100 w-full mt-2 mb-1 p-3 rounded-2xl text-center flex items-center justify-between'
          >
            <p className='text-purple-600 text-xl'>{brand.name}</p>
            <span className='text-slate-500 text-xs flex flex-col'>2,145</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default BrandWrapper
