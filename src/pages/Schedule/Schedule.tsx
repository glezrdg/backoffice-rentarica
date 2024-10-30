import dayjs from 'dayjs'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import DailySchedule from '../../components/DailySchedule'
import DailyCalendarTable from '../../components/shared/DailyCalendarTable'
import { getWeeklyDay } from '../../utility/dateFormat'
import { useScheduleState } from './context'

interface IScheduleProps {
  children?: React.ReactNode
}

export const DayCard = ({
  className,
  day,
  badge,
  title,
  onClick,
  btnClassName,
  badgeClassName,
}: any) => {
  return (
    <div
      className={`text-center h-20 ${className && className}`}
      onClick={onClick}
    >
      <div
        className={`border flex p-1 h-full xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 transition cursor-pointer duration-500 ease hover:bg-gray-100 ${
          btnClassName && btnClassName
        }`}
      >
        <div className='flex flex-col items-center h-full mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
          <div className='top h-5 w-full'>
            <span className='font-medium'>{title || '1'}</span>
          </div>
          {day ? (
            <div className='top h-5 w-full'>
              <span className=' font-medium uppercase text-sm'>{day}</span>
            </div>
          ) : (
            ''
          )}
          {!badge ? (
            <div className='bottom flex-grow h-30 mt-3 py-1 w-full cursor-pointer'>
              <div
                className={`event ${
                  badgeClassName && badgeClassName
                } w-fit mx-auto text-white rounded p-1 text-sm mb-1`}
              >
                <span className='event-name text-xs'></span>
                <span className='time'></span>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

const Schedule: React.FC<IScheduleProps> = (props) => {
  const { selectedDay, setSelectedDay, daysOfMonth } = useScheduleState()

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={7}
        pagination={{ clickable: true }}
      >
        {daysOfMonth?.map((i) => (
          <SwiperSlide>
            <DayCard
              title={i.dayNumber}
              className={
                i.dayNumber === selectedDay.dayNumber
                  ? 'text-blue-700'
                  : 'text-gray-800 '
              }
              day={i.dayTitle}
              onClick={() => setSelectedDay(i)}
              btnClassName={
                i.dayNumber === selectedDay.dayNumber ? 'bg-gray-200' : ''
              }
              badgeClassName={i.isBusy ? 'bg-yellow-500' : 'bg-green-500'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='grid grid-cols-[200px_1fr] gap-3 mt-2'>
        <DailyCalendarTable />
        <DailySchedule className='flex-1' />
      </div>
    </>
  )
}

export default Schedule
