import { useDeliveryState } from '../../context'

// Components
import NoInformation from '../../../../components/shared/NoInformation'

const UsersTable = (props: { openModal: any }) => {
  const { deliveries, setDelivery } = useDeliveryState()

  return (
    <div className='p-4 bg-white rounded-lg shadow-sm w-full h-fit'>
      {deliveries?.length ? (
        <div className='flow-root'>
          <ul
            role='list'
            className='divide-y divide-gray-200 dark:divide-gray-700'
          >
            {deliveries?.map((employee) => (
              <li
                className='py-3 sm:py-4 hover:bg-slate-50 transition-all cursor-pointer'
                onClick={() => {
                  setDelivery(employee)
                  props.openModal()
                }}
              >
                <div className='flex items-center space-x-4'>
                  <div className='flex-shrink-0'>
                    <img
                      className='w-8 h-8 rounded-full'
                      src='https://flowbite.com/docs/images/people/profile-picture-1.jpg'
                      alt='Neil image'
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                      {employee.fullname}
                    </p>
                    <p
                      className={`text-sm ${
                        employee.role === 'empleado'
                          ? 'text-gray-400'
                          : 'text-indigo-400'
                      } truncate dark:text-gray-400`}
                    >
                      {employee.role}
                    </p>
                  </div>
                  {employee.role === 'empleado' ? (
                    <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                      $320
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <NoInformation />
      )}
    </div>
  )
}

export default UsersTable
