import React, { useState } from 'react'
import { SideNavbar } from '../SideNavbar'
import {
  DropdownMessages,
  DropdownProfile,
  DropdownNotifications,
} from './components'
import './styles.css'
import { useAppSelector } from '../../../redux/store'

interface ITopMenuBarProps {
  children?: React.ReactNode
  handleOpen: () => void
}

const TopMenuBar: React.FC<ITopMenuBarProps> = ({ handleOpen }) => {
  const { user } = useAppSelector((state) => state.auth)
  return (
    <>
      <div className=' fixed right-0 left-0 flex items-center justify-between h-[70px] px-5 bg-white z-[1000] '>
        <div
          className='flex items-center cursor-pointer'
          onClick={() => handleOpen()}
        >
          <i className='fa fa-bars lg:text-2xl mr-1 md:mr-2 lg:mr-4 text-slate-400' />
          <h1 className='font-mono text-lg  md:text-xl lg:text-2xl text-slate-600'>
            SantoPago
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
          data-popover-target='dropdow_messages_profile-mobile'
          className='block sm:hidden relative cursor-pointer bg-slate-50 px-2 py-1 rounded-full'
        >
          <i className='text-sm md:text-lg xl:text-xl fa fa-light fa-user text-slate-400'></i>
          <DropdownProfile id='dropdow_messages_profile-mobile' />
        </div>
        <div className='gap-4 justify-between items-center hidden sm:flex'>
          {!user?.subscriptionId && (
            <div className='border border-purple-500 rounded-lg text-purple-500 p-3 mr-8'>
              Prueba gratis
            </div>
          )}
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
    </>
  )
}

export default TopMenuBar
