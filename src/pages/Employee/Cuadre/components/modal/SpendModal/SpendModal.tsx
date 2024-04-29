// import { useReportState } from '../../../../../pages/Reports/context'
import commaNumber from 'comma-number'
import React, { useState } from 'react'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from '../../../../../../components/shared'
import { Textarea } from 'flowbite-react'
import { ISpend } from './model/spend'
import { InputTextarea } from 'primereact/inputtextarea'
import { InputText } from 'primereact/inputtext'

interface ISpendModalProps {
  children?: React.ReactNode
  orders: ISpend[]
}

const SpendModal: React.FC<ISpendModalProps> = (props) => {
  const [title, setTile] = useState('')
  const [cost, setCost] = useState(0)
  const [note, setNote] = useState('')

  return (
    <div
      data-te-modal-init
      className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
      id='spendModal'
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
                Registro de gastos
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

            <div className='px-4 mt-4'>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <p className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                    Razon
                  </p>
                  <InputText
                    value={title}
                    onChange={(e) => setTile(e.target.value)}
                    className='h-[38px] w-full'
                  />
                </div>
                <div>
                  <p className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                    Monto
                  </p>
                  <InputNumber
                    min={1}
                    className='h-[38px] w-full'
                    value={cost}
                    onChange={(e) => setCost(e.value!)}
                    mode='currency'
                    currency='USD'
                    locale='en-US'
                  />
                </div>
              </div>
            </div>

            <div className='mt-4 px-4'>
              <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                Nota
              </h4>

              <div>
                <Textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className='w-full bg-white h-[100px]'
                />
              </div>
            </div>

            <div className='mt-4 px-4'>
              <h4 className='mb-2 text-sm font-medium border-b border-slate-200 pb-1 text-gray-600'>
                Registrar gasto:
              </h4>

              <div>
                <Button
                  text='Completar gasto'
                  className='!bg-red-800 hover:!bg-red-700'
                />
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

export default SpendModal
