import React from 'react'
import './styles.css'

// Components
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Dropdown } from 'primereact/dropdown'

interface ISideNavProps {
  children?: React.ReactNode
}

const SideNav: React.FC<ISideNavProps> = (props) => {
  return (
    <>
      <div className='p-4 bg-white rounded-lg shadow-sm w-full'>
        <div>
          <button
            // text='Notas'
            // icon='fa fa-plus'
            className='w-full inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
            data-te-toggle='modal'
            data-te-target='#exampleModalCenter'
            data-te-ripple-init
            data-te-ripple-color='light'
          >
            <i className='fa fa-plus mr-2' />
            Notes
          </button>

          <div
            data-te-modal-init
            className='fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
            id='exampleModalCenter'
            tabIndex={-1}
            aria-labelledby='exampleModalCenterTitle'
            aria-modal='true'
            role='dialog'
          >
            <div
              data-te-modal-dialog-ref
              className='pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]'
            >
              <div className='pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600'>
                <div className='flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                  <h5
                    className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
                    id='exampleModalScrollableLabel'
                  >
                    Crear nota
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
                <div className='relative p-4'>
                  <div className='flex flex-col mb-4'>
                    <label className='mb-2'>Titulo</label>
                    <InputText />
                  </div>
                  <div className='flex flex-col mb-4'>
                    <label className='mb-2'>Descripcion</label>
                    <InputTextarea className='h-32' />
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col flex-1'>
                      <label className='mb-2'>Label</label>
                      <Dropdown className='w-full' />
                    </div>
                    <i className='text-3xl self-end mb-2 cursor-pointer transition hover:text-yellow-300 fa fa-star block ml-8' />
                  </div>
                </div>
                <div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'>
                  <button
                    type='button'
                    className='inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color='light'
                  >
                    Close
                  </button>
                  <button
                    type='button'
                    className='ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                    data-te-ripple-init
                    data-te-ripple-color='light'
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className='my-3'>
          <li className='text-sm p-2 cursor-pointer mb-1 rounded-md bg-purple-100 text-purple-5 00 flex items-center'>
            <i className='fa fa-note-sticky'></i>
            <p className='pl-4'>Todos</p>
          </li>
          <li className='text-sm p-2 cursor-pointer rounded-md hover:bg-purple-100 hover:text-purple-5  00 flex items-center'>
            <i className='fa fa-star'></i>
            <p className='pl-4'>Favoritos</p>
          </li>
        </ul>

        <label className='text-xs pl-2 text-slate-400'>Labels</label>

        <ul className='pl-2 mt-4  '>
          <li className='flex items-center'>
            <div className='p-1 rounded-full bg-green-400 w-1 mr-2'></div>
            <p className='text-xs uppercase'>Compras</p>
          </li>
          <li className='flex items-center my-3'>
            <div className='p-1 rounded-full bg-blue-400 w-1 mr-2'></div>
            <p className='text-xs uppercase'>Ventas</p>
          </li>
          <li className='flex items-center'>
            <div className='p-1 rounded-full bg-yellow-400 w-1 mr-2'></div>
            <p className='text-xs uppercase'>Ordenes</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideNav
