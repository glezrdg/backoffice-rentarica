import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../../redux/store'
import Sidenav from './layout/Sidenav'
import { useEffect, useState } from 'react'
import { getSubscription } from './services/account'

const MySubscription = () => {
  const { user } = useAppSelector((state) => state.auth)
  const [subscription, setSubscription] = useState<any>('')

  useEffect(() => {
    handleGetSubscription()
  }, [])

  const handleGetSubscription = async () => {
    try {
      const data = await getSubscription()
      console.log('Mysubscription: ', data)
      setSubscription(data)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  return (
    <>
      <div className='mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto'>
        <div className='grid grid-cols-8 pt-3 sm:grid-cols-10'>
          <Sidenav />
          <div className='col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow'>
            <div className='pt-4'>
              <h1 className='py-2 text-2xl font-semibold'>Mi subscripcion</h1>
              {/* <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>  */}
            </div>
            <hr className='mt-4 mb-8' />
            <p className='py-2 text-xl font-semibold text-purple-900'>
              {user?.subscriptionId}
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
              <p className='text-gray-600'>
                Correo Electronico: <strong>{user?.email}</strong>
              </p>
              <a
                href={subscription?.items?.url}
                className='inline-flex text-sm font-semibold text-red-600 underline decoration-2'
              >
                Cancelar suscripcion
              </a>
            </div>
            <hr className='mt-4 mb-8' />

            <div className='grid grid-cols-2 gap-4 mb-8'>
              <p>
                Ultima factura:{' '}
                <span className='ml-3 inline-flex'>24/05/24 - 15:00pm</span>
              </p>
              <p>
                Monto de factura:{' '}
                <span className='ml-3 inline-flex'>24/05/24 - 15:00pm</span>{' '}
              </p>
              <p>
                Monto a pagar: <span className='ml-3 inline-flex'>$16</span>
              </p>
              <p>
                Subscrito desde:{' '}
                <span className='ml-3 inline-flex'>24/05/24 - 15:00pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MySubscription
