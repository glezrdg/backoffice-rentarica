import React from 'react'
import { DropdownMessages, DropdownProfile } from './components'
import DropdownNotifications from './components/DropdownNotifications'
import './styles.css'

interface ITopMenuBarProps {
  children?: React.ReactNode
}

const TopMenuBar: React.FC<ITopMenuBarProps> = (props) => {
  return (
    <div className='flex items-center justify-between h-[70px] px-5 bg-white '>
      <div className='flex items-center'>
        <i className='fa fa-bars cursor-pointer lg:text-2xl mr-1 md:mr-2 lg:mr-4 text-slate-400' />
        <h1 className='font-mono text-lg  md:text-xl  lg:text-2xl text-slate-600'>
          BuenoDev
        </h1>
      </div>
      <div className='w-[60%] flex items-center mx-4 border p-2 lg:p-3 rounded-lg box-border transition hover:shadow-sm'>
        <i className='fa fa-thing fa-magnifying-glass mr-2 text-slate-400 text-xs md:text-sm' />
        <input
          placeholder='Buscar...'
          className='outline-none w-[95%] h-full text-slate-500 placeholder:italic placeholder:text-slate-400 placeholder:text-sm'
        />
      </div>
      <div
        data-popover-target='dropdow_messages_profile'
        className='block sm:hidden relative cursor-pointer bg-slate-50 px-2 py-1 rounded-full'
      >
        <i className='text-sm md:text-lg xl:text-xl fa fa-light fa-user text-slate-400'></i>
        <DropdownProfile id='dropdow_messages_profile' />
      </div>
      <div className='w-[180px] justify-between hidden sm:flex'>
        {/* Messages */}
        <div
          data-popover-target='dropdow_messages_message'
          className='relative cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-full z-50'
        >
          <i className='text-sm md:text-lg xl:text-xl fa fa-thin fa-envelope text-slate-400'></i>
          <div className='absolute top-0 left-[38%]'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-sky-500'></span>
            </span>
          </div>
          <DropdownMessages id='dropdow_messages_message' />
        </div>
        {/* Notifications */}
        <div
          data-popover-target='dropdow_messages_notification'
          className='relative cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-full'
        >
          <i className='text-sm md:text-lg xl:text-xl fa fa-sharp fa-light fa-bell text-slate-400'></i>
          <div className='absolute top-0 left-[38%]'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-red-400'></span>
            </span>
          </div>
          <DropdownNotifications id='dropdow_messages_notification' />
        </div>
        {/* Settings */}
        <div className='relative cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-full'>
          <i className='text-sm md:text-lg xl:text-xl fa fa-light fa-gear text-slate-400'></i>
        </div>
        {/* Profile */}
        <div
          data-popover-target='dropdow_messages_profile'
          className='relative cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-full'
        >
          <i className='text-sm md:text-lg xl:text-xl fa fa-light fa-user text-slate-400'></i>
          <DropdownProfile id='dropdow_messages_profile' />
        </div>
      </div>
    </div>
  )
}

export default TopMenuBar
