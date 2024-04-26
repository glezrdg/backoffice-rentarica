import React from 'react'

interface IPaymentInfoProps {
  paymentMethod?: any
  setPaymentMethod?: any
  products?: any
  handleDelete?: any
  subtotal?: any
  itbis?: any
  tip?: any
  total?: any
  handleCreateOrder?: any
  office?: any
  setOffice?: any
  cash?: any
  card?: any
  transfer?: any
  setCash?: any
  setCard?: any
  setTransfer?: any
  handleAddPendingOrder?: any
  client?: any
  clientName?: any
  setClientName?: any
}

//Components
import { BsTrash } from 'react-icons/bs'
import { useState } from 'react'
import { useAppSelector } from '../../../../../redux/store'

const PaymentInfo: React.FC<IPaymentInfoProps> = ({
  paymentMethod,
  setPaymentMethod,
  products,
  handleDelete,
  subtotal,
  itbis,
  tip,
  total,
  handleCreateOrder,
  office,
  setOffice,
  cash,
  card,
  transfer,
  setCash,
  setCard,
  setTransfer,
  handleAddPendingOrder,
  client,
  clientName,
  setClientName,
}) => {
  const { user: userInfo } = useAppSelector((state) => state.auth)

  const [openOffice, setOpenOffice] = useState(false)

  const handleOffice = () => {
    setOpenOffice(!openOffice)
    !openOffice ? setPaymentMethod('Oficina') : setPaymentMethod('')
  }

  return (
    <div className='bg-white w-full col-span-3 h-[75vh]'>
      <div className='flex justify-between items-center px-3 bg-purple-900 text-white h-20'>
        <p className='text-2xl font-bold'>Total</p>
        <p className='font-bold text-xl'>${total?.toFixed(2)}</p>
      </div>
      {/* <div className='flex justify-between items-center px-3 h-10 border-b-2 border-gray-200'>
        <p className='font-medium'>Subtotal</p>
        <p>${subtotal?.toFixed(2)}</p>
      </div>
      <div className='flex justify-between items-center px-3 h-10 border-b-2 border-gray-200'>
        <p>18% ITBIS</p>
        <p>${itbis?.toFixed(2)}</p>
      </div>
      <div className='flex justify-between items-center px-3 h-10 border-b-2 border-gray-200'>
        <p>10% Propina</p>
        <p>${tip?.toFixed(2)}</p>
      </div> */}

      <div className='p-3'>
        {/* <div className='flex justify-between items-center mb-3'>
          <h4 className='text-lg'>Agregar Pago</h4>
          {userInfo?.position !== 'Hugo & Delivery' && (
            <button
              onClick={handleOffice}
              className=' underline underline-offset-1 text-blue-500'
            >
              Oficina
            </button>
          )}
        </div> */}
        <>
          <div className='flex justify-between flex-wrap mt-2'>
            <div
              className={`flex-1 grid place-items-center py-4 bg-gray-200 rounded-3xl cursor-pointer ${
                paymentMethod?.includes('Efectivo')
                  ? 'border-2 border-blue-400'
                  : ''
              }`}
              onClick={() => setPaymentMethod('Efectivo')}
            >
              Efectivo
            </div>
            <div
              className={`flex-1 grid place-items-center py-4 mx-3 bg-gray-200 rounded-3xl cursor-pointer ${
                paymentMethod?.includes('Tarjeta')
                  ? 'border-2 border-blue-400'
                  : ''
              }`}
              onClick={() => setPaymentMethod('Tarjeta')}
            >
              Tarjeta
            </div>
            <div
              className={`flex-1 grid place-items-center py-4 bg-gray-200 rounded-3xl cursor-pointer ${
                paymentMethod?.includes('Transferencia')
                  ? 'border-2 border-blue-400'
                  : ''
              }`}
              onClick={() => setPaymentMethod('Transferencia')}
            >
              Transferencia
            </div>
          </div>
          {userInfo?.position === 'Hugo & Delivery' && (
            <div
              className={`flex-1 grid place-items-center py-4 mt-2 bg-gray-200 rounded-3xl cursor-pointer ${
                paymentMethod?.includes('Hugo')
                  ? 'border-2 border-blue-400'
                  : ''
              }`}
              onClick={() => setPaymentMethod('Hugo')}
            >
              Hugo
            </div>
          )}
        </>
      </div>

      {paymentMethod?.includes('Efectivo') && paymentMethod?.length === 1 && (
        <div className='px-3 grid grid-cols-2 mb-3'>
          <div>
            <h3 className='mb-1 text-center'>Recibido</h3>
            <input
              type='number'
              placeholder='efectivo'
              value={cash}
              className='px-3 py-3 w-11/12 border-2 border-slate-500 outline-none rounded-lg text-center'
              onChange={(e) => setCash(e.target.value)}
            />
          </div>
          <div className='text-center'>
            <h3 className='mb-1'>Devuelta</h3>
            <div className='py-3 bg-red-300 rounded-3xl font-bold'>
              ${Math.round(cash - total)}
            </div>
          </div>
        </div>
      )}

      {paymentMethod?.includes('Efectivo') &&
        paymentMethod?.includes('Tarjeta') &&
        paymentMethod?.length === 2 && (
          <div className='px-3 grid grid-cols-2 mb-3'>
            <div>
              <h3 className='mb-1 text-center'>Efectivo</h3>
              <input
                type='number'
                placeholder='efectivo'
                value={cash}
                className='px-3 py-3 w-11/12 border-2 border-slate-500 outline-none rounded-lg text-center'
                onChange={(e) => setCash(e.target.value)}
              />
            </div>
            <div>
              <h3 className='mb-1 text-center'>Tarjeta</h3>
              <input
                type='number'
                placeholder='efectivo'
                value={card}
                className='px-3 py-3 w-11/12 border-2 border-slate-500 outline-none rounded-lg text-center'
                onChange={(e) => setCard(e.target.value)}
              />
            </div>
          </div>
        )}

      {paymentMethod?.includes('Efectivo') &&
        paymentMethod?.includes('Transferencia') &&
        paymentMethod.length === 2 && (
          <div className='px-3 grid grid-cols-2 mb-3'>
            <div>
              <h3 className='mb-1 text-center'>Efectivo</h3>
              <input
                type='number'
                placeholder='efectivo'
                value={cash}
                className='px-3 py-3 w-11/12 border-2 border-slate-500 outline-none rounded-lg text-center'
                onChange={(e) => setCash(e.target.value)}
              />
            </div>
            <div>
              <h3 className='mb-1 text-center'>Transferencia</h3>
              <input
                type='number'
                placeholder='efectivo'
                value={transfer}
                className='px-3 py-3 w-11/12 border-2 border-slate-500 outline-none rounded-lg text-center'
                onChange={(e) => setTransfer(e.target.value)}
              />
            </div>
          </div>
        )}

      <div className='px-5 mt-2'>
        <div className='flex items-center justify-between'>
          <h4 className='text-base font-medium uppercase mb-3'>Lista</h4>{' '}
          <p>{client && client}</p>
        </div>
        <div className='py-2 min-h-[200px]'>
          {products?.map((product: any) => (
            <div key={product._id} className='grid grid-cols-3 mb-2'>
              <p>{product.name}</p>
              <p className=' justify-self-center'>{product.qty}</p>
              <p
                className=' justify-self-end'
                onClick={() => handleDelete(product.name)}
              >
                <BsTrash />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='px-4 mb-2'>
        <input
          type={'text'}
          placeholder='Nombre'
          className='input w-full rounded-md'
          onChange={(e) => setClientName(e.target.value)}
          value={clientName}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 mx-3 pb-3'>
        <button
          onClick={handleAddPendingOrder}
          className='w-full py-5 font-medium rounded-xl bg-white text-purple-900 border border-purple-900'
        >
          Guardar
        </button>
        <button
          onClick={handleCreateOrder}
          className='w-full py-5 font-medium rounded-xl bg-purple-900 text-white hover:bg-purple-800'
        >
          Facturar
        </button>
      </div>
    </div>
  )
}

export default PaymentInfo
