import React from 'react'
import { ISizes } from '../../models/IProduct'
import { InputNumber } from 'primereact/inputnumber'

interface ISizesProps {
  children?: React.ReactNode
  sizes: ISizes[]
  handleChangeSize?: (size: ISizes, value: number) => void
  my?: number
}

const Sizes: React.FC<ISizesProps> = ({ sizes, handleChangeSize, my = 10 }) => {
  return (
    <>
      <div className={`my-${my} flex`}>
        {sizes?.map((s) => (
          <div
            key={s.name}
            className='bg-white uppercase p-3 px-6 mr-5 text-center'
          >
            <p>{s.name}</p>
            <InputNumber
              value={s.qty}
              mode='decimal'
              min={0}
              size={14}
              inputClassName='p-4 h-8 w-12 text-center'
              incrementButtonClassName='h-4'
              onChange={(e) =>
                handleChangeSize && handleChangeSize(s, e.value as number)
              }
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Sizes
