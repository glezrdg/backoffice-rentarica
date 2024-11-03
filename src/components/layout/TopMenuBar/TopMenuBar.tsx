import { OverlayPanel } from 'primereact/overlaypanel'
import React, { useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../../redux/store'
import { DropdownMessages, DropdownProfile } from './components'
import './styles.css'
import { Link } from 'react-router-dom'

interface ITopMenuBarProps {
  children?: React.ReactNode
  handleOpen: () => void
  active: boolean
}

const TopMenuBar: React.FC<ITopMenuBarProps> = ({ handleOpen, active }) => {
  const { user } = useAppSelector((state) => state.auth)
  const location = useLocation()
  const [mobileNav, setMobileNav] = useState(false)

  const title = location.pathname.split('/')[2]

  const op: any = useRef(null)
  const perfil: any = useRef(null)

  return (
    <>
      <div
        className={` fixed right-0 shadow-md ${
          active ? 'left-0 md:left-[3.5rem] lg:left-[14rem]' : 'left-[3.5rem]'
        } flex items-center justify-between h-[70px] px-5 bg-white z-[1000] `}
      >
        {/* <div className='w-[50%] flex items-center mx-4 border p-2 lg:p-3 rounded-lg box-border transition hover:shadow-sm'>
          <i className='fa fa-thing fa-magnifying-glass mr-2 text-slate-400 text-xs md:text-sm' />
          <input
            placeholder='Buscar...'
            className='outline-none w-[95%] h-full text-slate-500 placeholder:italic placeholder:text-slate-400 placeholder:text-sm'
          />
        </div> */}
        <div className='text-xl'>{title}</div>
        <div className='flex gap-4 items-center'>
          <i
            onClick={() => setMobileNav(!mobileNav)}
            className={`block md:!hidden pi pi-align-right text-slate-500 text-lg hover:text-blue-800`}
          />
          <div
            className='block sm:hidden relative cursor-pointer bg-slate-50 px-2 py-1 rounded-full'
            onClick={(e) => perfil.current.toggle(e)}
          >
            <i className='text-sm md:text-lg xl:text-xl fa fa-light fa-user text-slate-400'></i>
            <OverlayPanel ref={perfil}>
              <DropdownProfile />
            </OverlayPanel>
          </div>
        </div>
        <div className='gap-4 justify-between items-center hidden sm:flex relative'>
          {/* <DarkSwitch /> */}
          {/* <SpeedDial
            model={items}
            direction='down'
            radius={60}
            style={{ display: 'flex', top: '-10%', left: -80 }}
            buttonClassName='p-button-outlined hover:bg-indigo-500'
            buttonStyle={{ width: '2.5rem', height: '2.5rem' }}
          /> */}
          {/* Messages */}
          {/* <div
            className='relative cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-full z-50'
            onClick={(e) => op.current.toggle(e)}
          >
            <i className='text-sm md:text-lg xl:text-xl fa fa-thin fa-envelope text-slate-400'></i>
            <div className='absolute top-0 left-[38%]'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-blue-900'></span>
              </span>
            </div>
            <OverlayPanel ref={op}>
              <DropdownMessages id='dropdow_messages_message' />
            </OverlayPanel>
          </div> */}
          {/* MOBILE NAV */}

          {/* Profile */}
          <div
            className='relative cursor-pointer hover:bg-slate-50 px-2 py-1 rounded-full'
            onClick={(e) => perfil.current.toggle(e)}
          >
            <i className='text-sm md:text-lg xl:text-xl fa fa-light fa-user text-slate-400'></i>
            <OverlayPanel ref={perfil}>
              <DropdownProfile />
            </OverlayPanel>
          </div>
        </div>

        <div
          className={`fixed md:hidden w-[100vw] h-[100vh] top-16 bg-blue-800 transition-all ${
            mobileNav ? 'right-0' : '!right-full'
          } `}
        >
          <ul className='grid h-[60%] place-items-center text-white gap-0 lg:gap-8'>
            <Link
              onClick={() => setMobileNav(false)}
              to={'/admin/propiedades'}
              className='cursor-pointer'
            >
              Propiedades
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TopMenuBar
