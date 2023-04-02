import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubMenuItem } from '../SubMenuItem'
import './styles.css'

interface IMenuItemProps {
  children?: React.ReactNode
  title: string
  icon: string
  url: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ children, title, icon, url }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Link
      to={url}
      className='sidenav-menu__submenu cursor-pointer transition-all'
    >
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`sidenav-menu__submenu_title h-[3rem] ${
          children ? 'hover:text-slate-700' : 'hover:text-purple-500'
        }`}
      >
        <i className={`${icon}`} />
        <p className='pl-[20px]'>{title}</p>
        {children && (
          <i className={`submenu-arrow ${openMenu ? 'active' : ''}`} />
        )}
      </div>

      {children && (
        <ul
          className={`sidenav-submenu transition-all ${
            openMenu ? 'active' : ''
          }`}
        >
          {children}
        </ul>
      )}
    </Link>
  )
}

export default MenuItem
