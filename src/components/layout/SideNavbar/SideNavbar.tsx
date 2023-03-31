import React from 'react'
import { MenuItem, SubMenuItem } from './components'
import './styles.css'

interface ISideNavbarProps {
  children?: React.ReactNode
  active: boolean
}

const SideNavbar: React.FC<ISideNavbarProps> = ({ active }) => {
  return (
    <>
      <div
        className={`sidenav bg-slate-50 w-[280px] h-[100vh] p-4 transition-all ${
          active ? 'active' : ''
        }`}
      >
        <p className='uppercase text-xs mb-4'>Main menu</p>
        <ul className='sidenav-menu'>
          <MenuItem icon='fa fa-home' title='Dashboard'>
            <SubMenuItem title='Dashboard' />
            <SubMenuItem title='Dashboard' />
            <SubMenuItem title='Dashboard' />
            <SubMenuItem title='Dashboard' />
          </MenuItem>
          <MenuItem icon='fa fa-bag-shopping' title='Ordenes'>
            <SubMenuItem title='Dashboard' />
          </MenuItem>

          <MenuItem icon='fa fa-users' title='Clientes' />
        </ul>
      </div>
    </>
  )
}

export default SideNavbar
