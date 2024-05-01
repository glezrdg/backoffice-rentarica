import React, { useEffect } from 'react'
import { Card } from '../../../../components/shared'
import NoInformation from '../../../../components/shared/NoInformation'
import { useExpensesState } from '../../context'
import commaNumber from 'comma-number'
import Table from './components/Table'

const Fijos = () => {
  const { expenses } = useExpensesState()

  const expensesFijos = expenses.filter((i) => i.type === 'fijo')

  return (
    <Card
      title='Gastos fijos'
      className='h-full ml-4'
      bodyClassName='mt-4'
      rightHeader={
        <p className='inline-flex items-center text-xl font-semibold text-red-700 dark:text-white'>
          -$
          {commaNumber(expensesFijos.reduce((acc, curr) => acc + curr.cost, 0))}
        </p>
      }
    >
      {expensesFijos.length ? (
        <Table expenses={expensesFijos} />
      ) : (
        <NoInformation />
      )}
    </Card>
  )
}

export default Fijos
