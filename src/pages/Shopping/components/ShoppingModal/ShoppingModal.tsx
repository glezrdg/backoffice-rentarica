import {
  ClientAddress,
  ClientCart,
  ClientWishList,
  LatestBuy,
} from '../../../../pages/Products/components/modal/ClientModal'
import commaNumber from 'comma-number'
import { Avatar } from 'flowbite-react'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import { useShoppingState } from '../../context'
import { useAppSelector } from '../../../../redux/store'
import { Dialog } from 'primereact/dialog'

interface IShoppingModalProps {
  children?: React.ReactNode
  open: boolean
  onClose: any
}

const ShoppingModal: React.FC<IShoppingModalProps> = (props) => {
  const { products } = useAppSelector((state) => state.products)
  const { shopping } = useShoppingState()

  console.log(shopping)

  return (
    <>
      <Dialog
        visible={props.open}
        onHide={props.onClose}
        // style={{ width: '60vw' }}
        className='w-[90vw] lg:w-[60vw]'
        header='Informacion de compra'
        maximizable
      >
        {true ? (
          <>
            {/* Body */}
            <div className='relative p-4'>
              <div className='flex items-center justify-between border-b pb-3 mb-2'>
                <div className='flex items-center'>
                  <div>
                    {/* <p className='text-xl mb-1'>{product?.name}</p> */}
                    <span className='text-slate-500 mr-2'>
                      {shopping?.shoppingList?.reduce(
                        (acc, cur) => acc + cur.qty,
                        0
                      )}
                    </span>
                    Articulos comprados
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <h2 className='text-3xl text-red-500 font-medium'>
                    ${commaNumber(shopping?.total || 0)}
                  </h2>
                  <p>Inversion</p>
                </div>
                <div>
                  <h2 className='text-3xl text-green-500 font-medium'>
                    $
                    {commaNumber(
                      shopping?.shoppingList?.reduce(
                        (acc: any, curr: any) =>
                          acc +
                          (curr.product.price - curr.price) *
                            (curr.qty - curr.available),
                        0
                      ) || 0
                    )}
                  </h2>
                  <p>Recuperado</p>
                </div>
              </div>

              {/* Sections */}
              <TabView>
                <TabPanel headerClassName='text-sm' header='Compra'>
                  <div className='grid grid-cols-4 gap-2 p-2 w-full bg-white'>
                    <p>Producto</p>
                    <p className='text-center'>Precio</p>
                    <p className='text-center'>Cantidad</p>
                    <p className='text-center'>Disponible</p>
                  </div>
                  {shopping?.shoppingList?.map((item) => (
                    <div className='grid grid-cols-4 gap-2 p-2 w-full'>
                      <p>{item.product.name}</p>
                      <p className='text-center'>${commaNumber(item.price)}</p>
                      <p className='text-center'>{item.qty}</p>
                      <p className='text-center'>{item.available}</p>
                    </div>
                  ))}
                </TabPanel>
                {/* <TabPanel headerClassName='text-sm' header='Carrito'>
                    <ClientCart />
                  </TabPanel>
                  <TabPanel headerClassName='text-sm' header='Wishlist'>
                    <ClientWishList />
                  </TabPanel>
                  <TabPanel headerClassName='text-sm' header='Direccion'>
                    <ClientAddress />
                  </TabPanel> */}
              </TabView>
            </div>
          </>
        ) : (
          ''
        )}
      </Dialog>
    </>
  )
}

export default ShoppingModal
