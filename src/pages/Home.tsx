import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataService } from '../config/api'
import ProductsCard from './Home/components/ProductsCard'
import { getItem } from '../utility/localStorageControl'

const Home = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    if (getItem('stripe_url')) {
      localStorage.removeItem('stripe_url')
    }
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const products: any = await DataService.get('/listprices')
      setProducts(products.data)
      console.log('products', products.data.data)
    } catch (error: any) {
      console.log('error getting products', error.message)
    }
  }

  return (
    <div>
      <nav id='header' className='w-full z-30 py-1 shadow-lg '>
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
            className='hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1'
            id='menu'
          >
            <h1 className='font-bold text-lg border-b-4 border-blue-400'>
              SantoPago
            </h1>
          </div>

          <div
            className='order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4'
            id='nav-content'
          >
            <div className='auth flex items-center w-full md:w-full'>
              <button
                className='bg-slate-200 text-gray-400 mr-4  p-2 rounded  hover:bg-slate-300 hover:text-gray-50'
                onClick={() => navigate('/login')}
              >
                Log in
              </button>
              <button
                className='bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100'
                onClick={() => navigate('/register')}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <section className='sticky'>
          <div className='max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center'>
            <h1 className='font-extrabold leading-10 tracking-tight text-[#201515] text-center sm:leading-none text-5xl sm:text-8xl'>
              <span className='inline md:block'>Mejorando tu </span>
              <span className='relative mt-2 bg-clip-text text-[#201515] md:inline-block'>
                Administracion.
              </span>
            </h1>
          </div>

          <div className='max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center'>
            <div className='text-center py-4 space-x-4'>
              <button className='backdrop-blur-sm transition duration-500 ease-in-out bg-[#FF4F01] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center'>
                <span> Mejora tu negocio</span>
              </button>

              <button className='backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center'>
                <span> Explora el sistema</span>
              </button>
            </div>
          </div>
        </section>
      </section>

      <div className='text-left'>
        <div className='sm:px-28'>
          <section className='relative flex items-center w-full'>
            <div className='relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl'>
              <div className='relative flex-col items-start m-auto align-middle'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24'>
                  <div className='relative items-center gap-12 m-auto lg:inline-flex md:order-first'>
                    <div className='max-w-xl text-center lg:text-left'>
                      <div>
                        <p className='text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl'>
                          Space Management Software
                        </p>
                        <p className='max-w-xl mt-4 text-base tracking-tight text-gray-600'>
                          Use this paragraph to share information about your
                          company or products. Make it engaging and interesting,
                          and showcase your brand's personality. Thanks for
                          visiting our website!
                        </p>
                      </div>
                      <div className='flex justify-center gap-3 mt-10 lg:justify-start'>
                        <a
                          className='inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600'
                          href='#'
                        >
                          <span> Read more &nbsp; → </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='order-first block w-full mt-12 aspect-square lg:mt-0'>
                    <img
                      className='object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto '
                      alt='hero'
                      src='https://i.pinimg.com/originals/2e/2b/21/2e2b21aeed393403d4620367f9e093f9.gif'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='mt-32' />

        <section className='bg-gradient-to-r from-purple-900 to-indigo-900 py-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-extrabold text-white sm:text-5xl'>
                Elige tu plan
              </h2>
              <p className='mt-4 text-xl text-purple-200'>
                Da el siguiente paso para la administracion financiera y
                facturacion de tu negocio
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-8'>
            {products?.map((product) => (
              <ProductsCard product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
