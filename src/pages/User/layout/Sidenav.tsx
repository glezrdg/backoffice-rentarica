import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Sidenav = () => {
  const location = useLocation()

  const modules = ['perfil', 'ajustes', 'mi_suscripcion', 'mensajes']
  const current = location.pathname.split('/')[2]

  return (
    <>
      <div className='relative my-4 w-[80vw] sm:hidden'>
        <input
          className='peer hidden w-full'
          type='checkbox'
          name='select-1'
          id='select-1'
        />
        <label
          htmlFor='select-1'
          className='flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring'
        >
          Mi subscripcion
        </label>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
        <ul className='max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3'>
          <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white'>
            Perfil
          </li>
          <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white'>
            Ajustes
          </li>
          <li className='cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white'>
            Mensajes
          </li>
        </ul>
      </div>

      <div className='col-span-2 hidden sm:block'>
        <div className='grid'>
          {modules.map((i) => (
            <Link
              to={`/admin/${i}`}
              className={`mt-5 cursor-pointer capitalize transition-all ${
                current === i
                  ? 'border-l-2 border-l-purple-900 px-2 py-2 font-semibold text-purple-900 transition'
                  : ''
              }  hover:border-l-purple-900 hover:text-purple-900`}
            >
              {i}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidenav
