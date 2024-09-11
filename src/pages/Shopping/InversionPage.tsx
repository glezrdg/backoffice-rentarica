import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom'
import { useReportState } from '../Reports/context'

export interface InversionPageProps {}

const InversionPage = ({}: InversionPageProps) => {
  const { shoppings, fetchShoppings } = useShoppingState()
  const { report } = useReportState()
  const { categories } = useCategoryBrandState()
  const [createShopping, setCreateShopping] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    fetchShoppings({ category: id })
  }, [])

  const categoryReport = report?.shoppingReport.categoryQty.find(
    (i) => i.category === id
  )

  return (
    <>
      <>
        <SideCreateShopping
          active={createShopping}
          close={() => setCreateShopping(false)}
        />
        {/* Header */}
        <PageHeader
          title={`Inversiones de ${
            categories.find((i) => i._id === id)?.name || 'categoria'
          }`}
          goBack
          right={
            <div>
              <Button
                icon='fa fa-plus'
                text='Registrar Compra'
                className='!px-3 !hover:shadow-none !bg-purple-900'
                onClick={() => setCreateShopping(true)}
              />
            </div>
          }
        />

        {/* <Header /> */}
        <div className='mt-2 mb-4'>
          <Card title=''>
            <Filters />
          </Card>
        </div>

        {/* INFO CARDS */}
        <Card title='' className='my-6 py-3'>
          <div className='grid sm:grid-cols-3 gap-5 w-full'>
            <CardWidget
              color='red'
              background='red'
              title='Invertido'
              value={categoryReport?.amount || 0}
            />
            <CardWidget
              color='green'
              background='green'
              title='Ganado'
              value={0}
            />
            <CardWidget
              color='blue'
              background='blue'
              title='Vendido'
              value={0}
            />
          </div>
        </Card>

        {/* TABLE */}
        <Card title=''>
          <ShoppingTable />
        </Card>

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

export default InversionPage
