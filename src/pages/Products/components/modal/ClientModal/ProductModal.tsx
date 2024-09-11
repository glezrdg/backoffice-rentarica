import commaNumber from 'comma-number'
import { Avatar } from 'primereact/avatar'
import { Dialog } from 'primereact/dialog'
import { InputNumber } from 'primereact/inputnumber'
import { TabPanel, TabView } from 'primereact/tabview'
import React from 'react'
import { useReportState } from '../../../../../pages/Reports/context'
import { API_URL } from '../../../../../utility/constants'
import { useInventoryState } from '../../../context'
import Sizes from '../../Sizes'
import './styles.css'

interface IProductModalProps {
  children?: React.ReactNode
  open: boolean
  onClose: any
}

const ProductModal: React.FC<IProductModalProps> = (props) => {
  const { report } = useReportState()
  const { product } = useInventoryState()

  let productReport = report?.sellsReport?.productsQty?.find(
    (i) => i.product?._id === product?._id
  )

  return (
    <Dialog
      visible={props.open}
      // style={{ width: '50vw' }}
      className='w-[90vw] lg:w-[60vw]'
      onHide={props.onClose}
      header='Informacion de producto'
      maximizable
    >
      {product?._id ? (
        <>
          {/* Body */}
          <div className='relative p-4'>
            <div className='flex items-center justify-between border-b pb-3 mb-2'>
              <div className='flex items-center'>
                <Avatar
                  label='U'
                  image={API_URL + 'files/' + product?.images[0]}
                  size='xlarge'
                  className='p-overlay-badge mr-3'
                  style={{
                    backgroundColor: '#4caf4f',
                    color: '#ffffff',
                  }}
                />
                <div>
                  <p className='text-xl mb-1'>{product?.name}</p>
                  <span className='text-sm text-slate-500'>
                    {productReport?.qty || 0} compras en este mes
                  </span>
                </div>
              </div>
              <h2 className='text-3xl text-green-500 font-medium'>
                ${commaNumber(product?.price!)}
              </h2>
            </div>

            {/* Sections */}
            <TabView className='bg-slate-50'>
              <TabPanel
                headerClassName='text-sm bg-slate-100'
                header='Informacion'
                className=''
              >
                <div className='mb-4'>
                  <label className='font-bold block mb-4'>Descripcion</label>
                  <p>{product.description}</p>
                </div>
                {product.productType === 'product' ? (
                  <div>
                    <label className='font-bold mr-4'>Cantidad:</label>
                    <InputNumber value={product.qty} />
                  </div>
                ) : (
                  <div>
                    <label className='font-bold'>Sizes</label>
                    <Sizes sizes={product.sizes} my={6} />
                  </div>
                )}
              </TabPanel>
            </TabView>
          </div>
        </>
      ) : (
        ''
      )}
    </Dialog>
  )
}

export default ProductModal
