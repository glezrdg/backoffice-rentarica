import { useState } from 'react'

import { PageHeader } from '../../components/layout'
import { Card } from '../../components/shared'
import NoInformation from '../../components/shared/NoInformation'
import { Filters } from './components/Filters'
import SpendModal from './components/modal/SpendModal/SpendModal'
import { useExpensesState } from './context'
import Gastos from './components/table/Gastos'
import Fijos from './components/table/Fijos'
import commaNumber from 'comma-number'
import Nomina from './components/table/Nomina'
// import SideCreateShopping from './components/SideCreateOfert/SideCreate'

export interface ExpensesProps {}

const Expenses = ({}: ExpensesProps) => {
  const { expenses } = useExpensesState()
  const [createShopping, setCreateShopping] = useState(false)

  return (
    <>
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
      <div className='flex h-full gap-6 mt-2 mb-4'>
        <Card title='' className='flex-1'>
          <Filters />
        </Card>
        <div className='w-[200px] grid place-items-center bg-red-500 text-white rounded-xl font-bold text-3xl'>
          -${commaNumber(expenses.reduce((acc, curr) => acc + curr.cost, 0))}
        </div>
      </div>

      {/* INFORMATION */}
      <div className='grid grid-cols-2 grid-rows-2 gap-y-4'>
        <Gastos />
        <Fijos />
        <Nomina />
      </div>
      <SpendModal orders={[]} />
    </>
  )
}

export default Expenses
