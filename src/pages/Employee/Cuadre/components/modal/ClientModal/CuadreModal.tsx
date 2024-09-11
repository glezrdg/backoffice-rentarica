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
import { Dialog } from 'primereact/dialog'

interface ICuadreModalProps {
  children?: React.ReactNode
  orders: IOrder[]
  open: boolean
  onClose: any
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
    <Dialog
      visible={props.open}
      onHide={props.onClose}
      className='w-[90vw] lg:w-[60vw]'
      header={'Cuadre dia ---' + new Date().toLocaleDateString()}
      maximizable
    >
      {true ? (
        <>
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
                  props.orders.reduce(
                    (acc, curr) => acc + (curr?.totalPrice || 0),
                    0
                  )
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
              {Array.isArray(expenses) &&
                expenses?.map((e) => (
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
        </>
      ) : (
        ''
      )}
    </Dialog>
  )
}

export default CuadreModal
