import React from 'react'
import { MenuItem, SubMenuItem } from './components'
import './styles.css'
import { useAppSelector } from '../../../redux/store'
import { useLocation } from 'react-router-dom'
import { RiHome6Line, RiCalendarCheckFill } from 'react-icons/ri'
import { CiCalendarDate } from 'react-icons/ci'
import { BsPerson, BsPersonGear } from 'react-icons/bs'
import { FaHandHoldingMedical } from 'react-icons/fa'

interface ISideNavbarProps {
  children?: React.ReactNode
  active: boolean
  handleOpen: () => void
}

const SideNavbar: React.FC<ISideNavbarProps> = ({ active, handleOpen }) => {
  const { user } = useAppSelector((state) => state.auth)
  const location = useLocation()

  const current = location.pathname.split('/')[2]
  console.log('current', current)

  return (
    <>
      <div
        className={` hidden md:block overflow-visible sidenav lg:block bg-white h-[100vh] p-4 transition-all ${
          active ? 'w-[3.5rem] lg:w-[14rem]' : 'w-[3.5rem]'
        }`}
      >
        <div
          className='flex items-center cursor-pointer mb-6 text-xl'
          onClick={() => handleOpen()}
        >
          <i className='fa fa-bars lg:text-2xl mr-1 md:mr-2 lg:mr-4 text-slate-400' />
          Tucita
        </div>
        <ul className='sidenav-menu'>
          <>
            <MenuItem
              activeMenu={active}
              url='admin/dashboard'
              icon={<RiHome6Line className='text-lg' />}
              active={current === 'dashboard'}
              title='Dashboard'
            />
            <MenuItem
              activeMenu={active}
              url='admin/citas'
              icon={<CiCalendarDate className='text-lg' />}
              active={current === 'citas'}
              title='Citas'
            />
            <MenuItem
              activeMenu={active}
              url='admin/pacientes'
              icon={<BsPerson className='text-lg' />}
              active={current === 'pacientes'}
              title='Pacientes'
            />
            <MenuItem
              activeMenu={active}
              url='admin/agenda'
              icon={<RiCalendarCheckFill className='text-lg' />}
              active={current === 'agenda'}
              title='Agenda'
            />
            {user?.role === 'administrador' && (
              <MenuItem
                activeMenu={active}
                url='admin/doctores'
                icon={<FaHandHoldingMedical className='text-lg' />}
                title='Doctores'
                active={current === 'doctores'}
              />
            )}
            <MenuItem
              activeMenu={active}
              url='admin/perfil'
              icon={<BsPersonGear className='text-lg' />}
              title='Perfil'
              active={current === 'perfil'}
            />
          </>
        </ul>
      </div>
    </>
  )
}

export default SideNavbar
