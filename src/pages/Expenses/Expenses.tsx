import { useState } from 'react'

import { Message } from 'primereact/message'
import { PageHeader } from '../../components/layout'
import { Button, Card } from '../../components/shared'
import { Filters } from './components/Filters'
import NoInformation from '../../components/shared/NoInformation'
import SpendModal from './components/modal/SpendModal/SpendModal'
// import SideCreateShopping from './components/SideCreateOfert/SideCreate'

export interface ExpensesProps {}

const Expenses = ({}: ExpensesProps) => {
  // const { shoppings } = useExpensesState()
  const [createShopping, setCreateShopping] = useState(false)

  const shoppings = []

  return (
    <>
      <>
        {/* <SideCreateShopping
          active={createShopping}
          close={() => setCreateShopping(false)}
        /> */}
        {/* Header */}
        <PageHeader
          title='Gastos'
          right={
            <div>
              <i
                data-te-toggle='modal'
                data-te-target='#spendModal'
                data-te-ripple-init
                data-te-ripple-color={'dark'}
                className='btn text-white bg-purple-900 !shadow-red-100 cursor-pointer'
              >
                <i className='fa fa-plus mr-2' />
                Registrar gasto
              </i>
            </div>
          }
        />

        {/* <Header /> */}
        <div className='mt-2 mb-4'>
          <Card title=''>
            <Filters />
          </Card>
        </div>

        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <Card
            title='Gastos no contabilizados'
            className='row-span-4 h-full'
            bodyClassName='mt-4'
          >
            <NoInformation />
          </Card>
          <Card title='Gastos fijos' bodyClassName='mt-4'>
            <NoInformation />
          </Card>
          <Card title='Nomina' bodyClassName='mt-4'>
            <NoInformation />
          </Card>
        </div>
        {/* TABLE */}
        {/* <Card title=''>
          <ShoppingTable />
        </Card>

        <InformationCards /> */}

        {/* <ProductTable openCreate={() => setCreateProduct(true)} /> */}
        {/* <div className='grid grid-cols-3 gap-4'>
          {shoppings.map((shop) => (
            <ShoppingCard shopping={shop} />
          ))}
        </div> */}

        <SpendModal orders={[]} />
      </>
    </>
  )
}

export default Expenses
