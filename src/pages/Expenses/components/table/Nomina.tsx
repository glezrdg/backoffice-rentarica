import React, { useEffect } from 'react'
import { Card } from '../../../../components/shared'
import NoInformation from '../../../../components/shared/NoInformation'
import { useExpensesState } from '../../context'
import commaNumber from 'comma-number'
import Table from './components/Table'

const Nomina = () => {
  const { expenses } = useExpensesState()

  const expensesGastos = expenses.filter((i) => i.type === 'nomina')

  return (
    <Card
      title='Nomina'
      className='h-full col-span-4'
      bodyClassName='mt-4'
      rightHeader={
        <p className='inline-flex items-center text-xl font-semibold text-red-700 dark:text-white'>
          -$
          {commaNumber(
            expensesGastos.reduce((acc, curr) => acc + curr.cost, 0)
          )}
        </p>
      }
    >
      {expensesGastos.length ? (
        <Table expenses={expensesGastos} />
      ) : (
        <NoInformation />
      )}
    </Card>
  )
}

export default Nomina
