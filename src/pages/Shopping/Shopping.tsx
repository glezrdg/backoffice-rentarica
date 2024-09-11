import React, { useState } from 'react'
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared'
import ShoppingCard from './components/ShoppingCard'
import SideCreateShopping from './components/SideCreateOfert/SideCreate'
import { useShoppingState } from './context'
import ShoppingModal from './components/ShoppingModal'
import ShoppingTable from './components/tables/ShoppingTable'
import { Filters } from './components/Filters'
import InformationCards from './components/InformationCards'
import { useCategoryBrandState } from '../CategoryBrand/context'
import CardWidget from '../Reports/components/CardWidget'
import { useNavigate } from 'react-router-dom'
import { useReportState } from '../Reports/context'

export interface ShoppingProps {}

const Shopping = ({}: ShoppingProps) => {
  const { shoppings } = useShoppingState()
  const { report } = useReportState()
  const { categories } = useCategoryBrandState()
  const [createShopping, setCreateShopping] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <>
        <SideCreateShopping
          active={createShopping}
          close={() => setCreateShopping(false)}
        />
        {/* Header */}
        <PageHeader
          title='Inversiones'
          right={
            <div>
              {/* <Button
                icon='fa fa-plus'
                text='Registrar Compra'
                className='!px-3 !hover:shadow-none !bg-purple-900'
                onClick={() => setCreateShopping(true)}
              /> */}
            </div>
          }
        />

        {/* <Header /> */}
        {/* <div className='mt-2 mb-4'>
          <Card title=''>
            <Filters />
          </Card>
        </div> */}

        {/* INFO CARDS */}
        <Card title='' className='my-6 py-3'>
          <div className='grid sm:grid-cols-3 gap-5 w-full'>
            <CardWidget
              color='red'
              background='red'
              title='Total invertido'
              value={report?.shoppingReport?.totalAmountBuy || 0}
            />
            <CardWidget
              color='green'
              background='green'
              title='Inversiones realizadas'
              noCash
              value={report?.shoppingReport?.shoppingQty || 0}
            />
            <CardWidget
              color='blue'
              background='blue'
              title='Productos comprados'
              noCash
              value={
                report?.shoppingReport?.productsQty.reduce(
                  (acc, curr) => acc + curr.qty,
                  0
                ) || 0
              }
            />
          </div>
        </Card>

        {/* INVESTMENTS BY CATEGORY */}
        <Card title='Inversiones por categoria' className='mb-4'>
          <div className='grid grid-cols-3 gap-6 mt-6'>
            {categories?.map((category) => {
              const reportCategory = report?.shoppingReport.categoryQty.find(
                (i) => i.category === category._id
              )

              return (
                <div
                  className='card shadow-md p-4  cursor-pointer border border-slate-50'
                  onClick={() => navigate(`/admin/inversiones/${category._id}`)}
                >
                  <h1 className='text-center border-b-2 border-slate-300 mb-4 font-bold pb-2'>
                    {category.name}
                  </h1>

                  <div>
                    <ul className='w-full '>
                      <li className='grid grid-cols-2  gap-2 w-full'>
                        <p className='text-sm'>Total invertido:</p>
                        <p className='text-red-500 text-center'>
                          ${reportCategory?.amount || 0}
                        </p>
                      </li>
                      <li className='grid grid-cols-2  gap-2 w-full my-2'>
                        <p className='text-sm'>Inversiones realizadas:</p>
                        <p className='text-center'>
                          {reportCategory?.shoppings.length || 0}
                        </p>
                      </li>
                      <li className='grid grid-cols-2  gap-2 w-full'>
                        <p className='text-sm'>Nro de productos:</p>
                        <p className='text-center'>
                          {reportCategory?.qty || 0}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* TABLE */}
        {/* <Card title=''>
          <ShoppingTable />
        </Card> */}

        <InformationCards />

        {/* <ProductTable openCreate={() => setCreateProduct(true)} /> */}
        {/* <div className='grid grid-cols-3 gap-4'>
          {shoppings.map((shop) => (
            <ShoppingCard shopping={shop} />
          ))}
        </div> */}
      </>
    </>
  )
}

export default Shopping
