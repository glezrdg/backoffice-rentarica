import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataService } from '../config/api'
import ProductsCard from './Home/components/ProductsCard'
import { getItem } from '../utility/localStorageControl'
import Header from './Home/Header'
import Faq from './Home/Faq'
import Footer from './Home/Footer'

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
    <div className='h-full xl:px-12'>
      <Header />
      {/* <section>
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
      </section> */}

      <div className='text-left'>
        {/* HERO */}
        <div className='min-h-[100vh] grid place-items-center container mx-auto'>
          <section className='relative flex items-center w-full'>
            <div className='relative items-center w-full px-5 max-w-7xl'>
              <div className='relative flex-col items-start m-auto align-middle'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24'>
                  <div className='relative items-center gap-12 m-auto lg:inline-flex md:order-first'>
                    <div className='max-w-xl text-center lg:text-left'>
                      <div>
                        <p className='text-purple-900 font-medium mb-2'>
                          POS (Punto de venta)
                        </p>
                        <p className='text-3xl font-semibold tracking-tight text-[#201515] sm:text-4xl'>
                          Empieza a{' '}
                          <strong className='text-purple-900'>vender</strong> y
                          manejar tu administracion{' '}
                          <strong className='text-purple-900'>
                            de la mejor manera
                          </strong>
                        </p>
                        <p className='max-w-xl mt-4 text-base tracking-tight text-gray-600'>
                          Tu Punto de venta para una experiencia de compra veloz
                          mientras lo tienes todo controlado electrónicamente.
                        </p>
                      </div>
                      <div className='flex justify-center gap-3 mt-10 lg:justify-start'>
                        <button
                          className='bg-purple-900 text-gray-200  p-2 rounded  hover:bg-purple-800 hover:text-gray-100'
                          onClick={() => navigate('/register')}
                        >
                          Empieza gratis
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='order-first block h-fit w-full  aspect-square'>
                    <img
                      className='absolute w-[55%] h-[400px] top-[15%] mx-auto shadow-md bg-gray-300 lg:ml-auto '
                      alt='hero'
                      src='/santopago_home.png'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='mt-32' />

        {/* FEATURES */}
        <div className='flex flex-col justify-center border-t-[20px]  border-purple-800 min-h-[70vh]'>
          <div className='w-full draggable container mx-auto'>
            <div className='container flex flex-col items-center justify-center gap-16 mx-auto h-[80vh]'>
              <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main'>
                  <span>
                    <i className='fa fa-cloud text-6xl text-purple-900' />
                  </span>
                  <p className='text-2xl font-extrabold text-dark-grey-900'>
                    Nube
                  </p>
                  <p className='text-center leading-7 text-dark-grey-600 w-[80%]'>
                    Accede desde cualquier dispositvo con tu informacion al dia
                  </p>
                </div>
                <div className='flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main'>
                  <span>
                    <i className='fa fa-headphones text-6xl text-purple-900' />
                  </span>
                  <p className='text-2xl font-extrabold text-dark-grey-900'>
                    Soporte gratis
                  </p>
                  <p className='text-center leading-7 text-dark-grey-600 w-[80%]'>
                    La atencion al cliente esta presente desde el momento cero
                  </p>
                </div>
                <div className='flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main'>
                  <span>
                    <i className='fa fa-circle-check text-6xl text-purple-900' />
                  </span>
                  <p className='text-2xl font-extrabold text-dark-grey-900'>
                    Facil de usar
                  </p>
                  <p className='text-center leading-7 text-dark-grey-600 w-[80%]'>
                    Navega atreves del sistema de una forma rapida y sencilla
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information */}

        <div className='min-h-[90vh] bg-gradient-to-r from-purple-900 to-purple-900 grid place-items-center rounded-3xl '>
          <section className='relative flex items-center w-full container mx-auto'>
            <div className='relative items-center w-full px-5 max-w-7xl'>
              <div className='relative flex-col items-start m-auto align-middle'>
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24'>
                  <div className='relative items-center gap-12 m-auto lg:inline-flex md:order-first'>
                    <div className='max-w-xl text-center lg:text-left'>
                      <div className='test'>
                        <p className='text-3xl font-semibold tracking-tight text-slate-200 sm:text-4xl'>
                          Vender en modo automático
                        </p>
                        <strong className='text-white block mt-2'>
                          Es posible!
                        </strong>
                        <p className='max-w-xl mt-4 text-base tracking-tight text-gray-300'>
                          Tu Punto de venta para una experiencia de compra veloz
                          mientras lo tienes todo controlado electrónicamente.
                        </p>
                      </div>
                      <div className='flex justify-center gap-3 mt-10 lg:justify-start'>
                        <button
                          className='bg-white text-purple-900 p-2 rounded  hover:text-purple-500'
                          onClick={() => navigate('/register')}
                        >
                          Empieza 15 dias gratis
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='order-first block h-fit w-full  aspect-square'>
                    <img
                      className='absolute w-[55%] h-[400px] top-[15%] mx-auto shadow-md bg-gray-300 lg:ml-auto '
                      alt='hero'
                      src='/santopago_home.png'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='min-h-[100vh] grid place-items-center container mx-auto'>
          <section className='relative flex items-center w-full'>
            <div className='flex flex-col lg:flex-row-reverse w-full gap-6 lg:gap-24'>
              <div className='relative items-center gap-12 m-auto lg:inline-flex md:order-first w-[70%]'>
                <div className=' text-center lg:text-right'>
                  <div>
                    <p className='text-3xl font-semibold tracking-tight text-[#201515] sm:text-4xl'>
                      Tener todo siempre al día
                    </p>
                    <strong className='text-purple-900 block mt-2'>
                      Es posible!
                    </strong>
                    <p className='max-w-xl mt-4 text-base tracking-tight text-gray-600'>
                      Tu Punto de venta para una experiencia de compra veloz
                      mientras lo tienes todo controlado electrónicamente.
                    </p>
                  </div>
                  <div className='flex justify-center gap-3 mt-10 lg:justify-start'>
                    <button
                      className='bg-purple-900 text-gray-200 lg:ml-auto p-2 rounded  hover:bg-purple-800 hover:text-gray-100'
                      onClick={() => navigate('/register')}
                    >
                      Empieza gratis
                    </button>
                  </div>
                </div>
              </div>
              <div className='order-first block h-fit w-full'>
                <img
                  className='lg:absolute w-[55%] h-[400px] -top-[100px] mx-auto shadow-md bg-gray-300 lg:ml-auto '
                  alt='hero'
                  src='/santopago_home.png'
                />
              </div>
            </div>
          </section>
        </div>

        <section className='flex flex-col lg:flex-row items-center justify-around gap-10 container mx-auto lg:px-20 min-h-[70vh] border-t-[20px] border-purple-800'>
          <p className='text-3xl text-center lg:text-left font-semibold tracking-tight text-[#201515] sm:text-4xl lg:text-6xl lg:w-[60%]'>
            ‍Obtén superpoderes con{' '}
            <strong className='text-purple-900'>Santo Pago</strong> en cualquier
            tipo de comercio
          </p>

          <div className='w-full lg:w-[35%] h-[250px] lg:h-[350px] bg-purple-900 rounded-3xl grid grid-cols-3 p-3 gap-4'>
            <div className='bg-white rounded-lg w-full h-full'></div>
            <div className='bg-white rounded-lg w-full h-full'></div>
            <div className='bg-white rounded-lg w-full h-full'></div>
            <div className='bg-white rounded-lg w-full h-full'></div>
            <div className='bg-white rounded-lg w-full h-full'></div>
            <div className='bg-white rounded-lg w-full h-full'></div>
          </div>
        </section>

        {/* PLANS */}
        <section className='py-12 my-20 container mx-auto min-h-[90vh] grid place-items-center'>
          <div className='max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-4xl font-extrabold text-purple-900 sm:text-5xl'>
                Elige tu plan
              </h2>
              <p className='mt-4 text-xl text-purple-400'>
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

        {/* FAQS */}

        <Faq />
      </div>

      <Footer />
    </div>
  )
}

export default Home
