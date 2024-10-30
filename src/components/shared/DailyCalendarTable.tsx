import React from 'react'
import { useScheduleState } from '../../pages/Schedule/context'
import { useAppointmentState } from '../../pages/Appointment/context'
import { getCurrentHour } from '../DailySchedule'

const weeklyHeader = [
  {
    title: '',
    short: '',
  },
]

const TableHeader = (props: any) => (
  <th className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
    <span className='xl:block lg:block md:block sm:block hidden'>
      {props.title}
    </span>
    <span className='xl:hidden lg:hidden md:hidden sm:hidden block'>
      {props.short}
    </span>
  </th>
)

const DailyCalendarTable = () => {
  const { appointments } = useAppointmentState()
  const { hours } = useScheduleState()
  return (
    <div className=''>
      <div className='wrapper bg-white rounded shadow w-full '>
        <div className='header flex justify-between border-b p-2'>
          <span className='text-lg font-bold'>Sunday 09</span>
          <div className='buttons'>
            <button className='p-1'>
              <svg
                width='1em'
                fill='gray'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-arrow-left-circle'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                />
                <path
                  fill-rule='evenodd'
                  d='M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z'
                />
                <path
                  fill-rule='evenodd'
                  d='M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z'
                />
              </svg>
            </button>
            <button className='p-1'>
              <svg
                width='1em'
                fill='gray'
                height='1em'
                viewBox='0 0 16 16'
                className='bi bi-arrow-right-circle'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
                />
                <path
                  fill-rule='evenodd'
                  d='M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z'
                />
                <path
                  fill-rule='evenodd'
                  d='M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </button>
          </div>
        </div>
        <table className='w-full'>
          <tbody>
            {hours.map((i) => (
              <tr className='text-center h-20'>
                <td
                  className={`border p-1 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto cursor-pointer ${
                    getCurrentHour(appointments, i)
                      ? 'bg-yellow-50'
                      : 'hover:bg-gray-300 transition duration-500 ease bg-green-100'
                  } `}
                >
                  <div className='flex flex-col mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
                    <div className='top h-5 w-full'>
                      <span className='text-gray-500'>{i}</span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DailyCalendarTable
