import React from 'react'
import { BiBuildingHouse } from "react-icons/bi"
import { CiSettings } from 'react-icons/ci'
import { IoIosPeople } from "react-icons/io"
import { VscRequestChanges } from "react-icons/vsc"
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../redux/store'
import { MenuItem } from './components'
import './styles.css'

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
        className={` hidden md:block overflow-visible sidenav lg:block bg-white h-[100vh] p-4 transition-all ${active ? 'w-[3.5rem] lg:w-[14rem]' : 'w-[3.5rem]'
          }`}
      >
        <div
          className='flex items-center cursor-pointer mb-6 text-xl'
          onClick={() => handleOpen()}
        >
          <i className='fa fa-bars lg:text-2xl mr-1 md:mr-2 lg:mr-4 text-slate-400' />
          <img
            src='https://static.wixstatic.com/media/ae56f5_2c84bc9055b94c9b97193cea332fe85e~mv2.png/v1/fill/w_248,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%201.png'
            alt=''
            className='w-[100px]'
          />
        </div>
        <ul className='sidenav-menu'>
          <>
            <p className='mt-3 mb-4 text-blue-500'>Administrador</p>

            <MenuItem
              activeMenu={active}
              url='admin/propiedades'
              icon={<BiBuildingHouse className='text-lg' />}
              active={current === 'propiedades'}
              title='Propiedades'
            />

            <p className='mt-6 mb-4 text-blue-500'>Fase 2</p>

            <MenuItem
              activeMenu={active}
              url='admin/agentes'
              icon={<IoIosPeople className='text-lg' />}
              active={current === 'agentes'}
              title='Agentes'
            />
            <MenuItem
              activeMenu={active}
              url='admin/solicitudes'
              icon={<VscRequestChanges className='text-lg' />}
              active={current === 'solicitudes'}
              title='Solicitudes'
            />

            <MenuItem
              activeMenu={active}
              url='admin/mantenimiento'
              icon={<CiSettings className='text-lg' />}
              active={current === 'mantenimiento'}
              title='Mantenimiento'
            />
          </>
        </ul>
      </div>
    </>
  )
}

export default SideNavbar
