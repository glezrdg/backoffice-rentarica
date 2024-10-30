import React from 'react'

// Components
import commaNumber from 'comma-number'
import { useReportState } from '../../context'

interface IReportModalProps {
  children?: React.ReactNode
}

const ReportModal: React.FC<IReportModalProps> = (props) => {
  const { report } = useReportState()

  return (
    <div
      data-te-modal-init
      className='fixed top-0 left-0 z-[5000] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
      id='reportmodal'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
      role='dialog'
    >
      <div
        data-te-modal-dialog-ref
        className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[800px]'
      >
        <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
          {/* Header */}
          <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
            <h5
              className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
              id='exampleModalScrollableLabel'
            >
              Detalle de reporte
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
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* BODY */}

          <main className='px-6 mt-3'>
            <ul></ul>

            <section className='mt-6'>
              <h2 className='text-lg text-center uppercase mb-4'>Compras</h2>

              <div className='relative p-4'>
                <div className='flex items-center justify-between border-b pb-3 mb-2'>
                  <h2 className='text-lg text-blue-900 font-medium'>
                    <span className='mr-2'>Productos:</span>0
                  </h2>
                  <h2 className='text-lg text-red-500 font-medium'>
                    <span className='mr-2'>Gastado:</span>$
                    {commaNumber(report?.shoppingReport?.totalAmountBuy || 0)}
                  </h2>
                </div>
              </div>
            </section>
            <section className='mt-6'>
              <h2 className='text-lg text-center uppercase mb-4'>Ventas</h2>

              <div className='relative p-4'>
                <div className='flex items-center justify-between dpb-3 mb-2'>
                  <h2 className='text-lg text-blue-900 font-medium'>
                    <span className='mr-2'>Vendido:</span>${commaNumber(0)}
                  </h2>
                  <h2 className='text-lg text-green-500 font-medium'>
                    <span className='mr-2'>Ganancias:</span>${commaNumber(0)}
                  </h2>
                </div>
              </div>
            </section>
            {/* <section className='mt-6'>
              <h2 className='text-lg text-center uppercase mb-4'>Ganancias</h2>

              <div className='relative p-4'>
                <div className='flex items-center justify-between border-b pb-3 mb-2'>
                  <h2 className='text-lg text-blue-900 font-medium'>
                    <span className='mr-2'>Vendido:</span>${commaNumber(0)}
                  </h2>
                  <h2 className='text-lg text-green-500 font-medium'>
                    <span className='mr-2'>Ganancias:</span>$
                    {commaNumber(0)}
                  </h2>
                </div>
              </div>
            </section> */}
          </main>
          {/* Footer */}
        </div>
      </div>
    </div>
  )
}

export default ReportModal
