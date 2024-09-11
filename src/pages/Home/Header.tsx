import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className=' fixed z-30 left-1/2 transform -translate-x-1/2 bg-white w-full xl:px-12'>
      <nav className='w-full py-1 container mx-auto'>
        <div className='w-full flex items-center justify-between mt-0 px-6 py-2'>
          <label
            htmlFor='menu-toggle'
            className='cursor-pointer md:hidden block'
          >
            <svg
              className='fill-current text-blue-600'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
            >
              <title>menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </label>
          <input className='hidden' type='checkbox' id='menu-toggle' />

          <div
            onClick={() => navigate('/')}
            className='hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1'
            id='menu'
          >
            <img src='/logo.png' className='w-[150px]' />
          </div>

          <div
            className='order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4'
            id='nav-content'
          >
            <div className='auth flex items-center w-full md:w-full'>
              <button
                className='bg-slate-200 text-gray-500 mr-4  p-2 rounded  hover:bg-slate-300 hover:text-white'
                onClick={() => navigate('/login')}
              >
                Ingresa
              </button>
              <button
                className='bg-purple-900 text-gray-200  p-2 rounded  hover:bg-purple-800 hover:text-gray-100'
                onClick={() => navigate('/register')}
              >
                Empieza gratis
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
