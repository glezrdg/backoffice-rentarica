import React from 'react'
import { DataService } from '../../../config/api'
import { useNavigate } from 'react-router-dom'
import { setItem } from '../../../utility/localStorageControl'

const ProductsCard = ({ product, stripeDirect }: any) => {
  const navigate = useNavigate()

  const getCheckout = async () => {
    try {
      const { data } = await DataService.post(`/checkout`, {
        priceId: product.id,
      })

      if (stripeDirect) {
        setItem('session', data.id)
        window.location.href = data.url
        return
      }

      navigate(`/register?sessionI=${data.id}`)
      setItem('session', data.id)
      setItem('stripe_url', data.url)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  console.log(product)

  return (
    <>
      {/* <!-- Basic Plan --> */}
      <div className='bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden'>
        <div className='absolute top-0 right-0 m-4'>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800'>
            Basico
          </span>
        </div>
        <div className='mb-8'>
          <h3 className='text-2xl font-semibold text-purple-700'>
            {product.nickname}
          </h3>
          <p className='mt-4 text-purple-400'>
            Perfecto para individuos y pequeñas empresas
          </p>
        </div>
        <div className='mb-8'>
          <span className='text-5xl font-extrabold text-purple-700'>
            ${product.unit_amount / 100}
          </span>
          <span className='text-xl font-medium text-purple-400'>/mo</span>
        </div>
        <ul className='mb-8 space-y-4 text-purple-400'>
          <li className='flex items-center'>
            <svg
              className='h-6 w-6 text-green-400 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span>10 user accounts</span>
          </li>
          <li className='flex items-center'>
            <svg
              className='h-6 w-6 text-green-400 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span>100 transactions per month</span>
          </li>
          <li className='flex items-center'>
            <svg
              className='h-6 w-6 text-green-400 mr-2'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span>Basic reporting</span>
          </li>
        </ul>
        <button
          onClick={getCheckout}
          className='block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
        >
          Suscribete
        </button>
      </div>

      {/* <!-- Pro Plan --> */}
      {/* <div className='bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden'>
                <div className='absolute top-0 right-0 m-4'>
                  <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                    Pro
                  </span>
                </div>
                <div className='mb-8'>
                  <h3 className='text-2xl font-semibold text-white'>
                    Growth Pack
                  </h3>
                  <p className='mt-4 text-purple-200'>
                    Ideal for growing businesses and enterprises.
                  </p>
                </div>
                <div className='mb-8'>
                  <span className='text-5xl font-extrabold text-white'>
                    $199
                  </span>
                  <span className='text-xl font-medium text-purple-200'>
                    /mo
                  </span>
                </div>
                <ul className='mb-8 space-y-4 text-purple-200'>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Unlimited user accounts</span>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        strokeLinejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Unlimited transactions</span>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        strokeLinejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Advanced analytics</span>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        strokeLinejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Priority support</span>
                  </li>
                </ul>
                <a
                  href='#'
                  className='block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                >
                  Get Started
                </a>
              </div> */}

      {/* <!-- Enterprise Plan --> */}
      {/* <div className='bg-white bg-opacity-10 rounded-lg shadow-lg p-6 relative overflow-hidden'>
                <div className='absolute top-0 right-0 m-4'>
                  <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800'>
                    Enterprise
                  </span>
                </div>
                <div className='mb-8'>
                  <h3 className='text-2xl font-semibold text-white'>
                    Scale Pack
                  </h3>
                  <p className='mt-4 text-purple-200'>
                    Tailored for large-scale deployments and custom needs.
                  </p>
                </div>
                <div className='mb-8'>
                  <span className='text-5xl font-extrabold text-white'>
                    Custom
                  </span>
                </div>
                <ul className='mb-8 space-y-4 text-purple-200'>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        strokeLinejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        strokeLinejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        strokeLinejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Dedicated support team</span>
                  </li>
                  <li className='flex items-center'>
                    <svg
                      className='h-6 w-6 text-green-400 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        strokeLinejoin='round'
                        stroke-width='2'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                    <span>Premium SLAs</span>
                  </li>
                </ul>
                <a
                  href='#'
                  className='block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700'
                >
                  Contact Sales
                </a>
              </div> */}
    </>
  )
}

export default ProductsCard
