import commaNumber from 'comma-number'
import React from 'react'
import { IShopping } from '../../models'
import { dateFormat } from '../../../../utility/dateFormat'
import { useShoppingState } from '../../context'

interface IShoppingCardProps {
  children?: React.ReactNode
  shopping: IShopping
}

const ShoppingCard: React.FC<IShoppingCardProps> = ({ shopping }) => {
  const { setShopping } = useShoppingState()

  return (
    <>
      <div
        className='flex-1 bg-white text-xl pt-8 px-10 pb-4 rounded-2xl cursor-pointer'
        data-te-toggle='modal'
        data-te-target='#shoppingModal'
        onClick={() => setShopping(shopping)}
      >
        <div className='flex justify-between mb-6'>
          <div className='flex flex-col items-center'>
            <div
              className={
                ' text-slate-500 text-xl md:text-2xl lg:text-3xl font-medium'
              }
            >
              <p>${commaNumber(shopping.total)}</p>
            </div>
            <label className='uppercase block mt-1 text-sm font-medium text-slate-400'>
              Inversion
            </label>
          </div>
          <div className='flex flex-col items-center'>
            <div
              className={
                'text-yellow-400 text-xl md:text-2xl lg:text-3xl font-medium'
              }
            >
              <p>
                {shopping.shoppingList.reduce((acc, cur) => acc + cur.qty, 0)}
              </p>
            </div>
            <label className='uppercase block mt-1 text-sm font-medium text-slate-400'>
              Cantidad
            </label>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-xs text-slate-400'>
            Inversion recuperada:{' '}
            <span className='text-green-400 ml-2 text-base'>
              $
              {commaNumber(
                shopping?.shoppingList.reduce(
                  (acc: any, curr: any) =>
                    acc +
                    (curr.product.price - curr.price) *
                      (curr.qty - curr.available),
                  0
                ) || 0
              )}
            </span>
          </span>

          <span className='text-xs text-slate-400'>
            {dateFormat(new Date(shopping.createdAt), 'date')}
          </span>
        </div>
      </div>
    </>
  )
}

export default ShoppingCard
