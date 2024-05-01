import { useExpensesState } from '../../../../Expenses/context'
import { IExpenses } from '../../../models'
import commaNumber from 'comma-number'

const Table = ({ expenses }: { expenses: IExpenses[] }) => {
  const { setExpense } = useExpensesState()

  return (
    <ul role='list' className='divide-y divide-gray-200 dark:divide-gray-700'>
      {expenses.map((expense) => (
        <li
          key={expense._id}
          className='py-3 px-2 cursor-pointer transition-all hover:bg-slate-50 sm:py-4'
          data-te-toggle='modal'
          data-te-target='#spendModal'
          onClick={() => setExpense(expense)}
        >
          <div className='flex items-center space-x-4'>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                {expense.title}
              </p>
              <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                {expense.note}
              </p>
            </div>
            <div className='inline-flex items-center text-base font-semibold text-red-700 dark:text-white'>
              -${commaNumber(expense.cost)}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Table
