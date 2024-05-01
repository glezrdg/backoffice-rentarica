// import { useReportState } from '../../../../../pages/Reports/context'
import commaNumber from 'comma-number'
import React, { useEffect, useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { Textarea } from 'flowbite-react'
import { IOrder } from '../../../../../Orders/models/IOrder'
import { Button } from '../../../../../../components/shared'
import { getExpenses } from '../../../../../Expenses/services'
import './styles.css'
import { IExpenses } from '@/pages/Expenses/models'

interface ICuadreModalProps {
  children?: React.ReactNode
  orders: IOrder[]
}

const CuadreModal: React.FC<ICuadreModalProps> = (props) => {
  const [expenses, setExpenses] = useState<IExpenses[]>([])

  useEffect(() => {
    handleGetExpenses()
  }, [])

  const handleGetExpenses = async () => {
    try {
      const data = await getExpenses({
        date: new Date().toISOString(),
        type: 'gasto',
      })
      setExpenses(data)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  return (
    <div
      data-te-modal-init
      className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
      id='cuadrarModal'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
      role='dialog'
      tabIndex={1}
    >
      <div
        data-te-modal-dialog-ref
        className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]'
      >
        {true ? (
          <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
            {/* Header */}
            <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
              <h5
                className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                id='exampleModalScrollableLabel'
              >
                Cuadre dia --- {new Date().toLocaleDateString()}
              </h5>

              <button
                type='button'
                className='box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'
                data-te-modal-dismiss
                aria-label='Close'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className='relative p-4'>
              <div className='flex items-center justify-between border-b pb-3 mb-2'>
                <div className='flex items-center'>
                  <div>
                    <span className='text-sm text-slate-500'>
                      <strong> {props.orders.length || 0}</strong> ventas el dia
                      de hoy
                    </span>
                  </div>
                </div>
                <h2 className='text-2xl text-green-500 font-medium'>
                  $
                  {commaNumber(
                    props.orders.reduce((acc, curr) => acc + curr.totalPrice, 0)
                  )}
                </h2>
              </div>
            </div>

            <div className='px-4 '>
              <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                Dinero en caja:
              </h4>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <p className='text-base bg-green-200 p-2 rounded-md mb-1'>
                    Efectivo
                  </p>
                  <InputNumber className='h-[38px] w-full' />
                </div>
                <div>
                  <p className='text-base bg-blue-200 p-2 rounded-md mb-1'>
                    Tarjeta
                  </p>
                  <InputNumber className='h-[38px] w-full' />
                </div>
              </div>
            </div>

            <div className='mt-4 px-4'>
              <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                Gastos:
              </h4>
              <ul
                role='list'
                className='divide-y divide-gray-200 dark:divide-gray-700'
              >
                {expenses?.map((e) => (
                  <li key={e._id} className='py-3 sm:py-1'>
                    <div className='flex items-center space-x-4'>
                      <div className='flex-1 min-w-0'>
                        <p className='text-xs font-medium text-gray-600 truncate dark:text-white'>
                          {e.title}
                        </p>
                        <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                          {e.note || 'sin descripcion'}
                        </p>
                      </div>
                      <div className='inline-flex items-center text-base font-semibold text-red-800 dark:text-white'>
                        ${commaNumber(e.cost)}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-4 px-4'>
              <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                Nota
              </h4>

              <div>
                <Textarea className='w-full h-[100px]' />
              </div>
            </div>

            <div className='mt-4 px-4'>
              <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                Terminar cuadre:
              </h4>

              <div>
                <Button text='Finalizar cuadre' className='!bg-purple-900' />
              </div>
            </div>

            {/* Footer */}
            <div className='flex flex-shrink-0 mt-4 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
              <button
                type='button'
                className='inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-purple-900 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color='light'
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          'dcdcd'
        )}
      </div>
    </div>
  )
}

export default CuadreModal
